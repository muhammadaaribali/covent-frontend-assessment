export type SectionCopy = { id: string; heading: string; description: string };

export const trustStats = [
  {
    label: "Average seller rating",
    from: 0,
    to: 4.8,
    decimals: 1,
    suffix: "/5",
  },
  { label: "Homes bought", from: 0, to: 10000, decimals: 0, suffix: "+" },
  {
    label: "As fast as, if you choose",
    from: 0,
    to: 7,
    decimals: 0,
    suffix: " days",
  },
  // counts DOWN to zero, which makes the point of the stat
  { label: "To request an offer", from: 500, to: 0, decimals: 0, prefix: "$" },
] as const;

export const trustIntro = {
  eyebrow: "Why Covent",
  heading: "A clearer path starts here.",
  body: "Real numbers, plain terms, and no surprises at the end. See the costs before you decide anything.",
};

export const trustReassurances = [
  "No obligation to accept",
  "Fees shown before you decide",
  "Your address stays private",
  "A named person guides you",
];

export const howIntro = {
  eyebrow: "How it works",
  heading: "Four steps from address to closing day",
  body: "You'll see the costs before you commit to anything, and you can stop at any step.",
};

export const steps = [
  { n: "01", title: "Share your address", body: "Tell us where your home is, and we'll check whether we buy in your area.", meta: "About 1 minute. Nothing to sign." },
  { n: "02", title: "Tell us about your home", body: "Answer a few quick questions about its condition, any upgrades, and when you'd like to move.", meta: "About 5 minutes. Skip anything you're unsure of." },
  { n: "03", title: "See your offer and costs", body: "Get a clear breakdown of the price, our fees, and what you'd take home, before you decide anything.", meta: "About 1 day. No obligation to accept.", tag: "Costs shown here" },
  { n: "04", title: "Choose your closing date", body: "Pick the day that suits you, and move when you're ready. Need more time? Ask for a later move-out.", meta: "You decide the date." },
] as const;

export const FEE_RATE = 0.06;
export const REPAIR_RATE = 0.015;
export const PRICE_MIN = 150000;
export const PRICE_MAX = 600000;
export const PRICE_STEP = 10000;
export const PRICE_DEFAULT = 300000;

export const costsIntro = {
  eyebrow: "Costs",
  heading: "Know the numbers upfront",
  body: "No surprises at the end. Here's what a sale with Covent costs, and how it compares to listing with an agent.",
};

export const costCards = [
  { title: "Service fee", figure: "About 6%", why: "Covers the offer, the paperwork and a guaranteed buyer. You see it before you accept anything." },
  { title: "Repair adjustment", figure: "Based on condition", why: "We account for repairs in your offer up front, so nothing gets billed to you later." },
  { title: "Closing costs", figure: "Shown line by line", why: "Your offer breakdown lists which costs we cover and which are yours." },
] as const;

export const comparisonRows = [
  { label: "Time to close", covent: "As fast as 7 days", agent: "Often 2 to 4 months" },
  { label: "Showings", covent: "None", agent: "Required until a buyer appears" },
  { label: "Repairs and prep", covent: "Priced into your offer", agent: "Often paid by you before listing" },
  { label: "Fees", covent: "About 6% service fee, plus repairs", agent: "Agent commission, plus closing costs" },
  { label: "Certainty of closing", covent: "Price set before you commit", agent: "Depends on the buyer's financing" },
  { label: "Likely sale price", covent: "May be lower than market", agent: "Can be higher if your home is in good shape" },
] as const;

export const fitIntro = {
  eyebrow: "Is it right for me?",
  heading: "Is Covent right for you?",
  body: "It depends on what matters most. Pick your priority and we'll tell you honestly how we compare with listing.",
};

export type Priority = {
  id: string;
  label: string;
  hint: string;
  fit: "strong" | "listing";
  fitLabel: string;
  headline: string;
  why: string;
  tradeoff: string;
  altTitle: string;
  alt: string;
  cta: string;
};

