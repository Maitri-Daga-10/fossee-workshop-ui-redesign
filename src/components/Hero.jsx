export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <span className="eyebrow">Book and manage FOSSEE workshops with ease</span>
          <h1 className="hero-title">
            Manage and participate in open-source software workshops across institutes.
          </h1>
          <p className="hero-copy">
            Find workshops, propose new ones, and track approvals, all in one place.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#workshops">Explore Workshops</a>
            <a className="button button-secondary" href="#proposal">Propose Workshop</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Quick preview of the redesigned experience">
          <div className="hero-list">
            <div>
              <strong>Explore Workshops easily</strong>
              <span>Find relevant workshops by topic, level, and mode in just a few taps.</span>
            </div>
            <div>
              <strong>Simple proposal process</strong>
              <span>Submit workshop requests with clear inputs and minimal steps.</span>
            </div>
            <div>
              <strong>Track requests clearly</strong>
              <span>Stay updated on approvals, schedules, and workshop status.</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
