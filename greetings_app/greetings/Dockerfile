FROM openjdk:11-jdk-slim

# Refer to Maven build -> finalName
ARG JAR_FILE=target/greetings-0.0.1-SNAPSHOT.jar

# cp greetings/target/greetings-0.0.1-SNAPSHOT.jar /opt/app/app.jar
COPY ${JAR_FILE} app.jar

# java -jar /opt/app/app.jar
ENTRYPOINT ["java","-jar","app.jar"]