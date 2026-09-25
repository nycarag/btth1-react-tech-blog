import React from 'react';
import { User, ShieldCheck, Code2, Heart, BookmarkCheck, FileText, ExternalLink } from 'lucide-react';

export default function HeroProfile({ totalPosts, totalLikes, totalBookmarks }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/80 border border-canva-border dark:border-slate-800 p-6 sm:p-8 shadow-sm">
      
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-canva-blue/5 dark:bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        
        {/* Author Bio */}
        <div className="flex items-start sm:items-center space-x-5">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-canva-blue to-blue-400 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-blue-500/25">
              NDK
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 bg-white dark:bg-slate-900 rounded-full">
              <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Online" />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-canva-slate dark:text-white tracking-tight">
                Nguyễn Đăng Khoa
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-canva-blue text-white shadow-xs">
                B23DCAT153
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                PTIT Khoa ATTT
              </span>
            </div>

            <p className="mt-1.5 text-sm text-canva-muted dark:text-slate-400 max-w-xl leading-relaxed">
              Sinh viên An Toàn Thông Tin đam mê phát triển Web Frontend và nghiên cứu bảo mật. Blog chia sẻ kiến thức môn <span className="font-semibold text-canva-blue">Lập Trình Web</span> (GV: Thầy Nguyễn Quang Huy).
            </p>

            {/* Tech Badges */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-canva-blue" />
                <span>React 18 & Vite</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span>Tailwind CSS</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Web App Security</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span>Canva Design System</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Highlight (Canva Style Cards) */}
        <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-canva-border dark:border-slate-800">
          <div className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-canva-border dark:border-slate-700 text-center min-w-[90px] shadow-xs">
            <div className="flex items-center justify-center text-canva-blue mb-1">
              <FileText className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-canva-slate dark:text-white">{totalPosts}</div>
            <div className="text-[11px] font-medium text-canva-muted dark:text-slate-400">Bài viết</div>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-canva-border dark:border-slate-700 text-center min-w-[90px] shadow-xs">
            <div className="flex items-center justify-center text-rose-500 mb-1">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <div className="text-xl font-bold text-canva-slate dark:text-white">{totalLikes}</div>
            <div className="text-[11px] font-medium text-canva-muted dark:text-slate-400">Yêu thích</div>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-canva-border dark:border-slate-700 text-center min-w-[90px] shadow-xs">
            <div className="flex items-center justify-center text-amber-500 mb-1">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <div className="text-xl font-bold text-canva-slate dark:text-white">{totalBookmarks}</div>
            <div className="text-[11px] font-medium text-canva-muted dark:text-slate-400">Đã lưu</div>
          </div>
        </div>

      </div>
    </section>
  );
}
