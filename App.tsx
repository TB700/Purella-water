
import React, { useEffect, useState } from "react";
import { FlaskConical, TabletSmartphone, Wrench, Droplets, ShieldCheck, Beaker, Hammer } from "lucide-react";

/**
 * PURELLA WATER — FULL WEBSITE MOCKUP (React + Tailwind, single-file)
 * Pages: Home, Advanced Filtration, Softening, Conditioners, Well Water, Process, Resources
 * Routing: simple hash router (no external deps)
 * Branding: Purella Water — domain www.purellawater.com — phone (888) 555-0199
 * Images expected (replace with your own):
 *   /Purella logo.png
 *   /images/hero-water.jpg
 *   /images/filtration.jpg  /images/softener.jpg  /images/conditioner.jpg
 *   /images/frp-tank-cutaway.png
 *   /images/purella-test-strip.jpg
 *   /images/purella-factory.jpg  /images/purella-lab.jpg
 */

const PHONE_DISPLAY = "(888) 555-0199";
const PHONE_TEL = "tel:18885550199";
const LOGO_PATH = "/Purella logo.png";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-extrabold">{children}</h2>;
}

function CtaPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold shadow-sm bg-cyan-600 text-white hover:bg-cyan-700 transition">
      {children}
    </a>
  );
}

function CtaSecondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold border hover:bg-white">
      {children}
    </a>
  );
}

type Page = "home" | "filtration" | "softening" | "conditioners" | "well" | "process" | "resources";

