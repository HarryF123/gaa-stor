FROM eclipse-temurin:25-jdk AS build
WORKDIR /app

# Explicitly step-copy files to verify hidden layout dependencies pass through
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
COPY src/ ./src/

# Sanitise line endings for Linux compliance and package the application
RUN sed -i 's/\r$//' mvnw && chmod +x mvnw && ./mvnw clean package -DskipTests

FROM eclipse-temurin:25-jre
WORKDIR /app

# Copy the compiled JAR binary out of the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
