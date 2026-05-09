import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon } from 'lucide-react';
export function WbDCallout() {
  return <section className="bg-slate-50 py-16 border-y border-slate-100">
      <div className="max-w-[1000px] mx-auto px-6">
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
      }} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-[#eff4ff] rounded-2xl flex items-center justify-center border border-[#c7d9fd]">
              <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0d1b2e] mb-3">
              Guided by Winning by Design
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Every engagement is structured around the Winning by Design
              Revenue Architecture framework — the same methodology behind the
              GTM engines at Mural, Canva, and Asana. I'm certified in both WbD
              Revenue Architecture and Growth Architecture. You get a proven,
              battle-tested framework adapted to your specific context — not a
              borrowed playbook from a different stage or market.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}
