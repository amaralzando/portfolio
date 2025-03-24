FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm cache clean --force && \
    npm ci --production && \
    npm cache clean --force

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start", "--", "--port", "3001"]