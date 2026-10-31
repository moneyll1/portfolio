import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { ENGINEERING_NOTES, EngineeringNote } from '../data/portfolioData';

export const EngineeringNotes: React.FC = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const activeNote = ENGINEERING_NOTES[selectedNoteIndex];

  return (
    <section id="notes" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            03 // TECHNICAL ESSAYS &amp; NOTES
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Real Engineering Insights
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink dark:text-ink-dark font-normal">
              Field Notes &amp; Architectural Decisions
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-darkSecondary max-w-3xl">
              Authentic takeaways from building real-time multiplayer backends, vector search pipelines, and orchestrating collegiate scale events.
            </p>
          </div>
          <div className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted flex items-center gap-2">
            <Terminal className="w-4 h-4 text-terracotta-500" />
            <span>04 Documented Post-Mortems</span>
          </div>
        </div>

        {/* Two-Column Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Index List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-paper-200/80 dark:divide-paper-800/80 border-t border-b border-paper-200/80 dark:border-paper-800/80">
            {ENGINEERING_NOTES.map((note, idx) => {
              const isSelected = selectedNoteIndex === idx;
              return (
                <div
                  key={note.number}
                  onClick={() => setSelectedNoteIndex(idx)}
                  className={`py-5 px-3 sm:px-4 cursor-pointer transition-all flex items-start justify-between gap-4 rounded-sm ${
                    isSelected
                      ? 'bg-paper-100 dark:bg-paper-900/80 text-ink dark:text-ink-dark'
                      : 'hover:bg-paper-100/50 dark:hover:bg-paper-900/40 text-ink-secondary dark:text-ink-darkSecondary'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold pt-0.5 ${
                        isSelected ? 'text-terracotta-500' : 'text-ink-muted dark:text-ink-darkMuted'
                      }`}
                    >
                      {note.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted">
                        {note.topic}
                      </span>
                      <h3
                        className={`font-serif text-lg sm:text-xl font-normal leading-snug ${
                          isSelected ? 'text-ink dark:text-ink-dark font-medium' : ''
                        }`}
                      >
                        {note.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 transition-transform shrink-0 ${
                      isSelected
                        ? 'text-terracotta-500 translate-x-1'
                        : 'text-ink-muted/50 dark:text-ink-darkMuted/50'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Essay Reading Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeNote.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 lg:p-10 rounded bg-paper-100/60 dark:bg-paper-900/50 border border-paper-200 dark:border-paper-800 flex flex-col gap-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs pb-4 border-b border-paper-200 dark:border-paper-800 text-ink-muted dark:text-ink-darkMuted">
                  <div className="flex items-center gap-2">
                    <span className="text-terracotta-500 font-semibold">NOTE // {activeNote.number}</span>
                    <span>·</span>
                    <span className="uppercase tracking-wider">{activeNote.topic}</span>
                  </div>
                  <span>Engineering Essay</span>
                </div>

                {/* Essay Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-ink-dark font-normal leading-tight">
                  {activeNote.title}
                </h3>

                {/* Body Summary */}
                <p className="text-base sm:text-lg lg:text-xl text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                  {activeNote.summary}
                </p>

                {/* Architectural Takeaway Highlight */}
                <div className="p-5 rounded bg-paper-200/50 dark:bg-paper-800/50 border-l-2 border-terracotta-500 flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta-500 font-semibold">
                    Core Architectural Takeaway
                  </span>
                  <p className="font-sans text-sm sm:text-base text-ink dark:text-ink-dark font-medium leading-relaxed">
                    {activeNote.takeaway}
                  </p>
                </div>

                {/* Contextual Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs sm:text-sm font-mono text-ink-muted dark:text-ink-darkMuted">
                  <span>Tribhuvan University Coursework &amp; Independent Builds</span>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-ink dark:text-ink-dark hover:text-terracotta-500 transition-colors"
                  >
                    <span>View Related System</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

