import { AddressForm } from "@/components/forms/AddressForm";
import { closingCta } from "@/content/home";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function ClosingCta() {
  return (
    <section id="get-started" className="cc" aria-labelledby="cc-heading">
      <div className="cc-panel">
        <svg
          className="cc-arch"
          viewBox="0 0 300 340"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M10 340V170a140 140 0 0 1 280 0v170" />
          <path d="M45 340V170a105 105 0 0 1 210 0v170" />
          <path d="M80 340V170a70 70 0 0 1 140 0v170" />
        </svg>
        <div className="cc-grid">
          <div>
            <p className="cc-eyebrow">{closingCta.eyebrow}</p>
            <h2 id="cc-heading" className="cc-heading">
              {closingCta.heading}
            </h2>
            <p className="cc-body">{closingCta.body}</p>
            <div className="cc-form">
              <AddressForm />
            </div>
            <ul className="cc-checks">
              {closingCta.checks.map((check) => (
                <li key={check}>
                  <Check />
                  {check}
                </li>
              ))}
            </ul>
          </div>
          <svg
            className="cc-door-art"
            viewBox="0 0 190 250"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M10 250V100a85 85 0 0 1 170 0v150z"
              fill="var(--c-accent)"
            />
            <path d="M34 250V104a61 61 0 0 1 122 0v146z" fill="var(--c-ink)" />
            <path
              d="M34 250V104a61 61 0 0 1 122 0v146z"
              stroke="var(--c-bg)"
              strokeWidth="2"
              opacity="0.35"
            />
            <path
              d="M62 250V118a33 33 0 0 1 66 0v132z"
              fill="var(--c-accent)"
            />
            <g className="cc-door">
              <path d="M62 250V118a33 33 0 0 1 66 0v132z" fill="var(--c-bg)" />
              <circle cx="116" cy="188" r="4" fill="var(--c-ink)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
