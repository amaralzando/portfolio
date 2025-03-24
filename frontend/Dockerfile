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

# Copia o restante do código do frontend
COPY . .

# Compila o frontend (se for React/Next.js)
RUN npm run build

# Expõe a porta do frontend
EXPOSE 3001

# Comando para rodar o frontend
CMD ["npm", "start"]