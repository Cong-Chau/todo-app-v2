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
git clone https://github.com/Cong-Chau/todo-ap-v2.git
cd todoapp
```

---

## Cấu hình Database (MySQL)

1. **Tạo database `todoapp`** trong MySQL Workbench:

```SQL
CREATE DATABASE tododapp;
```

## Cấu hình Backend (ASP.NET Core Web API)

1. **Cập nhật `appsettings.json`**:

```json
{
  "ConnectionStrings": {
    "Default": "server=localhost;port=3306;database=todoapp;user=root;password=matkhaucuaban"
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

2. **Tạo database và áp dụng migration**:

```bash
cd TodoApi
dotnet ef database update
```

3. **Chạy backend**:

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

## Sử dụng

1. Mở trình duyệt tại `http://localhost:3000`.
2. Thêm task mới, đánh dấu hoàn thành, lọc task hoặc xóa task.
3. Backend lưu task vào MySQL theo cấu hình trong `.env`.

---

## Lưu ý

- Đảm bảo MySQL đang chạy.
- Kiểm tra port backend và frontend không trùng với ứng dụng khác.
- Có thể thay đổi port backend bằng cách chỉnh biến `PORT` trong `launchSettings.json`.

---
