import React from 'react';
import { Section } from './ui/Section';
import { Compass, AlertTriangle, Activity } from 'lucide-react';
export function MazeSection() {
  const painPoints = [{
    icon: Compass,
    title: 'Strategy Gaps',
    description: "No clear GTM roadmap or growth strategy. You're moving fast but direction isn't always clear or aligned across teams."
  }, {
    icon: Activity,
    title: 'Execution Issues',
    description: 'Knowing what to do does not mean you can do it. Great ideas get lost in translation or stall during implementation.'
  }, {
    icon: AlertTriangle,
    title: 'Revenue Leaks',
    description: 'Growth stalling despite good product market fit. Leads are dropping off, pipeline is leaky, or churn is creeping up.'
  }];
  return <Section background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          The Maze You're Navigating
        </h2>
        <p className="text-lg text-gray-600">
          You know there's demand for what you've built—but growth feels slower,
          messier, and more fragile than it should. Maybe sales still runs
          through you. Maybe pipeline is inconsistent. Maybe the team is busy,
          but revenue isn't compounding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {painPoints.map((point, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
              <point.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {point.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </div>)}
      </div>
    </Section>;
}