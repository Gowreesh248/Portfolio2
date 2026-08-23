import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Tag, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Innovations & Concepts
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Practical AI/CV prototypes and data-driven platform concepts addressing real-world problems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-skybrand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Top Accent Bar */}
              <div className={`h-2.5 w-full ${
                project.statusType === 'prototype' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                project.statusType === 'concept' ? 'bg-gradient-to-r from-skybrand-500 to-indigo-500' :
                'bg-gradient-to-r from-amber-500 to-orange-500'
              }`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${project.badgeColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {project.status}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 font-mono">
                      #{project.id}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      <Tag className="w-3 h-3" /> Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Buttons (Placeholders) */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-2xs transition-colors"
                      title="GitHub Repository Placeholder"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Code Repository
                    </a>

                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        if (project.demoUrl === '#') {
                          e.preventDefault();
                          alert(`Demo link for ${project.title} (${project.status}) will be updated as development progresses.`);
                        }
                      }}
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      title="Live Demo / Details"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
