import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, ActivityIcon, AlertCircleIcon } from 'lucide-react';
export function PainPoints() {
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
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] mb-8">
            Sound Familiar?
          </h2>

          <div className="max-w-4xl mx-auto bg-[#eff4ff] border border-[#c7d9fd] rounded-[14px] p-6 md:p-8 text-left md:text-center shadow-sm">
            <p className="text-[#0d1b2e] text-lg md:text-xl leading-relaxed">
              <span className="font-bold">
                You have paying customers. You raised the capital. Your board
                wants a GTM plan by next quarter. And your pipeline is still
                running entirely through you.
              </span>
              <br className="hidden md:block" />
              <span className="mt-2 block text-slate-600">
                That's not a product problem. It's not a hiring problem. It's a
                systems problem — and it compounds every month you don't fix it.
              </span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          icon: <UsersIcon className="w-6 h-6 text-blue-600" />,
          title: "You're Still Closing Every Deal Yourself",
          body: "Your product is working. Customers renew. But deals still run through you personally — because there's no system that generates pipeline without you in it. If you step away for two weeks, pipeline stops."
        }, {
          icon: <ActivityIcon className="w-6 h-6 text-blue-600" />,
          title: 'Pipeline Is Unpredictable',
          body: "You've proven there's a market. But 'proven market' and 'repeatable pipeline' are different things — and right now you only have one of them. You can't forecast, you can't plan hires around it, and you don't know what to tell your board."
        }, {
          icon: <AlertCircleIcon className="w-6 h-6 text-blue-600" />,
          title: "You've Tried Things. Nothing's Stuck.",
          body: "Agency, junior marketer, outbound tool, conference. You've had the budget and you've spent it. The problem isn't that you haven't tried — it's that none of it landed because there was no architecture underneath the tactics."
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
        }} className="bg-white rounded-[14px] p-8 shadow-[0_1px_3px_rgba(0,0,0,.08),0_4px_16px_rgba(0,0,0,.06)] border border-slate-100">
              <div className="w-12 h-12 bg-[#eff4ff] rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2e] mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{card.body}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
