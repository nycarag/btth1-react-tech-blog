import React from 'react';
import { Tag, Sparkles } from 'lucide-react';

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onSelectCategory,
  posts 
}) {
  // Calculate count per category
  const getCategoryCount = (category) => {
    if (category === "Tất cả") return posts.length;
    return posts.filter(p => p.category === category).length;
  };

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center text-xs font-semibold text-canva-muted dark:text-slate-400 pl-1 pr-2 uppercase tracking-wider flex-shrink-0">
        <Tag className="w-3.5 h-3.5 mr-1 text-canva-blue" />
        <span>Chuyên mục:</span>
      </div>

      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = getCategoryCount(cat);

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`flex-shrink-0 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
              isActive
                ? "bg-canva-blue text-white shadow-md shadow-blue-600/25 ring-2 ring-canva-blue ring-offset-2 dark:ring-offset-slate-900"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-canva-border dark:border-slate-700 hover:border-canva-blue/50 hover:bg-blue-50/50 dark:hover:bg-slate-700"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
