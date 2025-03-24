# Usa a imagem oficial do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o core (módulo local)
COPY ../core ./core

# Copia o restante do código do backend
COPY . .

# Compila o backend (se for TypeScript)
RUN npm run build

# Expõe a porta do backend
EXPOSE 4001

# Comando para rodar o backend
CMD ["npm", "start"]