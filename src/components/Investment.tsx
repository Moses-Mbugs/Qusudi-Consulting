import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
export function Investment() {
  const packages = [{
    title: 'GTM Diagnostic & Clarity Workshop',
    subtitle: 'Perfect for understanding your starting point',
    price: '3,000',
    period: 'one time',
    features: ['Map go-to-market maturity', 'Diagnose growth gaps', 'Identify revenue leaks', 'Executive readout session'],
    highlight: false
  }, {
    title: '90-Day GTM Transformation',
    subtitle: 'We show you the way forward',
    price: '8,000',
    period: '/month',
    prefix: 'Starting at',
    features: ['Complete GTM Audit', 'Recommendations & guidance', 'Roadmap with 6–12 month priorities', '2 advisory calls per week', 'Unlimited async access'],
    highlight: true
  }, {
    title: 'GTM Executive Co-pilot',
    subtitle: 'We execute with you',
    price: '15,000',
    period: '/month',
    prefix: 'Starting at',
    features: ['Complete GTM Audit', '6–12 month prioritized roadmap', 'Embedded GTM operator', 'Growth Modeling', '3+ calls per week', 'Unlimited async access'],
    highlight: false
  }, {
    title: 'Fractional GTM Leadership',
    subtitle: 'We guide your strategy',
    price: '5,000',
    period: '/month',
    features: ['3-12 month engagement', 'Strategic advisor / fractional leader', '8–12 hours/month guidance', 'Ongoing advisory and leadership', 'On-demand support'],
    highlight: false
  }];
  return <Section id="investment">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Investment
        </h2>
        <p className="text-lg text-gray-600">
          Choose the engagement level that matches your needs. From diagnostics
          to full embedded leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {packages.map((pkg, index) => <div key={index} className={`flex flex-col rounded-2xl p-6 transition-all duration-300 ${pkg.highlight ? 'bg-gray-900 text-white shadow-xl scale-105 z-10 ring-2 ring-blue-500' : 'bg-white text-gray-900 border border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}>
            <div className="mb-6">
              <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                {pkg.name}
              </div>
              <h3 className="text-lg font-bold mb-2 leading-tight min-h-[3rem]">
                {pkg.title}
              </h3>
              <p className={`text-sm mb-4 min-h-[2.5rem] ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {pkg.subtitle}
              </p>
              <div className="flex items-baseline">
                {pkg.prefix && <span className={`text-xs mr-1 ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pkg.prefix}
                  </span>}
                <span className="text-3xl font-bold">${pkg.price}</span>
                {pkg.period && <span className={`text-sm ml-1 ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pkg.period}
                  </span>}
              </div>
            </div>

            <div className={`h-px w-full mb-6 ${pkg.highlight ? 'bg-gray-700' : 'bg-gray-100'}`}></div>

            <ul className="space-y-4 mb-8 flex-1">
              {pkg.features.map((feature, i) => <li key={i} className="flex items-start text-sm">
                  <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className={pkg.highlight ? 'text-gray-300' : 'text-gray-600'}>
                    {feature}
                  </span>
                </li>)}
            </ul>

            <Button variant={pkg.highlight ? 'primary' : 'outline'} className="w-full" href="#calendly-placeholder">
              Get Started
            </Button>
          </div>)}
      </div>
    </Section>;
}