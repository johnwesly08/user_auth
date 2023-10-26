const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const TaskRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors({'origin': true,"credentials":false}));

app.use((req,res,next) => {
    console.log(`port ${req.path} method ${req.method}`);
    next();
})

mongoose.connect(process.env.MONGO_URI)
    .then (() => {
        app.listen(process.env.PORT, () => {
            console.log(`Database is connected and server is running in localhost ${process.env.PORT}`); 
        });
    }).catch( (error) => console.log(error)); 

app.use('/task',TaskRoutes);