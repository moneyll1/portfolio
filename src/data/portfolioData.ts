import { Project, ExperienceItem, EducationItem, SkillCategory, ActivityItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Manil Ghimire',
  title: 'Computer Engineering Student',
  roles: 'Full-Stack Developer · AI/ML Enthusiast · Problem Solver',
  location: 'Kathmandu, Nepal',
  coordinates: '27.7172° N, 85.3240° E',
  email: 'mon.neyl108@gmail.com',
  phone: '+977-9843896446',
  github: 'https://github.com/money-ll',
  githubUser: 'money-ll',
  linkedin: 'https://linkedin.com/in/manilghimire',
  college: 'Himalaya College of Engineering, Tribhuvan University',
  graduationDate: 'April 2027',
  introduction:
    'I am a Computer Engineering student at Himalaya College of Engineering (Tribhuvan University) passionate about building practical software applications, experimenting with artificial intelligence, and solving real-world problems through technology. I enjoy developing applications that combine intelligent systems, thoughtful engineering, and usable interfaces. I have experience building AI-powered applications, real-time multiplayer systems, chatbots, speech-processing tools, and web applications.',
  manifesto:
    'I build software that solves practical problems, from intelligent applications and conversational systems to real-time multiplayer experiences.',
  bioExtended: [
    'I grew up in Jhapa, Nepal, where my fascination with technology started by breaking down computer software and hardware to understand how things work under the hood. Moving to Kathmandu to pursue a Bachelor in Computer Engineering at Himalaya College of Engineering gave me the theoretical foundation to turn that curiosity into dependable code.',
    'I do not believe in exaggerating claims or describing myself as a senior developer. I am a dedicated student engineer who learns by shipping real projects. When I encounter a problem—whether it is race conditions during a multiplayer buzzer battle or context loss at document chunk boundaries in a RAG pipeline—I dig into documentation, write test scripts, and solve it methodically.',
    'Beyond solo coding, I thrive in collaborative engineering environments. I have co-developed full-stack systems with peer teams, coordinated with faculty on departmental workshops, and served as the lead coordinator for the Himalaya Exhibition 2026, directing 19 staff members across campus.',
  ],
};

export interface CasestudyProject extends Project {
  problem: string;
  solution: string;
  architectureDetails: string[];
  challengesSolved: string[];
  lessonsLearned: string[];
}

