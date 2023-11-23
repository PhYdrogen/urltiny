FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]