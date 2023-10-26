const express = require('express');
const Routing = express.Router();
const {createAuthModel} = require('../controllers/userAuthController');

Routing.post('/register',createAuthModel);
module.exports = ("TaskRoutes",Routing);