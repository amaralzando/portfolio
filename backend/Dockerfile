FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia os arquivos de configuração
COPY package.json package-lock.json tsconfig.json ./

# 2. Instala TODAS as dependências (incluindo devDependencies)
RUN npm ci

# 3. Copia todo o código fonte
COPY . .

# 4. Executa o build
RUN npm run build

# Estágio de produção
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 4001

# 5. Define o comando de produção
CMD ["npm", "run", "start:prod"]