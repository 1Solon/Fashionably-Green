FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm ci 
RUN npm run build
ENV NODE_ENV production
EXPOSE 5000
CMD [ "npm", "run", "serve" ]