const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Backend running successfully');
})

module.exports = app;
