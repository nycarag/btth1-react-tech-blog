import React from 'react';
import { BookOpen, Heart, RefreshCw, Github, ExternalLink } from 'lucide-react';

export default function Footer({ onResetPosts }) {
  return (
    <footer className="mt-16 border-t border-canva-border dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-canva-blue text-white flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-canva-slate dark:text-white">
                Báo Cáo Thực Hành 1 • Lập Trình Giao Diện React
              </p>
              <p className="text-xs text-canva-muted dark:text-slate-400">
                Học phần: Lập Trình Web • GV: Thầy Nguyễn Quang Huy • PTIT 2026
              </p>
            </div>
          </div>

          {/* Middle Author */}
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Sinh viên thực hiện: <span className="font-semibold text-canva-blue dark:text-blue-400">Nguyễn Đăng Khoa</span> (MSV: <span className="font-mono font-medium">B23DCAT153</span>)
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onResetPosts}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-canva-blue hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors border border-dashed border-slate-300 dark:border-slate-700"
              title="Khôi phục lại danh sách bài viết mẫu ban đầu"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Khôi phục dữ liệu gốc</span>
            </button>

            <a
              href="https://github.com/nycarag"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-canva-muted hover:text-canva-blue transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-center text-[11px] text-canva-muted">
          Áp dụng Quy chuẩn Thiết kế Canva Presentation Standard (Blue & White Card UI, Strict Color Inversion, Montserrat & Consolas typography).
        </div>
      </div>
    </footer>
  );
}
