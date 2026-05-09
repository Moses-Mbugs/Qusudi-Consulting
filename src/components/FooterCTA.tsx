import React from 'react';
import { motion } from 'framer-motion';
export function FooterCTA() {
  return (
    <section className="bg-gradient-to-b from-[#eff4ff] to-[#e8f0fe] border-t-4 border-blue-600 py-24">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0d1b2e] mb-6 leading-tight">
            The First Conversation Is a Diagnostic, Not a Pitch.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Tell me where your GTM is stuck. I'll share what I see — and we'll
            both know within 30 minutes whether working together makes sense.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://calendly.com/cchuaga-qusudiconsulting/1-1-coffee-chats"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white text-base font-semibold rounded-[12px] hover:bg-emerald-600 transition-colors shadow-sm">

              Schedule a 30-Min Diagnostic Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>);
}
