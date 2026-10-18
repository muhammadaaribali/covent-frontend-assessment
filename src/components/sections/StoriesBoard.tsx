"use client";

import { useRef, useState } from "react";
import { stories, storyFilters } from "@/content/home";
import type { FilterId, Story } from "@/content/home";

function Quote({ story, featured }: { story: Story; featured?: boolean }) {
  return <figure className={featured ? "st-feat" : "st-card"}>
    <div className="st-top">{featured && <span className="st-mark" aria-hidden="true">“</span>}<span className="st-sample">Sample testimonial</span></div>
    <blockquote className="st-quote"><p>{story.quote}</p></blockquote>
    <figcaption className="st-cap"><span className={`st-av st-av-${story.tone}`} aria-hidden="true">{story.initials}</span><span className="st-who"><span className="st-name">{story.name}</span><span className="st-city">{story.city}</span></span></figcaption>
    <p className="st-facts">{story.facts}</p>
  </figure>;
}

export function StoriesBoard() {
  const [filter, setFilter] = useState<FilterId>("all");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const shown = filter === "all" ? stories : stories.filter((story) => story.tags.includes(filter));
  const [featured, ...others] = shown;
  if (!featured) return null;
  const choose = (id: FilterId) => {
    setFilter(id);
    scrollerRef.current?.scrollTo({ left: 0 });
  };
  const slide = (direction: 1 | -1) => {
    const element = scrollerRef.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.8, behavior: reduced ? "auto" : "smooth" });
  };
  return <div className="st-board">
    <div className="st-filters" role="group" aria-label="Filter stories by what mattered most">
      {storyFilters.map((item) => <button key={item.id} type="button" className="st-pill" aria-pressed={item.id === filter} onClick={() => choose(item.id)}>{item.label}</button>)}
    </div>
    <p className="st-count" aria-live="polite">Showing {shown.length} {shown.length === 1 ? "story" : "stories"}</p>
    <div className="st-layout">
      <div key={featured.id} className="st-feat-wrap"><Quote story={featured} featured /></div>
      {others.length > 0 && <div className="st-more">
        <div ref={scrollerRef} className="st-scroller" role="region" aria-label="More seller stories" tabIndex={0}>
          <ul className="st-list">{others.map((story) => <li key={story.id}><Quote story={story} /></li>)}</ul>
        </div>
        {others.length > 1 && <div className="st-nav"><button type="button" onClick={() => slide(-1)}>Previous stories</button><button type="button" onClick={() => slide(1)}>Next stories</button></div>}
      </div>}
    </div>
  </div>;
}
