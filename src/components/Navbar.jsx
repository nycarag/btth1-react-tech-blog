import React from 'react';
import { Search, PenLine, Moon, Sun, Github, Sparkles, BookOpen } from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  isDarkMode, 
  setIsDarkMode, 
  onOpenCreateModal 
}) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-canva-border dark:border-slate-800 transition-colors duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-canva-blue flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-canva-slate dark:text-white tracking-tight">
                  Khoa<span className="text-canva-blue">Dev</span>.Blog
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-canva-blue-light text-canva-blue dark:bg-blue-900/40 dark:text-blue-300">
                  PTIT BTH1
                </span>
              </div>
              <p className="text-[11px] text-canva-muted dark:text-slate-400 font-medium">
                Web Programming Lab • React Frontend
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-canva-muted dark:text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bài viết, công nghệ, tag..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 dark:bg-slate-800 text-canva-slate dark:text-slate-100 placeholder-canva-muted dark:placeholder-slate-400 rounded-xl border border-canva-border dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-canva-blue focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-canva-muted hover:text-canva-blue"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Create Post Button */}
            <button
              onClick={onOpenCreateModal}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold bg-canva-blue text-white hover:bg-canva-blue-dark active:scale-95 transition-all shadow-md shadow-blue-600/20"
            >
              <PenLine className="w-4 h-4" />
              <span className="hidden sm:inline">Viết bài mới</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-canva-muted hover:text-canva-blue hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* GitHub Public Link */}
            <a
              href="https://github.com/nycarag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-canva-muted hover:text-canva-blue hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-slate-300 transition-colors"
              title="GitHub Profile (nycarag)"
            >
              <Github className="w-5 h-5" />
            </a>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-canva-muted">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-gray-50 dark:bg-slate-800 text-canva-slate dark:text-slate-100 rounded-lg border border-canva-border dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-canva-blue text-sm"
            />
          </div>
        </div>

      </div>
    </header>
  );
}
