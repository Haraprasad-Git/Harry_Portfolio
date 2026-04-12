import { SectionProps } from "@/app/type";
import { FieldGroup, Input, SectionHeader } from "./LayoutHelpers";

export default function ContactSection({ data, update }: SectionProps) {
    return (
        <div>
            <SectionHeader title="Contact" description="Your address and contact details." />
            <FieldGroup label="Address line 1">
                <Input value={data.contact.address1} onChange={v => update(["contact", "address1"], v)} />
            </FieldGroup>
            <FieldGroup label="Address line 2">
                <Input value={data.contact.address2} onChange={v => update(["contact", "address2"], v)} />
            </FieldGroup>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FieldGroup label="Phone number">
                    <Input value={data.contact.phoneNo} onChange={v => update(["contact", "phoneNo"], v)} />
                </FieldGroup>
                <FieldGroup label="Email address">
                    <Input value={data.contact.email} onChange={v => update(["contact", "email"], v)} />
                </FieldGroup>
            </div>
        </div>
    );
}