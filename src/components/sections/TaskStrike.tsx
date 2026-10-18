"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type Props = { title: string; hidden: string; tasks: readonly string[]; done: string };

export function TaskStrike({ title, hidden, tasks, done }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.dataset.ready = "true";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.inview = "true";
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      delete element.dataset.ready;
      delete element.dataset.inview;
    };
  }, []);
  return <div ref={ref} className="hd-tasks">
    <p className="hd-tasks-title">{title}<span className="sr-only">. {hidden}</span></p>
    <ul className="hd-chips">{tasks.map((task, index) => <li key={task} style={{ "--i": index } as CSSProperties}><span>{task}</span></li>)}</ul>
    <p className="hd-done" aria-hidden="true">{done}</p>
  </div>;
}
