import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Check, Copy, MapPin, Mail, Phone, Github, Linkedin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [conversationType, setConversationType] = useState<string>('Internship / Technical Role');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mission: '',
  });
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const conversationTypes = [
    'Internship / Technical Role',
    'Real-Time / Full-Stack Build',
    'Applied AI / Vector Pipeline',
    'General Engineering Inquiry',
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.mission.trim()) {
      setStatus({
        type: 'error',
        message: '[ERR] Incomplete input: Please enter your name, email, and project scope.',
      });
      return;
    }

    const subject = encodeURIComponent(
      `[Portfolio Inquiry: ${conversationType}] — from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Protocol: init-collab\nScope: ${conversationType}\nSender: ${formData.name.trim()} (${formData.email.trim()})\n\nMission Brief:\n${formData.mission.trim()}\n\n---\nDispatched via Manil Ghimire Portfolio`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatus({
      type: 'success',
      message: '[SUCCESS] Formulated payload. Launching mail client...',
    });

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-hair">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Terminal // Structured Intake
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg">
              Initiate <span className="heading-highlight">collaboration.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl font-normal mt-1">
              Have an engineering opportunity, an internship opening, or a technical problem? Send a structured transmission below.
            </p>
          </div>

          <div className="font-mono text-xs text-muted flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kathmandu Node Active</span>
          </div>
        </div>

        {/* 2-Column Split: Terminal on Left, Direct Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Terminal Intake Interface */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden bg-bg-2 border border-hair shadow-sm font-mono text-xs sm:text-sm">
            
            {/* Terminal Window Header Bar */}
            <div className="px-5 py-3.5 bg-bg border-b border-hair flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-muted text-xs pl-2 hidden sm:inline">
                  guest@manil: ~ (bash)
                </span>
              </div>
              <span className="text-[11px] text-muted-2 uppercase tracking-wider">
                init-collab v2.0
              </span>
            </div>

            {/* Terminal Prompt Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-6 text-fg">
              
              {/* ASCII / Command Greeting */}
              <div className="flex flex-col gap-1 pb-3 border-b border-hair text-muted text-xs">
                <div>Manil Ghimire Terminal — Kathmandu Node [27.7172° N, 85.3240° E]</div>
                <div>Structured intake protocol initialized. Ready for mission parameters.</div>
                <div className="text-accent pt-1 font-semibold">
                  guest@manil:~$ init-collab
                </div>
              </div>

              {/* Field 1: Conversation Type Pills */}
              <div className="flex flex-col gap-2.5">
                <label className="text-muted text-xs flex items-center gap-2">
                  <span className="text-accent">[?]</span>
                  <span>What kind of conversation is this?</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {conversationTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setConversationType(type)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        conversationType === type
                          ? 'bg-fg text-bg border-fg font-semibold'
                          : 'bg-bg text-muted border-hair hover:text-fg hover:border-hair-2'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2: Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-muted text-xs flex items-center gap-2">
                  <span className="text-accent">[?]</span>
                  <span>What is your name?</span>
                </label>
                <div className="flex items-center gap-2 bg-bg rounded-lg border border-hair px-3.5 py-2.5 focus-within:border-accent transition-colors">
                  <span className="text-muted-2">&gt;</span>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe / Engineering Recruiter"
                    className="w-full bg-transparent text-fg placeholder-muted-2 outline-none text-xs sm:text-sm font-mono"
                  />
                </div>
              </div>

              {/* Field 3: Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-muted text-xs flex items-center gap-2">
                  <span className="text-accent">[?]</span>
                  <span>What is your email address?</span>
                </label>
                <div className="flex items-center gap-2 bg-bg rounded-lg border border-hair px-3.5 py-2.5 focus-within:border-accent transition-colors">
                  <span className="text-muted-2">&gt;</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-transparent text-fg placeholder-muted-2 outline-none text-xs sm:text-sm font-mono"
                  />
                </div>
              </div>

              {/* Field 4: Mission Brief */}
              <div className="flex flex-col gap-1.5">
                <label className="text-muted text-xs flex items-center gap-2">
                  <span className="text-accent">[?]</span>
                  <span>Brief mission description / project scope:</span>
                </label>
                <div className="flex items-start gap-2 bg-bg rounded-lg border border-hair px-3.5 py-2.5 focus-within:border-accent transition-colors">
                  <span className="text-muted-2 mt-0.5">&gt;</span>
                  <textarea
                    rows={4}
                    value={formData.mission}
                    onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                    placeholder="We have an internship opening / real-time WebSocket project starting next month..."
                    className="w-full bg-transparent text-fg placeholder-muted-2 outline-none resize-y text-xs sm:text-sm font-mono"
                  />
                </div>
              </div>

              {/* Status Notice */}
              {status.message && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono ${
                    status.type === 'error'
                      ? 'bg-red-500/10 text-red-500 border border-red-500/20'
                      : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="primary-cta group"
                >
                  <span>Dispatch mission →</span>
                </button>
                <span className="text-muted text-[11px] font-mono hidden sm:inline">
                  Direct dispatch to mon.neyl108@gmail.com
                </span>
              </div>

            </form>
          </div>

          {/* Right Column: Direct Channels & Verified Coordinates */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="p-6 rounded-2xl bg-bg-2 border border-hair flex flex-col gap-5">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                Direct Channels
              </span>

              <div className="flex flex-col gap-3 font-mono text-xs">
                
                {/* Email Channel */}
                <div className="p-3.5 rounded-xl bg-bg border border-hair flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <span className="truncate text-fg">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    aria-label="Copy email"
                    className="p-1.5 rounded hover:bg-bg-2 text-muted hover:text-fg transition-colors shrink-0"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone Channel */}
                <div className="p-3.5 rounded-xl bg-bg border border-hair flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-fg">{PERSONAL_INFO.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    aria-label="Copy phone"
                    className="p-1.5 rounded hover:bg-bg-2 text-muted hover:text-fg transition-colors shrink-0"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-bg border border-hair flex items-center gap-2.5 text-fg">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Kathmandu, Nepal ({PERSONAL_INFO.coordinates})</span>
                </div>

              </div>

              {/* Profiles */}
              <div className="flex flex-col gap-2 pt-2 border-t border-hair font-mono text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-bg text-fg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>github/money-ll</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-bg text-fg transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin/manilghimire</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                </a>
              </div>

            </div>

            {/* Academic & Response Guarantee */}
            <div className="p-5 rounded-2xl bg-bg-2 border border-hair flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-fg font-sans">
                  Active Response Time
                </span>
                <span className="text-muted leading-relaxed font-sans">
                  Typically replies within 24 hours for internship opportunities, technical collaborations, and project evaluations.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
