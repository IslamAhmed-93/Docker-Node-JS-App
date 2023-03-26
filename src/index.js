const express = require('express');

//init app
const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1> Hello Trestmerge From inside Ubuntu Desktop# Hi App </h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`) );