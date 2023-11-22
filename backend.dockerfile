FROM openjdk:21

RUN mkdir -p /app

WORKDIR /app

COPY backend/build/libs/*.jar ./backend.jar

EXPOSE $PORT

CMD [ "java", "-jar", "./backend.jar" ]