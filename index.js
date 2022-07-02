require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const {json} = require("express");
const routes = require("./routes/todoRoute");

const app = express();

app.use(cors());
app.use(json());

app.use('/todo', routes);

const port = 1020;

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
})

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (response) {
        console.log('Connected to MongoDB');
    })
    .catch(function (err) {
        console.log('Could not connect to MongoDB');
    });


