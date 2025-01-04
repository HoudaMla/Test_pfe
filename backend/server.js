const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const router = require('./routes/routes');

const app = express();

app.use(cors()); // Enable CORS for all routes

mongoose.connect("mongodb://localhost:27017/test_pfe", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("Error Connecting to DB:", error);
});

db.once('open', () => {
    console.log("Successfully Connected to DB");
    app.listen(3003, () => {
        console.log("Server Started....!!!!");
    });
});

app.use(express.json());
app.use(router);
