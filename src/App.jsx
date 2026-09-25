import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroProfile from './components/HeroProfile';
import CategoryFilter from './components/CategoryFilter';
import BlogCard from './components/BlogCard';
import PostDetailModal from './components/PostDetailModal';
import CreatePostModal from './components/CreatePostModal';
import Footer from './components/Footer';
import { initialPosts, categoriesList } from './data/mockPosts';
import { Search, Sparkles, Filter, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  // 1. Posts state with LocalStorage persistence
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem("ptit_web_blog_posts");
      return saved ? JSON.parse(saved) : initialPosts;
    } catch {
      return initialPosts;
    }
  });

  // 2. Bookmarked posts IDs
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem("ptit_web_blog_bookmarks");
      return saved ? JSON.parse(saved) : ["post-1", "post-4"];
    } catch {
      return ["post-1", "post-4"];
    }
  });

  // 3. Search and Category filters
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  // 4. Dark Mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("ptit_web_blog_darkmode");
      return saved === "true";
    } catch {
      return false;
    }
  });

  // 5. Modals state
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // 6. Toast Notification state
  const [toastMessage, setToastMessage] = useState(null);

  // Synchronize Dark Mode to HTML document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("ptit_web_blog_darkmode", "true");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("ptit_web_blog_darkmode", "false");
    }
  }, [isDarkMode]);

  // Synchronize posts to LocalStorage
  useEffect(() => {
    localStorage.setItem("ptit_web_blog_posts", JSON.stringify(posts));
  }, [posts]);

  // Synchronize bookmarks to LocalStorage
  useEffect(() => {
    localStorage.setItem("ptit_web_blog_bookmarks", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Show Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Toggle Like Handler
  const handleToggleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          const isLiked = !p.isLiked;
          const newLikes = isLiked ? (p.likes + 1) : Math.max(0, p.likes - 1);
          return { ...p, isLiked, likes: newLikes };
        }
        return p;
      })
    );

    // Also update selectedPost if modal is open
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(prev => ({
        ...prev,
        isLiked: !prev.isLiked,
        likes: !prev.isLiked ? prev.likes + 1 : Math.max(0, prev.likes - 1)
      }));
    }
  };

  // Toggle Bookmark Handler
  const handleToggleBookmark = (postId) => {
    setBookmarkedIds(prev => {
      const exists = prev.includes(postId);
      const updated = exists ? prev.filter(id => id !== postId) : [...prev, postId];
      showToast(exists ? "Đã gỡ bài viết khỏi mục đã lưu" : "Đã lưu bài viết thành công!");
      return updated;
    });
  };

  // Add Comment Handler
  const handleAddComment = (postId, newComment) => {
    setPosts(prevPosts =>
      prevPosts.map(p => {
        if (p.id === postId) {
          const updatedComments = [...(p.comments || []), newComment];
          return { ...p, comments: updatedComments };
        }
        return p;
      })
    );

    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(prev => ({
        ...prev,
        comments: [...(prev.comments || []), newComment]
      }));
    }
    showToast("Đã đăng bình luận mới thành công!");
  };

  // Create New Post Handler
  const handleCreatePost = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
    showToast("Bài viết mới đã được tạo và lưu vào LocalStorage!");
  };

  // Reset to initial posts
  const handleResetPosts = () => {
    if (window.confirm("Bạn có chắc chắn muốn đặt lại toàn bộ bài viết về dữ liệu ban đầu?")) {
      setPosts(initialPosts);
      setBookmarkedIds(["post-1", "post-4"]);
      localStorage.removeItem("ptit_web_blog_posts");
      localStorage.removeItem("ptit_web_blog_bookmarks");
      showToast("Đã khôi phục dữ liệu bài viết mặc định!");
    }
  };

  // Filter posts with useMemo for optimal performance
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchCategory = activeCategory === "Tất cả" || post.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)));

      return matchCategory && matchSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Aggregate metrics
  const totalLikes = useMemo(() => posts.reduce((sum, p) => sum + (p.likes || 0), 0), [posts]);
  const totalBookmarks = bookmarkedIds.length;

  return (
    <div className="min-h-screen flex flex-col bg-canva-canvas dark:bg-slate-950 transition-colors duration-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-4 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700 dark:border-slate-200 text-xs sm:text-sm font-semibold animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Author & Academic Profile Header */}
        <HeroProfile
          totalPosts={posts.length}
          totalLikes={totalLikes}
          totalBookmarks={totalBookmarks}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <CategoryFilter
            categories={categoriesList}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            posts={posts}
          />

          {/* Quick status text */}
          <div className="text-xs text-canva-muted dark:text-slate-400 font-medium pl-1">
            Hiển thị <span className="font-bold text-canva-blue dark:text-blue-400">{filteredPosts.length}</span> bài viết
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onOpenDetail={(p) => setSelectedPost(p)}
                onToggleLike={handleToggleLike}
                onToggleBookmark={handleToggleBookmark}
                isBookmarked={bookmarkedIds.includes(post.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-dashed border-canva-border dark:border-slate-800 p-12 text-center max-w-md mx-auto my-12 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 text-canva-blue mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-canva-slate dark:text-white">
              Không tìm thấy bài viết phù hợp
            </h3>
            <p className="text-xs text-canva-muted leading-relaxed">
              Không có bài viết nào khớp với từ khóa "{searchQuery}" trong chuyên mục "{activeCategory}".
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("Tất cả"); }}
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold bg-canva-blue text-white hover:bg-canva-blue-dark transition-all"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer onResetPosts={handleResetPosts} />

      {/* Post Detail Modal */}
      <PostDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onToggleLike={handleToggleLike}
        onToggleBookmark={handleToggleBookmark}
        isBookmarked={selectedPost ? bookmarkedIds.includes(selectedPost.id) : false}
        onAddComment={handleAddComment}
      />

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreatePost={handleCreatePost}
        categories={categoriesList}
      />

    </div>
  );
}
