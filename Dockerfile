# --- Backend Build ---
FROM node:20-alpine as backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm ci

COPY backend/. .
RUN npm run build \
    && npm prune --omit=dev

# --- Frontend Build ---
FROM node:20-alpine as frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/. .
RUN npm run build

# --- Final Stage (Multi-Stage Build) ---
FROM node:20-alpine

WORKDIR /app

# Copy Backend
COPY --from=backend-builder /app/backend/package*.json ./backend/
COPY --from=backend-builder /app/backend/node_modules/ ./backend/node_modules/
COPY --from=backend-builder /app/backend/dist/ ./backend/dist/

# Copy Frontend
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/package*.json ./frontend/

# Expose Ports (Coliffy will manage routing)
EXPOSE 3001
EXPOSE 4001

# Start Backend and Frontend
CMD ["sh", "-c", "cd backend && node dist/backend/src/main.js & cd ../frontend && npm start -- --port 3001"]