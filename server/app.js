var koa = require('koa');
var path = require('path');
var serve = require('koa-static');
var logger = require('koa-logger');
var fs = require('fs');
var Io = require('socket.io');

const app = koa();
app.use(logger());

var server = require('http').createServer(app.callback);
var io = Io(server);

//socket.io
io.on('connection', function (socket) {
    
});


io.on('disconnection', function (socket) {
    
});


