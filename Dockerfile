# Dockerfile

# base image
FROM node:16-alpine

# exposes the environment variable PORT=3002
# ENV PORT 3002

# create & set working directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json ./

# copy source files
# COPY ./ ./
COPY . .

RUN npm install

COPY next.config.js ./

COPY pages ./pages

COPY public ./public

COPY styles ./styles

# build the app
RUN npm run build

EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]