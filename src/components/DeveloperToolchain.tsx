import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Laptop, Server, Layout } from 'lucide-react';
import { DAILY_TOOLCHAIN } from '../data/portfolioData';

export const DeveloperToolchain: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Daily Development Environment': <Laptop className="w-4 h-4 text-terracotta-500" />,
    'Core Backend & Data Stack': <Server className="w-4 h-4 text-terracotta-500" />,
    'Frontend & UI Craft': <Layout className="w-4 h-4 text-terracotta-500" />,
  };

  const engineeringPrinciples = [
    {
      title: 'Server Authority First',
      desc: 'In real-time multiplayer systems, client clocks and inputs can never be trusted for authoritative scoring or timing.',
    },
    {
      title: 'Overlap-Aware Ingestion',
      desc: 'In RAG document pipelines, a 15–20% chunk overlap is non-negotiable to prevent semantic fracturing across boundary splits.',
    },
    {
      title: 'Edge AI Over Cloud Billing',
      desc: 'Quantized 4-bit/5-bit GGUF models running locally on CPU democratize intelligent applications without recurring cloud API fees.',
    },
    {
      title: 'Cognitive Clarity Over Clutter',
      desc: 'Whether designing RESTful API endpoints or frontend typography, clarity and deliberate whitespace always outperform noisy complexity.',
    },
  ];

  return (
    <section id="toolchain" className="py-24 sm:py-32 lg:py-40 border-t border-paper-200/70 dark:border-paper-800/70">
      <div className="page-container">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16 lg:mb-20">
          <span className="font-mono text-xs sm:text-sm text-terracotta-500 uppercase tracking-widest font-semibold">
            07 // BEHIND THE CODE
          </span>
          <div className="h-px bg-paper-200 dark:bg-paper-800 flex-1" />
          <span className="font-mono text-xs sm:text-sm text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider">
            Daily Setup &amp; Working Philosophy
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink dark:text-ink-dark font-normal">
            Developer Toolchain &amp; Engineering Rules
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-darkSecondary max-w-3xl">
            The environments, runtimes, and engineering principles I rely on daily to ship reproducible, high-performance software.
          </p>
        </div>

        {/* Unboxed 3-Column Toolchain Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 pb-20 border-b border-paper-200/80 dark:border-paper-800/80">
          {DAILY_TOOLCHAIN.map((category) => (
            <div key={category.category} className="flex flex-col gap-6">
              
              <div className="flex items-center gap-3 pb-3 border-b border-paper-200 dark:border-paper-800">
                {categoryIcons[category.category] || <Cpu className="w-4 h-4 text-terracotta-500" />}
                <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-ink dark:text-ink-dark font-semibold">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-col divide-y divide-paper-200/60 dark:divide-paper-800/60">
                {category.items.map((item) => (
                  <div key={item.name} className="py-4 flex flex-col gap-1">
                    <span className="font-sans text-sm sm:text-base font-semibold text-ink dark:text-ink-dark">
                      {item.name}
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Engineering Principles Subsection */}
        <div className="pt-20">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-terracotta-500" />
              <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-ink dark:text-ink-dark font-semibold">
                Guiding Principles in My Engineering Practice
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted dark:text-ink-darkMuted hidden sm:inline">
              Derived from practical bugs &amp; real deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringPrinciples.map((rule, idx) => (
              <div
                key={rule.title}
                className="p-6 rounded bg-paper-100/50 dark:bg-paper-900/40 border border-paper-200/70 dark:border-paper-800/70 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between font-mono text-xs text-terracotta-500 font-semibold">
                  <span>RULE // 0{idx + 1}</span>
                </div>
                <h4 className="font-sans text-base font-semibold text-ink dark:text-ink-dark">
                  {rule.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
