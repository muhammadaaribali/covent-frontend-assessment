import { comparisonRows, costCards, costsIntro } from "@/content/home";
import { CostReceipt } from "./CostReceipt";

export function Costs() {
  return (
    <section id="costs" className="costs" aria-labelledby="costs-heading">
      <div className="costs-inner">
        <header className="costs-head">
          <p className="costs-eyebrow">{costsIntro.eyebrow}</p>
          <h2 id="costs-heading" className="costs-heading">{costsIntro.heading}</h2>
          <p className="costs-intro">{costsIntro.body}</p>
        </header>
        <div className="costs-top">
          <ul className="costs-cards">
            {costCards.map((card) => (
              <li key={card.title} className="cost-card">
                <div className="cost-card-head">
                  <h3 className="cost-card-title">{card.title}</h3>
                  <span className="cost-sample">Sample</span>
                </div>
                <p className="cost-card-figure">{card.figure}</p>
                <p className="cost-card-why">{card.why}</p>
              </li>
            ))}
          </ul>
          <CostReceipt />
        </div>
        <div className="compare">
          <table className="compare-table">
            <caption className="compare-caption">Selling to Covent compared with listing with an agent. Sample comparison.</caption>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Topic</span></th>
                <th scope="col" className="compare-covent">Sell to Covent</th>
                <th scope="col">List with an agent</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td data-label="Sell to Covent" className="compare-covent">{row.covent}</td>
                  <td data-label="List with an agent">{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="costs-callout">
          <p><strong>Not sure which fits?</strong> Listing can bring a higher price if you have time and your home is in good shape.{" "}<a href="#is-it-right">See which option suits you</a>.</p>
        </aside>
        <p className="costs-caption">Sample figures for illustration. Actual offers vary.</p>
      </div>
    </section>
  );
}
