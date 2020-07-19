/* eslint-env node */
'use strict';
const express = require('express');
const http = require('http');
const debug = require('debug')('alumni-directory-api:server');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const api = require('./src/api');


const startServer = function (port) {
    const app = express();
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.set('port', port);
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log(`server now listening on port ${port}.`);
    });
    server.on('error', err => {
        console.log(err);
    });
    debug(port);

    server.on('listening', () => {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
    });
    app.use('/', api);
    return app;
};


if (require.main === module) {
    startServer(process.env.PORT || 3000);
}

module.exports = startServer;
