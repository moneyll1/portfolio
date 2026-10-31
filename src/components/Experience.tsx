import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            04 // LEADERSHIP &amp; SERVICE
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Campus Experience
          </span>
        </div>

        {/* Unboxed Editorial Spread */}
        {EXPERIENCE.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start"
          >
            {/* Left Column: Organization & Period */}
            <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs sm:text-sm">
              <span className="text-terracotta-500 font-semibold tracking-wider uppercase text-sm sm:text-base">
                {item.period}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink dark:text-ink-dark font-normal">
                {item.organization}
              </h3>
              <span className="text-ink-muted dark:text-ink-darkMuted">
                {item.location}
              </span>
              <div className="mt-3 text-terracotta-500 font-medium">
                19 Staff Members Supervised
              </div>
            </div>

            {/* Right Column: Role & Key Outcomes */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-ink-dark font-normal">
                  {item.role}
                </h4>
                <p className="text-base sm:text-lg lg:text-xl text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mt-2.5">
                  {item.summary}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 pt-2">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                    <span className="text-terracotta-500 font-mono text-sm mt-1 shrink-0">—</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

      </div>
    </section>
  );
};
