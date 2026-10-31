import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { ENGINEERING_NOTES } from '../data/portfolioData';

export const Writing: React.FC = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const activeNote = ENGINEERING_NOTES[selectedNoteIndex];

  return (
    <section id="writing" className="py-20 sm:py-28 border-t border-hair">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Writing &amp; Technical Notes
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
              Thoughts on <span className="heading-highlight">architecture &amp; code.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-1">
              Field notes on distributed state, RAG metadata scoping, edge inference performance, and systems lessons.
            </p>
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-2 shrink-0">
            <span>{ENGINEERING_NOTES.length} Documented Essays</span>
          </div>
        </div>

        {/* 2-Column Split: Essay Selection on Left, Full Article Reader on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Essay Directory */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-hair border-t border-b border-hair">
            {ENGINEERING_NOTES.map((note, idx) => {
              const isSelected = selectedNoteIndex === idx;
              return (
                <div
                  key={note.number}
                  onClick={() => setSelectedNoteIndex(idx)}
                  className={`py-5 px-4 cursor-pointer transition-all flex items-start justify-between gap-4 rounded-xl ${
                    isSelected
                      ? 'bg-bg-2 border border-hair text-fg'
                      : 'hover:bg-bg-2/50 text-muted hover:text-fg'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-mono text-xs font-semibold pt-0.5 ${
                        isSelected ? 'text-accent' : 'text-muted-2'
                      }`}
                    >
                      {note.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                        {note.topic}
                      </span>
                      <h3
                        className={`font-sans text-sm sm:text-base font-bold leading-snug ${
                          isSelected ? 'text-fg' : 'text-muted group-hover:text-fg'
                        }`}
                      >
                        {note.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 mt-1 transition-transform shrink-0 ${
                      isSelected
                        ? 'text-accent translate-x-1'
                        : 'text-hair-2'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Full Article Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeNote.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs pb-4 border-b border-hair text-muted">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-semibold">ESSAY // {activeNote.number}</span>
                    <span>·</span>
                    <span className="text-fg font-medium">{activeNote.topic}</span>
                  </div>
                  <span className="text-muted-2">Manil Ghimire</span>
                </div>

                {/* Article Title */}
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-fg leading-tight">
                  {activeNote.title}
                </h3>

                {/* Main Article Body */}
                <div className="text-sm sm:text-base text-muted leading-relaxed font-sans flex flex-col gap-4 border-t border-hair pt-6">
                  <p>{activeNote.summary}</p>
                </div>

                {/* Core Takeaway Callout */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-1.5 font-mono text-xs">
                  <span className="text-accent font-semibold uppercase tracking-wider text-[11px]">
                    Engineering Takeaway
                  </span>
                  <p className="text-fg font-medium leading-relaxed">
                    {activeNote.takeaway}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
