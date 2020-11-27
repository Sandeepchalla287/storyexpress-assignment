var express = require('express');
var app = express();
var parser = require('./parser');
parser(app);
module.exports = app;