export const priorities: readonly Priority[] = [
  {
    id: "fast",
    label: "I need to move fast",
    hint: "A job, a purchase, or a date you can't miss",
    fit: "strong",
    fitLabel: "Strong fit",
    headline: "Close in weeks, not months.",
    why: "You can close in as little as 7 days (sample), with no showings, no repairs and no staging.",
    tradeoff: "The offer may be lower than what an open market could bring.",
    altTitle: "Listing may suit you better if",
    alt: "you can wait a few months and your home is in great shape.",
    cta: "Start with your address",
  },
  {
    id: "price",
    label: "I want the highest price",
    hint: "You have time and a home that shows well",
    fit: "listing",
    fitLabel: "Listing may suit you better",
    headline: "Exposure to many buyers can raise the price.",
    why: "If your home is in good shape and you have time, listing with an agent can reach more buyers and bring a higher offer.",
    tradeoff: "You take on repairs, showings, commission and uncertainty about timing.",
    altTitle: "Covent may still suit you if",
    alt: "you'd trade some price to skip all of that.",
    cta: "Get a sample offer to compare",
  },
  {
    id: "certainty",
    label: "I want certainty",
    hint: "No surprises, no deals falling through",
    fit: "strong",
    fitLabel: "Strong fit",
    headline: "Know your price before you commit.",
    why: "You see the price and costs up front and choose your closing date. There's no buyer financing that can fall through.",
    tradeoff: "The final offer can change after we review your home's condition (sample).",
    altTitle: "Listing may suit you better if",
    alt: "you're comfortable with some risk for a possible higher price.",
    cta: "Start with your address",
  },
];

export const TL_DAYS = 120;
export const COVENT_END = 21;
export const TRAD_END = 114;

export type Stage = {
  name: string;
  time: string;
  s: number;
  e: number;
  uncertain?: boolean;
};

export const timelineIntro = {
  eyebrow: "Timeline",
  heading: "A timeline you can plan around",
  body: "Two ways to sell, on the same calendar. Drag the slider to see which one fits your move-out date.",
};

export const coventStages: readonly Stage[] = [
  { name: "Get your offer", time: "1 to 3 days", s: 0, e: 3 },
  { name: "Home review", time: "About a week", s: 3, e: 10 },
  { name: "Choose your date", time: "A few days", s: 10, e: 14 },
  { name: "Close", time: "About a week", s: 14, e: 21 },
];

export const tradStages: readonly Stage[] = [
  { name: "Find an agent", time: "About 10 days", s: 0, e: 10 },
  { name: "Repairs", time: "About 2 weeks", s: 10, e: 24 },
  { name: "Staging and photos", time: "About 5 days", s: 24, e: 29 },
  { name: "List and wait for a buyer", time: "Up to 45 days", s: 29, e: 74, uncertain: true },
  { name: "Contract to closing", time: "30 to 45 days", s: 74, e: 114, uncertain: true },
];

export const handlesIntro = {
  eyebrow: "What we do",
  heading: "We handle the details",
  body: "Six jobs off your plate, and a few decisions that stay yours.",
};

export const taskList = {
  title: "The usual to-do list",
  hidden: "Covent handles all of it.",
  tasks: ["Find an agent", "Hire contractors", "Stage the home", "Schedule showings", "Negotiate offers", "Chase paperwork"],
  done: "Handled.",
};

export type HandleItem = {
  icon: "repairs" | "paperwork" | "closing" | "contact" | "showings" | "moveout";
  title: string;
  body: string;
  sample?: boolean;
};

