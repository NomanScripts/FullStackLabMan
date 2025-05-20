# =====================================
# ✅ Backend Dockerfile (Node.js + dotenv)
# =====================================

# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code (including .env injected at build time)
COPY . .

# Expose backend API port
EXPOSE 5000

# Default start command
CMD ["npm", "start"]
