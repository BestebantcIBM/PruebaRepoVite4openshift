
FROM registry.access.redhat.com/ubi8/nodejs-18:latest

WORKDIR /src

COPY package.json package-lock.json* ./


RUN npm install

FROM registry.access.redhat.com/ubi8/nodejs-18-minimal:latest

COPY --from=0 /opt/app-root/src/node_modules /opt/app-root/src/node_modules
COPY . /opt/app-root/src
ENV NODE_ENV production
ENV PORT=8080
RUN npm run build
EXPOSE 8080

CMD ["npm", "run", "dev"]
