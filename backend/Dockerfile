FROM node:20-alpine AS builder

WORKDIR /app

# 1. Copia os arquivos de configuração do backend
COPY package.json package-lock.json tsconfig.json ./

# 2. Instala dependências
RUN npm ci

# 3. Copia o core (caminho relativo ao contexto)
COPY ../core ./core

# 4. Copia o código do backend
COPY . .

# 5. Executa o build
RUN npm run build

# Estágio de produção
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/core ./core

EXPOSE 4001

CMD ["npm", "run", "start:prod"]