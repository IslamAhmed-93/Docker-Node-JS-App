FROM node:14 as base


FROM base as development

WORKDIR /node-app
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]

FROM base as production

WORKDIR /node-app
COPY . .
RUN npm install --only=production
EXPOSE 4000
CMD [ "npm", "start" ]