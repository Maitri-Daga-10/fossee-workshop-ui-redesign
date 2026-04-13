import { pendingRequests } from '../data/workshops';

export default function DashboardSection() {
  return (
    <section className="section section-soft" id="dashboard">
      <div className="container dashboard-wrap">
        <div className="section-heading simple-heading">
          <div>
            <span className="eyebrow">Dashboard preview</span>
            <h2>Track your workshop requests
              See approvals, upcoming sessions, and updates at a glance.</h2>
            <p className="section-copy compact-copy">
              Dense tables are replaced with simple stacked cards so approvals are easier to scan on mobile.
            </p>
          </div>
        </div>

        <div className="dashboard-summary">
          <article className="summary-card">
            <strong>7</strong>
            <span>Pending requests</span>
          </article>
          <article className="summary-card">
            <strong>18</strong>
            <span>Upcoming workshops</span>
          </article>
          <article className="summary-card">
            <strong>Mobile</strong>
            <span>Friendly by default</span>
          </article>
        </div>

        <div className="status-stack clean-stack">
          {pendingRequests.map((request) => (
            <article className="request-card clean-request" key={`${request.college}-${request.date}`}>
              <div>
                <h3>{request.college}</h3>
                <p>{request.date}</p>
              </div>
              <strong>{request.status}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
