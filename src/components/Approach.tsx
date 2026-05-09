import React from 'react';
import { motion } from 'framer-motion';
export function Approach() {
  return <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] mb-6">
            Our Approach
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every engagement follows the same sequence: diagnose before
            designing, design before deploying.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          num: '1',
          tag: 'Entry Point',
          title: 'GTM Audit',
          body: 'A four-layer diagnostic covering your Revenue Model, Bowtie Lifecycle, Sales Motion, and Growth Stage. Deliverable: GTMFit Score, Bowtie Map, top 3 revenue leaks, and a 90-day prioritized roadmap.'
        }, {
          num: '2',
          tag: 'Core Engagement',
          title: 'Build Engagement',
          body: 'A 3–6 month retainer to design and deploy the revenue system the audit revealed you need. Sales process, pipeline instrumentation, messaging architecture, and revenue operations — built alongside you.'
        }, {
          num: '3',
          tag: 'Ongoing',
          title: 'Advisory',
          body: 'After the build phase, we shift to a lighter advisory relationship — monthly strategic review, quarterly Bowtie health check, and async access. The system is running; this keeps it tuned.'
        }].map((card, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white rounded-[14px] p-8 shadow-[0_1px_3px_rgba(0,0,0,.08),0_4px_16px_rgba(0,0,0,.06)] border border-slate-100 relative pt-12">
              <div className="absolute -top-5 left-8 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-sm">
                {card.num}
              </div>
              <div className="inline-block px-3 py-1 bg-[#eff4ff] text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                {card.tag}
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2e] mb-4">
                {card.title}
              </h3>
              <div className="text-slate-500 leading-relaxed whitespace-pre-line">
                {card.body.split('\n').map((line, i) => <p key={i} className={i > 0 ? 'mt-2 flex items-start' : ''}>
                    {i > 0 && card.num === '2' && <span className="text-blue-600 mr-2 mt-1">•</span>}
                    {line}
                  </p>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
