# URRRRRRRRRRRRRRRL TO URL

self explenatory


## docker

docker compose -f docker-compose-dev.yml up

## backend

docker build --file=backend.dockerfile  -t urltiny-web-backend .

## frontend

don't need to build front because of npm

docker build --file=frontend.dockerfile  -t urltiny-web-frontend .
