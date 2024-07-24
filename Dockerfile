FROM node:latest

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5555

CMD ["yarn", "start:dev"]