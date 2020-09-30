const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/neonRoute");

//path to neon route
const neonRoute = require('./routes/neonRoute');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//route for checking whether number is neon or not
//the complete route is /check/neon/:num
app.use("/check", neonRoute);
app.use(routes);

app.get('/', (req, res) => {
    res.send('Backend running successfully');
})


//app is running here
app.listen(5000, () => console.log('Server running on port 5000'));

module.exports = app;