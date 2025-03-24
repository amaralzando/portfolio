# --- Core Build ---
FROM node:20-alpine AS core-builder

WORKDIR /app/core

# Copia os arquivos de configuração do core
COPY core/package*.json ./

# Instala as dependências do core
RUN npm ci

# Copia o restante dos arquivos do core
COPY core/. .

# --- Backend Build ---
FROM node:20-alpine AS backend-builder

WORKDIR /app/backend

# Copia as dependências do backend
COPY backend/package*.json ./
RUN npm ci

# Copia o core construído
COPY --from=core-builder /app/core ./../core

# Copia o restante do backend
COPY backend/. .
RUN npm run build \
    && npm prune --omit=dev

# --- Frontend Build ---
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/. .
RUN npm run build

# --- Final Stage (Multi-Stage Build) ---
FROM node:20-alpine

WORKDIR /app

# Copia o core
COPY --from=core-builder /app/core ./core

# Copia o backend
COPY --from=backend-builder /app/backend/package*.json ./backend/
COPY --from=backend-builder /app/backend/node_modules/ ./backend/node_modules/
COPY --from=backend-builder /app/backend/dist/ ./backend/dist/

# Copia o frontend
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/package*.json ./frontend/

# Expõe as portas
EXPOSE 3001
EXPOSE 4001

# Inicia o backend e o frontend
CMD ["sh", "-c", "cd backend && node dist/backend/src/main.js & cd ../frontend && npm start -- --port 3001"]