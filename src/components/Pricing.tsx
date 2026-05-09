import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
export function Pricing() {
  return <section id="services" className="bg-white py-20 md:py-28">
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
            Investment
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Three ways to engage, sequenced the way the work actually happens.
            Every engagement begins with the GTM Audit — no retainer starts
            without a completed diagnostic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Card 1 */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="bg-white rounded-[14px] p-8 shadow-[0_1px_3px_rgba(0,0,0,.08),0_4px_16px_rgba(0,0,0,.06)] border border-slate-100 flex flex-col h-full">
            <div className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              ENTRY POINT
            </div>
            <h3 className="text-2xl font-bold text-[#0d1b2e] mb-2">
              GTM Audit
            </h3>
            <p className="text-slate-500 mb-4">
              Start here. Every engagement does.
            </p>
            <p className="text-sm font-medium text-slate-400 mb-6">
              One-time project fee · 2–4 weeks
            </p>

            <hr className="border-slate-100 mb-6" />

            <ul className="space-y-4 mb-8 flex-grow">
              {['Four-layer GTM diagnostic (Revenue Model, Bowtie, Sales Motion, Growth Stage)', 'GTMFit Score + full Bowtie map', 'Top 3 revenue leaks identified', '90-day prioritized roadmap', 'Executive audit readout session'].map((item, i) => <li key={i} className="flex items-start">
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>)}
            </ul>

            <a href="https://calendly.com/cchuaga-qusudiconsulting" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-6 py-3 border-2 border-slate-200 text-[#0d1b2e] font-semibold rounded-[10px] hover:border-[#0d1b2e] transition-colors">
              Get Started
            </a>
          </motion.div>

          {/* Card 2 - Featured */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="bg-blue-600 rounded-[14px] p-8 shadow-[0_4px_20px_rgba(37,99,235,0.25)] relative lg:scale-105 z-10 flex flex-col h-full">
            <div className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-4">
              MOST COMMON
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              GTM Build Engagement
            </h3>
            <p className="text-white/75 mb-4">
              We design and deploy the system together.
            </p>
            <p className="text-sm font-medium text-white/50 mb-6">
              3–6 month commitment
            </p>

            <hr className="border-white/10 mb-6" />

            <ul className="space-y-4 mb-8 flex-grow">
              {['Starts with the full GTM Audit (included)', 'Revenue system design & implementation', 'Sales process architecture (SPICED)', 'Pipeline & Bowtie instrumentation', 'Weekly working sessions + async access', 'Sprint-based delivery — tangible output every 2 weeks'].map((item, i) => <li key={i} className="flex items-start">
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm leading-relaxed">
                    {item}
                  </span>
                </li>)}
            </ul>

            <a href="https://calendly.com/cchuaga-qusudiconsulting" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-[10px] hover:bg-slate-50 transition-colors">
              Get Started
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="bg-white rounded-[14px] p-8 shadow-[0_1px_3px_rgba(0,0,0,.08),0_4px_16px_rgba(0,0,0,.06)] border border-slate-100 flex flex-col h-full">
            <div className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              ONGOING
            </div>
            <h3 className="text-2xl font-bold text-[#0d1b2e] mb-2">Advisory</h3>
            <p className="text-slate-500 mb-4">
              For founders who want the diagnostic eye ongoing.
            </p>
            <p className="text-sm font-medium text-slate-400 mb-6">
              12-month relationship
            </p>

            <hr className="border-slate-100 mb-6" />

            <ul className="space-y-4 mb-8 flex-grow">
              {['Monthly strategic review session', 'Quarterly Bowtie health check', 'Async access for real-time questions', 'Best for $500K–$2M ARR founders growing into a full engagement'].map((item, i) => <li key={i} className="flex items-start">
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>)}
            </ul>

            <a href="https://calendly.com/cchuaga-qusudiconsulting" target="_blank" rel="noopener noreferrer" className="w-full block text-center px-6 py-3 border-2 border-slate-200 text-[#0d1b2e] font-semibold rounded-[10px] hover:border-[#0d1b2e] transition-colors">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
}
