import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GmailIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-xl p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-skybrand-100/50 rounded-full blur-3xl pointer-events-none" />

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Send className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Let's connect.
            </h2>
            
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Whether you want to discuss AI, collaborate on projects, talk about hackathons, or just say hello — my inbox is always open!
            </p>
          </motion.div>

          {/* Email Quick-Copy Banner */}
          <div className="max-w-md mx-auto bg-slate-100/80 p-2 sm:p-2.5 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 mb-10 shadow-2xs">
            <div className="flex items-center gap-3 pl-3 overflow-hidden text-left">
              <Mail className="w-5 h-5 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                {personalInfo.socials.email}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-200 text-slate-700 text-xs font-bold shadow-2xs border border-slate-200 shrink-0 transition-all active:scale-95"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Prominent Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            
            {/* Gmail Button */}
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GmailIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-red-600 transition-colors">
                Email / Gmail
              </h3>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                Send Direct Message <ArrowUpRight className="w-3 h-3" />
              </p>
            </a>

            {/* LinkedIn Button */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                LinkedIn
              </h3>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                Connect Professionally <ArrowUpRight className="w-3 h-3" />
              </p>
            </a>

            {/* GitHub Button */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-400 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-slate-900 transition-colors">
                GitHub
              </h3>
              <p className="text-[11px] text-slate-500 flex items-center gap-1">
                View Repositories <ArrowUpRight className="w-3 h-3" />
              </p>
            </a>

          </div>

          {/* Location details */}
          <div className="mt-10 pt-6 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <MapPin className="w-4 h-4 text-brand-600" />
            <span>Based in {personalInfo.location}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
