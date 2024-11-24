# Stage 1: Build the React app
FROM node:16 AS build  # Node.js 버전을 16 이상으로 변경

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Add a custom Nginx configuration for React (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React app files to Nginx's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
