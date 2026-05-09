import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { HowItWorks } from './components/HowItWorks';
import { Approach } from './components/Approach';
import { About } from './components/About';
import { WbDCallout } from './components/WbDCallout';
import { Pricing } from './components/Pricing';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Approach />
        <About />
        <WbDCallout />
        <Pricing />
        <WhyWorkWithMe />
      </main>
      <FooterCTA />
      <Footer />
    </div>;
}
