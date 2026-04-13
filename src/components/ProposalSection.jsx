export default function ProposalSection() {
  return (
    <section className="section" id="proposal">
      <div className="container proposal-wrap">
        <div className="section-heading simple-heading left-align">
          <div>
            <span className="eyebrow">Proposal form</span>
            <h2>Submit a workshop proposal
              Provide basic details and preferences to request a new workshop.</h2>
            <p className="section-copy compact-copy">
              Inputs are grouped into simple blocks so the form feels guided instead of overwhelming.
            </p>
          </div>
        </div>

        <form className="proposal-form clean-form">
          <div className="two-col">
            <div className="form-group">
              <label htmlFor="college">Institute name</label>
              <input id="college" type="text" placeholder="Enter institute name" />
            </div>
            <div className="form-group">
              <label htmlFor="coordinator">Coordinator name</label>
              <input id="coordinator" type="text" placeholder="Enter full name" />
            </div>
          </div>

          <div className="two-col">
            <div className="form-group">
              <label htmlFor="topic">Workshop topic</label>
              <select id="topic" defaultValue="">
                <option value="" disabled>Select topic</option>
                <option>Python</option>
                <option>Scilab</option>
                <option>LaTeX</option>
                <option>OpenFOAM</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mode">Mode</label>
              <select id="mode" defaultValue="">
                <option value="" disabled>Select mode</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Details</label>
            <textarea id="notes" rows="4" placeholder="Mention preferred dates, expected audience size, or any specific requirements."></textarea>
          </div>

          <div className="form-footer clean-footer">
            <p>Simple labels, larger tap targets, and consistent spacing improve completion on mobile.</p>
            <button className="button button-primary" type="button">Submit proposal</button>
          </div>
        </form>
      </div>
    </section>
  );
}
