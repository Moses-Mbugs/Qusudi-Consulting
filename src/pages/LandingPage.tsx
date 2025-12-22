import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { MazeSection } from '../components/MazeSection';
import { HowWeHelp } from '../components/HowWeHelp';
import { OurApproach } from '../components/OurApproach';
import { Investment } from '../components/Investment';
import { WhyQusudi } from '../components/WhyQusudi';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navigation />
      <main>
        <Hero />
        <MazeSection />
        <HowWeHelp />
        <OurApproach />
        <Investment />
        <WhyQusudi />
        <FinalCTA />
      </main>
      <Footer />
    </div>;
}