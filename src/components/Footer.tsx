import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-tight">
          Qusudi<span className="text-blue-500">.</span>
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Qusudi. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>;
}