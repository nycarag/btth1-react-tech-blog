import React, { useState } from 'react';
import { X, Calendar, Clock, Heart, Bookmark, MessageSquare, Send, Check, Copy, Share2, Tag, User } from 'lucide-react';

export default function PostDetailModal({ 
  post, 
  onClose, 
  onToggleLike, 
  onToggleBookmark, 
  isBookmarked,
  onAddComment 
}) {
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);

  if (!post) return null;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onAddComment(post.id, {
      id: "c-" + Date.now(),
      author: commentAuthor.trim() || "Sinh viên PTIT",
      date: "Vừa xong",
      text: newComment.trim()
    });
    setNewComment("");
  };

  // Helper to format content with code blocks
  const renderFormattedContent = (content) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const lines = part.slice(3, -3).trim().split("\n");
        const language = lines[0].match(/^[a-zA-Z]+/)?.[0] || "javascript";
        const code = lines.slice(lines[0].match(/^[a-zA-Z]+/) ? 1 : 0).join("\n");

        return (
          <div key={index} className="my-4 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 shadow-md">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="uppercase font-semibold text-canva-blue dark:text-blue-400">{language}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  setCopiedCode(true);
                  setTimeout(() => setCopiedCode(false), 2000);
                }}
                className="inline-flex items-center space-x-1 hover:text-white transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? "Đã chép" : "Sao chép"}</span>
              </button>
            </div>
            <pre className="p-4 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto text-emerald-300">
              <code>{code}</code>
            </pre>
          </div>
        );
      }

      // Regular text paragraphs and markdown-like headings
      const lines = part.split("\n");
      return (
        <div key={index} className="space-y-3">
          {lines.map((line, lIdx) => {
            if (line.startsWith("### ")) {
              return (
                <h3 key={lIdx} className="text-lg font-bold text-canva-blue dark:text-blue-400 mt-5 mb-2">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={lIdx} className="ml-4 list-disc text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (!line.trim()) return <div key={lIdx} className="h-2" />;
            return (
              <p key={lIdx} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {line}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-canva-border dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-canva-border dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-canva-blue-light text-canva-blue dark:bg-blue-900/40 dark:text-blue-300">
              {post.category}
            </span>
            <span className="text-xs text-canva-muted dark:text-slate-400 hidden sm:inline">
              Chi tiết bài viết
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Đóng modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Post Header */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-canva-slate dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-canva-muted dark:text-slate-400 pb-5 border-b border-canva-border dark:border-slate-800">
              <span className="inline-flex items-center space-x-1.5 font-medium text-slate-700 dark:text-slate-200">
                <User className="w-3.5 h-3.5 text-canva-blue" />
                <span>{post.author}</span>
              </span>
              <span className="inline-flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
              <span className="inline-flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          {/* Post Content */}
          <div className="article-body">
            {renderFormattedContent(post.content)}
          </div>

          {/* Post Actions (Like, Bookmark) */}
          <div className="pt-6 border-t border-canva-border dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onToggleLike(post.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  post.isLiked 
                    ? "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 ring-1 ring-rose-300"
                    : "bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-rose-50 hover:text-rose-600"
                }`}
              >
                <Heart className={`w-4 h-4 ${post.isLiked ? "fill-rose-500 text-rose-500" : ""}`} />
                <span>{post.likes} Yêu thích</span>
              </button>

              <button
                onClick={() => onToggleBookmark(post.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  isBookmarked
                    ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 ring-1 ring-amber-300"
                    : "bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 hover:text-amber-600"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-amber-500 text-amber-500" : ""}`} />
                <span>{isBookmarked ? "Đã lưu" : "Lưu bài"}</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 text-xs text-canva-muted">
              <span>Chia sẻ bài viết</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="pt-8 border-t border-canva-border dark:border-slate-800 space-y-4">
            <div className="flex items-center space-x-2 text-base font-bold text-canva-slate dark:text-white">
              <MessageSquare className="w-5 h-5 text-canva-blue" />
              <span>Bình luận & Thảo luận ({post.comments?.length || 0})</span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-3 bg-gray-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-canva-border dark:border-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  placeholder="Họ và tên của bạn..."
                  className="sm:col-span-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
                />
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Viết nhận xét hoặc đặt câu hỏi cho tác giả..."
                  className="sm:col-span-2 px-3 py-2 text-xs sm:text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-canva-blue text-white hover:bg-canva-blue-dark disabled:opacity-50 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi bình luận</span>
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {post.comments && post.comments.length > 0 ? (
                post.comments.map((c) => (
                  <div key={c.id} className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-canva-slate dark:text-white">{c.author}</span>
                      <span className="text-[11px] text-canva-muted dark:text-slate-400">{c.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{c.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-canva-muted italic text-center py-4">Chưa có bình luận nào. Hãy là người đầu tiên để lại ý kiến!</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
