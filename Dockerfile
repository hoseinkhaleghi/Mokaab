# FROM node:16-alpine
# WORKDIR '/app'
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["npm", "run", "start"]

FROM node:20-alpine as production
WORKDIR /app
COPY package*.json /app/
RUN yarn install --verbose
COPY . .
RUN yarn build
FROM nginx:1.23.4-alpine
COPY --from=production /app/dist /usr/share/nginx/html
# COPY --from=production /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "nginx" , "-g" , "daemon off;" ]