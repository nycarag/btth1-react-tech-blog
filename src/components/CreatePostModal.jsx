import React, { useState } from 'react';
import { X, Sparkles, PlusCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CreatePostModal({ isOpen, onClose, onCreatePost, categories }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[1] || "React & Frontend");
  const [cardTheme, setCardTheme] = useState("white");
  const [readTime, setReadTime] = useState("5 phút đọc");
  const [tagsInput, setTagsInput] = useState("React, WebDev, PTIT");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Vui lòng nhập tiêu đề bài viết!");
      return;
    }
    if (!summary.trim()) {
      setError("Vui lòng nhập tóm tắt ngắn cho bài viết!");
      return;
    }
    if (!content.trim()) {
      setError("Vui lòng nhập nội dung chi tiết bài viết!");
      return;
    }

    const tags = tagsInput
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    const newPost = {
      id: "post-" + Date.now(),
      title: title.trim(),
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      category,
      cardTheme,
      summary: summary.trim(),
      content: content.trim(),
      author: "Nguyễn Đăng Khoa",
      date: formattedDate,
      readTime: readTime || "4 phút đọc",
      likes: 0,
      bookmarks: 0,
      isFeatured: cardTheme === "blue",
      tags: tags.length > 0 ? tags : ["WebDev", "Frontend"],
      comments: []
    };

    onCreatePost(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-canva-border dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-canva-border dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-canva-blue text-white flex items-center justify-center">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-canva-slate dark:text-white">
                Soạn bài viết kỹ thuật mới
              </h2>
              <p className="text-xs text-canva-muted">Lưu dữ liệu trực tiếp vào LocalStorage</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-4">
          
          {error && (
            <div className="flex items-center space-x-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Tiêu đề bài viết <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError(""); }}
              placeholder="Ví dụ: Tìm hiểu State Management trong React 18..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
            />
          </div>

          {/* Row: Category & Card Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Chuyên mục
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
              >
                {categories.filter(c => c !== "Tất cả").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Phong cách Thẻ Canva
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCardTheme("white")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center space-x-1.5 ${
                    cardTheme === "white" 
                      ? "border-canva-blue bg-blue-50/50 text-canva-blue dark:bg-blue-900/30" 
                      : "border-canva-border text-slate-500 dark:border-slate-700"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-300 inline-block" />
                  <span>Thẻ Trắng</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCardTheme("blue")}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center space-x-1.5 ${
                    cardTheme === "blue" 
                      ? "border-canva-blue bg-canva-blue text-white" 
                      : "border-canva-border text-slate-500 dark:border-slate-700"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-canva-blue border border-white inline-block" />
                  <span>Thẻ Xanh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Row: Read Time & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Thời gian đọc
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="Ví dụ: 5 phút đọc"
                className="w-full px-4 py-2 text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Thẻ tags (cách nhau bởi dấu phẩy)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="React, Frontend, Web"
                className="w-full px-4 py-2 text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
              />
            </div>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Tóm tắt ngắn gọn <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => { setSummary(e.target.value); setError(""); }}
              placeholder="Mô tả tóm tắt khoảng 2-3 câu về nội dung bài viết..."
              className="w-full px-4 py-2 text-sm rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
            />
          </div>

          {/* Detailed Content */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Nội dung bài viết chi tiết <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={6}
              value={content}
              onChange={(e) => { setContent(e.target.value); setError(""); }}
              placeholder="Nội dung bài viết. Bạn có thể dùng ```javascript ... ``` để viết khối code hoặc ### Tiêu đề con..."
              className="w-full px-4 py-2 text-sm font-mono rounded-xl border border-canva-border dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-canva-blue"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-canva-blue text-white hover:bg-canva-blue-dark active:scale-95 transition-all shadow-md shadow-blue-600/25"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Đăng bài viết ngay</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
