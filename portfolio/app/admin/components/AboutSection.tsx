import { SectionProps } from "@/app/type";
import { FieldGroup, SectionHeader, Textarea } from "./LayoutHelpers";

export default function AboutSection({ data, update }: SectionProps) {
  return (
    <div>
      <SectionHeader title="About" description="A deeper look at who you are and what you do." />
      <FieldGroup label="About text">
        <Textarea value={data.about} onChange={v => update(["about"], v)} rows={8} />
      </FieldGroup>
    </div>
  );
}