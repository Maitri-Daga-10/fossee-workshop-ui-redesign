import { stats } from '../data/workshops';

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
