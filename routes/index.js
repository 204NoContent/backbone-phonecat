exports.index = function (req, res){
    res.render('index', { title: 'Backbone vs. Angular' });
};

exports.api = require('./api.js');
