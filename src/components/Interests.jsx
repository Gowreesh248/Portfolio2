import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CloudCog, Code2, Cpu, Zap, Rocket, Film, Compass } from 'lucide-react';
import { interestsData } from '../data/portfolioData';

const getInterestIcon = (iconName) => {
  switch (iconName) {
    case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
    case 'CloudCog': return <CloudCog className="w-6 h-6" />;
    case 'Code2': return <Code2 className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'Rocket': return <Rocket className="w-6 h-6" />;
    case 'Film': return <Film className="w-6 h-6" />;
    default: return <Compass className="w-6 h-6" />;
  }
};

export default function Interests() {
  return (
    <section id="interests" className="py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Interests & Passions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Inspires & Drives Me
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Areas of technology, problem-solving, science, and creative arts that spark my curiosity.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-skybrand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interestsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with subtle gradient */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                  {getInterestIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Explore</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-600">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
