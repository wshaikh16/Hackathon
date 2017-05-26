﻿var url = require('url');
var fs = require('fs');

function renderHtML(path, response) {
    fs.readFile(path, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequests: function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' })

        var path = url.parse(request.url).pathname;

        switch (path) {
            case '/':
                renderHtML('./index.html', response);
                break;
            case '/login':
                renderHtML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
};