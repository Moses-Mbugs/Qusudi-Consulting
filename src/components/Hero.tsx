import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, TrendingUpIcon, ClockIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-white pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Light blue gradient top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#eff4ff] to-transparent rounded-full blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="inline-flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-8">
          <span className="text-[#0d1b2e] text-xs font-semibold tracking-wide uppercase">
            ★ B2B SaaS GTM Strategy & Revenue Architecture
          </span>
        </motion.div>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Your GTM Is Still
          <br />
          Running Through You.
          <br />
          <span className="text-blue-600">Let's Fix That.</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-lg md:text-xl text-slate-500 max-w-3xl mb-10 leading-relaxed">
          I work with technical and product-focused founders of B2B SaaS
          companies who've validated product-market fit — but are still
          personally closing every deal because no GTM system exists to replace
          them.
          <br className="hidden md:block" />
          <span className="mt-4 block font-medium text-slate-600">
            Every engagement starts with a diagnostic, not a playbook.
          </span>
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a href="https://calendly.com/cchuaga-qusudiconsulting/1-1-coffee-chats" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white text-base font-semibold rounded-[12px] hover:bg-emerald-600 transition-colors shadow-sm">
            Schedule a 30 - Min Diagnostic Call
          </a>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.7,
        delay: 0.5
      }} className="w-full max-w-4xl border-t border-slate-100 pt-8 flex md:flex-row gap-8 md:gap-16 flex-row items-start justify-center">
          <div className="flex items-center space-x-3 text-slate-600">
            <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">
              Certified Revenue Architect
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <TrendingUpIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">
              Certified Growth Architect
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <ClockIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">15+ Years in B2B SaaS</span>
          </div>
        </motion.div>
      </div>
    </section>;
}
