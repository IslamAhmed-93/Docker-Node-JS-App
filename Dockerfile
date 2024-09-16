FROM node:14

WORKDIR /node-app

COPY . .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

EXPOSE 4000