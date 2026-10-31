import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, ChevronRight, X, Cpu, Layers, CheckCircle2, Filter } from 'lucide-react';
import { CASESTUDY_PROJECTS, CasestudyProject } from '../data/portfolioData';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'team'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CasestudyProject | null>(null);
  const [dossierTab, setDossierTab] = useState<'architecture' | 'challenges' | 'contributions' | 'lessons'>('architecture');

  const filteredProjects = CASESTUDY_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.category === 'ai';
    if (activeFilter === 'team') return p.category === 'team' || p.category === 'web';
    return true;
  });

  const leadProject = CASESTUDY_PROJECTS.find((p) => p.id === 'quiz-royale') || CASESTUDY_PROJECTS[0];

  return (
    <div className="py-12 sm:py-20">
      <div className="container">
        
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-14 sm:mb-20 pb-8 border-b border-hair">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            01 // Work
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-fg">
            Good logic. <span className="heading-highlight">Real systems.</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-3xl font-normal mt-1 leading-relaxed">
            3 years in Computer Engineering &amp; practical production builds. Documenting real-time WebSocket concurrency, session-scoped vector search, and edge language model optimization.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 pt-4 font-mono text-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeFilter === 'all'
                  ? 'bg-fg text-bg border-fg font-semibold'
                  : 'bg-bg-2 text-muted border-hair hover:text-fg hover:border-hair-2'
              }`}
            >
              All Projects ({CASESTUDY_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeFilter === 'ai'
                  ? 'bg-fg text-bg border-fg font-semibold'
                  : 'bg-bg-2 text-muted border-hair hover:text-fg hover:border-hair-2'
              }`}
            >
              Applied AI &amp; ML (3)
            </button>
            <button
              onClick={() => setActiveFilter('team')}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                activeFilter === 'team'
                  ? 'bg-fg text-bg border-fg font-semibold'
                  : 'bg-bg-2 text-muted border-hair hover:text-fg hover:border-hair-2'
              }`}
            >
              Real-Time &amp; Systems (3)
            </button>
          </div>
        </div>

        {/* Lead Organizational Anchors (Quiz Royale & Exhibition) */}
        {activeFilter === 'all' && (
          <div className="flex flex-col gap-8 mb-16 sm:mb-24">
            
            {/* Article 1: Quiz Royale */}
            <article className="p-6 sm:p-10 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Metric */}
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <span className="font-serif text-5xl sm:text-6xl text-fg font-normal leading-none">
                    &lt; 18ms
                  </span>
                  <span className="font-mono text-xs text-muted mt-2 uppercase tracking-wider">
                    Socket Event Latency
                  </span>
                  <span className="font-mono text-[11px] text-muted-2 mt-1">
                    Authoritative Server Ticks
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold text-fg">
                      Quiz Royale
                    </h2>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-bg text-muted border border-hair">
                      Team of 4 · Academic Minor Project
                    </span>
                  </div>

                  <p className="font-mono text-xs text-accent font-medium">
                    Full-Stack &amp; Real-Time Multiplayer Lead
                  </p>

                  <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                    Architected a real-time multiplayer buzzer and synchronized countdown engine with Node.js, Express, and Socket.io. Eliminated client-side clock drift through authoritative server ticks, allowing multiple teams to compete in synchronized quiz rooms with sub-20ms event turnaround.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Sub-20ms broadcast loop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Atomic buzzer locks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Heartbeat auto-reconnect</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-hair">
                    <button
                      onClick={() => {
                        setSelectedCaseStudy(leadProject);
                        setDossierTab('architecture');
                      }}
                      className="inline-link text-fg hover:text-accent font-semibold"
                    >
                      <span>Read engineering dossier</span>
                      <span className="arrow">→</span>
                    </button>

                    {leadProject.repoUrl && (
                      <a
                        href={leadProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub source</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </article>

            {/* Article 2: Himalaya Exhibition 2026 */}
            <article className="p-6 sm:p-10 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Metric */}
                <div className="lg:col-span-3 flex flex-col justify-start">
                  <span className="font-serif text-5xl sm:text-6xl text-fg font-normal leading-none">
                    19 Staff
                  </span>
                  <span className="font-mono text-xs text-muted mt-2 uppercase tracking-wider">
                    Supervised &amp; Directed
                  </span>
                  <span className="font-mono text-[11px] text-muted-2 mt-1">
                    Flagship Technology Exhibition
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold text-fg">
                      Himalaya Exhibition 2026
                    </h2>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-bg text-muted border border-hair">
                      Leadership &amp; Technical Operations
                    </span>
                  </div>

                  <p className="font-mono text-xs text-accent font-medium">
                    Technical Event Lead &amp; Operations Coordinator · Himalaya College of Engineering
                  </p>

                  <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
                    Led cross-functional operations for the college’s largest annual engineering and technology exhibition. Coordinated logistics, hardware demonstrations, software evaluations, and technical staging across 12 distinct engineering departments with zero operational downtime.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>19 student coordinators</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>12 department booths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Live technical staging</span>
                    </div>
                  </div>

                </div>

              </div>
            </article>

          </div>
        )}

        {/* All Projects Grid */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-fg">
              Full Project Archive &amp; Dossiers
            </h2>
            <p className="text-muted text-xs sm:text-sm font-mono mt-0.5">
              Click any project card to inspect full technical constraints, problem statements, and solutions.
            </p>
          </div>
          <span className="font-mono text-xs text-muted">
            {filteredProjects.length} Projects Shown
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setSelectedCaseStudy(project);
                setDossierTab('architecture');
              }}
              className="cursor-pointer group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-bg-2 border border-hair hover:border-hair-2 transition-all"
            >
              <div className="flex flex-col gap-4">
                
                {/* Metric & Category Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-serif text-3xl text-fg font-normal group-hover:text-accent transition-colors">
                      {project.id === 'quiz-royale'
                        ? '< 18ms'
                        : project.id === 'docuquery-rag'
                        ? '94.1%'
                        : project.id === 'offline-chatbot'
                        ? '15.4 tok/s'
                        : project.id === 'speech-converter'
                        ? '91% Acc'
                        : project.id === 'prompt-to-image'
                        ? '100% Client'
                        : '0-Bloat'}
                    </span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                      {project.id === 'quiz-royale'
                        ? 'Socket Latency'
                        : project.id === 'docuquery-rag'
                        ? 'Retrieval Accuracy'
                        : project.id === 'offline-chatbot'
                        ? 'CPU Generation'
                        : project.id === 'speech-converter'
                        ? 'Speech Recognition'
                        : project.id === 'prompt-to-image'
                        ? 'Browser Execution'
                        : 'Design System'}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg text-muted border border-hair">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-xl font-bold text-fg group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted text-xs sm:text-sm line-clamp-3 font-sans leading-relaxed">
                  {project.description}
                </p>

              </div>

              {/* Bottom: Stack & Action */}
              <div className="pt-5 mt-6 border-t border-hair flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg text-muted border border-hair"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="font-mono text-[11px] px-1.5 py-0.5 text-muted-2">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-medium text-fg pt-1">
                  <span className="group-hover:text-accent transition-colors flex items-center gap-1">
                    <span>Inspect dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {project.type.includes('Team') ? 'Team' : 'Solo'}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Deep Dive Dossier Modal */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-bg border border-hair rounded-2xl shadow-2xl overflow-hidden"
              >
                
                {/* Modal Top Bar */}
                <div className="p-6 sm:p-7 border-b border-hair flex items-start justify-between gap-4 bg-bg-2">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 font-mono text-xs text-muted">
                      <span className="text-accent font-semibold uppercase">{selectedCaseStudy.category}</span>
                      <span>·</span>
                      <span>{selectedCaseStudy.type}</span>
                    </div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-fg">
                      {selectedCaseStudy.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-muted">
                      {selectedCaseStudy.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="p-2 rounded-full border border-hair hover:border-hair-2 text-muted hover:text-fg transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Tabs */}
                <div className="flex items-center gap-2 px-6 pt-3 border-b border-hair bg-bg font-mono text-xs overflow-x-auto">
                  {(['architecture', 'challenges', 'contributions', 'lessons'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setDossierTab(tab)}
                      className={`px-3 py-2 border-b-2 font-medium capitalize whitespace-nowrap transition-colors ${
                        dossierTab === tab
                          ? 'border-accent text-fg font-semibold'
                          : 'border-transparent text-muted hover:text-fg'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Modal Tab Content */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6 text-sm font-sans">
                  {dossierTab === 'architecture' && (
                    <div className="flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-bg-2 border border-hair flex flex-col gap-2">
                        <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider">
                          Key Technical Problem
                        </span>
                        <p className="text-muted text-xs sm:text-sm leading-relaxed">
                          {selectedCaseStudy.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-bg-2 border border-hair flex flex-col gap-2">
                        <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider">
                          Engineered Solution
                        </span>
                        <p className="text-muted text-xs sm:text-sm leading-relaxed">
                          {selectedCaseStudy.solution}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 pt-2">
                        <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider">
                          Architecture Components
                        </span>
                        <div className="flex flex-col gap-2">
                          {selectedCaseStudy.architectureDetails.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                              <span className="text-accent font-mono mt-0.5">•</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {dossierTab === 'challenges' && (
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider mb-1">
                        Challenges Encountered &amp; Resolved
                      </span>
                      {selectedCaseStudy.challengesSolved.map((ch, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-bg-2 border border-hair flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted text-xs sm:text-sm leading-relaxed">
                            {ch}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {dossierTab === 'contributions' && (
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider mb-1">
                        Direct Modules &amp; Implementation Commits
                      </span>
                      {selectedCaseStudy.contributions.map((contrib, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{contrib}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {dossierTab === 'lessons' && (
                    <div className="flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-bg-2 border border-hair">
                        <span className="font-mono text-xs font-semibold text-fg uppercase tracking-wider block mb-2">
                          Engineering Lessons Learned
                        </span>
                        <div className="flex flex-col gap-2">
                          {selectedCaseStudy.lessonsLearned.map((lesson, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                              <span className="text-accent font-mono mt-0.5">—</span>
                              <span className="leading-relaxed">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {selectedCaseStudy.technologies.map((item) => (
                          <span key={item} className="font-mono text-xs px-2.5 py-1 rounded bg-bg-2 text-fg border border-hair">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-6 border-t border-hair bg-bg-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-4">
                    {selectedCaseStudy.repoUrl && (
                      <a
                        href={selectedCaseStudy.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View GitHub Repository</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {selectedCaseStudy.liveUrl && (
                      <a
                        href={selectedCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Live Deployment</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="primary-cta py-1.5 px-4 text-xs"
                  >
                    Close Dossier
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