export const handles: readonly HandleItem[] = [
  { icon: "repairs", title: "Repairs and prep", body: "We price them into your offer, so you don't manage contractors." },
  { icon: "paperwork", title: "Paperwork", body: "Forms, disclosures and signatures, prepared and explained in plain terms." },
  { icon: "closing", title: "Closing coordination", body: "Title, escrow and timing, handled with you." },
  { icon: "contact", title: "A named contact", body: "One person to ask, from your first question to closing.", sample: true },
  { icon: "showings", title: "No showings or marketing", body: "There's no listing to promote and no strangers walking through." },
  { icon: "moveout", title: "Move-out flexibility", body: "Need more time? Ask for a later move-out date." },
];

export const youDecide = {
  eyebrow: "Still yours",
  heading: "You decide",
  items: ["Whether to accept the offer", "Your closing date", "When you hand over the keys", "Anything you'd rather do yourself"],
  footer: "You can stop at any step.",
};

export const storiesIntro = {
  eyebrow: "Sample stories",
  heading: "What sellers might say",
  body: "Six made-up stories for this demo, grouped by what mattered most to each seller. Pick a priority to filter them.",
};

export type FilterId = "all" | "fast" | "certainty" | "time" | "listing";
export const storyFilters: readonly { id: FilterId; label: string }[] = [
  { id: "all", label: "All stories" },
  { id: "fast", label: "Moved fast" },
  { id: "certainty", label: "Wanted certainty" },
  { id: "time", label: "Needed more time" },
  { id: "listing", label: "Weighed listing first" },
];

export type Story = {
  id: string;
  quote: string;
  name: string;
  city: string;
  initials: string;
  tone: 0 | 1 | 2;
  facts: string;
  tags: readonly Exclude<FilterId, "all">[];
};

export const stories: readonly Story[] = [
  { id: "maya", quote: "We got the job offer on a Monday and had to be across the country in a month. Covent gave us a number that week, and we picked our own closing date.", name: "Maya T.", city: "Denver, CO", initials: "MT", tone: 0, facts: "3-bed house · Closed in 19 days · Wanted speed", tags: ["fast"] },
  { id: "robert", quote: "I'd watched friends' sales fall through at the last minute. Seeing the price and the fees before I agreed to anything is what settled it for me.", name: "Robert K.", city: "Tampa, FL", initials: "RK", tone: 1, facts: "2-bed bungalow · Closed in 26 days · Wanted certainty", tags: ["certainty"] },
  { id: "priya", quote: "The offer was a little lower than I'd hoped. But I closed in three weeks and never repainted a wall or met a stranger at the door. For me, that was worth it.", name: "Priya S.", city: "Phoenix, AZ", initials: "PS", tone: 2, facts: "Townhouse · Closed in 21 days · Valued speed over price", tags: ["fast"] },
  { id: "daniel", quote: "My new place wasn't ready for another six weeks. Asking for a later move-out was one message, and it was sorted.", name: "Daniel M.", city: "Columbus, OH", initials: "DM", tone: 0, facts: "4-bed house · Closed in 41 days · Needed more time", tags: ["time"] },
  { id: "elena", quote: "I spoke to two agents first. Listing might have brought more, but I'd have spent the spring on repairs and showings. Seeing the numbers side by side made the choice easy.", name: "Elena V.", city: "Raleigh, NC", initials: "EV", tone: 1, facts: "Condo · Closed in 24 days · Weighed listing first", tags: ["listing"] },
  { id: "tom", quote: "The roof and the kitchen both needed work, and I didn't want to hire anyone. Having the repairs priced into the offer meant one clear number.", name: "Tom B.", city: "Portland, OR", initials: "TB", tone: 2, facts: "3-bed house · Closed in 28 days · Skipped the repairs", tags: ["certainty", "listing"] },
];

export const faqIntro = {
  eyebrow: "FAQ",
  heading: "Frequently asked questions",
  body: "Straight answers, starting with the ones sellers worry about most. All figures are sample content.",
};

