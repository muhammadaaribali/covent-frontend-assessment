import { storiesIntro } from "@/content/home";
import { StoriesBoard } from "./StoriesBoard";

export function Testimonials() {
  return (
    <section id="testimonials" className="st" aria-labelledby="st-heading">
      <div className="st-inner">
        <header className="st-head">
          <p className="st-eyebrow">{storiesIntro.eyebrow}</p>
          <h2 id="st-heading" className="st-heading">{storiesIntro.heading}</h2>
          <p className="st-intro">{storiesIntro.body}</p>
        </header>
        <StoriesBoard />
        <p className="st-caption">All names, quotes and results are fictional sample content for this demo. They are not real customers.</p>
      </div>
    </section>
  );
}
