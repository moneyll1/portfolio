import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Link } from '../router/RouterContext';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Radio,
  BookOpen,
  FlaskConical,
  Gauge,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Zap,
  Play,
  RotateCcw,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeBenchmark, setActiveBenchmark] = useState(0);
  const [cliOutput, setCliOutput] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Interactive Buzzer Collision Mini-Simulator State
  const [buzzerState, setBuzzerState] = useState<{
    status: 'idle' | 'racing' | 'resolved';
    playerA: number;
    playerB: number;
    winner: 'Player A' | 'Player B' | null;
  }>({
    status: 'idle',
    playerA: 0,
    playerB: 0,
    winner: null,
  });

  const runBuzzerSimulation = () => {
    setBuzzerState({ status: 'racing', playerA: 0, playerB: 0, winner: null });
    
    setTimeout(() => {
      // Simulate sub-20ms collision resolution
      const delayA = 16.4;
      const delayB = 18.2;
      setBuzzerState({
        status: 'resolved',
        playerA: delayA,
        playerB: delayB,
        winner: 'Player A',
      });
    }, 600);
  };

  const benchmarks = [
    {
      id: '01',
      title: 'WebSocket Concurrency Loop',
      system: 'Quiz Royale Authoritative Engine',
      metric: '< 18ms',
      metricPercentage: 92,
      metricLabel: 'Event Turnaround Latency',
      status: 'VERIFIED',
      telemetry: [
        { label: 'Simulated Clients', value: '100 Concurrent' },
        { label: 'Server Clock Drift', value: '0.0ms' },
        { label: 'Buzzer Collision', value: 'Atomic Lock' },
      ],
      description:
        'Authoritative server ticks eliminate client clock spoofing and deliver sub-20ms event loops across concurrent multiplayer quiz rooms.',
      linkTo: '/work',
    },
    {
      id: '02',
      title: 'Session-Scoped Vector Ingestion',
      system: 'DocuQuery RAG Pipeline',
      metric: '94.1%',
      metricPercentage: 94.1,
      metricLabel: 'Context Retrieval Accuracy',
      status: 'BENCHMARKED',
      telemetry: [
        { label: 'Chunk Window', value: '800 Characters' },
        { label: 'Chunk Overlap', value: '150 Chars (~19%)' },
        { label: 'Cross-User Leakage', value: '0.0% Isolated' },
      ],
      description:
        'Overlap-aware text chunking paired with MongoDB Atlas $vectorSearch pre-filters guarantees strict document isolation across concurrent users.',
      linkTo: '/lab',
    },
    {
      id: '03',
      title: '4-Bit GGUF Edge Inference',
      system: 'Offline LLM Runner',
      metric: '15.4 tok/s',
      metricPercentage: 85,
      metricLabel: 'CPU Generation Throughput',
      status: 'ACTIVE',
      telemetry: [
        { label: 'Quantization', value: 'Q4_K_M Integer' },
        { label: 'RAM Footprint', value: '4.2 GB' },
        { label: 'Cloud API Cost', value: '$0.00 / Zero Leak' },
      ],
      description:
        'Local quantized open-source language models running directly on consumer x86-64 CPU cores with thread affinity and zero internet dependency.',
      linkTo: '/now',
    },
    {
      id: '04',
      title: 'Dynamic Acoustic Noise Gating',
      system: 'Speech Processing Tool',
      metric: '91%',
      metricPercentage: 91,
      metricLabel: 'Word Recognition Accuracy',
      status: 'VERIFIED',
      telemetry: [
        { label: 'Noise Floor', value: 'Dynamic RMS' },
        { label: 'False Triggers', value: 'Zero Spurious' },
        { label: 'Latency', value: '< 120ms Audio' },
      ],
      description:
        'Background noise floor calibration before microphone stream ingestion isolates speech bursts from ambient room reverberation.',
      linkTo: '/lab',
    },
  ];

  const currentBenchmark = benchmarks[activeBenchmark];

  const runCliCommand = (cmd: string) => {
    if (cmd === 'ping') {
      setIsSimulating(true);
      setCliOutput('Broadcasting 100 WebSocket packets across Kathmandu node [27.7172° N]...');
      setTimeout(() => {
        setCliOutput('[PING SUCCESS] 100 packets transmitted · min: 14.2ms · avg: 17.8ms · max: 19.1ms · 0.0% loss · drift: 0.0ms');
        setIsSimulating(false);
      }, 700);
    } else if (cmd === 'buzzer') {
      setIsSimulating(true);
      setCliOutput('Testing atomic buzzer lock: Player A vs Player B in concurrent room...');
      setTimeout(() => {
        setCliOutput('[ATOMIC RESOLUTION] Player A (16.4ms) | Player B (18.2ms) · Winner: Player A (+1.8ms advantage) · Server Clock Authoritative');
        setIsSimulating(false);
      }, 700);
    } else if (cmd === 'gguf') {
      setIsSimulating(true);
      setCliOutput('Streaming 4-bit GGUF tokens on local consumer CPU threads...');
      setTimeout(() => {
        setCliOutput('[GGUF STREAM] "Local quantized Llama-3-8B running on consumer CPU cores without external API billing..." · Throughput: 15.4 tok/s');
        setIsSimulating(false);
      }, 700);
    } else if (cmd === 'stack') {
      setCliOutput('[CORE TOOLCHAIN] TypeScript, React 18, Node.js, Express, Socket.io, Python, FastAPI, MongoDB Atlas, LangChain, llama.cpp');
    } else if (cmd === 'clear') {
      setCliOutput(null);
    }
  };

  return (
    <div className="flex flex-col">
      {/* 1. Curated Hero Scene with 3D Tilt Portrait & Rotating Badge */}
      <Hero />

      {/* 2. Interactive CLI / Live Telemetry Sandbox */}
      <section className="py-7 border-b border-hair bg-bg-2/30">
        <div className="container">
          <div className="p-4 sm:p-5 rounded-2xl bg-bg-2 border border-hair flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs shadow-sm">
            
            {/* Left Prompt Display */}
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="text-accent font-semibold flex items-center gap-1.5 shrink-0">
                <Terminal className="w-3.5 h-3.5" />
                <span>guest@manil:~$</span>
              </span>
              <div className="truncate text-muted">
                {cliOutput ? (
                  <span className="text-fg animate-fadeIn">{cliOutput}</span>
                ) : (
                  <span className="text-muted-2">Click a live telemetry simulation pill:</span>
                )}
              </div>
            </div>

            {/* Right Command Pills */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              <button
                onClick={() => runCliCommand('ping')}
                disabled={isSimulating}
                className="px-2.5 py-1 rounded-md bg-bg border border-hair text-fg hover:border-accent hover:text-accent transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <span>&gt; ping-telemetry</span>
              </button>
              <button
                onClick={() => runCliCommand('buzzer')}
                disabled={isSimulating}
                className="px-2.5 py-1 rounded-md bg-bg border border-hair text-fg hover:border-accent hover:text-accent transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <span>&gt; test-buzzer-race</span>
              </button>
              <button
                onClick={() => runCliCommand('gguf')}
                disabled={isSimulating}
                className="px-2.5 py-1 rounded-md bg-bg border border-hair text-fg hover:border-accent hover:text-accent transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <span>&gt; stream-gguf</span>
              </button>
              <button
                onClick={() => runCliCommand('stack')}
                className="px-2.5 py-1 rounded-md bg-bg border border-hair text-fg hover:border-accent hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>&gt; stack</span>
              </button>
              {cliOutput && (
                <button
                  onClick={() => runCliCommand('clear')}
                  className="px-2 py-1 rounded-md text-muted-2 hover:text-fg transition-colors cursor-pointer"
                >
                  clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Innovative Spotlight: The Lead Build with Live Oscilloscope & Interactive Buzzer Race */}
      <section className="py-16 sm:py-24 border-b border-hair">
        <div className="container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Spotlight // Flagship System</span>
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-fg">
                Real-Time Sockets &amp; <span className="heading-highlight">Authoritative State.</span>
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-link font-mono text-xs uppercase tracking-wider text-accent font-semibold shrink-0"
            >
              <span>Explore all 6 builds in /work</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Monumental Spotlight Card */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-bg-2 border border-hair hover:border-hair-2 transition-all relative overflow-hidden group shadow-sm hover:shadow-md">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Monumental Telemetry & Animated Oscilloscope */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 font-semibold">
                    Flagship Academic Build · Team of 4
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-fg font-normal leading-none tracking-tight">
                    &lt; 18ms
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-muted mt-2 uppercase tracking-wider">
                    WebSocket Event Turnaround Latency
                  </span>
                </div>

                {/* Animated Simulated Oscilloscope Waveform */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-muted-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>LIVE EVENT LOOP VISUALIZER</span>
                    </span>
                    <span className="text-emerald-500 font-semibold">17.8ms RTT</span>
                  </div>
                  
                  <div className="h-8 flex items-center justify-between gap-1 overflow-hidden px-1">
                    {[35, 60, 40, 95, 20, 75, 45, 85, 30, 65, 90, 40, 70, 50, 80, 30, 95, 40, 65, 85, 45, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [`${h}%`, `${(h * 1.35) % 100}%`, `${h}%`] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.06, ease: 'easeInOut' }}
                        className="w-1 bg-accent rounded-full opacity-85"
                      />
                    ))}
                  </div>

                  <span className="text-fg font-medium text-[11px] pt-1">
                    Server-Authoritative Clock Tick · Zero Client Desync
                  </span>
                </div>

                {/* Interactive Buzzer Race Mini-Simulator */}
                <div className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-accent uppercase text-[10px] font-semibold tracking-wider">
                      Interactive Concurrency Test
                    </span>
                    <button
                      onClick={runBuzzerSimulation}
                      disabled={buzzerState.status === 'racing'}
                      className="px-2.5 py-1 rounded bg-bg-2 border border-hair hover:border-accent text-fg text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Play className="w-3 h-3 text-accent" />
                      <span>{buzzerState.status === 'racing' ? 'Arbitrating...' : 'Run Buzzer Race'}</span>
                    </button>
                  </div>

                  {buzzerState.status === 'resolved' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between text-[11px] p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    >
                      <span>Player A ({buzzerState.playerA}ms) won by +1.8ms</span>
                      <span className="font-semibold text-emerald-500">LOCKED</span>
                    </motion.div>
                  ) : (
                    <span className="text-muted-2 text-[11px]">
                      Simulates two concurrent players buzzing within 5ms to test atomic server timestamp locks.
                    </span>
                  )}
                </div>

              </div>

              {/* Right Column: Narrative & Technical Breakdown */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Project Dossier #01
                  </span>
                  <h3 className="font-sans text-3xl sm:text-4xl font-bold text-fg">
                    Quiz Royale
                  </h3>
                  <p className="font-mono text-xs text-accent font-medium">
                    Full-Stack &amp; Multiplayer Lead · Node.js, Express, Socket.io, MongoDB
                  </p>
                </div>

                <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                  Traditional web applications suffer from noticeable clock drift and client tampering during live competitions. We engineered a server-authoritative multiplayer backend that isolates quiz rooms into concurrent event streams, handling simultaneous buzzes with millisecond timestamp arbitration.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Sub-20ms broadcast event loop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Python ML dynamic genre classifier</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Heartbeat auto-reconnect grace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero client-side score spoofing</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-hair">
                  <Link
                    to="/work"
                    className="primary-cta group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span>Read complete case study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="https://github.com/money-ll"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    <span>View GitHub repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Innovative Interactive Telemetry Bench with Radial Gauge & Fill Animations */}
      <section className="py-16 sm:py-24 border-b border-hair bg-bg-2/30">
        <div className="container">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                <span>The Interactive Lab Bench</span>
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-fg">
                Observed Benchmarks &amp; <span className="heading-highlight">Telemetry.</span>
              </h2>
            </div>

            <Link
              to="/lab"
              className="inline-link font-mono text-xs uppercase tracking-wider text-accent font-semibold shrink-0"
            >
              <span>Explore all benchmarks in /lab</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Interactive Benchmark Console */}
          <div className="rounded-3xl bg-bg-2 border border-hair overflow-hidden shadow-sm">
            
            {/* Interactive Tab Switcher Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-hair font-mono text-xs bg-bg">
              {benchmarks.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => setActiveBenchmark(idx)}
                  className={`p-4 sm:p-5 text-left transition-all border-r last:border-r-0 border-hair flex flex-col gap-1 cursor-pointer ${
                    activeBenchmark === idx
                      ? 'bg-bg-2 text-fg font-semibold relative'
                      : 'text-muted hover:text-fg hover:bg-bg-2/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-[11px]">BENCH {b.id}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-bg border border-hair text-muted-2">
                      {b.status}
                    </span>
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-bold truncate">
                    {b.title}
                  </span>
                  {activeBenchmark === idx && (
                    <motion.div
                      layoutId="activeBenchTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Benchmark Display Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBenchmark.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-10 lg:p-12 flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Big Number & Radial Progress Gauge */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-fg leading-none">
                      {currentBenchmark.metric}
                    </span>
                    <span className="font-mono text-xs text-muted uppercase tracking-wider">
                      {currentBenchmark.metricLabel}
                    </span>
                    
                    {/* Animated Fill Bar */}
                    <div className="w-full bg-bg h-2 rounded-full overflow-hidden border border-hair mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentBenchmark.metricPercentage}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="bg-accent h-full rounded-full"
                      />
                    </div>

                    <span className="font-mono text-xs text-accent mt-1">
                      System Target: {currentBenchmark.system}
                    </span>
                  </div>

                  {/* Telemetry Metric Cards */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentBenchmark.telemetry.map((t) => (
                      <div
                        key={t.label}
                        className="p-4 rounded-xl bg-bg border border-hair flex flex-col gap-1 font-mono text-xs shadow-sm"
                      >
                        <span className="text-muted-2 uppercase text-[10px] tracking-wider">
                          {t.label}
                        </span>
                        <span className="text-fg font-semibold text-sm">
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 border-t border-hair flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-muted text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                    {currentBenchmark.description}
                  </p>

                  <Link
                    to={currentBenchmark.linkTo}
                    className="inline-link shrink-0 font-mono text-xs uppercase tracking-wider text-accent font-semibold"
                  >
                    <span>Inspect experiment details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* 5. Creative Three-Pillar Gateway (Now · Field Notes · The Journey) */}
      <section className="py-16 sm:py-24 border-b border-hair">
        <div className="container">
          
          <div className="flex flex-col gap-2 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Index // Explore the Portals
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-fg">
              Depth where you <span className="heading-highlight">need it.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-0.5">
              Instead of endless walls of text, explore dedicated archives for ongoing focus, technical essays, and academic timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: /now Gateway with interactive hover float */}
            <Link
              to="/now"
              className="p-7 sm:p-8 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all flex flex-col justify-between gap-6 group cursor-pointer hover:shadow-md hover:-translate-y-1 duration-200"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wider">
                    /now
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    In Rotation
                  </span>
                  <h3 className="font-sans text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    Active Focus &amp; Reading
                  </h3>
                </div>

                <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed">
                  Real-time sockets, local 4-bit GGUF language model inference on consumer CPUs, and foundational reading in <em>Designing Data-Intensive Applications</em>.
                </p>
              </div>

              <div className="pt-4 border-t border-hair flex items-center justify-between font-mono text-xs text-accent font-semibold">
                <span>View current rotation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 2: /writing Gateway with interactive hover float */}
            <Link
              to="/writing"
              className="p-7 sm:p-8 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all flex flex-col justify-between gap-6 group cursor-pointer hover:shadow-md hover:-translate-y-1 duration-200"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wider">
                    /writing
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Field Notes
                  </span>
                  <h3 className="font-sans text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    Architecture Post-Mortems
                  </h3>
                </div>

                <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed">
                  Four documented essays analyzing WebSocket concurrency traps, RAG session-scoping bugs, CPU thread affinity, and campus leadership systems.
                </p>
              </div>

              <div className="pt-4 border-t border-hair flex items-center justify-between font-mono text-xs text-accent font-semibold">
                <span>Read technical essays</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Card 3: /about Gateway with interactive hover float */}
            <Link
              to="/about"
              className="p-7 sm:p-8 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all flex flex-col justify-between gap-6 group cursor-pointer hover:shadow-md hover:-translate-y-1 duration-200"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-bg border border-hair flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-2 uppercase tracking-wider">
                    /about
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    The Path Here
                  </span>
                  <h3 className="font-sans text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    Chapters 01 to 04
                  </h3>
                </div>

                <p className="text-muted text-xs sm:text-sm font-sans leading-relaxed">
                  The chronological journey from Jhapa to Tribhuvan University Computer Engineering, leading 19 exhibition staff, and shipping dependable code.
                </p>
              </div>

              <div className="pt-4 border-t border-hair flex items-center justify-between font-mono text-xs text-accent font-semibold">
                <span>Explore the full timeline</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* 6. Minimalist Direct Collaboration Banner */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="p-8 sm:p-12 rounded-3xl bg-bg-2 border border-hair flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Structured Intake Terminal</span>
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-fg">
                Have an engineering challenge or role?
              </h3>
              <p className="text-muted text-sm font-sans leading-relaxed">
                Open to technical internships, software engineering roles, and challenging systems problems. Direct dispatch with active 24-hour response.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link to="/contact" className="primary-cta py-3 px-6 text-sm group shadow-sm hover:shadow-md transition-shadow">
                <span>Launch terminal &gt;_</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
