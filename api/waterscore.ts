export const config = { runtime: 'edge' };

type Score = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Unknown';

type ApiResult = {
  zip: string;
  city: string;
  state: string;
  utility: string;
  pwsid: string;
  score: Score;
  highlights: string[];
  ewgUrl?: string;
  sources: { systems: string; summary?: string };
};

const EF_BASE = 'https://data.epa.gov/efservice';

async function efJson(path: string) {
  const url = `${EF_BASE}/${path}`;
  const res = await fetch(url, { headers: { 'accept': 'application/json' }, cache: 'no-store' });
  if (!res.ok) throw new Error(`EPA request failed ${res.status}`);
  return res.json();
}

async function fetchSystemsByZip(zip: string) {
  try {
    const rows = await efJson(`WATER_SYSTEM/ZIP_CODE/${zip}/JSON`);
    const withPop = rows.map((r: any) => ({
      pwsid: r.PWSID,
      name: r.PWS_NAME,
      city: r.CITY_NAME,
      state: r.STATE_CODE,
      population: Number(r.POPULATION_SERVED_COUNT || 0),
      phone: r.PHONE_NUMBER || null
    }));
    withPop.sort((a,b) => (b.population - a.population));
    return withPop;
  } catch {
    return [];
  }
}

async function fetchZipSummary(zip: string) {
  try {
    const rows = await efJson(`SDW_CONTAM_VIOL_ZIP/ZIP/${zip}/JSON`);
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

function gradeFromSignals(signals: { violations24m?: number; hasDisinfectant?: boolean }) : Score {
  const v = signals.violations24m ?? 0;
  if (v === 0) return 'Excellent';
  if (v <= 2) return 'Good';
  if (v <= 5) return 'Fair';
  return 'Poor';
}

export default async function handler(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const zip = (searchParams.get('zip') || '').trim();
  if (!/^[0-9]{5}$/.test(zip)) {
    return new Response(JSON.stringify({ error: 'Invalid zip' }), { status: 400, headers: { 'content-type': 'application/json' } });
  }

  const systems = await fetchSystemsByZip(zip);
  const top = systems[0];

  const summary = await fetchZipSummary(zip);
  let violations24m = 0;
  if (Array.isArray(summary) && summary.length > 0) {
    const keys = Object.keys(summary[0] || {});
    const candKey = keys.find(k => /viol/i.test(k));
    if (candKey) {
      violations24m = summary.reduce((acc: number, r: any) => acc + (Number(r[candKey] ?? 0) || 0), 0);
    }
  }

  const res: ApiResult = {
    zip,
    city: top?.city || 'Your Area',
    state: top?.state || '',
    utility: top?.name || (systems[0]?.name ?? 'Local Water Utility'),
    pwsid: top?.pwsid || '',
    score: gradeFromSignals({ violations24m, hasDisinfectant: true }),
    highlights: [
      violations24m === 0 ? 'No violations found in summary lookup' : `${violations24m} violation record(s) found in summary lookup`,
      top?.population ? `Approx. population served: ${top.population.toLocaleString()}` : 'Population served: n/a',
      'For a precise picture, schedule a free in‑home test with our iPad Water Lab'
    ],
    ewgUrl: top?.pwsid ? `https://www.ewg.org/tapwater/system.php?pws=${top.pwsid}` : undefined,
    sources: {
      systems: `${EF_BASE}/WATER_SYSTEM/ZIP_CODE/${zip}/JSON`,
      summary: `${EF_BASE}/SDW_CONTAM_VIOL_ZIP/ZIP/${zip}/JSON`
    }
  };

  return new Response(JSON.stringify(res), { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
}
