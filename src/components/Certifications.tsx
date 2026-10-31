import React from 'react';
import { motion } from 'framer-motion';
import { ACTIVITIES } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            08 // VERIFICATION &amp; TRAINING
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Training &amp; Initiatives
          </span>
        </div>

        <div className="max-w-2xl mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink dark:text-ink-dark font-normal">
            Specialized Training &amp; Milestones
          </h2>
        </div>

        {/* Clean Specimen List */}
        <div className="flex flex-col divide-y divide-paper-200/80 dark:divide-paper-800/80">
          {ACTIVITIES.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-6"
            >
              <div className="md:w-1/4 font-mono text-xs sm:text-sm font-semibold text-terracotta-500 uppercase tracking-wider">
                {act.badge}
              </div>

              <div className="md:w-1/2 flex flex-col gap-1.5">
                <h3 className="text-lg sm:text-xl font-semibold text-ink dark:text-ink-dark">
                  {act.title}
                </h3>
                <p className="text-base text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="md:w-1/4 font-mono text-xs sm:text-sm md:text-right text-ink-muted dark:text-ink-darkMuted">
                {act.meta}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
