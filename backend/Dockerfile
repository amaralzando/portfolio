FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos do backend e do core
COPY package.json package-lock.json tsconfig.json ./
COPY ../core /app/core


RUN npm ci

COPY . . 

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
