import { SectionProps } from "@/app/type";
import { Card, FieldGroup, Input, SectionHeader, TagInput, Textarea } from "./LayoutHelpers";

export default function ProjectsSection({ data, update }: SectionProps) {
    return (
        <div>
            <SectionHeader title="Projects" description="Showcase your best work." />
            {data.projects.map((proj, i) => (
                <Card key={i} title={proj.title}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <FieldGroup label="Title">
                            <Input value={proj.title} onChange={v => update(["projects", i, "title"], v)} />
                        </FieldGroup>
                        <FieldGroup label="Image filename">
                            <Input value={proj.image} onChange={v => update(["projects", i, "image"], v)} placeholder="e.g. project.png" />
                        </FieldGroup>
                    </div>
                    <FieldGroup label="Description">
                        <Textarea value={proj.description} onChange={v => update(["projects", i, "description"], v)} rows={3} />
                    </FieldGroup>
                    <FieldGroup label="Technologies">
                        <TagInput tags={proj.technologies} onChange={tags => update(["projects", i, "technologies"], tags)} />
                    </FieldGroup>
                </Card>
            ))}
        </div>
    );
}