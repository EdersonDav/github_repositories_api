FROM node:latest

WORKDIR /usr/src/api

COPY . .

RUN npm install

CMD ["npm", "run", "start:dev"]