// ---------------- Home ----------------
function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 text-cyan-700 px-3 py-1 text-xs font-semibold">
              Factory-Direct • Made in Florida
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mt-4">
              Custom whole-home water systems —
              <span className="block">designed, built & installed in Florida</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Our Purella Water Experts test your water in real time using our <strong>patent-pending lab-grade test strip</strong> and <strong>Purella iPad App</strong>. Immediate, precise readings for chlorine, hardness, pH, and more — right in your kitchen.
            </p>
            <p className="mt-2 text-lg text-slate-700 max-w-xl">
              Then the <strong>Purella App</strong> designs a <strong>custom-built system</strong> — media blend, tank size, and valve programming — engineered to give your home the <strong>best water possible</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
              <CtaSecondary href="#filtration">Explore Systems</CtaSecondary>
            </div>
            {/* Trust badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                { label: "Made in Florida" },
                { label: "Patent-Pending Testing" },
                { label: "Installed in a Day" },
                { label: "Factory Support for Life" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl border bg-white px-3 py-2 text-slate-700 text-center font-medium">
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border bg-slate-100">
              <img src="/images/hero-water.jpg" alt="Purella technician performing real-time water test using iPad app" className="w-full h-full object-cover" />
            </div>
            {/* Lead capture card */}
            <div id="lead" className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white border rounded-3xl shadow-lg p-4 md:p-5">
              <div className="flex items-center gap-3">
                <img src={LOGO_PATH} alt="Purella" className="h-8 w-auto" />
                <div>
                  <div className="text-sm font-semibold">Free In-Home Water Test</div>
                  <div className="text-xs text-slate-600">Lab-grade results • Built just for your home</div>
                </div>
              </div>
              <a href={PHONE_TEL} className="mt-3 inline-flex w-full justify-center rounded-xl bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700">Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { t: "Chlorine & Odor", d: "Catalytic carbon removes bad taste & smell." },
            { t: "Stop Scale", d: "Protect glass, fixtures & appliances." },
            { t: "Well Water", d: "Target iron, sulfur, and sediment." },
            { t: "Health & Home", d: "Balanced pH and great-tasting water." },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border px-4 py-5">
              <div className="text-base font-bold">{i.t}</div>
              <div className="text-sm text-slate-600 mt-1">{i.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section id="products" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle>Solutions for every home</SectionTitle>
          <p className="text-slate-600 mt-2 max-w-2xl">Choose the path that fits your water. We customize every install based on your test.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Advanced Filtration", desc: "Catalytic carbon-led multi-media blend.", img: "/images/filtration.jpg", to: "#filtration" },
              { title: "Water Softening", desc: "Stop scale. Protect fixtures & appliances.", img: "/images/softener.jpg", to: "#softening" },
              { title: "Conditioners", desc: "Balance pH and reduce aggressiveness.", img: "/images/conditioner.jpg", to: "#conditioners" },
            ].map((card) => (
              <div key={card.title} className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-[16/9] bg-slate-100">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-slate-600 mt-1">{card.desc}</p>
                  <div className="mt-5 flex gap-3">
                    <a href="#lead" className="rounded-xl border px-4 py-2 font-semibold hover:bg-slate-50">Free Water Test</a>
                    <a href={card.to} className="rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 font-semibold">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="bg-slate-50 py-14 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle>The Purella Process</SectionTitle>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{ n: 1, t: "Test", Icon: FlaskConical, d: "Your Purella Water Expert uses our patent-pending lab-grade test strip and iPad app to measure your water’s chlorine, hardness, pH, and metals instantly — right in your home. Results are verified in real time through Purella’s Stuart, FL lab software." }, { n: 2, t: "Design", Icon: TabletSmartphone, d: "Using your unique test results, the Purella app automatically builds a custom system blueprint — selecting the perfect media blend, tank size, and valve settings to create the best water possible for your home." }, { n: 3, t: "Install", Icon: Wrench, d: "Our local teams install your system with precision, optimizing flow, programming, and pressure for your home’s exact plumbing and chemistry." }].map((s) => (
              <div key={s.n} className="rounded-3xl bg-white border p-6 text-center">
                <s.Icon className="mx-auto text-cyan-600 mb-4" size={48} />
                <div className="text-5xl font-black text-cyan-600">{s.n}</div>
                <div className="mt-2 text-lg font-bold">{s.t}</div>
                <div className="text-sm text-slate-700 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIAL */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 rounded-3xl border p-6 bg-white">
            <div className="text-2xl font-extrabold">“Water tastes incredible and the rotten-egg smell is gone.”</div>
            <p className="mt-2 text-slate-700">Our installer tested, designed, and installed the system the same week. Professional and spotless work.</p>
            <div className="mt-4 text-sm text-slate-600">— Homeowner in Stuart, FL</div>
          </div>
          <div className="rounded-3xl border p-6 bg-slate-50 text-center">
            <div className="text-3xl font-black">4.9★</div>
            <div className="text-sm text-slate-600">Average homeowner rating</div>
            <div className="mt-3 text-xs text-slate-500">BBB A+ • Local, insured installers</div>
          </div>
        </div>
      </section>
    </>
  );
}

// ---------------- Advanced Filtration ----------------
function AdvancedFiltrationPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Advanced Filtration Systems</SectionTitle>
      <Droplets className="text-cyan-600 my-4" size={40} />
      <p className="mt-3 text-slate-700 max-w-3xl">
        Purella’s Advanced Filtration blends media to optimize contact time and capacity — anchored by a ~70% bed of premium catalytic carbon targeting chlorine, chloramines, H₂S, VOCs, and trace metals.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">What Makes It Advanced</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• <strong>Catalytic Carbon (~70%)</strong> — broad-spectrum adsorption & catalytic sites</li>
            <li>• <strong>Copper & Zinc Alloy</strong> — redox media assisting metals/chlorine/H₂S</li>
            <li>• <strong>Ceramic Balls</strong> — traps fines, gently raises pH/alkalinity</li>
            <li>• <strong>Tourmaline Balls</strong> — ion activation & absorption support</li>
            <li>• <strong>ORP Ceramic</strong> — hydroxyl (OH) generation, polishing & balance</li>
          </ul>
          <div className="mt-6 bg-cyan-50 p-4 rounded-2xl">
            <h4 className="font-semibold text-cyan-800">Why the Catalytic Carbon Bed Matters</h4>
            <p className="text-sm text-slate-700 mt-1">Large carbon bed = longer contact time, broader contaminant range, and longer media life for both city and well water.</p>
          </div>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">FRP Tank Cutaway (Example)</h3>
          <p className="text-sm text-slate-700 mt-2">Cross-section of an FRP tank showing layered media. Proportions/configuration vary by test results.</p>
          <div className="mt-4 bg-slate-100 border rounded-2xl overflow-hidden">
            <img src="/images/frp-tank-cutaway.png" alt="FRP Tank Cutaway" className="w-full h-auto object-cover" />
          </div>
          <ul className="text-xs text-slate-600 mt-3 space-y-1">
            <li>• Top: Copper & Zinc Alloy (redox)</li>
            <li>• Primary (~70%): Catalytic Carbon</li>
            <li>• Intermediate: Ceramic & Tourmaline Balls</li>
            <li>• Base: ORP Ceramic (polishing)</li>
          </ul>
        </div>
      </div>
      <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
    </main>
  );
}

