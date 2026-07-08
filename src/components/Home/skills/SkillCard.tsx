import { levelConfig } from './constants';
import type { Skill, SkillLevel } from './constants';

interface SkillCardProps {
  skill: Skill;
}

function LevelIndicator({ level }: { level: SkillLevel }) {
  const config = levelConfig[level];

  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={`${level}-${index}`}
            className={`inline-block h-2.5 w-2.5 rounded-full ${index < config.dots ? config.color : 'bg-slate-700'}`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-slate-300">{config.label}</span>
    </div>
  );
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="w-full box-border min-w-0 rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-4 md:px-6 lg:px-8 overflow-hidden transition-all hover:border-slate-600 hover:bg-slate-950/80">
      <div className="mb-3 flex justify-center text-4xl text-slate-300">{skill.icon}</div>
      <h4 className="text-center font-semibold text-white">{skill.name}</h4>
      <div className="mt-3">
        <LevelIndicator level={skill.level} />
      </div>
    </div>
  );
}
