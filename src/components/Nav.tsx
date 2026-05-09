import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[#0d1b2e]">
          Qusudi<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-slate-500 hover:text-[#0d1b2e] transition-colors">
            How It Works
          </a>
          <a href="#services" className="text-sm font-medium text-slate-500 hover:text-[#0d1b2e] transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-slate-500 hover:text-[#0d1b2e] transition-colors">
            About
          </a>
          <a href="https://calendly.com/cchuaga-qusudiconsulting" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-[10px] hover:bg-blue-700 transition-colors shadow-sm">
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-500 hover:text-[#0d1b2e]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-500 hover:text-[#0d1b2e]">
            How It Works
          </a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-500 hover:text-[#0d1b2e]">
            Services
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-500 hover:text-[#0d1b2e]">
            About
          </a>
          <a href="https://calendly.com/cchuaga-qusudiconsulting" target="_blank" rel="noopener noreferrer" className="w-full text-center px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-[10px] hover:bg-blue-700 transition-colors">
            Schedule a Call
          </a>
        </div>}
    </nav>;
}
