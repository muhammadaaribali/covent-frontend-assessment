"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import {
  coventStages,
  COVENT_END,
  timelineIntro,
  TL_DAYS,
  tradStages,
  TRAD_END,
  type Stage,
} from "@/content/home";

const RACE_MS = 5200;
const TICKS = [0, 30, 60, 90, 120];

function fit(day: number, end: number) {
  if (day >= end) return { key: "fits", label: "Fits" };
  if (day >= end * 0.8) return { key: "tight", label: "Tight" };
  return { key: "no", label: "Unlikely" };
}

function HouseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}

function Track({
  lane,
  stages,
  trackRef,
}: {
  lane: "c" | "t";
  stages: readonly Stage[];
  trackRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={trackRef}
      className={`tl-track tl-track-${lane}`}
      aria-hidden="true"
    >
      <div className="tl-reveal">
        {stages.map((stage, index) => (
          <div
            key={stage.name}
            className={`tl-seg${stage.uncertain ? " is-uncertain" : ""}`}
            style={{ "--s": stage.s, "--e": stage.e } as CSSProperties}
          >
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="tl-house">
        <HouseIcon />
        <span className="tl-flag">Sold</span>
      </div>
    </div>
  );
}

export function TimelineBoard() {
  const sliderId = useId();
  const boardRef = useRef<HTMLDivElement>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const tRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const runRef = useRef<(() => void) | null>(null);
  const [moveBy, setMoveBy] = useState(30);

  useEffect(() => {
    const board = boardRef.current;
    if (!board || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    board.dataset.ready = "true";
    const apply = (day: number) => {
      const c = cRef.current;
      const t = tRef.current;
      const counter = counterRef.current;
      if (!c || !t || !counter) return;
      c.style.setProperty("--p", String(Math.min(day, COVENT_END)));
      t.style.setProperty("--p", String(Math.min(day, TRAD_END)));
      c.dataset.done = String(day >= COVENT_END);
      t.dataset.done = String(day >= TRAD_END);
      counter.textContent = `Day ${Math.floor(day)}`;
    };
    const run = () => {
      cancelAnimationFrame(frame.current);
      apply(0);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / RACE_MS, 1);
        apply(TRAD_END * progress);
        if (progress < 1) frame.current = requestAnimationFrame(tick);
      };
      frame.current = requestAnimationFrame(tick);
    };
    runRef.current = run;
    apply(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(board);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
      delete board.dataset.ready;
    };
  }, []);

  const coventFit = fit(moveBy, COVENT_END);
  const traditionalFit = fit(moveBy, TRAD_END);
  let verdict: React.ReactNode;
  if (moveBy >= TRAD_END)
    verdict = (
      <>
        You have time. Listing may bring a higher price, so it&apos;s worth
        comparing both. <a href="#right-for-you">See which option suits you</a>.
      </>
    );
  else if (moveBy >= COVENT_END)
    verdict =
      "Selling to Covent can fit this date. A traditional sale usually can't, so listing would be a gamble on timing.";
  else if (moveBy >= COVENT_END * 0.8)
    verdict =
      "This is tight. Covent could just make it, but nothing guarantees it. Check your closing options once you see an offer.";
  else
    verdict =
      "That's very soon for any sale. Covent's fastest case is about 3 weeks (sample), so this date may not be possible.";

  return (
    <div
      ref={boardRef}
      className="tl-board"
      style={{ "--d": moveBy } as CSSProperties}
    >
      <div className="tl-bar">
        <p className="tl-counter" aria-hidden="true">
          <span ref={counterRef}>Day {TRAD_END}</span>
        </p>
        <button
          type="button"
          className="tl-replay"
          onClick={() => runRef.current?.()}
        >
          Replay the race
        </button>
      </div>
      <div className="tl-chart">
        <div className="tl-head tl-head-c">
          <p className="tl-lane-name">
            Sell to Covent <span>About 3 weeks · sample</span>
          </p>
          <span className={`tl-tag tl-tag-${coventFit.key}`}>
            {coventFit.label}
          </span>
        </div>
        <div className="tl-head tl-head-t">
          <p className="tl-lane-name">
            Traditional sale <span>About 4 months · sample</span>
          </p>
          <span className={`tl-tag tl-tag-${traditionalFit.key}`}>
            {traditionalFit.label}
          </span>
        </div>
        <div className="tl-plot">
          <div className="tl-axis" aria-hidden="true">
            {TICKS.map((tick) => (
              <span key={tick} style={{ "--t": tick } as CSSProperties}>
                {tick === 0 ? "Day 0" : tick}
              </span>
            ))}
          </div>
          <Track lane="c" stages={coventStages} trackRef={cRef} />
          <Track lane="t" stages={tradStages} trackRef={tRef} />
          <div className="tl-marker" aria-hidden="true">
            <span>Day {moveBy}</span>
          </div>
        </div>
      </div>
      <div className="tl-control">
        <label htmlFor={sliderId}>I need to be moved out by day</label>
        <input
          id={sliderId}
          type="range"
          min={7}
          max={TL_DAYS}
          step={1}
          value={moveBy}
          aria-valuetext={`Day ${moveBy}`}
          onChange={(event) => setMoveBy(Number(event.target.value))}
        />
        <output htmlFor={sliderId} className="tl-out">
          Day {moveBy}
        </output>
      </div>
      <p className="tl-verdict" aria-live="polite">
        {verdict}
      </p>
    </div>
  );
}

function StageList({
  title,
  stages,
}: {
  title: string;
  stages: readonly Stage[];
}) {
  return (
    <div className="tl-list">
      <h3 className="tl-list-title">{title}</h3>
      <ol>
        {stages.map((stage, index) => (
          <li key={stage.name}>
            <span className="tl-list-n" aria-hidden="true">
              {index + 1}
            </span>
            <span>
              {stage.name}: {stage.time}
              {stage.uncertain ? " (varies)" : ""}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="tl" aria-labelledby="tl-heading">
      <svg
        className="tl-arch"
        viewBox="0 0 260 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M20 300V150a110 110 0 0 1 220 0v150" />
        <path d="M50 300V150a80 80 0 0 1 160 0v150" />
        <path d="M80 300V150a50 50 0 0 1 100 0v150" />
      </svg>
      <div className="tl-inner">
        <header className="tl-header">
          <p className="tl-eyebrow">{timelineIntro.eyebrow}</p>
          <h2 id="tl-heading" className="tl-heading">
            {timelineIntro.heading}
          </h2>
          <p className="tl-intro">{timelineIntro.body}</p>
        </header>
        <TimelineBoard />
        <div className="tl-lists">
          <StageList title="Selling to Covent" stages={coventStages} />
          <StageList title="Traditional sale" stages={tradStages} />
        </div>
        <p className="tl-caption">
          Sample timings. Real timelines vary by home, market and buyer. Your
          closing date is your choice, and faster isn&apos;t required.
        </p>
      </div>
    </section>
  );
}
