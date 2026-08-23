import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
              GT
            </div>
            <div>
              <p className="text-white font-bold text-sm">{personalInfo.name}</p>
              <p className="text-xs text-slate-500">{personalInfo.subtitle}</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
            <a href="#interests" className="hover:text-white transition-colors">Interests</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 text-center md:text-right">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-0.5 text-[11px] flex items-center justify-center md:justify-end gap-1">
              Built with React, Vite & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
