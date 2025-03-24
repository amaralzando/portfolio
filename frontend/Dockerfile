FROM node:20-alpine

WORKDIR /app

# Cache de dependências
COPY package*.json ./
RUN npm ci

# Código fonte
COPY . .

# Build e execução
RUN npm run build

EXPOSE 3001

CMD ["npm", "start", "--", "--port", "3001"]