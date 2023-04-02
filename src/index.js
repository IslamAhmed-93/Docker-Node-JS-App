const express = require('express');

//init app
const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1> Hello Trestmerge From Ubuntu Desktop from inside #docker compose container </h1>'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`) );