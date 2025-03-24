FROM node:20-alpine AS builder
WORKDIR /web
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa final com NGINX
FROM nginx:alpine
COPY --from=builder /web/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001

CMD ["npm", "run", "start"]