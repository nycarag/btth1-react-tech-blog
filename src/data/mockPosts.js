export const initialPosts = [
  {
    id: "post-1",
    title: "Xây Dựng Giao Diện Hiện Đại Với React 18 & Tailwind CSS",
    slug: "xay-dung-giao-dien-react-18-tailwind-css",
    category: "React & Frontend",
    summary: "Hướng dẫn kiến trúc Component, chia sẻ cách tổ chức thư mục src chuẩn dự án thực tế và áp dụng Design System Canva tương phản cao.",
    content: `Trong phát triển ứng dụng web hiện đại (SPA), việc tổ chức kiến trúc Component hợp lý là yếu tố sống còn giúp mã nguồn dễ bảo trì và mở rộng.

### 1. Tư duy phân rã Component (Atomic Design)
Thay vì nhồi nhét toàn bộ logic vào một file App.jsx lớn, chúng ta chia giao diện thành các thành phần độc lập:
- **UI Components:** Button, Badge, Modal, Input
- **Feature Components:** BlogCard, PostFilter, CommentBox
- **Layout Components:** Navbar, HeroProfile, Footer

### 2. Quản lý State với React Hooks
\`\`\`javascript
// Quản lý trạng thái danh sách bài viết và lưu tự động vào LocalStorage
const [posts, setPosts] = useState(() => {
  const saved = localStorage.getItem("khoa_tech_blog_posts");
  return saved ? JSON.parse(saved) : initialPosts;
});

useEffect(() => {
  localStorage.setItem("khoa_tech_blog_posts", JSON.stringify(posts));
}, [posts]);
\`\`\`

Áp dụng quy chuẩn thiết kế thẻ tương phản cao (Strict Inversion) giúp sản phẩm nổi bật cả trên máy chiếu lẫn thiết bị cá nhân.`,
    author: "Nguyễn Đăng Khoa",
    date: "24/09/2026",
    readTime: "5 phút đọc",
    likes: 42,
    bookmarks: 18,
    isFeatured: true,
    cardTheme: "blue", // Blue card for high contrast
    tags: ["React", "TailwindCSS", "Frontend", "UI/UX"],
    comments: [
      { id: "c1", author: "Thầy Nguyễn Quang Huy", date: "24/09/2026", text: "Giao diện tổ chức component rất rõ ràng, phối màu chuẩn học thuật!" },
      { id: "c2", author: "Trần Minh", date: "24/09/2026", text: "Bài viết chi tiết và code mẫu rất dễ hiểu, cảm ơn bạn!" }
    ]
  },
  {
    id: "post-2",
    title: "Phòng Chống Lỗ Hổng XSS & CSRF Trong Lập Trình Ứng Dụng Web",
    slug: "phong-chong-lo-hong-xss-csrf-lap-trinh-web",
    category: "An toàn thông tin",
    summary: "Phân tích cơ chế tấn công Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF) và cách React tự động bảo vệ dữ liệu người dùng.",
    content: `Bảo mật ứng dụng web là kỹ năng bắt buộc đối với mọi lập trình viên Frontend và Fullstack hiện nay.

### 1. React ngăn chặn XSS như thế nào?
Theo mặc định, React tự động escape tất cả chuỗi truyền vào JSX trước khi render ra DOM:
\`\`\`javascript
// Đoạn mã sau an toàn 100% trong React vì JSX tự động mã hóa ký tự HTML
const userInput = "<script>stealCookies()</script>";
return <div>{userInput}</div>; // Sẽ render thành chuỗi text thuần túy
\`\`\`

Cần đặc biệt cẩn trọng và hạn chế sử dụng thuộc tính \`dangerouslySetInnerHTML\` trừ khi dữ liệu đã được làm sạch qua thư viện DOMPurify.

### 2. Chiến lược phòng vệ CSRF
- Sử dụng thuộc tính \`SameSite=Lax\` hoặc \`SameSite=Strict\` cho Cookie.
- Đính kèm Anti-CSRF Token trong Header của các request thay đổi trạng thái (POST, PUT, DELETE).`,
    author: "Nguyễn Đăng Khoa",
    date: "22/09/2026",
    readTime: "7 phút đọc",
    likes: 35,
    bookmarks: 12,
    isFeatured: false,
    cardTheme: "white",
    tags: ["Security", "XSS", "CSRF", "Web Dev"],
    comments: [
      { id: "c3", author: "Lê Hoàng", date: "23/09/2026", text: "Sinh viên chuyên ngành An toàn thông tin viết bài về web security rất chuẩn!" }
    ]
  },
  {
    id: "post-3",
    title: "Vite vs Create-React-App: Vì Sao Vite Trở Thành Tiêu Chuẩn Mới?",
    slug: "vite-vs-create-react-app-tieu-chuan-moi",
    category: "Web Dev",
    summary: "So sánh tốc độ khởi động máy chủ ảo và Hot Module Replacement (HMR) dựa trên Native ES Modules của Vite so với Webpack truyền thống.",
    content: `Trong nhiều năm, \`create-react-app\` (CRA) là lựa chọn mặc định để học tập React. Tuy nhiên, kiến trúc đóng gói của CRA dựa trên Webpack đang ngày càng bộc lộ sự chậm chạp khi dự án phình to.

### Sự vượt trội của Vite:
1. **Khởi động Dev Server tức thì:** Tận dụng trình duyệt hỗ trợ Native ES Modules, Vite không cần bundle toàn bộ mã trước khi khởi động.
2. **Biên dịch siêu tốc với esbuild:** Sử dụng ngôn ngữ Go để xử lý chuyển đổi cú pháp, nhanh hơn các bundler JS từ 10 - 100 lần.
3. **Cấu hình tối giản:** Hỗ trợ React, Vue, Svelte chỉ với 1 file \`vite.config.js\` trực quan.

\`\`\`bash
# Khởi tạo dự án React siêu tốc với Vite
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\``,
    author: "Nguyễn Đăng Khoa",
    date: "20/09/2026",
    readTime: "4 phút đọc",
    likes: 28,
    bookmarks: 9,
    isFeatured: false,
    cardTheme: "white",
    tags: ["Vite", "React", "Tooling", "Performance"],
    comments: []
  },
  {
    id: "post-4",
    title: "Tối Ưu Hiệu Năng React: Sử Dụng useMemo & useCallback Đúng Cách",
    slug: "toi-uu-hieu-nang-react-usememo-usecallback",
    category: "React & Frontend",
    summary: "Tránh bẫy Re-render không cần thiết trong React bằng kỹ thuật ghi nhớ tính toán (Memoization) và quản lý dependency array.",
    content: `Một trong những sai lầm phổ biến của người mới học React là lạm dụng \`useMemo\` và \`useCallback\` ở mọi nơi, vô tình làm tăng chi phí tính toán lưu trữ.

### Khi nào thực sự nên dùng \`useMemo\`?
Khi bạn có một phép tính toán dữ liệu nặng nề (như lọc danh sách hàng nghìn bài viết theo nhiều điều kiện):
\`\`\`javascript
const filteredPosts = useMemo(() => {
  return posts.filter(post => {
    const matchCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
}, [posts, selectedCategory, searchQuery]);
\`\`\`

Phép tính trên chỉ chạy lại khi danh sách \`posts\`, chuyên mục chọn, hoặc từ khóa tìm kiếm có sự thay đổi.`,
    author: "Nguyễn Đăng Khoa",
    date: "18/09/2026",
    readTime: "6 phút đọc",
    likes: 51,
    bookmarks: 24,
    isFeatured: true,
    cardTheme: "blue",
    tags: ["React", "Performance", "Hooks", "Optimization"],
    comments: [
      { id: "c4", author: "Phạm Đức", date: "19/09/2026", text: "Ví dụ filter dùng useMemo rất trực quan, dễ áp dụng vào đồ án!" }
    ]
  },
  {
    id: "post-5",
    title: "Kinh Nghiệm Học Lập Trình Web Dành Cho Sinh Viên PTIT",
    slug: "kinh-nghiem-hoc-lap-trinh-web-sinh-vien-ptit",
    category: "Tips & Tutorial",
    summary: "Lộ trình từ nắm vững nền tảng HTML/CSS/JS đến React, xây dựng Portfolio cá nhân và chuẩn bị báo cáo thực hành ấn tượng.",
    content: `Để đạt kết quả cao trong các môn công nghệ phần mềm và lập trình web tại Học viện Bưu chính Viễn thông:

### 1. Nắm chắc gốc rễ JavaScript ES6+
- Arrow functions, Destructuring, Spread/Rest operators
- Promises, Async/Await
- Array methods: \`map\`, \`filter\`, \`reduce\`

### 2. Chú trọng UX/UI ngay từ bài tập đầu tiên
Giảng viên luôn đánh giá cao những sản phẩm có tính thẩm mỹ, phối màu hài hòa, có responsive trên di động và xử lý khéo léo các trạng thái rỗng (Empty state), trạng thái đang tải (Loading).

### 3. Thành thạo Git và GitHub
Tập thói quen commit thường xuyên, viết commit message rõ ràng và viết file README.md chỉn chu với ảnh chụp demo giao diện.`,
    author: "Nguyễn Đăng Khoa",
    date: "15/09/2026",
    readTime: "5 phút đọc",
    likes: 64,
    bookmarks: 31,
    isFeatured: false,
    cardTheme: "white",
    tags: ["PTIT", "SinhVien", "LoTrinh", "KinhNghiem"],
    comments: []
  },
  {
    id: "post-6",
    title: "Kiến Trúc Restful API: Nguyên Tắc Thiết Kế Cho Frontend Developer",
    slug: "kien-truc-restful-api-cho-frontend-dev",
    category: "Web Dev",
    summary: "Tìm hiểu các HTTP Methods (GET, POST, PUT, DELETE), Status Codes chuẩn và cách mô phỏng dữ liệu Mock Data trước khi nối Backend.",
    content: `Trước khi bước sang Bài tập Thực hành 2 về phát triển Backend API, một Frontend Developer cần hiểu rõ cách thức tương tác giữa Client và Server.

### Bảng tra cứu HTTP Status Codes thông dụng:
- **200 OK:** Request thành công, có dữ liệu trả về.
- **201 Created:** Tạo mới tài nguyên thành công (sau khi POST bài viết mới).
- **400 Bad Request:** Dữ liệu client gửi lên không hợp lệ.
- **401 Unauthorized / 403 Forbidden:** Chưa đăng nhập hoặc không đủ quyền.
- **404 Not Found:** Tài nguyên không tồn tại.
- **500 Internal Server Error:** Lỗi phía máy chủ.

Trong giai đoạn làm Frontend (BTTH1), việc sử dụng \`localStorage\` để lưu trữ tạm thời là giải pháp tối ưu giúp ứng dụng hoạt động hoàn hảo mà không phụ thuộc hạ tầng mạng.`,
    author: "Nguyễn Đăng Khoa",
    date: "12/09/2026",
    readTime: "6 phút đọc",
    likes: 39,
    bookmarks: 15,
    isFeatured: false,
    cardTheme: "white",
    tags: ["API", "RESTful", "Backend", "HTTP"],
    comments: []
  }
];

export const categoriesList = [
  "Tất cả",
  "React & Frontend",
  "An toàn thông tin",
  "Web Dev",
  "Tips & Tutorial"
];
