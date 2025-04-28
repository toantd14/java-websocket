# Guide to Running Application

## So sánh mvnwvà mvnw
Sự khác biệt giữa `mvnw` và `mvn` nằm ở cách chúng được sử dụng và mục đích của chúng:

1. **`mvnw` (Maven Wrapper):**
   - Là một script (file `mvnw` hoặc `mvnw.cmd`) được cung cấp trong dự án.
   - Được sử dụng để đảm bảo rằng dự án có thể chạy với phiên bản Maven cụ thể mà không cần cài đặt Maven trên máy tính.
   - Maven Wrapper sẽ tự động tải xuống phiên bản Maven được chỉ định trong file `maven-wrapper.properties` nếu chưa có.
   - Thích hợp khi làm việc trong nhóm hoặc trên các môi trường CI/CD để đảm bảo tính nhất quán về phiên bản Maven.

2. **`mvn` (Maven):**
   - Là lệnh được sử dụng khi Maven đã được cài đặt trên hệ thống.
   - Sử dụng phiên bản Maven đã được cài đặt sẵn trên máy tính.
   - Phụ thuộc vào cấu hình và phiên bản Maven của hệ thống, có thể dẫn đến sự không đồng nhất giữa các môi trường.

**Tóm lại:**
- Sử dụng `mvnw` khi muốn đảm bảo tính nhất quán về phiên bản Maven mà không cần cài đặt Maven thủ công.
- Sử dụng `mvn` khi bạn đã cài đặt Maven và không cần quan tâm đến việc đồng bộ phiên bản Maven.



## Chạy lệnh mvn spring-boot:run
Khi chạy lệnh `mvn spring-boot:run` trong dự án này, Maven sẽ thực hiện các bước sau:

1. **Tải dependencies:**
   - Maven sẽ kiểm tra và tải tất cả các dependencies được khai báo trong file `pom.xml` nếu chúng chưa có trong local repository.

2. **Biên dịch mã nguồn:**
   - Maven sẽ biên dịch mã nguồn Java trong thư mục `src/main/java`.

3. **Chạy ứng dụng Spring Boot:**
   - Maven sẽ khởi động ứng dụng Spring Boot bằng cách sử dụng plugin `spring-boot-maven-plugin`. Ứng dụng sẽ được chạy trên cổng 8080 (theo log trong file `app.log`).

4. **Kết quả:**
    - Ứng dụng sẽ khởi động và log các thông tin khởi chạy (như trong file log `app.log`).
    - Nếu không có thư mục `templates/`, sẽ có cảnh báo liên quan đến Thymeleaf (như đã thấy trong log).
    - WebSocket server sẽ được khởi động, sẵn sàng xử lý các kết nối WebSocket.

Lệnh này hữu ích trong giai đoạn phát triển vì nó cho phép chạy ứng dụng trực tiếp mà không cần đóng gói thành file `.jar`.










