FROM node:20-alpine

WORKDIR /app

# Etapa de construção (builder) para instalar dependências de desenvolvimento
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa final de produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 4001

# 5. Define o comando de produção
CMD ["npm", "run", "start:prod"]