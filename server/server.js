const express = require('express');
const cors = require('cors');
require(dotenv).config();
const mongoose = require('mongoose');

const app = express;
app.use(express.json({'extended':false}));
app.use(cors({'origin': false,"credentials":false}));

mongoose.connect(MONGO_URI)
    .then