import React from "react";

export default function WaterScorePage() {
  const [zip, setZip] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<null | {
    city: string; state: string; utility: string; pwsid: string; score: string; highlights: string[]; ewgUrl?: string;
  }>(null);

  const onCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setResult(null);
    if (zip.length !== 5) { setErr("Please enter a 5‑digit ZIP."); return; }
    setLoading(true);
    try {
      const r = await fetch(`/api/waterscore?zip=${zip}`);
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "Lookup failed");
      setResult(data);
    } catch (e:any) {
      setErr(e.message || "Lookup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold">Water Score</h2>
      <p className="mt-3 text-slate-700 max-w-2xl">
        Enter your ZIP code to view a quick snapshot of your local water utility. For an exact picture, our technician verifies results on‑site with our patent‑pending iPad Water Lab test.
      </p>

      <form onSubmit={onCheck} className="mt-6 flex gap-3 items-center">
        <input
          value={zip}
          onChange={(e)=>setZip(e.target.value.replace(/[^0-9]/g, '').slice(0,5))}
          placeholder="ZIP Code"
          className="rounded-xl border px-4 py-2.5 w-40"
          inputMode="numeric"
        />
        <button
          className="rounded-xl bg-cyan-600 text-white px-5 py-2.5 font-semibold hover:bg-cyan-700 disabled:opacity-60"
          disabled={zip.length!==5 || loading}
        >
          {loading ? "Checking..." : "Check Score"}
        </button>
        <a href="#lead" className="rounded-xl border px-4 py-2.5 font-semibold hover:bg-slate-50">Schedule Free Test</a>
      </form>

      {err && <div className="mt-4 text-sm text-red-600">{err}</div>}

      {result && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border p-6">
            <div className="text-sm text-slate-500">Utility</div>
            <div className="text-xl font-bold">{result.utility}</div>
            <div className="text-slate-600">{result.city}{result.state ? `, ${result.state}` : ""}</div>
            {result.pwsid && <div className="text-xs text-slate-500 mt-1">PWSID: {result.pwsid}</div>}
          </div>
          <div className="rounded-3xl border p-6 flex items-center justify-center">
            <div>
              <div className="text-sm text-slate-500 text-center">Estimated Water Score</div>
              <div className="text-5xl font-black text-cyan-700 text-center">{result.score}</div>
            </div>
          </div>
          <div className="rounded-3xl border p-6">
            <div className="font-bold mb-2">Highlights</div>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              {result.highlights.map((h)=> <li key={h}>{h}</li>)}
            </ul>
            {result.ewgUrl && (
              <a className="mt-3 inline-flex text-cyan-700 font-semibold" href={result.ewgUrl} target="_blank" rel="noreferrer">
                View detailed utility report ↗
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
