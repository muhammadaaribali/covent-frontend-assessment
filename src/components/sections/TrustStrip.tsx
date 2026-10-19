"use client";

import { useEffect, useRef, useState } from "react";
import { trustIntro, trustStats, trustReassurances } from "@/content/home";

type Stat = (typeof trustStats)[number];

function fmt(n: number, decimals: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

function Counter({
  stat,
  ready,
  run,
}: {
  stat: Stat;
  ready: boolean;
  run: boolean;
}) {
  const prefix = "prefix" in stat ? stat.prefix : "";
  const suffix = "suffix" in stat ? stat.suffix : "";
  const finalText = `${prefix}${fmt(stat.to, stat.decimals)}${suffix}`;
  const [value, setValue] = useState<number>(stat.to);

  // When the panel scrolls into view, animate from -> to.
  useEffect(() => {
    if (!ready || !run) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(stat.from + (stat.to - stat.from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ready, run, stat.from, stat.to]);

  return (
    <p className="trust-num">
      <span className="sr-only">{finalText}</span>
      <span className="trust-num-stack" aria-hidden="true">
        <span className="trust-num-sizer">{finalText}</span>
        <span>
          {`${prefix}${fmt(ready && !run ? stat.from : value, stat.decimals)}${suffix}`}
        </span>
      </span>
    </p>
  );
}

function CheckIcon() {
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

export function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || !ref.current) return; // stays in its final, static state
    setReady(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="trust"
      aria-labelledby="trust-heading"
      data-ready={ready}
      data-inview={inView}
    >
      <div className="trust-panel">
        <svg
          className="trust-arch"
          viewBox="0 0 260 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path pathLength="1" d="M20 300V150a110 110 0 0 1 220 0v150" />
          <path pathLength="1" d="M50 300V150a80 80 0 0 1 160 0v150" />
          <path pathLength="1" d="M80 300V150a50 50 0 0 1 100 0v150" />
        </svg>

        <div className="trust-grid">
          <div>
            <p className="trust-eyebrow">{trustIntro.eyebrow}</p>
            <h2 id="trust-heading" className="trust-heading">
              {trustIntro.heading}
            </h2>
            <p className="trust-body">{trustIntro.body}</p>
          </div>

          <ul className="trust-tiles">
            {trustStats.map((s, i) => (
              <li
                key={s.label}
                className="trust-tile"
                style={{ ["--i" as string]: i }}
              >
                <span className="trust-rule" aria-hidden="true" />
                <Counter stat={s} ready={ready} run={inView} />
                <p className="trust-label">{s.label}</p>
                <span className="trust-pill">Sample</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="trust-chips">
          {trustReassurances.map((t, i) => (
            <li key={t} style={{ ["--i" as string]: i }}>
              <CheckIcon />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <p className="trust-caption">Sample figures for illustration only.</p>
    </section>
  );
}

/*
Website Loads
     |
     ▼
TrustStrip Renders
     |
     ▼
Counter Components Initialize
(value = stat.to, ready = false, run = false)
     |
     ▼
useEffects Execute
     |
     ▼
TrustStrip: setReady(true)
     |
     ▼
Counter: value = stat.from
     |
     ▼
IntersectionObserver Waits
     |
     ▼
TrustStrip Enters Viewport
     |
     ▼
setInView(true) → run = true
     |
     ▼
Counter Animation Starts
     |
     ▼
Final Values Displayed
*/