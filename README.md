# ⚡ [tinyUrl](https://tinyurl-hmcg.onrender.com)

Url shortener

## Description
The goal of this project is to redirect

## Table of Contents
- Clone the repository
- Usage
- Docker
- License

## Clone the repository
git clone https://github.com/phydrogen/urltiny.git

## Usage
There is two folder backend and frontend, you could use docker to make all the app work or you could compile everything for you.
In the backend folder you will need Java and JDK and run the file gradlew.
In the frontend folder you will need node, then run ``npm install`` to install all the deps after that run ``ng serve``

## Docker
If you don't want to bother with that use docker instead 

### mongodb

docker compose -f docker-compose-dev.yml up

### backend

docker build --file=backend.dockerfile  -t urltiny-web-backend .

### frontend

docker build --file=frontend.dockerfile  -t urltiny-web-frontend .

## License
MIT License
