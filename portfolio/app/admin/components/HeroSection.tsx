import { SectionProps } from "@/app/type";
import { FieldGroup, Input, SectionHeader, Textarea } from "./LayoutHelpers";

export default function HeroSection({ data, update }: SectionProps) {
  return (
    <div>
      <SectionHeader title="Hero" description="The first thing visitors see — name, title and intro." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FieldGroup label="Full name">
          <Input value={data.hero.name} onChange={v => update(["hero", "name"], v)} />
        </FieldGroup>
        <FieldGroup label="Title / role">
          <Input value={data.hero.title} onChange={v => update(["hero", "title"], v)} />
        </FieldGroup>
      </div>
      <FieldGroup label="Description">
        <Textarea value={data.hero.description} onChange={v => update(["hero", "description"], v)} rows={5} />
      </FieldGroup>
    </div>
  );
}