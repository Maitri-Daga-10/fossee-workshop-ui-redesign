const steps = [
  {
    title: '1. Discover quickly',
    text: 'Cards highlight the information students need first: date, mode, instructor, level, and seat status.'
  },
  {
    title: '2. Propose with confidence',
    text: 'Long forms are broken into meaningful sections with helper text so users do not abandon the request midway.'
  },
  {
    title: '3. Track status easily',
    text: 'Pending, accepted, rejected, and postponed states are made visible through labels and structured summaries.'
  }
];

export default function FlowSection() {
  return (
    <section className="section surface-alt" id="flow">
      <div className="container">
        <div className="section-heading narrow">
          <span className="eyebrow">User flow improvements</span>
          <h2>Every major task now has a clearer path on mobile.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
