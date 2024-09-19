FROM node:20-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

RUN ls -la node_modules/.bin  # ここでインストールされたパッケージの確認

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
