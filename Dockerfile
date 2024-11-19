# Stage 1: Build the React app
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 환경 변수 설정
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
