FROM node:14

WORKDIR /node-app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start-dev" ]

#CMD [ "npm", "start" ]