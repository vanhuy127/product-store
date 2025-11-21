# 1. Hướng dẫn chạy project

1. **Cài đặt dependencies**

```bash
npm install
# hoặc
yarn install
```

2. **Chạy project**

```bash
npm run dev
# hoặc
yarn dev
```

3. **Truy cập ứng dụng**

- Mở trình duyệt và vào: http://localhost:5173 (với Vite)

# 2. Chức năng đã hoàn thành

- Gọi API và hiển thị danh sách sản phẩm.
- Tìm kiếm.
- Sắp xếp theo giá: tăng dần / giảm dần / mặc định.
- Phân trang.
- Model hiển thị chi tiết sản phẩm.
- Responsive.

# 3. Khó khăn gặp phải

- setState trong useEffect gây khó khăn trong việc kết hợp search và sort -> sử dụng useMemo
- Chưa debounce cho search tránh re-render liên tục

# 4. Công cụ AI đã sử dụng

- ChatGPT: Hỗ trợ tạo giao diện, tạo logic code, xử lý lỗi logic;
- Cách sử dụng: Đưa ra vấn đề hiện tại, trình bày câu hỏi một cách rõ ràng, ngắn gọn. Sau đó nhận phản hổi và điều chỉnh lại.
