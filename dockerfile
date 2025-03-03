#latest version of node
FROM node:18-alpine

#working directory
WORKDIR /app

#copy package.json to the working directory
COPY package.json .

#install dependencies
RUN npm install

RUN npm i -g serve

#copy all files to the working directory
COPY . .

RUN npm run build

#puerto
EXPOSE 3000

CMD [ "serve", "-s", "dist" ]

