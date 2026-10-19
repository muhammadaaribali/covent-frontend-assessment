"use client";

import { useId, useState } from "react";
import { faqs, faqGroups } from "@/content/home";

export function FaqBoard() {
  const baseId = useId();
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<(typeof faqGroups)[number]["id"]>("all");
  const [open, setOpen] = useState<Set<string>>(() => new Set([faqs[0].id]));
  const normalizedQuery = query.trim().toLowerCase();
  const shown = faqs.filter(
    (faq) =>
      (group === "all" || faq.group === group) &&
      (!normalizedQuery ||
        `${faq.q} ${faq.a}`.toLowerCase().includes(normalizedQuery)),
  );
  const toggle = (id: string) =>
    setOpen((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="fq-board">
      <div className="fq-search">
        <label htmlFor={`${baseId}-search`} className="fq-search-label">
          Search the questions
        </label>
        <input
          id={`${baseId}-search`}
          type="search"
          className="fq-input"
          placeholder="Try “fee”, “repairs” or “cancel”"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
      </div>
      <div
        className="fq-filters"
        role="group"
        aria-label="Filter questions by topic"
      >
        {faqGroups.map((item) => (
          <button
            key={item.id}
            type="button"
            className="fq-pill"
            aria-pressed={item.id === group}
            onClick={() => setGroup(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="fq-count" aria-live="polite">
        {shown.length === 0
          ? "No questions match. Try a different word."
          : `Showing ${shown.length} ${shown.length === 1 ? "question" : "questions"}`}
      </p>
      {shown.length === 0 ? (
        <div className="fq-empty">
          <button
            type="button"
            className="fq-clear"
            onClick={() => {
              setQuery("");
              setGroup("all");
            }}
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="fq-list">
          {shown.map((faq) => {
            const isOpen = open.has(faq.id);
            const buttonId = `${baseId}-q-${faq.id}`;
            const panelId = `${baseId}-a-${faq.id}`;
            return (
              <li key={faq.id} className="fq-item" data-open={isOpen}>
                <h3 className="fq-q">
                  <button
                    id={buttonId}
                    type="button"
                    className="fq-btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(faq.id)}
                  >
                    <span>{faq.q}</span>
                    <span className="fq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="fq-panel"
                  inert={!isOpen}
                >
                  <div className="fq-panel-in">
                    <p className="fq-a">{faq.a}</p>
                    {faq.link && (
                      <a className="fq-link" href={faq.link.href}>
                        {faq.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
