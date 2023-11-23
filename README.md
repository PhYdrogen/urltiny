# URRRRRRRRRRRRRRRL TO URL

self explenatory


## docker

docker compose -f docker-compose-dev.yml up

## rebuild the backend

gradle build

then 

docker build --file=backend.dockerfile  -t urltiny-web-backend .

so the dockerimage is up to date for the dockercompose

## frontend

don't need to build front because of npm

docker build --file=frontend.dockerfile  -t urltiny-web-frontend .
