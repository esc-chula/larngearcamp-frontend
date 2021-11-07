# Stage 1 - the build process
FROM node:14-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile 
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /var/www
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
