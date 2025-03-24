FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci

COPY backend/. .
RUN npm run build

EXPOSE 4001

CMD ["node", "dist/backend/src/main.js"]