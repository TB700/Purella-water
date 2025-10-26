
import React, { useEffect, useState } from "react";
import { FlaskConical, TabletSmartphone, Wrench, Droplets, ShieldCheck, Beaker, Hammer } from "lucide-react";

/**
 * PURELLA WATER — FULL WEBSITE MOCKUP (React + Tailwind)
 * Updates:
 * - “Conditioners” renamed to “Saltless Conditioners”
 * - Purella logo routes to #home (acts as Home)
 * - New page: Ultraviolet Filtration (#uv) with nav link
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

type Page = "home" | "filtration" | "softening" | "conditioners" | "well" | "uv" | "process" | "resources";

/* ---------------- Home ---------------- */
function HomePage() {
  return (
    <>
      {/* HERO with inline lead form (LeafFilter-style) */}
      <section className="bg-gradient-to-r from-cyan-800 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.4fr_.9fr] gap-6 items-stretch">
          {/* Left: image + headline */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
            <div className="aspect-[16/9] md:aspect-[21/10] relative">
              <img src="/images/hero-water.jpg" alt="Family in kitchen with Purella water" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
            </div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Better Water Starts at Home.
              </h1>
              <p className="mt-3 text-white/90 text-lg max-w-2xl">
                Discover cleaner, safer, better‑tasting water with Purella’s in‑home systems — designed, built & installed in Florida.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#process" className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold bg-white text-cyan-800 hover:bg-slate-100 transition">How It Works</a>
                <a href="#lead" className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold border border-white/30 hover:bg-white/10 transition">Get Free Water Test</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1">NSF‑grade media</span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1">Lifetime Support</span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1">Made in USA</span>
              </div>
            </div>
          </div>

          {/* Right: request free test form (front‑end only) */}
          <div id="lead" className="bg-white text-slate-900 rounded-3xl shadow-2xl p-6 md:p-7 border">
            <h2 className="text-2xl font-extrabold">Request a Free Water Test</h2>
            <form className="mt-4 grid gap-3" onSubmit={(e)=>e.preventDefault()}>
              <input className="rounded-xl border px-4 py-2.5" placeholder="Full Name" />
              <input className="rounded-xl border px-4 py-2.5" placeholder="Email Address" type="email" />
              <input className="rounded-xl border px-4 py-2.5" placeholder="Phone Number" />
              <input className="rounded-xl border px-4 py-2.5" placeholder="ZIP Code" />
              <button className="mt-1 inline-flex w-full justify-center rounded-xl bg-cyan-600 px-4 py-3 text-white font-semibold hover:bg-cyan-700">Get Started</button>
              <div className="text-[11px] text-slate-500 text-center">By submitting, you agree to be contacted about your free test.</div>
            </form>
            <div className="mt-5 flex items-center justify-center gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-600"/>NSF</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-600"/>Lifetime Support</span>
              <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-cyan-600"/>Made in USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* “What’s in your water” icons */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h3 className="text-2xl md:text-3xl font-extrabold">What’s Really in Your Tap Water?</h3>
          <p className="text-slate-600 mt-1">Your Purella Water Expert will test these on‑site in minutes.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Chlorine", Icon: Droplets },
              { label: "Lead", Icon: ShieldCheck },
              { label: "PFAS", Icon: FlaskConical },
              { label: "Microorganisms", Icon: Wrench },
            ].map(({label, Icon}) => (
              <div key={label} className="rounded-2xl border p-5 text-center">
                <Icon className="mx-auto text-cyan-600" size={28} />
                <div className="mt-2 font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product tiles + How it works */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold">Customized Filtration for Every Home</h3>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {[
                { title: "Whole‑Home Systems", img: "/images/filtration.jpg" },
                { title: "Carbon Filtration", img: "/images/filtration.jpg" },
                { title: "Water Softener", img: "/images/softener.jpg" },
              ].map((p)=> (
                <div key={p.title} className="rounded-2xl bg-white border overflow-hidden">
                  <div className="aspect-[4/3] bg-slate-100">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-extrabold">{p.title}</div>
                    <a href="#products" className="mt-2 inline-flex text-cyan-700 text-sm font-semibold">LEARN MORE</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <aside className="rounded-3xl bg-white border p-6 h-max">
            <h3 className="text-2xl font-extrabold">How It Works</h3>
            <ol className="mt-3 space-y-3 text-slate-700">
              <li><span className="font-bold text-cyan-700 mr-2">1</span>Free Water Test</li>
              <li><span className="font-bold text-cyan-700 mr-2">2</span>Expert Recommendation</li>
              <li><span className="font-bold text-cyan-700 mr-2">3</span>Professional Installation</li>
            </ol>
            <a href="#lead" className="mt-5 inline-flex w-full justify-center rounded-xl bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700">Schedule Your Free Test</a>
          </aside>
        </div>
      </section>

      {/* Sticky CTA strip */}
      <section className="bg-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold text-center md:text-left">Schedule Your Free In‑Home Test Today</div>
          <a href="#lead" className="inline-flex items-center rounded-2xl px-5 py-3 text-base font-semibold bg-white text-cyan-800 hover:bg-slate-100">Book My Free Water Test</a>
        </div>
      </section>
    </>
  );
}

/* ---------------- Advanced Filtration ---------------- */
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

/* ---------------- Softening ---------------- */
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

/* ---------------- Saltless Conditioners ---------------- */
function ConditionersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Saltless Conditioners</SectionTitle>
      <Beaker className="text-cyan-600 my-4" size={40} />
      <p className="mt-3 text-slate-700 max-w-3xl">Purella Saltless Conditioners stabilize and optimize water chemistry. We combine catalytic carbon, neutralizing media, and polishing stages to balance pH, reduce aggressiveness, and protect plumbing/fixtures.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">Why Choose a Saltless Conditioner</h3>
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

/* ---------------- Well Water ---------------- */
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

/* ---------------- Ultraviolet Filtration ---------------- */
function UvPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle>Ultraviolet Filtration</SectionTitle>
      <p className="mt-3 text-slate-700 max-w-3xl">
        UV disinfection inactivates bacteria, viruses, and other microorganisms without adding chemicals. Ideal as a polishing step for well water or as added protection for city water.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">Why UV?</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Inactivates microbes with 254nm germicidal light</li>
            <li>• Chemical‑free and taste‑neutral</li>
            <li>• Continuous, on‑demand protection</li>
          </ul>
        </div>
        <div className="rounded-3xl border p-6">
          <h3 className="font-bold text-lg">How We Integrate It</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Installed post‑filtration for maximum clarity & efficacy</li>
            <li>• Sized to your home’s real flow rate</li>
            <li>• Smart ballast with lamp‑life indicator</li>
          </ul>
        </div>
      </div>
      <CtaPrimary href="#lead">Get Free Water Test</CtaPrimary>
    </main>
  );
}

/* ---------------- Resources ---------------- */
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

/* ---------------- App Shell (hash router) ---------------- */
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    const fromHash = () => {
      const h = (window?.location?.hash || "#home").replace("#", "") as Page;
      if (["home", "filtration", "softening", "conditioners", "well", "uv", "process", "resources"].includes(h)) setPage(h);
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
            {/* Logo now acts as home button */}
            <a onClick={() => { setPage("home"); window.location.hash = "home"; }} className="cursor-pointer" aria-label="Go to Home">
              <img src={LOGO_PATH} alt="Purella Water" className="h-10 w-auto" />
            </a>
            <span className="text-sm hidden md:inline font-medium">Vitality • Well-being • Hydration</span>
          </div>
          <nav className="flex items-center gap-1 md:gap-3">
            {/* Home link removed */}
            <NavLink label="Advanced Filtration" target="filtration" />
            <NavLink label="Softening" target="softening" />
            <NavLink label="Saltless Conditioners" target="conditioners" />
            <NavLink label="Well Water" target="well" />
            <NavLink label="Ultraviolet" target="uv" />
            <NavLink label="Process" target="process" />
            <NavLink label="Resources" target="resources" />
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="text-sm md:text-base font-semibold">{PHONE_DISPLAY}</a>
            <a
              onClick={() => { setPage("home"); window.location.hash = "home"; }}
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm md:text-base font-semibold shadow-sm bg-cyan-600 text-white hover:bg-cyan-700 transition cursor-pointer"
            >
              Free Water Test
            </a>
          </div>
        </div>
      </div>

      {/* Routes */}
      {page === "home" && <HomePage />}
      {page === "filtration" && <AdvancedFiltrationPage />}
      {page === "softening" && <SofteningPage />}
      {page === "conditioners" && <ConditionersPage />}
      {page === "well" && <WellWaterPage />}
      {page === "uv" && <UvPage />}
      {page === "process" && <ProcessPage />}
      {page === "resources" && <ResourcesPage />}

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <img src={LOGO_PATH} alt="Purella Water" className="h-10 w-auto" />
            <p className="text-sm text-slate-600 mt-3">Factory-direct water systems engineered for vitality, well-being, and hydration.</p>
            <div className="mt-4 text-sm">Call Us: <a href={PHONE_TEL} className="font-semibold">{PHONE_DISPLAY}</a></div>
          </div>
          <div>
            <h4 className="font-bold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a onClick={() => { window.location.hash = "filtration"; }} className="cursor-pointer">Advanced Filtration</a></li>
              <li><a onClick={() => { window.location.hash = "softening"; }} className="cursor-pointer">Water Softening</a></li>
              <li><a onClick={() => { window.location.hash = "well"; }} className="cursor-pointer">Well Water & Specialty</a></li>
              <li><a onClick={() => { window.location.hash = "conditioners"; }} className="cursor-pointer">Saltless Conditioners</a></li>
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

/* ---------------- Process ---------------- */
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
          { n: 5, t: "Install", d: "Local office teams — experts trained specifically in Purella systems — install, program, and fine-tune your setup so it performs flawlessly in your home." },
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
            <strong>Made in Florida.</strong> Every Purella water system is assembled in our Florida manufacturing facility. Each unit is precision-built to your unique water chemistry and plumbing.
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
