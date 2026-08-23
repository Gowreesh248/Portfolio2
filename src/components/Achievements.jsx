import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, Star, Milestone } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Achievements & Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recognitions & Competitions
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Milestones and hackathon achievements from my engineering journey.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-skybrand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline / Cards Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Left Accent Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-500 to-skybrand-500" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100 group-hover:scale-110 transition-transform">
                    {item.iconName === 'Trophy' ? (
                      <Trophy className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-bold text-brand-600 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    Recognized Entry
                  </span>
                </div>

              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed pl-0 sm:pl-16">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
