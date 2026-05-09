import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, TargetIcon, UserIcon, ZapIcon } from 'lucide-react';
export function WhyWorkWithMe() {
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
            Why Work With Me
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            There are a lot of consultants. Here's what's different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
          icon: <SearchIcon className="w-6 h-6 text-white" />,
          title: 'Diagnostic First, Always',
          body: "Every engagement starts with a structured diagnostic — not a proposal, not a playbook. I find where your system is actually breaking before prescribing anything. Most consultants skip this step. That's why their engagements don't stick."
        }, {
          icon: <TargetIcon className="w-6 h-6 text-white" />,
          title: "Built for Your Stage, Not Someone Else's",
          body: 'The WbD framework is designed to be versioned to growth stage. What works for a $50M ARR company will break a $3M ARR company. I adapt the methodology to where you actually are — not where you wish you were.'
        }, {
          icon: <UserIcon className="w-6 h-6 text-white" />,
          title: 'You Work With Me, Not a Team',
          body: "There's no account manager between you and the thinking. I do the diagnostic. I build the system. I'm in the sessions. That's not a limitation of the model — it's the model. The trust that closes deals at this stage is personal."
        }, {
          icon: <ZapIcon className="w-6 h-6 text-white" />,
          title: 'Sprint Delivery — No Decks in Drawers',
          body: "Every two weeks produces something tangible: a messaging doc, a sales process, a pipeline dashboard, an ICP refinement. You never pay for 'ongoing advice' — you pay for a sequence of concrete, usable outputs."
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
        }} className="bg-white rounded-[14px] p-8 shadow-[0_1px_3px_rgba(0,0,0,.08),0_4px_16px_rgba(0,0,0,.06)] border border-slate-100 flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  {card.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0d1b2e] mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{card.body}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
