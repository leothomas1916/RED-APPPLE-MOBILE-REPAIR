import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

export default function App() {
  return (
    <Layout>
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <section id="portfolio" className="scroll-mt-20">
        <Portfolio />
      </section>
      <section id="why-us" className="scroll-mt-20">
        <WhyUs />
      </section>
      <section id="booking" className="scroll-mt-20">
        <Booking />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </Layout>
  );
}