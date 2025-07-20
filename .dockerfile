# 构建阶段
FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

# 构建前端，自动读取 .env 里的 VUE_APP_API_HOST
RUN yarn build

# 生产环境用 nginx
FROM nginx:alpine AS production-stage

# 拷贝构建产物
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 拷贝自定义 nginx 配置（可选）
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]