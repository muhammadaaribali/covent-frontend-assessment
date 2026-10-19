"use client";

import { useEffect, useRef, useState } from "react";
import { howIntro, steps } from "@/content/home";
import { HowScene } from "./HowItWorksScenes";

const INTERVAL = 5000;

export function HowItWorks() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canAuto, setCanAuto] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCanAuto(!mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    if (stageRef.current) io.observe(stageRef.current);

    return () => {
      mq.removeEventListener("change", sync);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!canAuto || !inView) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % steps.length), INTERVAL);
    return () => clearTimeout(id);
  }, [canAuto, inView, active]);

  return (
    <section id="how-it-works" className="hiw" aria-labelledby="hiw-heading">
      <div className="hiw-inner">
        <header className="hiw-head">
          <p className="hiw-eyebrow">{howIntro.eyebrow}</p>
          <h2 id="hiw-heading" className="hiw-heading">{howIntro.heading}</h2>
          <p className="hiw-intro">{howIntro.body}</p>
        </header>

        <div className="hiw-grid">
          <div className="hiw-stage-wrap">
            <div ref={stageRef} className="hiw-stage" aria-hidden="true">
              {steps.map((s, i) => (
                <HowScene key={s.n} index={i} active={i === active} />
              ))}
            </div>
          </div>

          <ol className="hiw-steps">
            {steps.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  className="hiw-step"
                  aria-current={i === active ? "step" : undefined}
                  onClick={() => setActive(i)}
                >
                  <span className="hiw-n" aria-hidden="true">{s.n}</span>
                  <span className="hiw-text">
                    <span className="hiw-title">
                      {s.title}
                      {"tag" in s && <span className="hiw-tag">{s.tag}</span>}
                    </span>
                    <span className="hiw-body">{s.body}</span>
                    <span className="hiw-meta">{s.meta}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="hiw-foot">
          <a className="hiw-cta" href="#hero-address">Start with your address</a>
          <p className="hiw-note">No obligation. Times, figures and the example address are sample content.</p>
        </div>
      </div>
    </section>
  );
}