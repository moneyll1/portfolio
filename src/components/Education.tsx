import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            05 // ACADEMIC RECORD
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Educational Foundation
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink dark:text-ink-dark font-normal">
              Computer Engineering &amp; Foundation
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mt-2">
              From early secondary science studies in Jhapa to specialized engineering at Tribhuvan University in Kathmandu.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col divide-y divide-paper-200/80 dark:divide-paper-800/80">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="py-7 sm:py-8 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark font-normal">
                    {edu.degree}
                  </h3>
                  <span className="text-base font-medium text-ink-secondary dark:text-ink-darkSecondary">
                    {edu.institution}
                  </span>
                </div>

                <div className="font-mono text-xs sm:text-sm text-left sm:text-right flex sm:flex-col justify-between sm:justify-start gap-1">
                  <span className="text-terracotta-500 font-semibold">{edu.period}</span>
                  <span className="text-ink-muted dark:text-ink-darkMuted">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
