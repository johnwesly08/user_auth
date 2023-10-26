const express = require('express');
const Routing = express.Router();
const {createAuthModel} = require('../controllers/userAuthController');

Routing.post('/',createAuthModel);
module.exports = ("TaskRoutes",Routing);