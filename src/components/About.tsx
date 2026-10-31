import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Users, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const chapters = [
    {
      number: '01',
      period: '2023 — Present',
      role: 'Bachelor in Computer Engineering',
      org: 'Himalaya College of Engineering, Tribhuvan University',
      location: 'Chyasal, Lalitpur · Kathmandu Valley',
      description:
        'Rigorous 4-year engineering curriculum covering Data Structures & Algorithms, Operating Systems, Computer Architecture, Database Management Systems, and Object-Oriented Analysis.',
      keyPoints: [
        'Expected Graduation: April 2027',
        'Academic Focus: Real-Time Systems, Distributed Architectures & Applied AI',
        'Tribhuvan University Affiliated',
      ],
    },
    {
      number: '02',
      period: '2024',
      role: 'Full-Stack & Real-Time Multiplayer Lead',
      org: 'Quiz Royale (Academic Minor Project)',
      location: 'Kathmandu, Nepal',
      description:
        'Led system architecture for a 4-engineer team developing a real-time multiplayer buzzer application. Designed authoritative server-side clock synchronization and atomic buzzer conflict resolution.',
      keyPoints: [
        '< 18ms WebSocket event loop latency achieved',
        'Built with React, Node.js, Express, Socket.io, and MongoDB',
        'Integrated Python NLP classification service for dynamic question categorization',
      ],
    },
    {
      number: '03',
      period: '2024',
      role: 'Applied AI & Vector Retrieval Research',
      org: 'DocuQuery & Edge LLM Prototypes',
      location: 'Kathmandu, Nepal',
      description:
        'Researched retrieval-augmented generation pipelines and edge language model optimization. Implemented session-scoped document chunking with MongoDB Atlas $vectorSearch and local 4-bit GGUF quantization.',
      keyPoints: [
        '94.1% semantic retrieval accuracy on technical documentation',
        '15.4 tok/s inference benchmark on consumer CPU via llama.cpp',
        'Built zero-cost, private offline conversational assistant',
      ],
    },
    {
      number: '04',
      period: '2026',
      role: 'Technical Event Lead & Operations Coordinator',
      org: 'Himalaya Exhibition 2026',
      location: 'Kathmandu, Nepal',
      description:
        'Directed end-to-end technical logistics for the college’s premier engineering exhibition. Supervised a 19-member student staff, coordinated 12 departmental project booths, and ensured zero technical downtime.',
      keyPoints: [
        'Supervised 19 staff members across exhibition staging and demonstration tracks',
        'Coordinated 12 engineering department showcase booths',
        'Managed live hardware/software evaluations and high-traffic visitor schedules',
      ],
    },
  ];

  const toolchain = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL'] },
    { category: 'Frameworks & Runtimes', items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'] },
    { category: 'Data & Networking', items: ['MongoDB', 'Atlas Vector Search', 'Socket.io', 'REST', 'WebSockets'] },
    { category: 'AI & Systems', items: ['LangChain', 'llama.cpp', 'GGUF', 'Git', 'Linux / Bash'] },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-hair">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-14 sm:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            The Path Here
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
            Engineering, <span className="heading-highlight">step by step.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-1">
            Academic foundations, real-time software builds, and hands-on technical leadership.
          </p>
        </div>

        {/* 2-Column Split: Philosophy & Specifications (Left) vs Chapters (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Specifications */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Core Narrative */}
            <div className="flex flex-col gap-4 text-sm sm:text-base text-muted leading-relaxed font-sans">
              <p className="text-fg font-medium text-base sm:text-lg leading-snug">
                "Good software engineering isn't about padding a résumé with buzzwords; it's about dependable logic, clean architecture, and respecting the user's time."
              </p>
              <p>
                I am a third-year Computer Engineering student at Himalaya College of Engineering, Tribhuvan University. My work focuses on low-latency networking, real-time multiplayer systems, and context-grounded AI applications.
              </p>
              <p>
                Whether coordinating 19 staff members across an engineering exhibition or eliminating millisecond clock drift in WebSocket event loops, I approach technical problems with methodical rigor and practical focus.
              </p>
            </div>

            {/* Profile Specifications List */}
            <div className="p-6 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-4 font-mono text-xs">
              <span className="font-semibold text-fg uppercase tracking-wider pb-2 border-b border-hair">
                Profile Specifications
              </span>

              <div className="flex flex-col divide-y divide-hair">
                <div className="py-2.5 flex flex-col gap-0.5">
                  <span className="text-muted-2 uppercase text-[10px]">Academic Affiliation</span>
                  <span className="text-fg font-sans font-medium text-xs sm:text-sm">
                    Himalaya College of Engineering, Tribhuvan University
                  </span>
                </div>

                <div className="py-2.5 flex flex-col gap-0.5">
                  <span className="text-muted-2 uppercase text-[10px]">Degree Program</span>
                  <span className="text-fg font-sans font-medium text-xs sm:text-sm">
                    B.E. Computer Engineering (Expected April 2027)
                  </span>
                </div>

                <div className="py-2.5 flex flex-col gap-0.5">
                  <span className="text-muted-2 uppercase text-[10px]">Location &amp; Coordinates</span>
                  <span className="text-fg font-sans font-medium text-xs sm:text-sm">
                    Kathmandu, Nepal · 27.7172° N, 85.3240° E
                  </span>
                </div>

                <div className="py-2.5 flex flex-col gap-0.5">
                  <span className="text-muted-2 uppercase text-[10px]">Availability</span>
                  <span className="text-emerald-500 font-sans font-medium text-xs sm:text-sm">
                    Open to Technical Roles &amp; Engineering Internships
                  </span>
                </div>
              </div>
            </div>

            {/* Core Toolchain */}
            <div className="p-6 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-4 font-mono text-xs">
              <span className="font-semibold text-fg uppercase tracking-wider pb-2 border-b border-hair">
                Core Toolchain &amp; Stack
              </span>

              <div className="flex flex-col gap-3">
                {toolchain.map((group) => (
                  <div key={group.category} className="flex flex-col gap-1.5">
                    <span className="text-muted-2 uppercase text-[10px] tracking-wider">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-bg text-fg font-mono text-[11px] border border-hair"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Chapters 01 to 04 Timeline */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-hair border-t border-b border-hair">
            {chapters.map((ch, idx) => (
              <motion.article
                key={ch.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="py-8 first:pt-6 last:pb-6 flex flex-col gap-4 group"
              >
                {/* Chapter Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-semibold">CHAPTER {ch.number}</span>
                    <span className="text-hair-2">/</span>
                    <span className="text-muted">{ch.period}</span>
                  </div>
                  <span className="text-muted-2 text-[11px]">{ch.location}</span>
                </div>

                {/* Role & Org */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-fg group-hover:text-accent transition-colors">
                    {ch.role}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-muted">
                    {ch.org}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted text-xs sm:text-sm leading-relaxed font-sans">
                  {ch.description}
                </p>

                {/* Key Points Checklist */}
                <div className="flex flex-col gap-1.5 pt-1">
                  {ch.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs font-sans text-muted">
                      <span className="text-accent font-mono mt-0.5">—</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
