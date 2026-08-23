import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Lightbulb, Flame, GraduationCap, CheckCircle2 } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Passionate IT Student & Tech Innovator
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-skybrand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{personalInfo.degree}</h3>
                  <p className="text-xs font-medium text-slate-500">{personalInfo.location}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {aboutMe.introduction}
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                I am actively pursuing my B.Tech degree with a focus on core software engineering principles, machine learning workflows, and practical deployment techniques. I enjoy participating in competitive hackathons where I can collaborate, innovate under tight deadlines, and solve complex domain challenges.
              </p>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-brand-50/60 p-4 rounded-xl border border-brand-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-700">3+</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Core AI Projects</div>
              </div>
              <div className="bg-skybrand-50/60 p-4 rounded-xl border border-skybrand-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-skybrand-700">2x</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Hackathon Finalist</div>
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700">100%</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Practical Focused</div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlight Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutMe.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-brand-100 text-slate-700 group-hover:text-brand-700 flex items-center justify-center mb-3 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
