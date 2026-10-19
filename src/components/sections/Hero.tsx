import { AddressForm } from "@/components/forms/AddressForm";
import { hero } from "@/content/home";

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="hero-heading">
          {hero.before}<span className="hero-mark">{hero.highlight}</span>{hero.after}
        </h1>
        <p className="hero-body">{hero.body}</p>
        <div id="hero-address" className="hero-form">
          <AddressForm />
        </div>
        <ul className="hero-checks">
          {hero.checks.map((check) => <li key={check}><Check />{check}</li>)}
        </ul>
      </div>
    </section>
  );
}
