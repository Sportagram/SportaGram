# Step 1: Set up the build environment (using Node.js image)
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:stable-alpine

# Copy the built output to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]

