import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Gauge, CheckCircle2, ArrowUpRight, Cpu, Terminal, Radio, Shield } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/portfolioData';

export const LabPage: React.FC = () => {
  const statusStyles: Record<string, string> = {
    SHIPPED: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    BENCHMARKED: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    ACTIVE: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  };

  const detailedExperiments = [
    {
      ...LAB_EXPERIMENTS[0],
      methodology:
        'Simulated 100 concurrent headless browser clients firing buzzer timestamps within a 5ms window over WebSockets. Measured event loop delay on a single Node.js thread using high-resolution timers (process.hrtime).',
      findings:
        'Socket.io broadcast packets completed in under 18ms when atomic timestamp verification was decoupled from database writes into memory caches.',
    },
    {
      ...LAB_EXPERIMENTS[1],
      methodology:
        'Tested chunk sizes from 200 to 1,500 characters across technical university textbooks. Measured retrieval recall and cosine similarity scores using MongoDB Atlas $vectorSearch with session-scoped filters.',
      findings:
        'An 800-character window with a 150-character overlap (~19%) yielded optimal balance: preserved mathematical equations across split boundaries while keeping vector resolution dense.',
    },
    {
      ...LAB_EXPERIMENTS[2],
      methodology:
        'Evaluated Mistral 7B and Llama 3 8B quantized weights (Q4_K_M vs Q5_K_M) across varying thread affinities on consumer x86-64 CPUs without dedicated GPU acceleration.',
      findings:
        'Restricting inference threads to physical CPU cores eliminated context-switching overhead, raising throughput from 9.2 tok/s to a steady 15.4 tok/s without thermal throttling.',
    },
    {
      ...LAB_EXPERIMENTS[3],
      methodology:
        'Calibrated background acoustic noise floor prior to microphone stream ingestion. Applied dynamic RMS amplitude gating to isolate speech bursts from fan and room reverberation.',
      findings:
        'Eliminated false-positive transcription triggers, achieving 91% speech recognition accuracy in uncontrolled classroom environments.',
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="container">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-14 sm:mb-20 pb-8 border-b border-hair">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              03 // The Lab
            </span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fg">
            Curiosity, <span className="heading-highlight">put to work.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-3xl font-normal mt-1 leading-relaxed">
            Engineering explorations, latency benchmarks, and local AI evaluations built to test system boundaries before they become production software.
          </p>

          <div className="flex items-center gap-4 pt-3 font-mono text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4 Active Benchmarks Documented</span>
            </span>
            <span>·</span>
            <span>Kathmandu Hardware Lab</span>
          </div>
        </div>

        {/* Lab Overview Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-bg-2 border border-hair mb-14 text-sm font-sans text-muted leading-relaxed">
          <p className="text-fg font-medium text-base sm:text-lg leading-snug mb-2">
            "Before shipping code to production, I write isolated test rigs to discover exactly where things break."
          </p>
          <p>
            Whether measuring WebSocket event turnaround times under simulated contention, optimizing local language model thread pools on consumer CPUs, or tuning speech signal noise gates, the experiments below document practical findings grounded in reproducible metrics.
          </p>
        </div>

        {/* Detailed Experiment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {detailedExperiments.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-7 sm:p-9 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-5">
                
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
                <div className="flex flex-col gap-2">
                  <h2 className="font-sans text-2xl font-bold text-fg group-hover:text-accent transition-colors leading-snug">
                    {exp.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </div>

                {/* Benchmark Callout Box */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex items-center gap-3">
                  <Gauge className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Observed Metric / Benchmark
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-fg">
                      {exp.metrics}
                    </span>
                  </div>
                </div>

                {/* Methodology Breakdown */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-1.5 font-mono text-xs">
                  <span className="text-muted-2 uppercase text-[10px] tracking-wider">
                    Testing Methodology
                  </span>
                  <p className="text-muted text-xs font-sans leading-relaxed">
                    {exp.methodology}
                  </p>
                </div>

                {/* Core Findings */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-1.5 font-mono text-xs">
                  <span className="text-accent uppercase text-[10px] tracking-wider font-semibold">
                    Key Architectural Finding
                  </span>
                  <p className="text-fg text-xs font-sans leading-relaxed">
                    {exp.findings}
                  </p>
                </div>

              </div>

              {/* Technologies Verified */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-hair">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-bg font-mono text-[11px] text-muted border border-hair"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

