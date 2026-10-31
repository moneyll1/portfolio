import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            06 // TECHNICAL COMPETENCIES
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Verified Capabilities
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink dark:text-ink-dark font-normal">
            Tooling, Systems &amp; Technical Breadth
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mt-3">
            Organized by domain and supported by real engineering work. No arbitrary percentage bars or padded buzzwords.
          </p>
        </div>

        {/* Clean Architectural Specimen Matrix */}
        <div className="flex flex-col divide-y divide-paper-200/80 dark:divide-paper-800/80">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline"
            >
              {/* Category Domain */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-sm sm:text-base text-terracotta-500 font-semibold">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark font-normal">
                  {cat.title}
                </h3>
              </div>

              {/* Technologies with Real Context */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1">
                    <span className="font-sans text-base sm:text-lg font-semibold text-ink dark:text-ink-dark">
                      {skill.name}
                    </span>
                    <span className="text-sm text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                      {skill.context}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
