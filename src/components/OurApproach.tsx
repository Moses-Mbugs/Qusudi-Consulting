import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Award } from 'lucide-react';
export function OurApproach() {
  const services = [{
    title: 'GTM Diagnostics',
    description: "We conduct a comprehensive audit to map your go-to-market maturity, identify growth gaps, and uncover revenue leaks. You get clarity on exactly what's working and what isn't."
  }, {
    title: 'Design and Implementation',
    description: 'We architect a holistic GTM strategy customized to your business and work side-by-side to implement it. This includes sales processes, marketing strategy, product positioning, and revenue operations.'
  }, {
    title: 'Advisory',
    description: 'We continue as your strategic partner through a retainer, providing ongoing guidance, course correction, and leadership as you scale.'
  }];
  return <Section id="our-approach" background="gray">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Approach
        </h2>
        <p className="text-lg text-gray-600">
          A structured path from chaos to clarity. We don't guess—we follow a
          proven framework adapted to your specific context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-6">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>)}
      </div>

      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0 bg-white/10 p-4 rounded-xl">
            <Award className="w-12 h-12 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Guided by Winning by Design
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Our approach is guided by Winning by Design, the leading growth
              advisory framework for scaling businesses. These methodologies
              have helped shape the growth engines of category-defining
              companies like Asana, MURAL, and Adobe—it's proven, battle-tested,
              and adapted for your specific context.
            </p>
          </div>
        </div>
      </div>
    </Section>;
}