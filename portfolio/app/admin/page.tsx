"use client";

import { useEffect, useState } from "react";
import { PortfolioContent } from "../type";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import LinksSection from "./components/LinksSection";

type Section = "hero" | "about" | "experience" | "projects" | "contact" | "links";

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "links", label: "Links" },
];

// ── Save status ──────────────────────────────────────────────────────────────
type SaveStatus = "idle" | "dirty" | "saved";

function SaveHint({ status, savedAt }: { status: SaveStatus; savedAt: string | null }) {
  const map = {
    idle: { text: "No unsaved changes", cls: "text-[#6a6860]" },
    dirty: { text: "Unsaved changes", cls: "text-amber-400" },
    saved: { text: `Saved at ${savedAt}`, cls: "text-green-400" },
  };
  const { text, cls } = map[status];
  return <span className={`text-xs transition-colors ${cls}`}>{text}</span>;
}

// ── Root page ────────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [data, setData] = useState<PortfolioContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [active, setActive] = useState<Section>("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/content")
      .then(res => { if (!res.ok) throw new Error("Failed to fetch"); return res.json(); })
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const update = (path: (string | number)[], value: unknown) => {
    setData(prev => {
      if (!prev) return prev;
      const clone = structuredClone(prev);
      let obj: Record<string, unknown> = clone as unknown as Record<string, unknown>;
      for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]] as Record<string, unknown>;
      obj[path[path.length - 1]] = value;
      return clone;
    });
    setSaveStatus("dirty");
  };

  const save = async () => {
    if (!data) return;
    try {
      setSaving(true);
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Save failed");
      setSaveStatus("saved");
      setSavedAt(new Date().toLocaleTimeString());
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Save failed");
      console.log(err)
    } finally {
      setSaving(false);
    }
  };

  const selectSection = (id: Section) => { setActive(id); setSidebarOpen(false); };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#262624] text-sm text-[#6a6860]">Loading…</div>
  );
  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-[#262624] text-sm text-red-400">Error: {error}</div>
  );
  if (!data) return null;

  const sp = { data, update };
  const saveDisabled = saving || saveStatus !== "dirty";

  const saveBtnCls = "px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition";

  return (
    <div className="flex h-screen bg-[#262624] overflow-hidden">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/60 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-30
        w-52 shrink-0 flex flex-col
        bg-[#30302e] border-r border-white/8
        transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="px-4 py-4 border-b border-white/8">
          <p className="text-[13px] font-medium text-[#f0efe8]">Portfolio CMS</p>
          <p className="text-[11px] text-[#6a6860] mt-0.5">Content editor</p>
        </div>
        <nav className="flex-1 py-1.5 overflow-y-auto">
          {NAV_ITEMS.map(({ id, label }) => (
            <button key={id} onClick={() => selectSection(id)}
              className={`w-full text-left px-4 py-2.5 text-[13px] border-l-2 transition-all ${
                active === id
                  ? "text-indigo-300 bg-indigo-950/40 border-indigo-500 font-medium"
                  : "text-[#a09e96] hover:text-[#f0efe8] hover:bg-white/5 border-transparent"
              }`}>
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Topbar */}
        <header className="flex items-center gap-3 px-4 md:px-6 py-3 border-b border-white/8 bg-[#30302e] shrink-0">
          <button onClick={() => setSidebarOpen(true)} aria-label="Open menu"
            className="md:hidden p-1.5 rounded-lg text-[#a09e96] hover:text-[#f0efe8] hover:bg-white/8 transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <span className="flex-1 min-w-0 text-sm font-medium text-[#f0efe8] truncate capitalize">
            {NAV_ITEMS.find(n => n.id === active)?.label} section
          </span>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => { setSaveStatus("idle"); setSavedAt(null); }}
              className="px-3 py-1.5 text-xs border border-white/10 rounded-lg bg-[#3a3a37] hover:bg-white/10 text-[#a09e96] hover:text-[#f0efe8] transition">
              Discard
            </button>
            <button onClick={save} disabled={saveDisabled} className={saveBtnCls}>
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-5">
          {active === "hero"       && <HeroSection {...sp} />}
          {active === "about"      && <AboutSection {...sp} />}
          {active === "experience" && <ExperienceSection {...sp} />}
          {active === "projects"   && <ProjectsSection {...sp} />}
          {active === "contact"    && <ContactSection {...sp} />}
          {active === "links"      && <LinksSection {...sp} />}
        </main>

        {/* Save bar */}
        <footer className="flex items-center justify-between px-4 md:px-6 py-2.5 border-t border-white/8 bg-[#30302e] shrink-0 gap-3">
          <SaveHint status={saveStatus} savedAt={savedAt} />
          <button onClick={save} disabled={saveDisabled} className={saveBtnCls}>
            {saving ? "Saving…" : "Save changes"}
          </button>
        </footer>
      </div>
    </div>
  );
}