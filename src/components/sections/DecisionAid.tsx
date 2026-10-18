"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { fitIntro, priorities } from "@/content/home";

export function DecisionAid() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = priorities[active];
  const tabId = (index: number) => `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel`;

  const select = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = priorities.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next !== null) {
      event.preventDefault();
      select(next);
    }
  };

  return (
    <section id="right-for-you" className="fit" aria-labelledby="fit-heading">
      <div className="fit-inner">
        <header className="fit-head">
          <p className="fit-eyebrow">{fitIntro.eyebrow}</p>
          <h2 id="fit-heading" className="fit-heading">{fitIntro.heading}</h2>
          <p className="fit-intro">{fitIntro.body}</p>
        </header>
        <div className="fit-grid">
          <div role="tablist" aria-label="What matters most to you" className="fit-tabs">
            {priorities.map((priority, index) => (
              <button
                key={priority.id}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={tabId(index)}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls={panelId}
                tabIndex={index === active ? 0 : -1}
                className="fit-tab"
                onClick={() => setActive(index)}
                onKeyDown={onKeyDown}
              >
                <span className="fit-tab-label">{priority.label}</span>
                <span className="fit-tab-hint">{priority.hint}</span>
              </button>
            ))}
          </div>
          <div id={panelId} role="tabpanel" aria-labelledby={tabId(active)} tabIndex={0} className="fit-panel">
            <div key={current.id} className="fit-panel-body">
              <span className={`fit-badge fit-badge-${current.fit}`}><span className="fit-dot" aria-hidden="true" />{current.fitLabel}</span>
              <h3 className="fit-panel-title">{current.headline}</h3>
              <p className="fit-panel-why">{current.why}</p>
              <dl className="fit-points">
                <div><dt>The tradeoff</dt><dd>{current.tradeoff}</dd></div>
                <div><dt>{current.altTitle}</dt><dd>{current.alt}</dd></div>
              </dl>
              <div className="fit-actions">
                <a className="fit-cta" href="#hero">{current.cta}</a>
                <a className="fit-link" href="#costs">See the numbers</a>
              </div>
            </div>
          </div>
        </div>
        <p className="fit-note">General guidance, not financial advice. Figures and timelines are sample content.</p>
      </div>
    </section>
  );
}
