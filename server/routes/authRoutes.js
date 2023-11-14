const express = require('express');
const Routing = express.Router();
const {createAuthModel, getUserDetails} = require('../controllers/userAuthController');

Routing.post('/register',createAuthModel);
Routing.post('/login',getUserDetails);
module.exports = ("TaskRoutes",Routing);