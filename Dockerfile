FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

EXPOSE 5000

CMD ["serve","-s","build"]