export type FaqGroup = "costs" | "commitment" | "timing" | "home";
export const faqGroups: readonly { id: "all" | FaqGroup; label: string }[] = [
  { id: "all", label: "All" },
  { id: "costs", label: "Costs and price" },
  { id: "commitment", label: "Commitment" },
  { id: "timing", label: "Timing" },
  { id: "home", label: "My home" },
];

export type Faq = {
  id: string;
  group: FaqGroup;
  q: string;
  a: string;
  link?: { label: string; href: string };
};

export const faqs: readonly Faq[] = [
  { id: "cost", group: "costs", q: "What does it cost to sell to Covent?", a: "You pay a service fee, about 6% in our sample figures, plus an adjustment for any repairs your home needs. Both appear as separate lines in your offer, so you see your take-home amount before you decide.", link: { label: "See the sample breakdown", href: "#costs" } },
  { id: "offer", group: "costs", q: "How do you decide what to offer?", a: "We look at your home's location, size, condition and recent nearby sales, then subtract the service fee and any repair adjustment. This demo page doesn't calculate real offers." },
  { id: "change", group: "costs", q: "Can the offer change after you review my home?", a: "Yes. If the home's condition differs from what you described, the final figure can move. You would see what changed and why, and you can say no." },
  { id: "obligation", group: "commitment", q: "Is there any obligation after I request an offer?", a: "No. Requesting an offer is free, and you can stop at any step. You only commit if you choose to accept." },
  { id: "backout", group: "commitment", q: "Can I back out after accepting?", a: "That depends on the agreement, which you would read before signing. In this demo no agreement exists, so there's nothing to cancel." },
  { id: "privacy", group: "commitment", q: "Will you share my information?", a: "In this demo, the address you type is never sent, stored or logged. A real product would have a privacy policy explaining exactly what is collected and why." },
  { id: "fast", group: "timing", q: "How fast can I close?", a: "As fast as 7 days in our sample figures, though a typical sample sale closes in about three weeks. You choose the date, and faster isn't required.", link: { label: "See the timeline", href: "#timeline" } },
  { id: "moretime", group: "timing", q: "What if I need extra time to move?", a: "Ask for a later move-out when you choose your closing date. A longer gap may change the terms, and you would see that before agreeing." },
  { id: "repairs", group: "home", q: "Do I need to make repairs or stage my home?", a: "No. Repairs are priced into your offer, and there are no showings, so there's nothing to stage." },
  { id: "kinds", group: "home", q: "What kinds of homes do you buy?", a: "In this sample answer: most single-family homes, townhouses and condos in the areas we serve. Unusual properties may need a closer look, and in some places we may not buy at all.", link: { label: "Is Covent right for you?", href: "#right-for-you" } },
];

export const faqHelp = {
  title: "Still have a question?",
  body: "Real contact options would appear here. In this demo they are sample content, and nothing you type is sent anywhere.",
  cta: "Start with your address",
};

export const sectionCopy: Record<string, SectionCopy> = {
  trust: {
    id: "trust",
    heading: "A clearer path starts here.",
    description: "A place for proof points and trust signals.",
  },
  howItWorks: {
    id: "how-it-works",
    heading: "How it works",
    description: "A place for the simple step-by-step seller journey.",
  },
  costs: {
    id: "costs",
    heading: "Know the numbers upfront",
    description: "A place for transparent costs and sample figures.",
  },
  decisionAid: {
    id: "is-it-right",
    heading: "Is Covent right for you?",
    description: "A place for a practical decision aid.",
  },
  timeline: {
    id: "timeline",
    heading: "A timeline you can plan around",
    description: "A place for the expected selling timeline.",
  },
  handles: {
    id: "handles",
    heading: "We handle the details",
    description: "A place for the service responsibilities.",
  },
  testimonials: {
    id: "testimonials",
    heading: "What sellers might say",
    description: "A place for sample seller testimonials.",
  },
  faq: {
    id: "faq",
    heading: "Frequently asked questions",
    description: "A place for answers to common questions.",
  },
};
