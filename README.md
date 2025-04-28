# Java Websocket
- Dự án này được xây dựng để kiểm tra phương án kỹ thuật cho dự án đấu giá 
  - Java Spring Boot
  - Web Socket
  - Redis
  - Kafka
  - MongoDB
- Ứng dụng này sử dụng WebSocket để giao tiếp giữa client và server.

# Development

## Manage Package with Maven
- Check & Install dependencies
```bash
mvn dependency:list
mvn dependency:resolve
```

- Build the Project
```bash
mvn package
```

## Install & Build
- Delete target/ directory (clean up old build).
- Download dependencies from pom.xml if not already present.
- Compile source code (.java → .class).
- Run unit tests if any (can be skipped with -DskipTests).
- Package the application into .jar or .war file.
- Save the packaged file to target/ directory.
```bash
mvn clean package
```


## Run Test

```bash
mvn spring-boot:run

java -jar .\target\java-websocket-1.0.0.jar
```














