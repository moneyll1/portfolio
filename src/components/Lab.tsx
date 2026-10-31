import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Gauge, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';

export const Lab: React.FC = () => {
  const statusStyles: Record<string, string> = {
    SHIPPED: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    BENCHMARKED: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    ACTIVE: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  };

  return (
    <section id="lab" className="py-20 sm:py-28 border-t border-hair">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              The Lab
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
              Curiosity, <span className="heading-highlight">put to work.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-1">
              Engineering explorations, latency benchmarks, and local AI evaluations before they evolve into complete software systems.
            </p>
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>4 Documented Experiments</span>
          </div>
        </div>

        {/* 2x2 Grid of Technical Experiments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LAB_EXPERIMENTS.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              {/* Top Meta: Experiment Number, Tag & Status */}
              <div className="flex items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-semibold">{exp.id}</span>
                  <span className="text-hair-2">/</span>
                  <span className="text-muted uppercase tracking-wider text-[11px]">{exp.tag}</span>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold tracking-wider ${
                    statusStyles[exp.status] || 'bg-bg text-muted border-hair'
                  }`}
                >
                  {exp.status}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-fg group-hover:text-accent transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {exp.description}
                </p>
              </div>

              {/* Measured Metrics Box */}
              <div className="p-3.5 rounded-xl bg-bg border border-hair flex items-center gap-3">
                <Gauge className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Observed Metric / Benchmark
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-fg">
                    {exp.metrics}
                  </span>
                </div>
              </div>

              {/* Verified Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-hair">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-bg font-mono text-[11px] text-muted border border-hair"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
