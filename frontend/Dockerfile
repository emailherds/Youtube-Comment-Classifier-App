FROM node:18.20.7

WORKDIR /app

COPY package.json 

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]