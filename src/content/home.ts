export type SectionCopy = { id: string; heading: string; description: string };

export const sectionCopy: Record<string, SectionCopy> = {
  trust: { id: "trust", heading: "A clearer path starts here.", description: "A place for proof points and trust signals." },
  howItWorks: { id: "how-it-works", heading: "How it works", description: "A place for the simple step-by-step seller journey." },
  costs: { id: "costs", heading: "Know the numbers upfront", description: "A place for transparent costs and sample figures." },
  decisionAid: { id: "is-it-right", heading: "Is Covent right for you?", description: "A place for a practical decision aid." },
  timeline: { id: "timeline", heading: "A timeline you can plan around", description: "A place for the expected selling timeline." },
  handles: { id: "handles", heading: "We handle the details", description: "A place for the service responsibilities." },
  testimonials: { id: "testimonials", heading: "What sellers might say", description: "A place for sample seller testimonials." },
  faq: { id: "faq", heading: "Frequently asked questions", description: "A place for answers to common questions." },
};
