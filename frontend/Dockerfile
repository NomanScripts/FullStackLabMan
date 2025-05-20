# =====================
# Step 1: Build the app
# =====================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# ✅ Copy code and env file (assumed pre-copied as `.env`)
COPY . .

# Vite reads `.env` during build
RUN npm run build


# ============================
# Step 2: Serve with NGINX
# ============================
FROM nginx:alpine

# Remove default NGINX static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Vite app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Custom NGINX config
# COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
