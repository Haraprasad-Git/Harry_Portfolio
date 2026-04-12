import { useRef, useState } from "react";

// ── Tag input ────────────────────────────────────────────────────────────────
export function TagInput({ tags, onChange }: { tags: string[]; onChange: (t: string[]) => void }) {
  const [input, setInput] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const add = (raw: string) => {
    const v = raw.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
  };

  const remove = (i: number) => onChange(tags.filter((_, idx) => idx !== i));

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault(); add(input); setInput("");
    }
    if (e.key === "Backspace" && !input && tags.length) remove(tags.length - 1);
  };

  return (
    <div
      className="flex flex-wrap gap-1.5 px-2.5 py-2 min-h-10 border border-white/10 rounded-lg cursor-text items-center bg-[#1a1a18] focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition"
      onClick={() => ref.current?.focus()}
    >
      {tags.map((tag, i) => (
        <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-indigo-950/60 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/20">
          {tag}
          <button type="button" onClick={(e) => { e.stopPropagation(); remove(i); }}
            className="text-indigo-400 hover:text-indigo-200 leading-none text-sm">×</button>
        </span>
      ))}
      <input ref={ref} value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey}
        placeholder={tags.length === 0 ? "Add technology…" : ""}
        className="bg-transparent outline-none text-xs text-[#f0efe8] min-w-17.5 flex-1 placeholder:text-[#6a6860]" />
    </div>
  );
}

// ── Base form components ─────────────────────────────────────────────────────
const labelCls = "block text-[10px] font-semibold tracking-widest uppercase text-[#6a6860] mb-1.5";
const inputCls = "w-full px-3 py-2 text-sm border border-white/10 rounded-lg bg-[#1a1a18] text-[#f0efe8] outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition placeholder:text-[#6a6860]";

export function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="mb-4"><label className={labelCls}>{label}</label>{children}</div>;
}

export function Input({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className={inputCls} />;
}

export function Textarea({ value, onChange, rows = 4 }: { value: string; onChange: (v: string) => void; rows?: number }) {
  return <textarea value={value} rows={rows} onChange={e => onChange(e.target.value)} className={`${inputCls} resize-y leading-relaxed`} />;
}

// ── Layout helpers ───────────────────────────────────────────────────────────
export function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-[15px] font-medium text-[#f0efe8]">{title}</h2>
      <p className="text-xs text-[#6a6860] mt-0.5">{description}</p>
    </div>
  );
}

export function Card({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="border border-white/8 rounded-xl p-4 mb-3 bg-[#30302e]">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/8 gap-2">
        <span className="text-sm font-medium text-[#d0cfc8] truncate">{title}</span>
        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 font-medium border border-indigo-500/20 whitespace-nowrap shrink-0">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}