// ---------------- Softening ----------------
function SofteningPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Water Softening Systems</SectionTitle>
      <ShieldCheck className="text-cyan-600 my-4" size={40} />
      <p className="mt-3 text-slate-700 max-w-2xl">Stop scale buildup, protect appliances, and enjoy softer skin and laundry. Metered regeneration saves salt & water.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">Why It Matters</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Prevents scale on fixtures & glass</li>
            <li>• Extends appliance life</li>
            <li>• Softer feel in showers and laundry</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">System Details</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• High-capacity resin sized to hardness</li>
            <li>• Metered regeneration for efficiency</li>
            <li>• Service-friendly layout & bypass</li>
          </ul>
        </div>
      </div>
      <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
    </main>
  );
}

// ---------------- Conditioners ----------------
function ConditionersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Whole Home Conditioners</SectionTitle>
      <Beaker className="text-cyan-600 my-4" size={40} />
      <p className="mt-3 text-slate-700 max-w-3xl">Purella Conditioners stabilize and optimize water chemistry. We combine catalytic carbon, neutralizing media, and polishing stages to balance pH, reduce aggressiveness, and protect plumbing/fixtures.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">Why Choose a Conditioner</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Neutralizes acidic/aggressive water</li>
            <li>• Helps prevent corrosion & pinhole leaks</li>
            <li>• Enhances taste & clarity</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">System Design</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Media blend tuned to local water reports</li>
            <li>• Maintenance-friendly layout</li>
            <li>• Long-life catalytic & neutralizing layers</li>
          </ul>
        </div>
      </div>
      <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
    </main>
  );
}

// ---------------- Well Water ----------------
function WellWaterPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Well Water & Specialty Systems</SectionTitle>
      <Hammer className="text-cyan-600 my-4" size={40} />
      <p className="mt-3 text-slate-700 max-w-3xl">Target iron, sulfur, manganese, and sediment with the right media stack. We spec aeration, oxidation, and polishing stages based on your well test.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">Common Issues</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Orange/brown staining (iron)</li>
            <li>• Rotten-egg odor (sulfur/H₂S)</li>
            <li>• Cloudy water (sediment)</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">How We Solve Them</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Oxidation + catalytic media</li>
            <li>• Dedicated iron/sulfur removal stages</li>
            <li>• Final polishing & optional UV</li>
          </ul>
        </div>
      </div>
      <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
    </main>
  );
}

