FROM node:15-alpine

WORKDIR /app

COPY app/* ./
RUN npm install

CMD [ "node", "main.js" ]