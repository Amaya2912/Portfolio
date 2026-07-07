import type { MainCategory } from './constants';

export default function SkillsFilter({categories, selectedCategory, onCategoryChange,}: {
  categories: (MainCategory | 'All')[]; selectedCategory: MainCategory | 'All'; onCategoryChange: (value: MainCategory | 'All') => void;}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'border-slate-300 bg-white text-slate-950'
                : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
