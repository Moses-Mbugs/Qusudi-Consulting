import React from 'react';
import { Section } from './ui/Section';
import { BrainCircuit, Sliders, Users, LifeBuoy } from 'lucide-react';
export function WhyQusudi() {
  const reasons = [{
    icon: BrainCircuit,
    title: 'Deep Expertise',
    description: "We're certified in and aligned with Winning by Design, the same framework that's helped scale Asana, MURAL, Adobe, and hundreds of other category-defining SaaS companies."
  }, {
    icon: Sliders,
    title: 'Tailored Solutions',
    description: "We don't believe in one-size-fits-all solutions. Every GTM strategy we build is customized to your unique business model, market position, and growth stage."
  }, {
    icon: Users,
    title: 'Hands-On Partnership',
    description: "We don't just advise—we roll up our sleeves. Depending on your package, we're embedded in your team, executing alongside you, modeling growth, and solving real problems in real-time."
  }, {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: "You get ongoing support, not just a report that sits on a shelf. We're invested in your success and stick around to ensure the strategy actually works."
  }];
  return <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Choose Qusudi
        </h2>
        <p className="text-lg text-gray-600">
          We combine proven frameworks with deep operational experience to
          deliver results, not just advice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => <div key={index} className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 border border-gray-100">
                <reason.icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>)}
      </div>
    </Section>;
}