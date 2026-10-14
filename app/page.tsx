"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Beaker,
  Zap, ShieldCheck, Globe, FileText, QrCode,
  ChevronRight, Mail, ExternalLink, BarChart2, Sparkles,
} from "lucide-react";
import AuroraBackground from "@/components/bits/AuroraBackground";
import FloatingDots from "@/components/bits/FloatingDots";
import BlurText from "@/components/bits/BlurText";
import TypewriterText from "@/components/bits/TypewriterText";
import GlowCard from "@/components/bits/GlowCard";
import ContactModal from "@/components/ContactModal";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: "varion",
    name: "Varion AI",
    tagline: "CV Scanner & ATS Analyzer",
    description:
      "Upload your CV and a job description — Varion's AI annotates your CV Turnitin-style, highlighting keyword matches, skill gaps, and structural issues with a full ATS score.",
    status: "live" as const,
    url: "https://varion.varlabs.my.id",
    tags: ["AI", "Career", "Next.js"],
    icon: FileText,
    accentFrom: "#2563eb",
    accentTo: "#7c3aed",
    glowColor: "rgba(99,102,241,0.2)",
  },
  {
    id: "feascale",
    name: "Feascale",
    tagline: "UMKM Feasibility Calculator",
    description:
      "Multi-step wizard that guides small business owners through HPP, BEP, ROI, and 12-month projection calculations — free, no login, runs entirely in the browser.",
    status: "live" as const,
    url: "https://feascale.varlabs.my.id",
    tags: ["Finance", "UMKM", "Calculator"],
    icon: BarChart2,
    accentFrom: "#059669",
    accentTo: "#0d9488",
    glowColor: "rgba(16,185,129,0.2)",
  },
  {
    id: "koffiverse",
    name: "Koffiverse",
    tagline: "Cross-Border Coffee Traceability",
    description:
      "QR-powered supply chain transparency for specialty coffee. Connects global buyers with Indonesian smallholder farmers — from mountain farm to morning cup.",
    status: "soon" as const,
    url: null,
    tags: ["QR Code", "Supply Chain", "Supabase"],
    icon: QrCode,
    accentFrom: "#d97706",
    accentTo: "#ea580c",
    glowColor: "rgba(245,158,11,0.15)",
  },
  {
    id: "watchly",
    name: "Watchly",
    tagline: "Lightweight Monitoring Platform",
    description:
      "Monitor websites, domains, SSL certificates, and cron jobs — get alerted before your users notice. One dashboard, four monitor types, email alerts.",
    status: "soon" as const,
    url: null,
    tags: ["Monitoring", "SaaS", "Supabase"],
    icon: Globe,
    accentFrom: "#0284c7",
    accentTo: "#0369a1",
    glowColor: "rgba(59,130,246,0.15)",
  },
];

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Ship fast, iterate faster",
    desc: "We don't wait for perfect. We get to useful, then improve with real feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by default",
    desc: "User data is treated with respect — not collected unless necessary, never sold.",
  },
  {
    icon: Globe,
    title: "Built for Indonesia, built for the world",
    desc: "Products start with Indonesian problems but are designed to scale beyond borders.",
  },
  {
    icon: Sparkles,
    title: "AI as a tool, not a gimmick",
    desc: "AI is used where it genuinely adds value, not as a marketing checkbox.",
  },
];

const TECH_MARQUEE = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4",
  "Supabase", "Groq AI", "Vercel", "Lucide Icons",
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4",
  "Supabase", "Groq AI", "Vercel", "Lucide Icons",
];