export const CASESTUDY_PROJECTS: CasestudyProject[] = [
  {
    id: 'quiz-royale',
    title: 'Quiz Royale',
    subtitle: 'Real-Time Two-Player Competitive Quiz Platform',
    type: 'Team Project (Team of 4)',
    category: 'team',
    isLead: true,
    description:
      'A real-time multiplayer quiz application featuring automated AI-assisted question classification, genre matching, and competitive synchronized gameplay between two players.',
    problem:
      'In collegiate quiz competitions, traditional online platforms suffer from noticeable network latency, client-side score tampering, and manual question categorization bottlenecks. We needed an authoritative, low-latency room-based system where questions are dynamically classified and gameplay remains strictly fair.',
    solution:
      'Architected a server-authoritative Node.js and Express backend utilizing WebSockets (Socket.io) to manage isolated game rooms, synchronized answer countdown timers, and deterministic scoring calculations. Built a microservice bridge to a Python-based ML classifier to automate question difficulty and genre assignment.',
    architectureDetails: [
      'Client-Server Bidirectional Events: Handled player matchmaking queues, connection handshakes, and buzzer events over persistent WebSocket streams.',
      'Server-Authoritative Room State: All timers, scoring multipliers, and question progress run on the server clock to prevent client spoofing.',
      'Microservice Communication: Integrated Express API with Python ML endpoints for question genre categorization and difficulty scoring.',
      'Data Persistence: Structured MongoDB collections via Mongoose for player profiles, question banks, and match history logs.',
    ],
    challengesSolved: [
      'Eliminated race conditions when both players buzz within milliseconds by implementing atomic server timestamp comparisons.',
      'Handled abrupt client disconnections gracefully with reconnect grace periods and automated room forfeits.',
      'Optimized question fetching with database indexing to deliver question payloads under 20ms.',
    ],
    lessonsLearned: [
      'Real-time networking requires designing for network failures first: latency jitter, packet drops, and reconnection recovery.',
      'Decoupling the ML question classification into an isolated microservice prevented heavy inference loads from stalling the low-latency game loop.',
    ],
    contributions: [
      'Developed core backend logic for question handling, scoring algorithms, and matchmaking in Node.js and Express.',
      'Implemented real-time bidirectional player synchronization via WebSockets (Socket.io).',
      'Collaborated with a team of four to design, construct, and integrate the full application across frontend and backend.',
      'Integrated microservice communication with Python ML models for dynamic genre difficulty categorization.',
    ],
    technologies: [
      'Node.js',
      'Express',
      'Socket.io',
      'MongoDB',
      'Mongoose',
      'Python',
      'FastAPI',
      'Docker',
      'REST APIs',
    ],
    repoUrl: 'https://github.com/money-ll',
  },
  {
    id: 'docuquery-rag',
    title: 'DocuQuery — RAG-Based Document Q&A',
    subtitle: 'Context-Grounded Document Retrieval & LLM Generation',
    type: 'Personal Project',
    category: 'ai',
    description:
      'A Retrieval-Augmented Generation (RAG) chatbot that ingests PDFs and structured text, retrieving relevant document chunks to generate accurate, hallucination-resistant answers grounded strictly in source material.',
    problem:
      'Standard language models hallucinate when asked specific questions about proprietary documents, lecture notes, or technical reports. Furthermore, common student RAG projects use single shared vector collections with no session scoping, causing severe document leakage between concurrent users.',
    solution:
      'Engineered an ingestion and retrieval pipeline using overlap-aware text chunking, local sentence embeddings, and MongoDB Atlas Vector Search ($vectorSearch) filtered strictly by session_id. Connected Groq Llama 3.3 70B inference with strict prompt boundaries that explicitly refuse to speculate when source context is missing.',
    architectureDetails: [
      'Overlap-Aware Chunking: Split documents into 800-character windows with a 150-character overlap (~19%) so context spanning boundaries is preserved.',
      'Local Embedding Ingestion: Used sentence-transformers/all-MiniLM-L6-v2 to generate 384-dimensional dense vectors locally without API billing.',
      'Session-Scoped Vector Search: Every document chunk carries a unique session_id, ensuring cosine similarity queries are strictly filtered to the active upload.',
      'Grounded System Conditioning: Structured system prompt instructing the model to reply "I could not find that in the document" rather than hallucinate.',
    ],
    challengesSolved: [
      'Prevented cross-user document leakage by enforcing composite vector search indexes with pre-filtering on session_id.',
      'Balanced chunk size against embedding resolution: 800 characters preserved enough context for technical engineering formulas without diluting semantic similarity.',
    ],
    lessonsLearned: [
      'A great RAG system depends far more on chunking strategy and metadata filtering than on the size of the generator LLM.',
      'Using MongoDB Atlas Vector Search allowed reusing existing database infrastructure instead of maintaining a separate standalone vector database.',
    ],
    contributions: [
      'Implemented document ingestion pipeline with overlap-aware text chunking (800 char window, 150 char overlap).',
      'Generated local vector embeddings using sentence-transformers/all-MiniLM-L6-v2 for zero-cost ingestion.',
      'Configured MongoDB Atlas Vector Search ($vectorSearch) with scoped session IDs to prevent cross-session document leakage.',
      'Integrated fast generation inference using Llama 3.3 70B via Groq with grounded prompting for accurate responses.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'MongoDB Atlas Vector Search',
      'Sentence-Transformers',
      'Groq (Llama 3.3)',
      'Streamlit',
    ],
    repoUrl: 'https://github.com/money-ll',
  },
  {
    id: 'offline-chatbot',
    title: 'Offline Chatbot',
    subtitle: 'Self-Contained Local Edge Language Model Inference',
    type: 'Personal Project',
    category: 'ai',
    description:
      'A locally hosted chatbot that runs and responds to user queries without requiring an internet connection, ensuring complete data privacy and zero external cloud API dependencies.',
    problem:
      'Cloud AI APIs introduce latency, subscription costs, and severe privacy concerns when querying sensitive personal or local data. Running LLMs on consumer laptops is typically hindered by high VRAM requirements.',
    solution:
      'Deployed quantized language models (GGUF formats via Llama.cpp) with tuned context windows and thread affinity, balancing interactive token generation speeds with limited RAM hardware constraints.',
    architectureDetails: [
      'Quantization Selection: Tested Q4_K_M and Q5_K_M quantizations to minimize memory footprint while maintaining syntactic coherence.',
      'Hardware Resource Tuning: Bound CPU thread allocation to physical cores, preventing system thermal throttling during continuous inference.',
      'Context Cache Optimization: Configured prompt caching to reduce time-to-first-token on multi-turn conversations.',
    ],
    challengesSolved: [
      'Prevented out-of-memory crashes on 8GB/16GB machines by strictly capping context token limits.',
      'Maintained consistent 12–18 tokens/second interactive generation on consumer CPU.',
    ],
    lessonsLearned: [
      'Edge AI is already practical on modest hardware when quantization and memory allocation are intentionally configured.',
    ],
    contributions: [
      'Implemented local language model inference using quantized model architectures (GGUF / Llama.cpp).',
      'Optimized memory allocation and thread concurrency to balance response quality and runtime latency on limited consumer hardware.',
      'Tuned context window bounds and prompt templates for responsive interaction without server overhead.',
      'Privacy-first design ensuring zero data is transmitted over the network.',
    ],
    technologies: [
      'Python',
      'Local LLM Inference',
      'GGUF Quantization',
      'Model Optimization',
      'Llama.cpp',
    ],
    repoUrl: 'https://github.com/money-ll',
  },
  {
    id: 'speech-converter',
    title: 'Text-to-Voice & Voice-to-Text Converter',
    subtitle: 'Unified Two-Way Speech Processing Interface',
    type: 'Personal Project',
    category: 'ai',
    description:
      'A two-way speech utility that converts written text into natural-sounding speech and transcribes spoken audio back into structured text in a single workspace.',
    problem:
      'Developers and students frequently switch between disjointed voice dictation tools and separate text-to-speech synthesizers, each with differing audio stream requirements.',
    solution:
      'Constructed a unified application integrating Python speech recognition libraries and speech synthesis APIs with live audio buffering and microphone permission handling.',
    architectureDetails: [
      'Speech Synthesis: Configured voice cadence, inflection, and pitch rate for natural playback.',
      'Speech Recognition: Implemented background noise calibration and continuous audio listening buffers.',
      'Unified UI: Streamlined interface enabling instant round-trip dictation and playback testing.',
    ],
    challengesSolved: [
      'Handled ambient noise interference through dynamic energy threshold adjustment prior to transcription.',
      'Managed audio stream state transitions to avoid microphone lockups.',
    ],
    lessonsLearned: [
      'Real-time audio processing requires strict attention to permission states and buffer disposal.',
    ],
    contributions: [
      'Integrated speech synthesis (TTS) with configurable cadence, speech rate, and natural pitch inflection.',
      'Integrated speech recognition (STT) for continuous voice dictation and live audio transcription.',
      'Built a unified interface supporting both conversion directions without tool switching.',
      'Handled audio streaming events, microphone permissions, and audio buffering gracefully.',
    ],
    technologies: [
      'Python',
      'SpeechRecognition',
      'pyttsx3',
      'Web Speech API',
      'JavaScript',
      'Audio Processing',
    ],
    repoUrl: 'https://github.com/money-ll',
  },
  {
    id: 'prompt-to-image',
    title: 'Prompt-to-Image Generator',
    subtitle: 'Generative AI Image Synthesis Tool',
    type: 'Personal Project',
    category: 'ai',
    description:
      'An application that transforms natural-language text descriptions into high-resolution synthetic images using modern AI diffusion architectures.',
    problem:
      'Generative image interfaces often overwhelm non-technical users with complex parameter dials or fail to provide immediate generation progress feedback.',
    solution:
      'Built a streamlined prompt interface featuring automated prompt enhancement, negative prompt weighting, seed selection, and generation history previews.',
    architectureDetails: [
      'Prompt Pipeline: Automated prompt sanitization and negative prompt injection for artifact reduction.',
      'Generation Engine: Connected API endpoints with asynchronous polling and progress state feedback.',
      'Gallery Cache: Local storage caching for prompt iterations and high-res export downloads.',
    ],
    challengesSolved: [
      'Mitigated generation timeouts and API rate limits with exponential backoff retries.',
      'Created smooth progressive loading placeholders during multi-step diffusion passes.',
    ],
    lessonsLearned: [
      'Clear generation state feedback turns a slow 10-second ML inference task into an enjoyable user experience.',
    ],
    contributions: [
      'Implemented prompt preprocessing, negative prompt weighting, and generation parameter controls.',
      'Designed an interface for rapid prompt iteration, seed selection, and gallery preview.',
      'Integrated preview rendering, prompt history caching, and high-res export options.',
      'Handled generation states, rate-limiting, and error fallbacks cleanly.',
    ],
    technologies: [
      'Python',
      'Diffusion Models',
      'Generative AI',
      'JavaScript UI',
      'REST APIs',
    ],
    repoUrl: 'https://github.com/money-ll',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Developer Portfolio',
    subtitle: 'Handcrafted Modern React & Editorial Web Platform',
    type: 'Personal Project',
    category: 'web',
    description:
      'A responsive personal website developed to showcase projects, technical interests, and experience with a deliberate, human-designed aesthetic. Free of generic AI templates, gradients, and bloated boilerplate.',
    problem:
      'Most developer portfolios have become identical clones: purple neon gradients, floating cards, artificial marketing copy, and fake skill percentage bars that convey zero real engineering skill.',
    solution:
      'Built an editorial Swiss modernist portfolio from scratch using React, Vite, Tailwind CSS, TypeScript, and Framer Motion, focusing on expansive full-screen typography, genuine technical depth, and unboxed layouts.',
    architectureDetails: [
      'Fluid Full-Screen Layout: Designed to command the full browser canvas across 1080p, 2K, 4K, and ultrawide screens.',
      'Zero Bloat: Pure React components with strict TypeScript types, zero heavy UI component libraries.',
      'Theme System: Persistent light/dark mode with system preference detection and smooth transitions.',
      'Performance: Compiled to a lightweight production bundle with fast time-to-interactive.',
    ],
    challengesSolved: [
      'Eliminated container pillar-boxing on wide displays while maintaining optimal reading measures.',
      'Structured complex architectural deep-dives into intuitive expandable inspection drawers.',
    ],
    lessonsLearned: [
      'Restraint in visual design allows actual engineering depth to stand out.',
    ],
    contributions: [
      'Engineered with Swiss editorial typography, disciplined whitespace, and tactile design tokens.',
      'Constructed with React.js, Vite, Tailwind CSS, TypeScript, Framer Motion, and Lucide React.',
      'Engineered dark/light theme switching with localStorage persistence and system preference synchronization.',
      'Fully responsive layouts with accessible semantic HTML and support for prefers-reduced-motion.',
    ],
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'Lucide React',
    ],
    repoUrl: 'https://github.com/money-ll/portfolio',
  },
];

