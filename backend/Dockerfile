FROM node:20-alpine

WORKDIR /app

# Cache de dependências
COPY package*.json ./
RUN npm ci

# Código fonte
COPY . .

# Build e execução
RUN npm run build

EXPOSE 4001

CMD ["node", "dist/backend/src/main.js"]