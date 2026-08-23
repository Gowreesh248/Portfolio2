import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Wrench, Sparkles, BookOpen } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const getCategoryIcon = (name) => {
  switch (name) {
    case 'Code': return <Code className="w-5 h-5 text-brand-600" />;
    case 'Globe': return <Globe className="w-5 h-5 text-skybrand-600" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-teal-600" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-600" />;
    default: return <BookOpen className="w-5 h-5 text-slate-600" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Toolkit & Knowledge Base
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Core technologies, developer tools, and concepts I work with and continuously explore.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-skybrand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryItem, idx) => {
            const isLearning = categoryItem.category === "Currently Learning";
            
            return (
              <motion.div
                key={categoryItem.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-white border transition-all duration-300 ${
                  isLearning
                    ? 'border-indigo-200 shadow-md bg-gradient-to-b from-indigo-50/30 to-white lg:col-span-2'
                    : 'border-slate-200 shadow-xs hover:shadow-md hover:border-brand-200'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100/80">
                      {getCategoryIcon(categoryItem.iconName)}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {categoryItem.category}
                    </h3>
                  </div>
                  
                  {isLearning && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> Active Growth
                    </span>
                  )}
                </div>

                {/* Skill Tags Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryItem.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isLearning
                          ? 'bg-indigo-50 text-indigo-800 border border-indigo-200/60 hover:bg-indigo-100'
                          : 'bg-slate-100/80 hover:bg-brand-50 text-slate-700 hover:text-brand-800 border border-slate-200/60 hover:border-brand-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isLearning ? 'bg-indigo-500' : 'bg-brand-500'}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
