import { createElement, type ReactNode } from 'react';

import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiVite,
  SiNextdotjs,
} from 'react-icons/si';

export type SkillLevel = 'Solid' | 'Comfortable' | 'Learning';
export type MainCategory = 'Frontend' | 'Backend' | 'Tools';

export interface Skill {
  id: number;
  name: string;
  icon: ReactNode;
  level: SkillLevel;
  category: MainCategory;
}

export const skills: Skill[] = [
  { id: 1, name: 'HTML', icon: createElement(SiHtml5), level: 'Solid', category: 'Frontend' },
  { id: 2, name: 'CSS', icon: createElement(SiCss), level: 'Solid', category: 'Frontend' },
  { id: 3, name: 'JavaScript', icon: createElement(SiJavascript), level: 'Solid', category: 'Frontend' },
  { id: 4, name: 'React', icon: createElement(SiReact), level: 'Comfortable', category: 'Frontend' },
  { id: 13, name: 'Next.js', icon: createElement(SiNextdotjs), level: 'Learning', category: 'Frontend' },

  { id: 5, name: 'Tailwind CSS', icon: createElement(SiTailwindcss), level: 'Solid', category: 'Frontend' },

  { id: 6, name: 'Express', icon: createElement(SiExpress), level: 'Solid', category: 'Backend' },
  { id: 7, name: 'MongoDB', icon: createElement(SiMongodb), level: 'Comfortable', category: 'Backend' },
  { id: 8, name: 'PostgreSQL', icon: createElement(SiPostgresql), level: 'Solid', category: 'Backend' },

  { id: 9, name: 'Git', icon: createElement(SiGit), level: 'Solid', category: 'Tools' },
  { id: 10, name: 'Figma', icon: createElement(SiFigma), level: 'Learning', category: 'Tools' },
  { id: 11, name: 'Vite', icon: createElement(SiVite), level: 'Solid', category: 'Tools' },
  { id: 12, name: 'Docker', icon: createElement(SiDocker), level: 'Learning', category: 'Tools' },
];

export const levelConfig: Record<SkillLevel,{ color: string; dots: number; label: string }> = {
  Solid: { color: 'bg-green-500', dots: 4, label: 'Advanced' },
  Comfortable: { color: 'bg-yellow-500', dots: 3, label: 'Intermediate' },
  Learning: { color: 'bg-orange-500', dots: 2, label: 'Learning' },
};

export const categoryConfig: Record<MainCategory,{ title: string; description: string; emoji: string }> = {
  Frontend: {
    title: 'Frontend Development',
    description: 'Creating modern and responsive user interfaces',
    emoji: '💻',
  },
  Backend: {
    title: 'Backend & Databases',
    description: 'Server-side development and data management',
    emoji: '🖥️',
  },
  Tools: {
    title: 'Tools',
    description: 'Tools and platforms that I use',
    emoji: '🛠️',
  },
};
