import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Cpu, BookOpen, Monitor, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from '../router/RouterContext';

export const NowPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="container">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-14 sm:mb-20 pb-8 border-b border-hair">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              02 // Now
            </span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fg">
            A few things <span className="heading-highlight">in rotation.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-3xl font-normal mt-1 leading-relaxed">
            What I am currently building, exploring, reading, and learning as a Computer Engineering student in Kathmandu. Updated for {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* 2-Column Split: Deep Focus on Left, Setup & Reading on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Active Engineering Focus & Edge Lab */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Focus 1: Real-Time Sockets & Distributed Rooms */}
            <article className="p-7 sm:p-9 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent">
                  <Radio className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border text-emerald-500 bg-emerald-500/10 border-emerald-500/20 font-medium">
                  Active Engineering Focus
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  Real-Time Systems &amp; Concurrency
                </span>
                <h2 className="font-sans text-2xl font-bold text-fg">
                  Sub-20ms WebSocket Concurrency &amp; Clock Sync
                </h2>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                Following the release of Quiz Royale, I am refining authoritative room state synchronization patterns. Specifically, testing atomic event loops in Node.js to eliminate clock drift when dozens of concurrent players submit buzzer timestamps simultaneously.
              </p>

              <div className="flex flex-col gap-2 pt-2 border-t border-hair font-mono text-xs text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Target: Zero desynchronization across 100+ concurrent socket connections</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Heartbeat keep-alive with automatic state replay on reconnect</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/work" className="inline-link text-xs">
                  <span>Inspect Quiz Royale Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>

            {/* Focus 2: Session-Scoped Vector Search */}
            <article className="p-7 sm:p-9 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border text-sky-500 bg-sky-500/10 border-sky-500/20 font-medium">
                  Applied AI Architecture
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  Retrieval-Augmented Generation
                </span>
                <h2 className="font-sans text-2xl font-bold text-fg">
                  Session-Scoped Vector Chunking &amp; MongoDB Atlas
                </h2>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                Researching multi-tenant document isolation in vector search indexes. Exploring overlap-aware chunking (800 character window with 150 character overlap) and composite index pre-filtering with MongoDB Atlas <code className="font-mono text-xs text-accent">$vectorSearch</code> to ensure zero context leakage between simultaneous user uploads.
              </p>

              <div className="flex flex-col gap-2 pt-2 border-t border-hair font-mono text-xs text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Observed: 94.1% semantic retrieval accuracy on technical PDF manuals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Zero-cost local embeddings with sentence-transformers</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/lab" className="inline-link text-xs">
                  <span>Inspect Lab Experiment #02</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>

            {/* Focus 3: Local Quantized Edge Inference */}
            <article className="p-7 sm:p-9 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border text-amber-500 bg-amber-500/10 border-amber-500/20 font-medium">
                  Hardware &amp; Quantization
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  Edge Intelligence
                </span>
                <h2 className="font-sans text-2xl font-bold text-fg">
                  4-Bit GGUF Quantization on Consumer CPUs
                </h2>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                Benchmarking open-source LLMs (Llama 3 8B, Mistral 7B) on consumer hardware without expensive GPU clusters. By binding CPU thread allocation to physical cores and utilizing 4-bit integer weights (Q4_K_M), achieved 15.4 tokens/second generation locally with zero internet dependency.
              </p>

              <div className="pt-2">
                <Link to="/writing" className="inline-link text-xs">
                  <span>Read Field Note: Running Quantized LLMs Locally</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>

          </div>

          {/* Right Column: Reading, Toolchain & Academic Horizon */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Reading Shelf */}
            <div className="p-6 sm:p-7 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Reading &amp; Foundations</span>
              </div>

              <div className="flex flex-col divide-y divide-hair">
                
                <div className="py-3 flex flex-col gap-1">
                  <span className="font-sans font-bold text-fg text-sm sm:text-base">
                    Designing Data-Intensive Applications
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Martin Kleppmann · O'Reilly Media
                  </span>
                  <p className="text-muted text-xs font-sans mt-1">
                    Studying partition strategies, distributed consensus algorithms, and replication trade-offs.
                  </p>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <span className="font-sans font-bold text-fg text-sm sm:text-base">
                    Operating System Concepts (10th Ed.)
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Silberschatz, Galvin &amp; Gagne
                  </span>
                  <p className="text-muted text-xs font-sans mt-1">
                    Deepening understanding of memory paging, process scheduling, and kernel context switches.
                  </p>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <span className="font-sans font-bold text-fg text-sm sm:text-base">
                    Computer Networking: A Top-Down Approach
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Kurose &amp; Ross
                  </span>
                  <p className="text-muted text-xs font-sans mt-1">
                    Analyzing TCP flow control, socket programming interfaces, and HTTP/3 transport layers.
                  </p>
                </div>

              </div>
            </div>

            {/* Development Workspace & Environment */}
            <div className="p-6 sm:p-7 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5 font-mono text-xs">
              <div className="flex items-center gap-2 text-accent uppercase tracking-wider font-semibold">
                <Monitor className="w-4 h-4" />
                <span>Engineering Environment</span>
              </div>

              <div className="flex flex-col divide-y divide-hair">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-muted-2 uppercase text-[11px]">Primary OS</span>
                  <span className="text-fg font-medium">Windows + WSL2 (Ubuntu Linux)</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-muted-2 uppercase text-[11px]">Editor</span>
                  <span className="text-fg font-medium">VS Code + Vim Bindings</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-muted-2 uppercase text-[11px]">Terminal Shell</span>
                  <span className="text-fg font-medium">PowerShell 7 / Zsh (Starship)</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-muted-2 uppercase text-[11px]">Primary Runtimes</span>
                  <span className="text-fg font-medium">Node.js 20 LTS · Python 3.11</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-muted-2 uppercase text-[11px]">Version Control</span>
                  <span className="text-fg font-medium">Git CLI + GitHub</span>
                </div>
              </div>
            </div>

            {/* Academic Horizon & Target */}
            <div className="p-6 sm:p-7 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-4">
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Current Academic Horizon</span>
              </div>

              <div className="flex flex-col gap-2 text-xs font-sans text-muted leading-relaxed">
                <p>
                  <strong className="text-fg font-semibold">6th Semester Computer Engineering:</strong> Currently completing advanced coursework at Himalaya College of Engineering, Tribhuvan University.
                </p>
                <p>
                  <strong className="text-fg font-semibold">Target:</strong> Preparing proposal for final-year engineering capstone project and actively seeking technical software engineering internships for 2026/2027.
                </p>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-link text-xs">
                  <span>Explore full academic path &amp; chapters</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

