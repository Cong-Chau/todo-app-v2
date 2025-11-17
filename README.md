# TodoApp

Ứng dụng Todo full-stack sử dụng **ASP.NET Core Web API**, **Entity Framework Core** (MySQL) và **React**.  

## Tính năng

- Tạo, xem, cập nhật, xóa todo
- Lọc todo theo trạng thái: tất cả / đang làm / đã hoàn thành
- Hiển thị ngày hạn (`dueDate`)
- Giao diện responsive

---

## Yêu cầu

Bạn cần cài đặt:

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/en/)
- [MySQL Server 8+](https://dev.mysql.com/downloads/mysql/)
- Git

---

## Clone repository

```bash
git clone https://github.com/yourusername/todoapp.git
cd todoapp
```

---

## Cấu hình Backend (ASP.NET Core Web API)

1. **Tạo file `.env`** trong thư mục backend (hoặc root) với nội dung:

```env
# Cấu hình MySQL
DB_HOST=localhost
DB_PORT=3306
DB_NAME=todoapp
DB_USER=root
DB_PASSWORD=matkhaucuaban

# Port backend
PORT=5020
```

2. **Cập nhật `appsettings.json`** (nếu muốn dùng biến môi trường):

```json
{
  "ConnectionStrings": {
    "Default": "server=${DB_HOST};port=${DB_PORT};database=${DB_NAME};user=${DB_USER};password=${DB_PASSWORD}"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

3. **Tạo database và áp dụng migration**:

```bash
cd TodoApi
dotnet ef database update
```

4. **Chạy backend**:

```bash
dotnet run --urls http://localhost:5020
```

API sẽ chạy tại: `http://localhost:5020/api/todo`.

---

## Cấu hình Frontend (React)

1. **Chuyển vào thư mục frontend**:

```bash
cd frontend
```

2. **Cài đặt dependencies**:

```bash
npm install
```

3. **Chạy frontend**:

```bash
npm start
```

Frontend sẽ chạy tại: `http://localhost:3000`.

> Lưu ý: Backend phải chạy trên port `5020` (hoặc chỉnh `baseURL` trong `src/api/todoApi.js` nếu khác).

---

## Biến môi trường Frontend (tuỳ chọn)

Tạo file `.env` trong frontend:

```env
REACT_APP_API_URL=http://localhost:5020/api
```

Sau đó cập nhật `todoApi.js`:

```js
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5020/api",
});
```

---

## Sử dụng

1. Mở trình duyệt tại `http://localhost:3000`.
2. Thêm task mới, đánh dấu hoàn thành, lọc task hoặc xóa task.
3. Backend lưu task vào MySQL theo cấu hình trong `.env`.

---

## Lưu ý

- Đảm bảo MySQL đang chạy.
- Kiểm tra port backend và frontend không trùng với ứng dụng khác.
- Có thể thay đổi port backend bằng cách chỉnh biến `PORT` trong `.env` và `launchSettings.json`.

---

## License

MIT © Tên của bạn
