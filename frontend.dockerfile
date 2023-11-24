FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

ENV PROXY_API=$PROXY_API
ENV PROXY_BACK=$PROXY_BACK

RUN npm run ng tinyUrl:collect-vars

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]