import { useState } from 'react';
import { categoryConfig, skills } from './constants';
import type { MainCategory } from './constants';
import { SkillCard } from './SkillCard';
import SkillsFilter from './SkillsFilter';
import CategoryHeader from './CategoryHeader';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | 'All'>('All');

  const categories: (MainCategory | 'All')[] = ['All', 'Frontend', 'Backend', 'Tools'];
  const allCategories = Object.keys(categoryConfig) as MainCategory[];

  const visibleSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="habilidades" className="rounded-3xl bg-black p-10 shadow-lg shadow-slate-950/40">
      <h2 className="text-3xl font-semibold text-white">What I use to build the web</h2>
      <p className="mt-2 text-slate-400">A stack focused on React and Node.js. These are my honest levels today.</p>

      <SkillsFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mt-12 space-y-12">
        {selectedCategory === 'All' ? (
          allCategories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            return (
              <div key={category}>
                <CategoryHeader category={category} />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
