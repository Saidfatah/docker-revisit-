FROM node:17-alpine

WORKDIR /server 

RUN npm install -g nodemon

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 9090

CMD ["npm","run","serve"]
