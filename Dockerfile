# Node-Alpine
FROM node:12-alpine
LABEL maintainer "Lordpedal"

# Variables entorno
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Arranque Docker
COPY package.json package-lock.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

# Check Docker
HEALTHCHECK CMD ["npm", "run", "healthcheck"]
CMD ["npm", "run", "start"]
