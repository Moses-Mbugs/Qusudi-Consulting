import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, BriefcaseIcon, GraduationCapIcon, BuildingIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
              <img src="/Headshot_pic_4_(1).jpg" alt="Catherine Chuaga - GTM Strategist" className="w-full h-full object-cover rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,.1)]" />
              <div className="absolute inset-0 rounded-[16px] ring-1 ring-inset ring-black/10 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1 bg-[#eff4ff] text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              Who You're Working With
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] mb-2">
              Catherine Chuaga
            </h2>
            <p className="text-blue-600 text-[15px] font-medium mb-8">
              GTM Strategist & Revenue Growth Architect
            </p>

            <div className="space-y-6 text-slate-500 text-lg leading-relaxed mb-10">
              <p>
                I built Qusudi because I kept seeing the same pattern:
                technically excellent founders who'd built something real, then
                hit a wall because their go-to-market was improvised,
                founder-dependent, and impossible to scale. They'd tried the
                agency. They'd hired the junior marketer. Nothing moved the
                needle — because the system underneath the tactics was broken.
              </p>
              <p>
                With 15+ years of product leadership at Microsoft, IBM,
                Clearwave, and early-stage SaaS companies, I understand how
                technical founders think — and I translate that into a revenue
                architecture that actually fits how you operate.
              </p>
              <p>
                I'm certified in both Winning by Design Revenue Architecture and
                Growth Architecture. Every engagement uses the Winning by Design
                framework — the same methodology behind the GTM engines at
                Mural, Canva, and Asana— adapted to your specific stage.
              </p>
              <p className="font-bold text-[#0d1b2e]">
                You won't work with an account manager. You'll work with me.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[{
              icon: <AwardIcon size={16} />,
              text: 'WbD Certified Revenue Architect'
            }, {
              icon: <GraduationCapIcon size={16} />,
              text: 'WbD Certified Growth Architect'
            }, {
              icon: <BriefcaseIcon size={16} />,
              text: '15+ Years B2B SaaS Product & GTM'
            }, {
              icon: <BuildingIcon size={16} />,
              text: 'Microsoft · IBM · Clearwave'
            }].map((cred, i) => <div key={i} className="flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-2 rounded-lg text-sm font-medium">
                  <span className="text-blue-600">{cred.icon}</span>
                  <span>{cred.text}</span>
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
