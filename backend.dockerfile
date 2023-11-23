#used to build the project
FROM gradle:latest AS BUILD

WORKDIR /app

COPY backend/ .

RUN gradle clean build

FROM openjdk:21

RUN mkdir -p /app

WORKDIR /app

COPY --from=BUILD /app/build/libs/*.jar ./backend.jar

EXPOSE $PORT

CMD [ "java", "-jar", "./backend.jar" ]