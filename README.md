# 💻 KhoaDev Tech Blog - React Frontend

> **Bài tập Thực hành 1:** Lập trình giao diện Frontend sử dụng React  
> **Học phần:** Lập trình Web  
> **Giảng viên hướng dẫn:** Thầy Nguyễn Quang Huy  
> **Sinh viên thực hiện:** Nguyễn Đăng Khoa  
> **Mã sinh viên:** B23DCAT153  
> **Khoa:** An Toàn Thông Tin - Học viện Công nghệ Bưu chính Viễn thông (PTIT)

---

## 🌟 Giới thiệu Đề tài

**KhoaDev Tech Blog** là một ứng dụng Web Single Page Application (SPA) hiện đại được xây dựng hoàn toàn bằng **React 18** và **Tailwind CSS**. Dự án được thiết kế chuyên biệt để chia sẻ kiến thức về lập trình Web, an toàn thông tin và trải nghiệm học tập công nghệ.

Dự án áp dụng chặt chẽ **Quy chuẩn thiết kế Canva Presentation Standard**:
- **Bảng màu nhận diện:** Nền xám trắng `#f7f7f7`, màu thương hiệu Royal Blue `#2657c1`, chữ Slate đậm `#1e293b`.
- **Quy tắc tương phản cao (Strict Inversion Rule):** Thẻ xanh mang chữ trắng tinh khiết `#ffffff`, thẻ trắng mang tiêu đề xanh và chữ Slate.
- **Typography:** Toàn bộ font chữ hệ thống dùng `Montserrat`, khối code dùng `Consolas`.

---

## ✨ Tính năng nổi bật

1. **Kiến trúc Component chuẩn mực:** Tách biệt rõ ràng giữa Layout, Feature components, và Data layer.
2. **Tìm kiếm & Bộ lọc tức thì (Real-time Search & Filter):**
   - Lọc bài viết theo danh mục (*React & Frontend, An toàn thông tin, Web Dev, Tips & Tutorial*).
   - Tìm kiếm thời gian thực theo tiêu đề, tóm tắt và thẻ tag.
   - Tối ưu hiệu năng render với hook `useMemo`.
3. **Đọc bài viết chi tiết & Tương tác (Post Detail Modal):**
   - Đọc nội dung với định dạng phong phú và khối mã nguồn có nút Copy code tiện lợi.
   - Tính năng **Thả tim (Like)** cập nhật số lượt thích ngay tức khắc.
   - Tính năng **Lưu bài viết (Bookmark)**.
   - Khu vực **Bình luận (Comments)** cho phép người đọc gửi phản hồi trực tiếp.
4. **Soạn bài viết mới (Create Post):**
   - Form tạo bài viết mới có kiểm tra dữ liệu đầu vào (Validation).
   - Tùy chọn phong cách thẻ (*Thẻ Trắng* hoặc *Thẻ Xanh Canva*).
   - **Tự động lưu trữ vào `LocalStorage`**: Khi F5 tải lại trang, bài viết mới và lượt tương tác vẫn được bảo toàn nguyên vẹn.
5. **Chế độ Giao diện Sáng / Tối (Dark / Light Theme):** Chuyển đổi linh hoạt giữa giao diện Canva Light `#f7f7f7` và Slate Dark `#0b1120`.

---

## 🛠️ Công nghệ sử dụng

- **Core:** React 18, React DOM
- **Build Tool:** Vite 5 (Native ES Modules, HMR siêu tốc)
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
- **Icons:** Lucide React
- **Storage:** Web Storage API (LocalStorage)

---

## 🚀 Hướng dẫn Cài đặt & Chạy thử nghiệm

### Yêu cầu môi trường
- Node.js >= 18.x
- npm >= 9.x

### Các bước thực hiện

```bash
# 1. Di chuyển vào thư mục dự án
cd ~/LTW/BTTH1-React-Blog

# 2. Cài đặt các gói phụ thuộc (dependencies)
npm install

# 3. Khởi chạy máy chủ phát triển
npm run dev
```

Sau khi chạy lệnh trên, mở trình duyệt truy cập: `http://localhost:3000` (hoặc cổng được Vite thông báo).

### Đóng gói sản phẩm (Production Build)

```bash
npm run build
```
Kết quả build tối ưu sẽ được lưu tại thư mục `dist/`.

---

## 📂 Cấu trúc thư mục mã nguồn

```text
BTTH1-React-Blog/
├── index.html                  # File HTML chính, nạp font Montserrat
├── package.json                # Khai báo dependencies và scripts
├── tailwind.config.js          # Cấu hình Design tokens (Canva colors & fonts)
├── vite.config.js              # Cấu hình Vite dev server
├── src/
│   ├── main.jsx                # Entrypoint render React root
│   ├── App.jsx                 # Central State Controller (Search, Filter, Theme, Modals)
│   ├── index.css               # Tailwind directives và global utilities
│   ├── data/
│   │   └── mockPosts.js        # Dữ liệu bài viết mẫu phong phú
│   └── components/
│       ├── Navbar.jsx          # Thanh điều hướng, Search, Dark mode, CTA
│       ├── HeroProfile.jsx     # Thông tin tác giả, thẻ sinh viên PTIT & metrics
│       ├── CategoryFilter.jsx  # Tabs lọc bài viết theo chuyên mục
│       ├── BlogCard.jsx        # Thẻ bài viết đan xen Xanh/Trắng (Strict Inversion)
│       ├── PostDetailModal.jsx # Giao diện đọc bài chi tiết, code syntax, comment
│       ├── CreatePostModal.jsx # Form tạo bài viết mới + LocalStorage sync
│       └── Footer.jsx          # Chân trang và nút reset dữ liệu
```

---
© 2026 Nguyễn Đăng Khoa - B23DCAT153 - PTIT. Môn học Lập Trình Web (GV: Nguyễn Quang Huy).
