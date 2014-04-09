var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();
var templateHelper = require('./helpers/template_helper');

app.set('port', 8888);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if ('development' === app.get('env')) {
    app.use(function (req, res, next) {
        if (req.path === '/javascripts/jst.js') templateHelper.createJstSync('public/javascripts/templates');
        next();
    });
}

// cache images so this example app simulates a production environment
app.use(function (req, res, next) {
    if (req.path.match(/^\/img\//)) res.setHeader('Cache-Control', 'max-age=3600');
    next();
});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/api/phones', routes.api.phonesIndex);
app.get('/api/phones/:id', routes.api.phonesShow);

app.use(routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
