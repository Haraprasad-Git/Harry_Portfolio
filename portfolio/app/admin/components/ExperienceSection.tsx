import { SectionProps } from "@/app/type";
import { Card, FieldGroup, Input, SectionHeader, TagInput, Textarea } from "./LayoutHelpers";

export default function ExperienceSection({ data, update }: SectionProps) {
  return (
    <div>
      <SectionHeader title="Experience" description="Your work history and roles." />
      {data.experiences.map((exp, i) => (
        <Card key={i} title={exp.role} badge={exp.year}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FieldGroup label="Year range">
              <Input value={exp.year} onChange={v => update(["experiences", i, "year"], v)} />
            </FieldGroup>
            <FieldGroup label="Role">
              <Input value={exp.role} onChange={v => update(["experiences", i, "role"], v)} />
            </FieldGroup>
          </div>
          <FieldGroup label="Company">
            <Input value={exp.company} onChange={v => update(["experiences", i, "company"], v)} />
          </FieldGroup>
          <FieldGroup label="Description">
            <Textarea value={exp.description} onChange={v => update(["experiences", i, "description"], v)} rows={3} />
          </FieldGroup>
          <FieldGroup label="Technologies">
            <TagInput tags={exp.technologies} onChange={tags => update(["experiences", i, "technologies"], tags)} />
          </FieldGroup>
        </Card>
      ))}
    </div>
  );
}