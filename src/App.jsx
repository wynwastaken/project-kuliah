import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Portfolio from './components/Portfolio.jsx';
import WhyUs from './components/WhyUs.jsx';
import Pricing from './components/Pricing.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import FloatingWA from './components/FloatingWA.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
