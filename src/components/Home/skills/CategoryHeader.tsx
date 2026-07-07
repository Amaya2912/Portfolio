import { categoryConfig } from './constants';
import type { MainCategory } from './constants';


export default function CategoryHeader({ category }: { category: MainCategory }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-xl">
        {categoryConfig[category].emoji}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{categoryConfig[category].title}</h3>
        <p className="text-sm text-slate-400">{categoryConfig[category].description}</p>
      </div>
    </div>
  );
}


