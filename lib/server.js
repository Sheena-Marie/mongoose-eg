/* jshint esversion:6 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('../routes/user');
const tweetRoutes = require('../routes/tweets');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use('/users', userRoutes);
app.use('/tweet', tweetRoutes);

module.exports = app;
