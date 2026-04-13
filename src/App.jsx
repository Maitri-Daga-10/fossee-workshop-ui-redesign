import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopSection from './components/WorkshopSection';
import DashboardSection from './components/DashboardSection';
import ProposalSection from './components/ProposalSection';
import Footer from './components/Footer';
import MobileDock from './components/MobileDock';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WorkshopSection />
        <DashboardSection />
        <ProposalSection />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
