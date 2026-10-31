"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import { MadhyamLogo } from "@/components/brand/MadhyamLogo";
import ThemeSelector from "@/components/theme/ThemeSelector";
import { ImpactCounters } from "@/components/portfolio/ImpactCounters";
import { Hero } from "./Hero";
import { WhyMadhyam } from "./WhyMadhyam";
import { AgentFleet, Audiences, DocsConnectors, MadhyamIDE, Pricing } from "./ProductSections";
import {
  Architecture, Assignment, FinalCTA, GitHubIntelligence, Journey, MobileSection, ValueStrip, WorkflowStudio,
} from "./Sections";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const NAV = [
  { href: "#solutions", label: "Solutions" },
  { href: "#workflow-studio", label: "Workflow" },
  { href: "#agents", label: "Agents" },
  { href: "#ide", label: "IDE" },
  { href: "#docs", label: "Docs" },
  { href: "#mobile", label: "Mobile" },
  { href: "#why", label: "Why Madhyam" },
  { href: "#pricing", label: "Pricing" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled || open ? "border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80" : "border-transparent bg-white/40 dark:bg-slate-950/40"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Madhyam AI home"><MadhyamLogo size={42} /></Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-2.5 py-2 text-[13.5px] font-semibold text-slate-600 dark:text-slate-400 transition hover:text-indigo-600 dark:hover:text-indigo-400">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 2xl:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">System Online</span>
          </div>
          <ThemeSelector />
          <Link href="/login" className="text-[13px] font-bold text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400">Sign in</Link>
          <a href="#demo" className="rounded-xl bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-xl shadow-slate-500/20 transition-all hover:scale-105 active:scale-95">Request Demo</a>
        </div>

        <button className="rounded-lg p-2 text-slate-700 dark:text-slate-300 xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 dark:border-slate-800 px-4 pb-5 pt-2 xl:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2.5 text-[15px] text-slate-700 dark:text-slate-300">
              {n.label}
            </a>
          ))}
          <ThemeSelector className="mt-3 w-fit" />
          <div className="mt-3 flex gap-2">
            <Link href="/login" className="flex-1 rounded-lg border border-slate-200 dark:border-slate-800 py-2.5 text-center text-[14px] font-medium text-slate-900 dark:text-white">Sign in</Link>
            <a href="#demo" onClick={() => setOpen(false)} className="flex-1 rounded-xl bg-primary py-2.5 text-center text-xs font-black uppercase tracking-widest text-primary-foreground">Request Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const cols = [
    { t: "Product", l: [["Workflow Studio", "#workflow-studio"], ["Agent fleet", "#agents"], ["Madhyam IDE", "#ide"], ["Docs & connectors", "#docs"], ["Why Madhyam", "#why"], ["Mobile app", "#mobile"], ["Pricing", "#pricing"]] },
    { t: "Platform", l: [["Madhyam IDE", "/desktop"], ["Organizations", "/orgs"], ["Showcase", "/showcase"]] },
    { t: "Account", l: [["Sign in", "/login"], ["Create account", "/register"], ["Request demo", "#demo"]] },
  ];
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <MadhyamLogo size={34} subtitle="Intent → Execution" />
          <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-slate-500 dark:text-slate-400">
            AI-powered technical workflow orchestration for engineering managers, developers and software teams.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{c.t}</div>
            <ul className="mt-4 space-y-2.5">
              {c.l.map(([label, href]) => (
                <li key={label}><a href={href} className="text-[14px] text-slate-600 dark:text-slate-400 transition hover:text-slate-900 dark:hover:text-white">{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-[12px] text-slate-500 dark:text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Madhyam AI. All rights reserved.</span>
          <span className="max-w-2xl md:text-right">
            Product vision: the workflow compiler, durable workflow engine, role-based inbox and process analytics are proposed additions.
            Interface examples are illustrative.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function MadhyamLanding() {
  return (
    <div className={`min-h-screen scroll-smooth ${inter.className} bg-white text-slate-900 antialiased selection:bg-indigo-500/30 dark:bg-slate-950 dark:text-white`}>
      <Nav />
      <main className="[&>section:nth-of-type(even)]:bg-slate-50 dark:[&>section:nth-of-type(even)]:bg-slate-900/50">
        <Hero />
        <ImpactCounters
          stats={[
            { label: "Agent runtimes", value: 5, suffix: "", color: "text-blue-500" },
            { label: "Runner PCs per fleet", value: 10, suffix: "+", color: "text-indigo-500" },
            { label: "Connectors", value: 18, suffix: "", color: "text-emerald-500" },
            { label: "Product tiers", value: 3, suffix: "", color: "text-amber-500" },
          ]}
        />
        <ValueStrip />
        <Audiences />
        <WorkflowStudio />
        <Assignment />
        <AgentFleet />
        <MadhyamIDE />
        <GitHubIntelligence />
        <DocsConnectors />
        <MobileSection />
        <Journey />
        <Architecture />
        <WhyMadhyam />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
