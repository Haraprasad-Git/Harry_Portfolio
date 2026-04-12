import { SectionProps } from "@/app/type";
import { Card, FieldGroup, Input, SectionHeader, TagInput, Textarea } from "./LayoutHelpers";

export default function LinksSection({ data, update }: SectionProps) {
    return (
        <div>
            <SectionHeader title="Links" description="Your social profiles and resume." />
            <div className="space-y-3">
                {Object.entries(data.links).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#6a6860] w-16 shrink-0">{key}</span>
                        <Input value={value} onChange={v => update(["links", key], v)} placeholder={`Your ${key} URL`} />
                    </div>
                ))}
            </div>
        </div>
    );
}