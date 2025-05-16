# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose port (adjust if your backend runs on a different port)
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
