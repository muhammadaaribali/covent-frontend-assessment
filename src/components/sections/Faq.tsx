import { faqHelp, faqIntro, faqs } from "@/content/home";
import { FaqBoard } from "./FaqBoard";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="fq" aria-labelledby="fq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="fq-inner">
        <div className="fq-side">
          <header>
            <p className="fq-eyebrow">{faqIntro.eyebrow}</p>
            <h2 id="fq-heading" className="fq-heading">{faqIntro.heading}</h2>
            <p className="fq-intro">{faqIntro.body}</p>
          </header>
          <aside className="fq-help" aria-labelledby="fq-help-title">
            <span className="fq-help-tag">Sample</span>
            <h3 id="fq-help-title" className="fq-help-title">{faqHelp.title}</h3>
            <p className="fq-help-body">{faqHelp.body}</p>
            <a className="fq-help-cta" href="#hero">{faqHelp.cta}</a>
          </aside>
        </div>
        <FaqBoard />
      </div>
    </section>
  );
}
