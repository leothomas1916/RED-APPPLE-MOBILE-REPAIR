import React from 'react';
import Layout from '../components/Layout';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyUs from './WhyUs';
import Contact from './Contact';
import Booking from './Booking';

export default function LandingPage() {
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