import React from 'react';
import { ArrowUp, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Link } from '../router/RouterContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 sm:pt-28 pb-12 border-t border-hair bg-bg text-fg">
      <div className="container flex flex-col gap-16 sm:gap-20">
        
        {/* Editorial Grand Headline & Call to Action (aanandmadhav style) */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fg leading-[1.08]">
            Bring me the <span className="heading-highlight">hard problem.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg lg:text-xl font-normal leading-relaxed font-sans">
            I am always open to conversations about engineering, software architecture, and technology — especially the kind that don't have an obvious answer yet. I read every message.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="primary-cta group"
            >
              <span>Initialize collaboration</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Let's%20build%20something`}
              className="inline-link"
            >
              <span>{PERSONAL_INFO.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Multi-Column Site Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-hair font-mono text-xs">
          
          {/* Col 1: Selected Work */}
          <div className="flex flex-col gap-3">
            <span className="text-fg font-semibold uppercase tracking-wider text-[11px]">
              Pages
            </span>
            <div className="flex flex-col gap-2 text-muted">
              <Link to="/home" className="hover:text-accent transition-colors">/home (Overview)</Link>
              <Link to="/work" className="hover:text-accent transition-colors">/work (6 Builds &amp; Dossiers)</Link>
              <Link to="/now" className="hover:text-accent transition-colors">/now (In Rotation)</Link>
              <Link to="/lab" className="hover:text-accent transition-colors">/lab (Benchmarks)</Link>
              <Link to="/writing" className="hover:text-accent transition-colors">/writing (Field Notes)</Link>
              <Link to="/about" className="hover:text-accent transition-colors">/about (The Path Here)</Link>
            </div>
          </div>

          {/* Col 2: Featured Case Studies */}
          <div className="flex flex-col gap-3">
            <span className="text-fg font-semibold uppercase tracking-wider text-[11px]">
              Featured Builds
            </span>
            <div className="flex flex-col gap-2 text-muted">
              <Link to="/work" className="hover:text-accent transition-colors">Quiz Royale (&lt; 18ms)</Link>
              <Link to="/work" className="hover:text-accent transition-colors">DocuQuery RAG (94.1%)</Link>
              <Link to="/work" className="hover:text-accent transition-colors">Offline AI Chatbot (15.4 tok/s)</Link>
              <Link to="/work" className="hover:text-accent transition-colors">Himalaya Exhibition 2026</Link>
            </div>
          </div>

          {/* Col 3: Network & Profiles */}
          <div className="flex flex-col gap-3">
            <span className="text-fg font-semibold uppercase tracking-wider text-[11px]">
              Profiles
            </span>
            <div className="flex flex-col gap-2 text-muted">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="/assets/Manil_Ghimire_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                <span>Résumé (PDF)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <Link to="/contact" className="hover:text-accent transition-colors">
                Terminal Intake
              </Link>
            </div>
          </div>

          {/* Col 4: Coordinates & Academic */}
          <div className="flex flex-col gap-3">
            <span className="text-fg font-semibold uppercase tracking-wider text-[11px]">
              Node Info
            </span>
            <div className="flex flex-col gap-2 text-muted">
              <span>Kathmandu, Nepal</span>
              <span className="text-muted-2">27.7172° N, 85.3240° E</span>
              <span>TU CompEng '27</span>
              <span className="text-emerald-500 font-medium">Available for roles</span>
            </div>
          </div>

        </div>

        {/* Bottom Metadata & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-hair font-mono text-xs text-muted">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Manil Ghimire.</span>
            <span className="hidden sm:inline">Built with React, TypeScript &amp; Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors group cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
