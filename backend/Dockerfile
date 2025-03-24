FROM node:20-alpine

WORKDIR /app

# Primeiro copia apenas os arquivos de dependência
COPY package.json package-lock.json ./

# Limpa cache e instala dependências
RUN npm cache clean --force && \
    npm ci --production && \
    npm cache clean --force

# Depois copia o resto do código
COPY . .

RUN npm run build

EXPOSE 4001

CMD ["node", "dist/backend/src/main.js"]