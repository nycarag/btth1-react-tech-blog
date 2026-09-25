import React from 'react';
import { Clock, Calendar, Heart, Bookmark, ArrowRight, MessageSquare, Tag } from 'lucide-react';

export default function BlogCard({ 
  post, 
  onOpenDetail, 
  onToggleLike, 
  onToggleBookmark,
  isBookmarked 
}) {
  const isBlueTheme = post.cardTheme === "blue";

  return (
    <article 
      onClick={() => onOpenDetail(post)}
      className={`group relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
        isBlueTheme
          ? "bg-canva-blue text-white border-transparent shadow-lg shadow-blue-600/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
          : "bg-white dark:bg-slate-800 text-canva-slate dark:text-slate-100 border-canva-border dark:border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-canva-blue/40"
      }`}
    >
      <div>
        {/* Top Meta: Category badge & Actions */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span 
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
              isBlueTheme
                ? "bg-white/20 text-white backdrop-blur-xs border border-white/20"
                : "bg-canva-blue-light text-canva-blue dark:bg-blue-900/40 dark:text-blue-300"
            }`}
          >
            {post.category}
          </span>

          <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Like Button */}
            <button
              onClick={() => onToggleLike(post.id)}
              className={`p-1.5 rounded-full transition-colors ${
                isBlueTheme
                  ? "hover:bg-white/20 text-white"
                  : "hover:bg-rose-50 text-slate-400 hover:text-rose-500 dark:hover:bg-slate-700"
              }`}
              title="Thích bài viết"
            >
              <Heart className={`w-4 h-4 ${post.isLiked ? "fill-rose-400 text-rose-400" : ""}`} />
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => onToggleBookmark(post.id)}
              className={`p-1.5 rounded-full transition-colors ${
                isBlueTheme
                  ? "hover:bg-white/20 text-white"
                  : "hover:bg-amber-50 text-slate-400 hover:text-amber-500 dark:hover:bg-slate-700"
              }`}
              title="Lưu bài viết"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-400 text-amber-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Title (Strict Inversion) */}
        <h2 className={`text-lg sm:text-xl font-bold leading-snug tracking-tight mb-2.5 line-clamp-2 group-hover:underline ${
          isBlueTheme
            ? "text-white"
            : "text-canva-blue dark:text-blue-400"
        }`}>
          {post.title}
        </h2>

        {/* Summary (Strict Inversion) */}
        <p className={`text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-normal ${
          isBlueTheme
            ? "text-blue-50/90"
            : "text-slate-600 dark:text-slate-300"
        }`}>
          {post.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] px-2 py-0.5 rounded-md font-mono ${
                isBlueTheme
                  ? "bg-blue-900/40 text-blue-100 border border-white/10"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info & Read CTA */}
      <div className={`pt-4 border-t flex items-center justify-between text-xs ${
        isBlueTheme
          ? "border-white/15 text-blue-100"
          : "border-slate-100 dark:border-slate-700/60 text-slate-400 dark:text-slate-400"
      }`}>
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </span>
          <span className="inline-flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {post.comments && post.comments.length > 0 && (
            <span className="inline-flex items-center space-x-1 text-xs">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{post.comments.length}</span>
            </span>
          )}
          <span className={`inline-flex items-center space-x-1 font-semibold text-xs group-hover:translate-x-1 transition-transform ${
            isBlueTheme ? "text-white" : "text-canva-blue dark:text-blue-400"
          }`}>
            <span>Đọc</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
