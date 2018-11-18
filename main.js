'use strict';

const path = require('path');
const express = require('express');
const config = require(path.join(__dirname, 'config.dev.json'));

var httpServer = express();

httpServer.listen(config.httpServer.port);