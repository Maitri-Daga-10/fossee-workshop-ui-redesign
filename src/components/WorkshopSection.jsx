import { workshops } from '../data/workshops';

export default function WorkshopSection() {
  return (
    <section className="section" id="workshops">
      <div className="container">
        <div className="section-heading simple-heading">
          <div>
            <span className="eyebrow">Browse workshops</span>
            <h2>Find relevant sessions across domains and institutes.</h2>
            <p className="section-copy compact-copy">
              Explore upcoming workshops by topic, level, and mode of conduct.
            </p>

            <p className="domain-line">
              Popular domains: Python, OpenFOAM, LaTeX, Scilab
            </p>
          </div>
        </div>

        <div className="workshop-tools">
          <input
            type="text"
            placeholder="Search workshops..."
            className="search-input"
          />

          <div className="filter-chips">
            <button className="chip active">All</button>
            <button className="chip">Beginner</button>
            <button className="chip">Intermediate</button>
            <button className="chip">Online</button>
            <button className="chip">Hybrid</button>
          </div>
        </div>

        <div className="card-grid simple-grid">
          {workshops.slice(0, 3).map((workshop) => (
            <article className="workshop-card simple-card" key={workshop.id}>
              <div className="card-top">
                <span className="chip">{workshop.mode}</span>
                <span className="level-tag">{workshop.level}</span>
              </div>

              <h3>{workshop.title}</h3>
              <p className="card-date">{workshop.date}</p>

              <p className="workshop-meta">
                Seats: {workshop.seats} • Registered: {workshop.registered} • Duration: {workshop.duration}
              </p>

              <p className="card-summary">{workshop.summary}</p>
              <button className="button button-primary compact">View details</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}