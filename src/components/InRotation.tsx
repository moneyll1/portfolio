import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Cpu, BookOpen, ArrowUpRight } from 'lucide-react';
import { Link } from '../router/RouterContext';

export const InRotation: React.FC = () => {
  const rotationItems = [
    {
      icon: Radio,
      tag: 'ACTIVE FOCUS',
      title: 'Real-Time Sockets & RAG Retrieval',
      description:
        'Refining low-latency WebSocket concurrency loops and session-isolated semantic chunk indexing with MongoDB Atlas $vectorSearch for enterprise documentation.',
      status: 'In Active Development',
      badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      specs: ['Socket.io 4.x', 'Atlas Vector', 'LangChain', 'Node.js'],
      linkText: 'Explore Quiz Royale & RAG',
      href: '/work',
    },
    {
      icon: Cpu,
      tag: 'LOCAL HARDWARE LAB',
      title: '4-Bit GGUF Quantization on Consumer CPUs',
      description:
        'Benchmarking edge inference throughput for quantized open-source language models. Measured 15.4 tokens/sec on raw consumer CPU without cloud API costs or data leakage.',
      status: 'Benchmarked (15.4 tok/s)',
      badgeColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      specs: ['llama.cpp', 'GGUF Q4_K_M', 'ctransformers', 'Python'],
      linkText: 'Inspect Lab Experiment #03',
      href: '/lab',
    },
    {
      icon: BookOpen,
      tag: 'READING & FOUNDATIONS',
      title: 'Data-Intensive Architectures & OS Kernels',
      description:
        'Studying Martin Kleppmann’s Designing Data-Intensive Applications alongside operating system process scheduling and network protocol internals for Tribhuvan University finals.',
      status: 'Current Reading',
      badgeColor: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
      specs: ['DDIA (Kleppmann)', 'OS Internals', 'TCP/IP Sockets', 'TU CompEng'],
      linkText: 'View Academic Path',
      href: '/about',
    },
  ];

  return (
    <section id="in-rotation" className="py-20 sm:py-28 border-t border-hair">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            Now
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
            A few things <span className="heading-highlight">in rotation.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-1">
            Current technical explorations, local hardware experiments, and foundational engineering reading.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {rotationItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all"
              >
                <div className="flex flex-col gap-5">
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${item.badgeColor} font-medium`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Kicker & Title */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] tracking-wider text-muted font-medium uppercase">
                      {item.tag}
                    </span>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-fg group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Specs & Link */}
                <div className="pt-6 mt-6 border-t border-hair flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg text-muted border border-hair"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link to={item.href} className="inline-link group/link">
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

