export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <a className="brand" href="#home" aria-label="FOSSEE Workshop Booking home">
          <div className="logo-box">F</div>
          <div>
            <strong>FOSSEE Workshops</strong>
            <span>Clearer booking experience</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#workshops">Workshops</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#proposal">Propose</a>
        </nav>

        <a className="button button-primary nav-cta" href="#workshops">
          Get started
        </a>
      </div>
    </header>
  );
}