const TYPEWRITER_PHRASES = [
  "Build. Demo. Ship.",
  "Where ideas become products.",
  "Fast. Focused. AI-first.",
  "The lab is open.",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: "live" | "soon" | "wip" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/30 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
      In the lab
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── BACKGROUND LAYERS ── */}
      {/* <AuroraBackground /> */}
      {/* <FloatingDots /> */}

      {/* ── CONTENT ── */}
      <div className="relative z-10">

        {/* ── NAVBAR ── */}
        <nav className="sticky top-0 z-40 bg-[#07080f]/70 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* white bg behind dark logo */}
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Image src="/Varlabs.png" alt="VarLab" width={24} height={24} className="rounded-lg" priority loading="eager" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">VarLab</span>
              <span className="text-[10px] font-bold bg-violet-500/15 border border-violet-500/25 text-violet-300 px-2 py-0.5 rounded-full">
                by Varverse
              </span>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/40">
              <a href="#products"   className="hover:text-white transition-colors">Products</a>
              <a href="#principles" className="hover:text-white transition-colors">Principles</a>
              <a href="#about"      className="hover:text-white transition-colors">About</a>
            </div>

            {/* CTA */}
            <a
              href="https://www.varverse.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-white border border-violet-500/30 hover:border-violet-400/60 bg-violet-500/10 hover:bg-violet-500/20 px-4 py-2 rounded-full transition-all"
            >
              Varverse
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <div>
                {/* Mobile logo */}
                <div className="animate-fade-up flex justify-center mb-10 lg:hidden">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-violet-500/20 rounded-[32px] blur-2xl" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-2xl shadow-violet-500/20">
                      <Image src="/Varlabs.png" alt="VarLab" width={96} height={96} className="rounded-2xl" priority loading="eager" />
                    </div>
                  </div>
                </div>

                {/* Eyebrow */}
                <div className="animate-fade-up flex items-center gap-3 mb-8">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500" />
                  <span className="text-xs text-violet-400 font-semibold tracking-[0.25em] uppercase">
                    Experimental Hub
                  </span>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-500" />
                </div>

                {/* Headline with BlurText */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4">
                  <BlurText
                    text="Where products"
                    className="block text-white"
                    delay={80}
                  />
                  <BlurText
                    text="are born."
                    className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                    delay={80}
                  />
                </h1>

                {/* Typewriter */}
                <div className="animate-fade-up-delay-2 h-8 mb-6 text-base text-white/40 font-mono">
                  <TypewriterText phrases={TYPEWRITER_PHRASES} />
                </div>

                {/* Sub */}
                <p className="animate-fade-up-delay-2 text-base text-white/50 leading-relaxed max-w-lg mb-10">
                  VarLab is the R&D arm of Varverse. We identify real problems, build focused products, and ship them to the world — fast, clean, and AI-first.
                </p>

                {/* CTAs */}
                <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
                  <a
                    href="#products"
                    className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-violet-500/30 active:scale-95 text-sm hover:shadow-violet-500/50"
                  >
                    Explore Projects →
                  </a>
                  <a
                    href="#about"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white font-bold px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm"
                  >
                    Our Lab
                  </a>
                </div>
              </div>

              {/* Right — large logo with white bg card */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="animate-fade-up-delay-2 relative">
                  {/* outer glow */}
                  <div className="absolute -inset-8 bg-violet-500/15 rounded-[48px] blur-3xl" />
                  {/* animated border ring */}
                  <div className="animated-border relative rounded-[36px] p-[2px]">
                    {/* white card bg — makes dark logo visible */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-[34px] p-10 shadow-2xl">
                      <Image
                        src="/Varlabs.png"
                        alt="VarLab"
                        width={280}
                        height={280}
                        className="rounded-2xl"
                        priority
                        loading="eager"
                      />
                    </div>
                  </div>
                  {/* floating badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white/70">2 products live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-delay-4 flex flex-wrap gap-12 mt-20 pt-12 border-t border-white/5">
              {[
                { num: "3+",    label: "Products" },
                { num: "AI",    label: "Native Stack" },
                { num: "ID 🇮🇩", label: "Built in Indonesia" },
                { num: "∞",     label: "Ideas" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black text-white font-mono">{s.num}</p>
                  <p className="text-xs text-white/30 font-mono mt-0.5 tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH MARQUEE ── */}
        <div className="border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden">
          <div className="marquee-track">
            {TECH_MARQUEE.map((tech, i) => (
              <span key={i} className="mx-8 text-[10px] font-semibold text-white/20 whitespace-nowrap uppercase tracking-[0.2em]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── PRODUCTS ── */}
        <section id="products" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="flex items-center gap-3 mb-12">
              <span className="text-xs text-violet-400 font-mono tracking-[0.3em] uppercase">
                Products
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
            </div>

            <div className="mb-10">
              <h2 className="text-4xl font-black text-white leading-tight mb-3">
                Things we&apos;ve shipped
              </h2>
              <p className="text-white/40 text-sm max-w-lg">
                Each product starts with a real problem. No fluff — focused tools that do one thing well.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PRODUCTS.map((product) => {
                const Icon = product.icon;
                return (
                  <GlowCard
                    key={product.id}
                    glowColor={product.glowColor}
                    className={`glass ${product.status === "soon" ? "opacity-60" : ""}`}
                  >
                    <div className="flex flex-col gap-5 p-6 h-full">
                      {/* Icon + status */}
                      <div className="flex items-start justify-between">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <StatusBadge status={product.status} />
                      </div>

                      {/* Name */}
                      <div>
                        <h3 className="text-lg font-black text-white">{product.name}</h3>
                        <p className="text-xs font-medium text-white/40 mt-0.5">{product.tagline}</p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/50 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono font-bold text-white/30 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      {product.url ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-sm font-bold px-4 py-2.5 rounded-xl text-white transition-all active:scale-[0.98]"
                          style={{ background: `linear-gradient(135deg, ${product.accentFrom}, ${product.accentTo})` }}
                        >
                          Open {product.name}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="flex items-center justify-between text-sm font-bold px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white/25 cursor-not-allowed">
                          In the lab
                          <Beaker className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ── */}
        <section id="principles" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="flex items-center gap-3 mb-12">
              <span className="text-xs text-violet-400 font-mono tracking-[0.3em] uppercase">
                Principles
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
            </div>

            <h2 className="text-4xl font-black text-white mb-10">How we build</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PRINCIPLES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <GlowCard key={i} glowColor="rgba(139,92,246,0.15)" className="glass">
                    <div className="flex gap-5 p-6">
                      <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm mb-1.5">{p.title}</h3>
                        <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs text-violet-400 font-mono tracking-[0.3em] uppercase">About</span>
                <span className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                A product lab, not an agency.
              </h2>
              <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                <p>
                  We operate under{" "}
                  <a href="https://www.varverse.biz.id" target="_blank" rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
                    Varverse
                  </a>{" "}
                  — a small, independent technology group building at the intersection of AI, design, and real-world utility.
                </p>
                <p>
                  VarLab is where experiments turn into products. We don&apos;t do client work. Every product we ship is one we built for ourselves first, then opened to the world.
                </p>
                <p>
                  Our focus is Indonesia — but our ambition is global. The problems here are large, the solutions are underbuilt.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={() => setContactOpen(true)}
                  className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white glass hover:bg-white/10 px-5 py-2.5 rounded-full transition-all">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </button>
                <a href="https://www.varverse.biz.id" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 hover:border-violet-400/40 px-5 py-2.5 rounded-full transition-all">
                  Visit Varverse
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right — info card */}
            <div>
              <GlowCard glowColor="rgba(139,92,246,0.2)" className="glass">
                <div className="p-8 space-y-6">
                  {/* Logo with white bg */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 shrink-0">
                      <Image src="/Varlabs.png" alt="VarLab" width={32} height={32} className="rounded-xl" />
                    </div>
                    <div>
                      <p className="font-black text-white">VarLab</p>
                      <p className="text-xs text-white/30 font-mono">Product Laboratory</p>
                    </div>
                  </div>

                  <div className="space-y-0">
                    {[
                      { label: "Parent",   value: "Varverse" },
                      { label: "Focus",    value: "AI-native Products" },
                      { label: "Location", value: "Indonesia 🇮🇩" },
                      { label: "Stack",    value: "Next.js · TypeScript · AI" },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                        <span className="text-xs text-white/30 font-mono">{row.label}</span>
                        <span className="text-xs text-white/70 font-semibold">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl px-4 py-3 flex items-start gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-violet-300 leading-relaxed">
                      Building tools that make real people measurably better at what they do.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animated-border rounded-3xl p-12 space-y-6">
              <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-bold px-4 py-2 rounded-full">
                <Beaker className="w-3.5 h-3.5" />
                VarLab · Varverse
              </div>
              <h2 className="text-4xl font-black text-white leading-tight">
                Something useful is always in the lab.
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                Follow the work at Varverse, or reach out if you&apos;ve got a problem worth building for.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://www.varverse.biz.id" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-violet-500/30 active:scale-95 text-sm">
                  Visit Varverse
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#products"
                  className="flex items-center gap-2 glass hover:bg-white/10 text-white/60 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all text-sm">
                  Explore Products
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/5 py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <Image src="/Varlabs.png" alt="VarLab" width={16} height={16} className="rounded-md" />
              </div>
              <span className="font-bold text-white text-sm">VarLab</span>
              <span className="text-[10px] text-white/20 font-mono">by Varverse</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-white/25 font-mono">
              <a href="#products"   className="hover:text-violet-400 transition-colors">Products</a>
              <a href="https://www.varverse.biz.id" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">Varverse</a>
              <button onClick={() => setContactOpen(true)} className="hover:text-violet-400 transition-colors">Contact</button>
            </div>
            <p className="text-xs text-white/15 font-mono">© {new Date().getFullYear()} Varverse · All rights reserved</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