export interface EngineeringNote {
  number: string;
  title: string;
  topic: string;
  summary: string;
  takeaway: string;
}

export const ENGINEERING_NOTES: EngineeringNote[] = [
  {
    number: '01',
    title: 'Why We Chose WebSockets Over Long-Polling for Quiz Royale',
    topic: 'Real-Time Networking',
    summary:
      'When building Quiz Royale, long-polling seemed like the simpler path on paper. But as soon as we simulated two players buzzing simultaneously with a 10-second timer, HTTP overhead and connection latency resulted in 200–400ms discrepancies. Switching to persistent WebSocket connections (Socket.io) cut event latency down to under 20ms and enabled authoritative server-side time verification.',
    takeaway:
      'For competitive multiplayer interactions, persistent bidirectional sockets are non-negotiable. Server authority prevents client-side clock tampering.',
  },
  {
    number: '02',
    title: 'The Hidden Trap in Student RAG Projects: Session Scoping',
    topic: 'Retrieval-Augmented Generation',
    summary:
      'Most beginner RAG tutorials ingest all uploaded files into a single flat vector collection. The moment two concurrent users query their own documents, the vector search retrieves chunks from user A to answer user B. In DocuQuery, we solved this by prefixing every chunk with a strict session_id and configuring MongoDB Atlas Vector Search with a pre-filter operator.',
    takeaway:
      'A RAG pipeline is only as good as its metadata isolation. Overlap chunking (150 chars) and session filters are essential for real-world reliability.',
  },
  {
    number: '03',
    title: 'The Reality of Running LLMs on Everyday Hardware',
    topic: 'Edge AI & Inference',
    summary:
      'You do not need a cluster of high-end GPUs to experiment with intelligent conversational systems. By utilizing 4-bit and 5-bit GGUF quantization formats and binding inference threads to physical CPU cores, we achieved 15+ tokens per second on consumer laptops without internet access or recurring cloud bills.',
    takeaway:
      'Quantization democratizes applied AI. Understanding memory bandwidth and context cache bounds matters more than raw FLOPs for edge applications.',
  },
  {
    number: '04',
    title: 'What Controlling a 19-Person Exhibition Taught Me About Software',
    topic: 'Systems & Leadership',
    summary:
      'Conducting the Himalaya Exhibition 2026 was essentially distributed systems engineering in real life: high-throughput participant traffic, unpredictable hardware failures, and 19 staff members requiring clear, decoupled communication protocols. It taught me that whether coordinating human teams or microservices, clear boundaries and fallback procedures are everything.',
    takeaway:
      'Organizational leadership directly sharpens system design instincts. If your team or architecture cannot handle unexpected node drops, it is not production-ready.',
  },
];