// ---------------- Process ----------------
function ProcessPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Installation & Process</SectionTitle>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-cyan-100 text-cyan-800 px-3 py-1 text-xs font-semibold">Patent Pending</span>
        <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-800 px-3 py-1 text-xs font-semibold">Backed by Purella Lab — Stuart, FL</span>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { n: 1, t: "Book", d: "Call or book online for your in-home water test." },
          {
            n: 2,
            t: "Test",
            d: "Patent-pending lab-grade software + Purella Test Strip capture precise readings for chlorine/chloramines, hardness, iron/sulfur indicators, pH, and more — digitally verified by our in-house lab in Stuart, FL.",
            extra: (
              <div className="mt-3">
                <img src="/images/purella-test-strip.jpg" alt="Purella Test Strip" className="w-full max-w-sm rounded-2xl border shadow-sm object-contain" />
                <p className="text-xs text-slate-500 mt-1">*Purella Test Strip and iPad Water Lab App — patent pending</p>
                <ul className="mt-3 space-y-1 text-xs text-slate-600 list-disc list-inside">
                  <li>Computer-vision strip scan for accurate color interpretation</li>
                  <li>Auto-normalizes lighting/angle for consistent results</li>
                  <li>Uploads anonymized data to Purella Lab for QA checks</li>
                </ul>
              </div>
            ),
          },
          {
            n: 3,
            t: "Design",
            d: "Our iPad app imports verified results and instantly generates a right-sized design — media blend, tank sizing, and valve programming — matched to your plumbing and water chemistry.",
            extra: (
              <ul className="mt-3 space-y-1 text-xs text-slate-600 list-disc list-inside">
                <li>Selects catalytic carbon ratio (~70%) + polishing stages</li>
                <li>Calculates flow-rate/contact-time to prevent pressure drop</li>
                <li>Produces install layout and a clear proposal on the spot</li>
              </ul>
            ),
          },
          { n: 4, t: "Manufacture", d: "Your system is assembled and QA’d at our Florida factory to perfectly match your home’s unique water chemistry — built locally, tested for precision, and backed by our lab-engineered design." },
          { n: 5, t: "Install", d: "Local office teams — experts trained specifically in Purella systems — install, program, and fine-tune your setup so it performs flawlessly in your home. They ensure every connection, flow rate, and valve is optimized for your unique plumbing and water chemistry." },
          { n: 6, t: "Care", d: "Purella is your system’s manufacturer and lifelong support partner. Whether you prefer full-service maintenance or handling upkeep yourself, we’re here to provide factory-direct guidance, parts, and support for the life of your system." },
        ].map((s) => (
          <div key={s.n} className="rounded-3xl border p-6">
            <div className="text-5xl font-black text-cyan-600">{s.n}</div>
            <h3 className="mt-2 font-bold text-xl">{s.t}</h3>
            <p className="text-slate-600 mt-1 text-sm">{s.d}</p>
            {s.extra}
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl overflow-hidden border shadow-sm">
          <img src="/images/purella-factory.jpg" alt="Purella Factory Assembly in Florida" className="w-full h-auto object-cover" />
          <div className="p-4 text-sm text-slate-700">
            <strong>Made in Florida.</strong> Every Purella water system is assembled in our Florida manufacturing facility. Each unit is precision-built to your unique water chemistry and plumbing — a level of customization no other company matches.
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border shadow-sm">
          <img src="/images/purella-lab.jpg" alt="Purella Water Lab & Testing Facility" className="w-full h-auto object-cover" />
          <div className="p-4 text-sm text-slate-700">
            <strong>Purella Water Lab — Stuart, FL.</strong> Our on-site laboratory verifies media blends, tests filtration performance, and validates customer water samples using lab-grade standards.
          </div>
        </div>
      </div>

      <CtaPrimary href="#lead">Book My Free Water Test</CtaPrimary>
    </main>
  );
}

