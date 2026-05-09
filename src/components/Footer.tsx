import React from 'react';
export function Footer() {
  return <footer className="bg-slate-100 border-t border-slate-200 py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold text-[#0d1b2e]">
          Qusudi<span className="text-blue-600">.</span>
        </div>

        <div className="text-sm text-slate-500">
          © 2026 Qusudi Consulting. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            X
          </a>
        </div>
      </div>
    </footer>;
}
