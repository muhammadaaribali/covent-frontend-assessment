import { handles, handlesIntro, taskList, youDecide } from "@/content/home";
import type { HandleItem } from "@/content/home";
import { TaskStrike } from "./TaskStrike";

const ICONS: Record<HandleItem["icon"], string> = {
  repairs: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.6-.6-.6-2.6z",
  paperwork: "M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6",
  closing: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M8 12.5l2.5 2.5L16 9.5",
  contact: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 3.6-6 8-6s8 2 8 6",
  showings: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M4 4l16 16",
  moveout: "M5 5h14v15H5z M5 10h14 M9 3v4 M15 3v4",
};

function Icon({ name }: { name: HandleItem["icon"] }) {
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={ICONS[name]} /></svg>;
}

export function Handles() {
  return <section id="handles" className="hd" aria-labelledby="hd-heading">
    <div className="hd-inner">
      <header className="hd-head"><p className="hd-eyebrow">{handlesIntro.eyebrow}</p><h2 id="hd-heading" className="hd-heading">{handlesIntro.heading}</h2><p className="hd-intro">{handlesIntro.body}</p></header>
      <TaskStrike {...taskList} />
      <div className="hd-main">
        <ul className="hd-cards">{handles.map((item) => <li key={item.title} className="hd-card"><div className="hd-card-top"><span className="hd-icon"><Icon name={item.icon} /></span><span className="hd-tags">{item.sample && <span className="hd-tag hd-tag-sample">Sample</span>}<span className="hd-tag">Handled</span></span></div><h3 className="hd-card-title">{item.title}</h3><p className="hd-card-body">{item.body}</p></li>)}</ul>
        <aside className="hd-decide" aria-labelledby="hd-decide-title">
          <svg className="hd-arch" viewBox="0 0 260 300" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 300V150a110 110 0 0 1 220 0v150" /><path d="M50 300V150a80 80 0 0 1 160 0v150" /><path d="M80 300V150a50 50 0 0 1 100 0v150" /></svg>
          <svg className="hd-key" viewBox="0 0 200 90" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="40" cy="45" r="24" /><circle cx="40" cy="45" r="8" /><path d="M64 45h120" /><path d="M150 45v20" /><path d="M172 45v14" /></svg>
          <p className="hd-decide-eyebrow">{youDecide.eyebrow}</p><h3 id="hd-decide-title" className="hd-decide-title">{youDecide.heading}</h3>
          <ul className="hd-decide-list">{youDecide.items.map((item) => <li key={item}><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" /></svg>{item}</li>)}</ul>
          <p className="hd-decide-foot">{youDecide.footer}</p>
        </aside>
      </div>
      <p className="hd-caption">Services described here are sample content for this demo.</p>
    </div>
  </section>;
}
