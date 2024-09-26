const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const os = require('os');

//init app
const PORT = process.env.PORT || 4000;
const app = express();

//connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connected to redis....'));
redisClient.connect();

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(() => console.log('connect to db.....')).catch((error) => console.log('failed to connect to db: ',error));

app.get('/', (req, res) => {
    redisClient.set('products','products....');
    console.log(`traffic from ${os.hostname}`);
    res.send('<h1> Hello Trestmerge with watchtower inside $docker container</h1>')
});

app.get('/data', async (req, res) => {
    const products =  await redisClient.get('products');
    console.log(`traffic from ${os.hostname}`);
    res.send(`<h1> Hello Trestmerge with watchtower from inside @#docker container</h1> <h2>${products}</h2>`)
});

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`) );