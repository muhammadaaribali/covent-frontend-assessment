import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SampleBadge } from "@/components/ui/SampleBadge";
export function Placeholder({ id, heading, description }: { id: string; heading: string; description: string }) {
  return <Section id={id}><SectionHeading heading={heading} description={description} /><div className="mt-8 rounded-card border-2 border-dashed border-border p-8 text-center text-muted"><SampleBadge /><p className="mt-3 font-semibold">TODO: build this section</p></div></Section>;
}
