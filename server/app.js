const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const quotesRoutes = require('./routes/quotes');
require('dotenv/config');

const app = express();

// CORS error work around for testing in local env
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})


app.use(bodyParser.json());

app.use('/quotes', quotesRoutes);

mongoose.connect(
    process.env.DB_CONNECTION,
    {dbName: "quoteDB"}
    //() => console.log('Connected to DB')
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.get('/', (request, response) => {
    response.send('we are at home');
})

app.listen(3000, () => {
    console.log("Server is running...");
});
  