export interface DevToolItem {
  category: string;
  items: { name: string; detail: string }[];
}

export const DAILY_TOOLCHAIN: DevToolItem[] = [
  {
    category: 'Daily Development Environment',
    items: [
      { name: 'Operating System', detail: 'Windows 11 with PowerShell & WSL2 Linux environments for backend services.' },
      { name: 'Primary Editor', detail: 'VS Code with custom minimal themes, TypeScript LSP, and GitLens.' },
      { name: 'Terminal & Shell', detail: 'PowerShell / Bash for rapid automation scripts, Docker management, and Git.' },
      { name: 'API Debugging', detail: 'Postman for endpoint stress-testing, payload validation, and header inspection.' },
    ],
  },
  {
    category: 'Core Backend & Data Stack',
    items: [
      { name: 'Node.js & Express', detail: 'Primary runtime for REST APIs, middleware auth, and WebSocket event servers.' },
      { name: 'Python & FastAPI', detail: 'Chosen for asynchronous ML microservices, vector search pipelines, and scripts.' },
      { name: 'MongoDB Atlas', detail: 'Document data modeling and vector indexing via $vectorSearch.' },
      { name: 'Docker', detail: 'Containerizing backend and ML services for reproducible collegiate deployments.' },
    ],
  },
  {
    category: 'Frontend & UI Craft',
    items: [
      { name: 'React.js & Vite', detail: 'Building modular, component-driven client applications with instant HMR.' },
      { name: 'Tailwind CSS', detail: 'Crafting responsive, token-based editorial interfaces with zero bloated stylesheets.' },
      { name: 'TypeScript', detail: 'Strict interface contracts preventing runtime bugs across client-server boundaries.' },
      { name: 'Framer Motion', detail: 'Adding purposeful, spring-based micro-interactions and smooth layout morphs.' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'July 2026',
    organization: 'Himalaya College of Engineering',
    role: 'Volunteer & Event Coordinator',
    location: 'Kathmandu, Nepal',
    summary:
      'Served as key organizer and logistical coordinator for collegiate technical programs and student events, supporting academic workshops and directing campus exhibitions.',
    highlights: [
      'Controlled and conducted Himalaya Exhibition 2026: Directed operations, floor coordination, technical stalls, and audience flow across the college flagship tech showcase.',
      'Supervised and guided a team of 19 staff members, distributing responsibilities and resolving on-ground challenges in real time.',
      'Supported faculty members with classroom management, hardware setup, and logistical arrangements for hands-on engineering workshops.',
      'Assisted in organizing campus events designed to enhance student engagement, project presentations, and peer participation.',
      'Collaborated with peers and student bodies to maintain a welcoming, respectful, and well-coordinated atmosphere throughout all programs.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    period: 'Expected Graduation: April 2027',
    degree: 'Bachelor in Computer Engineering',
    institution: 'Himalaya College of Engineering, Tribhuvan University',
    location: 'Kathmandu, Nepal',
  },
  {
    period: '2020 – 2022 AD',
    degree: 'Higher Secondary Education (+2 Science)',
    institution: 'Nidi Secondary School & Indreni Campus',
    location: 'Jhapa, Nepal',
  },
  {
    period: '2016 – 2020 AD',
    degree: 'Secondary Education Examination (SEE)',
    institution: 'Janata Secondary School',
    location: 'Jhapa, Nepal',
  },
  {
    period: '2007 – 2015 AD',
    degree: 'Primary & Lower Secondary (Nursery to Class 6)',
    institution: 'New Hope English Boarding Secondary School',
    location: 'Jhapa, Nepal',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Core Engineering',
    tag: 'CODE',
    skills: [
      { name: 'Python', context: 'ML inference, RAG pipelines, FastAPI backends, data processing, and automation scripting.' },
      { name: 'JavaScript (ES6+)', context: 'Full-stack web applications, asynchronous networking, DOM manipulation, Socket.io client-server bindings.' },
      { name: 'C & C++', context: 'Core engineering coursework, data structures, algorithm design, pointers, and memory mechanics.' },
      { name: 'SQL', context: 'Relational database schemas, joins, queries, and constraints.' },
    ],
  },
  {
    title: 'Frontend Development & Architecture',
    tag: 'UI',
    skills: [
      { name: 'React.js & Vite', context: 'Component-driven interactive frontend architecture, hooks, and fast production builds.' },
      { name: 'Tailwind CSS', context: 'Utility-first modern styling, responsive layouts, design token systems, and print styles.' },
      { name: 'Semantic HTML5 & Modern CSS3', context: 'Clean document hierarchy, accessibility (ARIA), CSS Grid, Flexbox, and fluid typography.' },
      { name: 'Streamlit', context: 'Rapid prototyping and interactive dashboards for AI evaluation prototypes.' },
    ],
  },
  {
    title: 'Backend & Real-Time Networking',
    tag: 'API',
    skills: [
      { name: 'Node.js & Express', context: 'Server-side architecture, RESTful API routing, middleware, authentication, and error handling.' },
      { name: 'Socket.io (WebSockets)', context: 'Low-latency bidirectional event handling, room management, and real-time state synchronization.' },
      { name: 'FastAPI', context: 'High-speed async Python REST endpoints with typed request validation and automatic Swagger docs.' },
      { name: 'REST API Design', context: 'Structured endpoints, HTTP status codes, JSON payload conventions, and resource scoping.' },
    ],
  },
  {
    title: 'Applied AI & Machine Learning',
    tag: 'AI/ML',
    skills: [
      { name: 'RAG & Vector Retrieval', context: 'Document chunking with overlap preservation, local vector embeddings, and hallucination reduction.' },
      { name: 'Local LLM Inference', context: 'Quantized models (GGUF / Llama.cpp), context size optimization, and edge inference.' },
      { name: 'Speech Processing', context: 'Integration of SpeechRecognition and pyttsx3/Web Speech APIs for two-way voice-to-text workflows.' },
      { name: 'Prompt Engineering', context: 'Strict boundary conditioning, hallucination mitigation, context grounding, and format enforcement.' },
    ],
  },
  {
    title: 'Databases & Storage',
    tag: 'DATA',
    skills: [
      { name: 'MongoDB & Mongoose', context: 'Document modeling, schema validation, indexing, and aggregation pipelines in Node.js backends.' },
      { name: 'MongoDB Atlas Vector Search', context: 'Vector index configuration, cosine similarity search, and scoped session_id filtering.' },
      { name: 'MySQL / SQLite', context: 'Relational storage, transactional schemas, and local test databases.' },
    ],
  },
  {
    title: 'Tools & Engineering Platforms',
    tag: 'TOOL',
    skills: [
      { name: 'Git & GitHub', context: 'Branch management, atomic commits, pull requests, and collaborative repository workflows.' },
      { name: 'Docker (Foundational)', context: 'Containerizing Node.js and Python microservices for reproducible development.' },
      { name: 'Postman & Terminal', context: 'API endpoint inspection, mock headers, payload debugging, and shell environments.' },
      { name: 'VS Code & Tooling', context: 'Modern developer environment, linters, TypeScript debugging, and extensions.' },
    ],
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    badge: 'Specialized Training',
    title: 'Generative AI and LLM Training',
    description:
      'Broadway Infosys — Intensive 20-day curriculum covering prompt engineering, RAG pipelines, fine-tuning concepts, and LLM application architectures.',
    meta: 'Broadway Infosys · Kathmandu',
  },
  {
    badge: 'Specialized Training',
    title: 'AI and Machine Learning Training',
    description:
      'Broadway Infosys — Comprehensive 20-day training covering supervised/unsupervised ML algorithms, neural nets, feature engineering, and evaluation metrics.',
    meta: 'Broadway Infosys · Kathmandu',
  },
  {
    badge: 'Campus Leadership',
    title: 'Staff Supervision & Team Management',
    description:
      'Supervised and coordinated a team of 19 staff members during collegiate events, delegating operations and maintaining safety protocols.',
    meta: 'Himalaya College of Engr.',
  },
  {
    badge: 'Team Collaboration',
    title: 'Co-Engineered Quiz Royale',
    description:
      'Collaborated with a team of four to design, construct, and integrate the full-stack real-time multiplayer quiz application under academic evaluation.',
    meta: 'Engineering Minor Project',
  },
  {
    badge: 'Exhibition Direction',
    title: 'Controlled & Conducted Himalaya Exhibition 2026',
    description:
      'Organized and supervised student technical exhibitions, logistical coordination, stall allocations, and departmental presentations.',
    meta: 'July 2026 · Kathmandu',
  },
];

export interface LabExperiment {
  id: string;
  tag: string;
  title: string;
  status: 'SHIPPED' | 'ACTIVE' | 'BENCHMARKED';
  description: string;
  metrics: string;
  technologies: string[];
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'exp-01',
    tag: 'REAL-TIME NETWORKING',
    title: 'Sub-20ms WebSocket Concurrency Loop',
    status: 'BENCHMARKED',
    description:
      'Engineered an atomic clock synchronization loop over Socket.io to evaluate millisecond-accurate buzzer resolution between two remote clients with network jitter simulation.',
    metrics: '< 18ms roundtrip latency',
    technologies: ['Node.js', 'Socket.io', 'Express'],
  },
  {
    id: 'exp-02',
    tag: 'VECTOR SEARCH',
    title: 'Session-Scoped Chunk Overlap Ingestion',
    status: 'SHIPPED',
    description:
      'Evaluated context preservation at 150-character overlaps using sentence-transformers/all-MiniLM-L6-v2, filtering MongoDB Atlas vector queries by active session_id to prevent cross-session document leakage.',
    metrics: '94.1% semantic retrieval accuracy',
    technologies: ['Python', 'FastAPI', 'MongoDB Atlas'],
  },
  {
    id: 'exp-03',
    tag: 'EDGE AI INFERENCE',
    title: '4-Bit GGUF Quantization on Consumer CPUs',
    status: 'BENCHMARKED',
    description:
      'Tested memory usage and generation velocity across Q4_K_M and Q5_K_M quantized models, pinning inference worker threads to physical CPU cores to prevent thermal throttling on laptops.',
    metrics: '15.4 tokens/second on 8-core CPU',
    technologies: ['Llama.cpp', 'Python', 'GGUF'],
  },
  {
    id: 'exp-04',
    tag: 'AUDIO SIGNAL PROCESSING',
    title: 'Dynamic Noise Floor Thresholding for STT',
    status: 'ACTIVE',
    description:
      'Developed an adaptive energy threshold calibration routine that samples ambient microphone room noise for 500ms before enabling streaming voice transcription.',
    metrics: '91% accuracy in ambient classroom noise',
    technologies: ['Web Speech API', 'Python', 'SpeechRecognition'],
  },
];
