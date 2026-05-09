import React from 'react';
import { motion } from 'framer-motion';
export function HowItWorks() {
  return <section id="how-it-works" className="bg-white py-20 md:py-28">
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
            How It Works
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A structured path from diagnosis to a revenue system that runs
            without you. No playbooks handed over a wall — I work alongside you
            at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0" />

          {[{
          num: '1',
          title: 'Diagnose',
          body: 'We start with a GTM Audit — a structured, four-layer diagnostic that maps your full customer lifecycle, identifies where revenue is leaking, your current growth stage and produces a prioritized 90-day roadmap. This is the entry point for every engagement.'
        }, {
          num: '2',
          title: 'Design & Build',
          body: 'Based on the audit findings, I co-build the GTM system — sales process, pipeline architecture, messaging, and revenue operations. Sprint-based delivery: something tangible every two weeks. No decks that sit in a drawer.'
        }, {
          num: '3',
          title: 'Scale & Sustain',
          body: 'Once the system is running, we shift to advisory — monthly strategic reviews, quarterly Bowtie health checks, and ongoing guidance as the system matures. The goal is a GTM engine that compounds without you in every deal.'
        }].map((step, index) => <motion.div key={index} initial={{
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
        }} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md ring-4 ring-white">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2e] mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{step.body}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
