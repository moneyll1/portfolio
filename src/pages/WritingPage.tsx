import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { ENGINEERING_NOTES } from '../data/portfolioData';

export const WritingPage: React.FC = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const activeNote = ENGINEERING_NOTES[selectedNoteIndex];

  return (
    <div className="py-12 sm:py-20">
      <div className="container">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-14 sm:mb-20 pb-8 border-b border-hair">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              04 // Writing
            </span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fg">
            Thoughts on <span className="heading-highlight">architecture &amp; code.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-3xl font-normal mt-1 leading-relaxed">
            Post-mortems, architectural trade-offs, and field notes from shipping real systems as a student engineer.
          </p>

          <div className="flex items-center gap-4 pt-3 font-mono text-xs text-muted">
            <span>{ENGINEERING_NOTES.length} Technical Essays</span>
            <span>·</span>
            <span>Published by Manil Ghimire</span>
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
                  className={`py-6 px-4 cursor-pointer transition-all flex items-start justify-between gap-4 rounded-xl ${
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
                    <div className="flex flex-col gap-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                        {note.topic}
                      </span>
                      <h2
                        className={`font-sans text-base sm:text-lg font-bold leading-snug ${
                          isSelected ? 'text-fg' : 'text-muted group-hover:text-fg'
                        }`}
                      >
                        {note.title}
                      </h2>
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
                className="p-6 sm:p-9 lg:p-10 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-6"
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
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-fg leading-tight">
                  {activeNote.title}
                </h2>

                {/* Main Article Body */}
                <div className="text-sm sm:text-base text-muted leading-relaxed font-sans flex flex-col gap-4 border-t border-hair pt-6">
                  <p>{activeNote.summary}</p>
                </div>

                {/* Core Takeaway Callout */}
                <div className="p-5 rounded-xl bg-bg border border-hair flex flex-col gap-2 font-mono text-xs">
                  <span className="text-accent font-semibold uppercase tracking-wider text-[11px]">
                    Engineering Takeaway
                  </span>
                  <p className="text-fg font-medium text-xs sm:text-sm leading-relaxed font-sans">
                    {activeNote.takeaway}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};

