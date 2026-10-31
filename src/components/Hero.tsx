import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, ArrowUpRight, MapPin, Sparkles, Terminal, CheckCircle2, Code2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Link } from '../router/RouterContext';
import { Counter } from './Counter';

export const Hero: React.FC = () => {
  const [activeIdentity, setActiveIdentity] = useState<number>(0);
  const [ktmTime, setKtmTime] = useState<string>('');

  // 3D Card Tilt on Portrait
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const identities = [
    {
      word: 'Builder.',
      role: 'Full-Stack & Systems Architecture',
      detail: 'Designing resilient client-server loops, stateful room architectures, and clean component interfaces.',
    },
    {
      word: 'Engineer.',
      role: 'B.E. Computer Engineering, TU',
      detail: 'Grounding systems in operating principles, algorithm efficiency, and low-latency network protocols.',
    },
    {
      word: 'Problem Solver.',
      role: 'Applied AI & Context Pipelines',
      detail: 'Integrating vector search, semantic embeddings, and local quantized LLMs to solve real utility bottlenecks.',
    },
  ];

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kathmandu',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setKtmTime(timeStr);
      } catch {
        setKtmTime('20:45:00');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="w-full pt-6 sm:pt-12 pb-16 sm:pb-24 border-b border-hair relative overflow-hidden">
      <div className="container flex flex-col justify-between relative z-10">
        
        {/* Top Metadata Bar (Coordinates + Clock + Availability) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted pb-6 mb-8 sm:mb-14 border-b border-hair"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-fg">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Kathmandu, Nepal</span>
              <span className="hidden sm:inline text-muted-2">(27.7172° N, 85.3240° E)</span>
            </span>
            {ktmTime && (
              <>
                <span className="text-hair-2">|</span>
                <span className="text-muted">{ktmTime} NPT (UTC+5:45)</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-fg font-medium">Available for technical roles &amp; internships · TU '27</span>
          </div>
        </motion.div>

        {/* Main Hero Split Grid: Monumental Typography Left + Editorial Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Typography, Persona Switcher & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col gap-6 sm:gap-8"
          >
            
            {/* 3-Word Interactive Identity Switcher with animated pill slider */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                {identities.map((item, idx) => (
                  <button
                    key={item.word}
                    onClick={() => setActiveIdentity(idx)}
                    className={`relative font-mono text-xs sm:text-sm tracking-wider font-semibold transition-all px-4 py-1.5 rounded-full border cursor-pointer ${
                      activeIdentity === idx
                        ? 'bg-fg text-bg border-fg shadow-sm'
                        : 'bg-transparent text-muted border-hair hover:text-fg hover:border-hair-2'
                    }`}
                  >
                    <span>{item.word}</span>
                    {activeIdentity === idx && (
                      <motion.div
                        layoutId="activeIdentityBadge"
                        className="absolute inset-0 rounded-full bg-fg -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="h-6 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIdentity}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs text-muted-2"
                  >
                    <span className="text-accent font-semibold">{identities[activeIdentity].role}</span> — {identities[activeIdentity].detail}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Monumental Headline with Editorial Serif Italic Highlight */}
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-bold tracking-tight text-fg leading-[1.08] max-w-4xl">
              I bring software engineering, intelligent systems, and usable interfaces together to build <span className="heading-highlight font-serif font-normal italic">things that matter.</span>
            </h1>

            {/* Bio Statement */}
            <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-sans max-w-3xl">
              I’m <strong className="text-fg font-semibold">Manil Ghimire</strong>, a Computer Engineering student at Himalaya College of Engineering, Tribhuvan University in Kathmandu. I specialize in building real-time multiplayer systems, context-grounded RAG pipelines, and performant web backends with production reliability.
            </p>

            {/* Actions: Primary CTA + Inline Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <Link to="/contact" className="primary-cta group shadow-sm hover:shadow-md transition-shadow">
                <span>Let’s build something</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link to="/work" className="inline-link">
                <span>Selected works</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5" />
              </Link>

              <a
                href="/assets/Manil_Ghimire_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                <span>Résumé (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            {/* Quick Direct Contacts */}
            <div className="flex flex-wrap items-center gap-4 pt-3 font-mono text-xs text-muted border-t border-hair">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors"
              >
                github.com/money-ll ↗
              </a>
              <span className="text-hair-2">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors"
              >
                linkedin.com/in/manilghimire ↗
              </a>
              <span className="text-hair-2">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-fg transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

          </motion.div>

          {/* Right Column: Editorial Portrait Scene with 3D Tilt and Rotating Engineering Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end perspective-[1000px]"
          >
            <div className="w-full max-w-[420px] lg:max-w-[460px] flex flex-col gap-3.5 relative">
              
              {/* Rotating Engineering Hallmark Seal on Top-Right Corner */}
              <div className="absolute -top-7 -right-7 w-24 h-24 pointer-events-none hidden sm:block z-20">
                <motion.svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-accent"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="font-mono text-[9.5px] uppercase tracking-[2.5px] fill-current">
                    <textPath href="#circlePath" startOffset="0%">
                      · MANIL GHIMIRE · TU COMPENG '27
                    </textPath>
                  </text>
                </motion.svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>

              {/* 3D Interactive Tilt Portrait Frame */}
              <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl overflow-hidden bg-bg-2 border border-hair shadow-md aspect-[4/5] group hover:border-hair-2 transition-all duration-300"
              >
                <img
                  src="/assets/images/manil-portrait.jpg"
                  alt="Manil Ghimire — Kathmandu, Nepal"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge on photo */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg/85 backdrop-blur-md border border-hair font-mono text-xs text-fg shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>TU CompEng '27</span>
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between font-mono text-xs text-white drop-shadow-sm">
                  <span className="font-semibold">Kathmandu, NP</span>
                  <span className="text-[11px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    27.7172° N, 85.3240° E
                  </span>
                </div>
              </motion.div>

              {/* Editorial Figure Caption */}
              <div className="flex items-center justify-between font-mono text-xs text-muted px-1">
                <span>FIG. 01 — MANIL GHIMIRE</span>
                <span className="text-muted-2">HIMALAYA COLLEGE OF ENG.</span>
              </div>

              {/* Compact Highlight Banner */}
              <div className="p-4 rounded-xl bg-bg-2 border border-hair flex items-center justify-between font-mono text-xs shadow-sm">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-fg">Himalaya Exhibition 2026</span>
                </div>
                <span className="text-muted bg-bg px-2 py-0.5 rounded border border-hair">
                  Led 19 Staff
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Credibility Strip with Animated Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 sm:mt-16 border-t border-hair font-mono text-xs"
        >
          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl sm:text-4xl text-fg font-normal">
              <Counter value={6} />
            </span>
            <span className="text-muted uppercase tracking-wider text-[11px]">
              Documented Builds
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl sm:text-4xl text-fg font-normal">
              <Counter value={4} />
            </span>
            <span className="text-muted uppercase tracking-wider text-[11px]">
              Quiz Royale Team
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl sm:text-4xl text-fg font-normal">
              <Counter value={19} />
            </span>
            <span className="text-muted uppercase tracking-wider text-[11px]">
              Staff Supervised
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-serif text-3xl sm:text-4xl text-fg font-normal">
              <Counter value={2027} />
            </span>
            <span className="text-muted uppercase tracking-wider text-[11px]">
              Graduation Target
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
