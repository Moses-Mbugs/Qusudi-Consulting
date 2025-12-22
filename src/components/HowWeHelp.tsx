import React from 'react';
import { Section } from './ui/Section';
import { Search, Target, Rocket } from 'lucide-react';
export function HowWeHelp() {
  const steps = [{
    icon: Search,
    title: 'Understand Your Current State',
    description: 'We conduct a deep GTM maturity assessment to understand exactly where you stand today, looking beyond just the numbers to the systems and processes beneath.'
  }, {
    icon: Target,
    title: 'Identify Growth Gaps & Revenue Leaks',
    description: 'We diagnose the specific issues holding back your growth and pinpoint revenue opportunities that are currently being missed or ignored.'
  }, {
    icon: Rocket,
    title: 'Build Your Revenue Engine',
    description: 'We work side-by-side with you to design and implement a holistic GTM strategy that drives sustainable growth, not just temporary spikes.'
  }];
  return <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Qusudi Helps
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Qusudi helps early-stage B2B tech companies understand their current
            state, identify gaps, and build a revenue engine that fuels the next
            stage of growth. We don't just hand you a deck—we roll up our
            sleeves and help you figure it all out.
          </p>
          <div className="space-y-8">
            {steps.map((step, index) => <div key={index} className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>)}
          </div>
        </div>

        <div className="relative h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden hidden lg:block">
          {/* Abstract representation of "Building the Engine" */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Search className="w-8 h-8 text-emerald-400 mb-4" />
                <div className="h-2 w-16 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-24 bg-white/20 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mt-8">
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <div className="h-2 w-16 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-24 bg-white/20 rounded"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Rocket className="w-8 h-8 text-purple-400 mb-4" />
                <div className="h-2 w-16 bg-white/20 rounded mb-2"></div>
                <div className="h-2 w-24 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>;
}