export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  category: 'team' | 'ai' | 'web';
  description: string;
  contributions: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  isLead?: boolean;
}

export interface ExperienceItem {
  period: string;
  organization: string;
  role: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
}

export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  title: string;
  tag: string;
  skills: SkillItem[];
}

export interface ActivityItem {
  badge: string;
  title: string;
  description: string;
  meta: string;
}

