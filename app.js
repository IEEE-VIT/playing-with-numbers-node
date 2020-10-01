const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Backend running successfully');
})

app.listen(5000, () => console.log('Server running on port 5000'));

module.exports = app;
