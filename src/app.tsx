import React, { useEffect, useState } from "react";
import WaterScorePage from "./WaterScorePage";

const PHONE_DISPLAY = "(888) 555-0199";
const PHONE_TEL = "tel:18885550199";
const LOGO_PATH = "/Purella logo.png";

type Page = "home" | "filtration" | "softening" | "conditioners" | "well" | "uv" | "process" | "waterscore";

export default function PurellaWaterSite() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    const fromHash = () => {
      const h = (window.location.hash || "#home").replace("#", "") as Page;
      if (["home", "filtration", "softening", "conditioners", "well", "uv", "process", "waterscore"].includes(h)) setPage(h);
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
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img
            src={LOGO_PATH}
            alt="Purella Water"
            className="h-10 w-auto cursor-pointer mx-auto"
            onClick={() => { setPage("home"); window.location.hash = "home"; }}
          />
          <nav className="hidden md:flex items-center gap-3 mx-auto">
            <NavLink label="Home" target="home" />
            <NavLink label="Advanced Filtration" target="filtration" />
            <NavLink label="Softening" target="softening" />
            <NavLink label="Saltless Conditioners" target="conditioners" />
            <NavLink label="Well Water" target="well" />
            <NavLink label="Ultraviolet" target="uv" />
            <NavLink label="Process" target="process" />
            <NavLink label="Water Score" target="waterscore" />
          </nav>
          <a href={PHONE_TEL} className="text-sm md:text-base font-semibold">{PHONE_DISPLAY}</a>
        </div>
      </header>

      {page === "waterscore" && <WaterScorePage />}

      <footer className="py-12 border-t bg-slate-50 mt-16 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Purella Water — Factory-Direct Systems Built in Florida
      </footer>
    </div>
  );
}
