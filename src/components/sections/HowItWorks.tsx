"use client";

import { useEffect, useRef, useState } from "react";
import { howIntro, steps } from "@/content/home";
import { HowScene } from "./HowItWorksScenes";

const INTERVAL = 5000;

export function HowItWorks() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canAuto, setCanAuto] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCanAuto(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    if (stageRef.current) io.observe(stageRef.current);
    return () => {
      mq.removeEventListener("change", sync);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!canAuto || !playing || !inView) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % steps.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [canAuto, playing, inView]);

  const choose = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  return (
    <section id="how-it-works" className="hiw" aria-labelledby="hiw-heading">
      <div className="hiw-inner">
        <header className="hiw-head">
          <p className="hiw-eyebrow">{howIntro.eyebrow}</p>
          <h2 id="hiw-heading" className="hiw-heading">
            {howIntro.heading}
          </h2>
          <p className="hiw-intro">{howIntro.body}</p>
        </header>
        <div className="hiw-grid">
          <div className="hiw-stage-wrap">
            <div ref={stageRef} className="hiw-stage" aria-hidden="true">
              {steps.map((step, index) => (
                <HowScene
                  key={step.n}
                  index={index}
                  active={index === active}
                />
              ))}
            </div>
            {canAuto && (
              <button
                type="button"
                className="hiw-toggle"
                onClick={() => setPlaying((current) => !current)}
              >
                {playing ? "Pause animation" : "Play animation"}
              </button>
            )}
          </div>
          <ol className="hiw-steps">
            {steps.map((step, index) => (
              <li key={step.n}>
                <button
                  type="button"
                  className="hiw-step"
                  aria-current={index === active ? "step" : undefined}
                  onClick={() => choose(index)}
                >
                  <span className="hiw-n" aria-hidden="true">
                    {step.n}
                  </span>
                  <span className="hiw-text">
                    <span className="hiw-title">
                      {step.title}
                      {"tag" in step && (
                        <span className="hiw-tag">{step.tag}</span>
                      )}
                    </span>
                    <span className="hiw-body">{step.body}</span>
                    <span className="hiw-meta">{step.meta}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="hiw-foot">
          <a className="hiw-cta" href="#hero">
            Start with your address
          </a>
          <p className="hiw-note">
            No obligation. Times, figures and the example address are sample
            content.
          </p>
        </div>
      </div>
    </section>
  );
}