// ---------------- Resources ----------------
function ResourcesPage() {
  const faqs = [
    { q: "How long does installation take?", a: "Most installs are completed in a day. Larger or well-water setups may vary." },
    { q: "Do you offer financing?", a: "Yes — flexible monthly plans are available for qualified buyers." },
    { q: "Will this remove chlorine taste?", a: "Yes — our carbon media targets chlorine, taste & odor." },
    { q: "Do you service existing systems?", a: "We offer service for our systems and many common brands." },
  ];
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Resources & FAQ</SectionTitle>
      <p className="mt-3 text-slate-700 max-w-2xl">Learn about local water quality, signs you need a softener, and how Purella systems are maintained.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <article className="rounded-3xl border p-6 bg-white">
          <h3 className="font-bold text-lg">Articles</h3>
          <ul className="mt-3 space-y-2 text-sm text-cyan-700">
            <li><a href="#">What’s in Florida’s Tap Water?</a></li>
            <li><a href="#">Hardness Levels Explained</a></li>
            <li><a href="#">How Often Should I Service My System?</a></li>
          </ul>
        </article>
        <article className="rounded-3xl border p-6 bg-white">
          <h3 className="font-bold text-lg">FAQs</h3>
          <div className="mt-3 grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border p-4">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------- App Shell (hash router) ----------------
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    const fromHash = () => {
      const h = (window?.location?.hash || "#home").replace("#", "") as Page;
      if (["home", "filtration", "softening", "conditioners", "well", "process", "resources"].includes(h)) setPage(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const NavLink = ({ label, target }: { label: string; target: Page }) => (
    <a
      onClick={() => {
        setPage(target);
        window.location.hash = target;
      }}
      className={`px-3 py-2 rounded-xl text-sm font-semibold hover:bg-slate-100 cursor-pointer ${page === target ? "text-cyan-700 underline" : "text-slate-700"}`}
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_PATH} alt="Purella Water" className="h-10 w-auto" />
            <span className="text-sm hidden md:inline font-medium">Vitality • Well-being • Hydration</span>
          </div>
          <nav className="flex items-center gap-1 md:gap-3">
            <NavLink label="Home" target="home" />
            <NavLink label="Advanced Filtration" target="filtration" />
            <NavLink label="Softening" target="softening" />
            <NavLink label="Conditioners" target="conditioners" />
            <NavLink label="Well Water" target="well" />
            <NavLink label="Process" target="process" />
            <NavLink label="Resources" target="resources" />
          </nav>
          <div className="flex items-center gap-3">
            <a href={"tel:18885550199"} className="text-sm md:text-base font-semibold">(888) 555-0199</a>
            <a
              onClick={() => {
                setPage("home");
                window.location.hash = "home";
              }}
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm md:text-base font-semibold shadow-sm bg-cyan-600 text-white hover:bg-cyan-700 transition cursor-pointer"
            >
              Free Water Test
            </a>
          </div>
        </div>
      </div>

      {/* Route mounts */}
      {page === "home" && <HomePage />}
      {page === "filtration" && <AdvancedFiltrationPage />}
      {page === "softening" && <SofteningPage />}
      {page === "conditioners" && <ConditionersPage />}
      {page === "well" && <WellWaterPage />}
      {page === "process" && <ProcessPage />}
      {page === "resources" && <ResourcesPage />}

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <img src={LOGO_PATH} alt="Purella Water" className="h-10 w-auto" />
            <p className="text-sm text-slate-600 mt-3">Factory-direct water systems engineered for vitality, well-being, and hydration.</p>
            <div className="mt-4 text-sm">Call Us: <a href={"tel:18885550199"} className="font-semibold">(888) 555-0199</a></div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a onClick={() => { window.location.hash = "filtration"; }} className="cursor-pointer">Advanced Filtration</a></li>
              <li><a onClick={() => { window.location.hash = "softening"; }} className="cursor-pointer">Water Softening</a></li>
              <li><a onClick={() => { window.location.hash = "well"; }} className="cursor-pointer">Well Water & Specialty</a></li>
              <li><a onClick={() => { window.location.hash = "conditioners"; }} className="cursor-pointer">Conditioners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a onClick={() => { window.location.hash = "process"; }} className="cursor-pointer">Installation & Process</a></li>
              <li><a onClick={() => { window.location.hash = "resources"; }} className="cursor-pointer">Resources & FAQ</a></li>
              <li><a href="https://www.purellawater.com" target="_blank" rel="noreferrer" className="underline">www.purellawater.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Get a Free Estimate</h4>
            <p className="text-sm text-slate-600">Tell us a bit about your home and we’ll schedule your free water test.</p>
            <a
              onClick={() => { window.location.hash = "home"; }}
              className="mt-3 inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm bg-cyan-600 text-white hover:bg-cyan-700 transition cursor-pointer"
            >
              Start My Free Test
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Purella Water • <a href="https://www.purellawater.com" className="underline">www.purellawater.com</a>
        </div>
      </footer>
    </div>
  );
}
