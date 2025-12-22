import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
export function FinalCTA() {
  return <Section background="dark" className="text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Start with a free GTM assessment to identify your biggest
          opportunities and see where you stand.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" withArrow href="#assessment-form" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500">
            Take a Free GTM Assessment
          </Button>
          <Button variant="outline" size="lg" href="#calendly-placeholder" className="w-full sm:w-auto bg-transparent text-white border-gray-600 hover:bg-white/10 hover:text-white hover:border-white">
            Schedule a Call
          </Button>
        </div>
      </div>
    </Section>;
}