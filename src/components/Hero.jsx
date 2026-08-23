import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50">
      {/* Decorative background grid and floating shapes */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 stroke-slate-200 pointer-events-none" />
      
      {/* Soft background color blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-100/60 rounded-full filter blur-3xl opacity-70 pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-skybrand-100/60 rounded-full filter blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-2xs mb-6 text-xs font-semibold text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>{personalInfo.availabilityStatus}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              {personalInfo.heroHeadline}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-600 via-skybrand-600 to-teal-700 bg-clip-text text-transparent mb-6">
              {personalInfo.heroSubtitle}
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroBio}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5 transition-all"
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-2xs hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-600" />
                Contact Me
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 text-slate-500 pt-2 border-t border-slate-200/60 w-full justify-center lg:justify-start">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Quick links:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:text-brand-600 hover:bg-brand-50 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="p-2 rounded-lg hover:text-brand-600 hover:bg-brand-50 transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Decorative Background Shapes */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Decorative Spinning Border / Rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-500 via-skybrand-400 to-amber-300 opacity-30 blur-lg" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-300/60 animate-[spin_40s_linear_infinite]" />
              
              {/* Subtle accent shapes */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm z-20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-bold text-slate-700 z-20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                AI & MLOps
              </div>

              {/* Main Circular Profile Photo Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-white border-2 border-slate-200/80 shadow-2xl overflow-hidden group">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
