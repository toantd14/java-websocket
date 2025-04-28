# Guide Configuring
Trong một dự án Spring Boot, sự khác biệt giữa file `*.properties` ở thư mục gốc và file `*.properties` trong thư mục `resources` nằm ở cách chúng được sử dụng và tải:

1. **File `*.properties` ở thư mục gốc (root directory):**
    - Đây là file nằm ngoài cấu trúc `src/main/resources`.
    - Thường không được Spring Boot tự động nhận diện hoặc sử dụng.
    - Nếu muốn Spring Boot sử dụng file này, bạn cần chỉ định đường dẫn cụ thể khi chạy ứng dụng, ví dụ:
      ```bash
      java -jar app.jar --spring.config.location=file:./application.properties
      ```
    - Thích hợp cho việc cấu hình bên ngoài (external configuration) khi triển khai ứng dụng.

2. **File `*.properties` trong thư mục `resources`:**
    - Đây là nơi Spring Boot mặc định tìm kiếm file cấu hình, ví dụ: `application.properties` hoặc `application.yml`.
    - File này được đóng gói cùng ứng dụng khi build (trong file `.jar`).
    - Spring Boot tự động tải và sử dụng file này để cấu hình ứng dụng.

**Tóm lại:**
- File trong `resources` là cấu hình mặc định, được sử dụng trong quá trình phát triển và đóng gói.
- File ở thư mục gốc thường được sử dụng để ghi đè cấu hình mặc định khi triển khai ứng dụng.









