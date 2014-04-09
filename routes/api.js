var fs = require('fs');
var phones = fs.readFileSync('phones/phones.json');

exports.phonesIndex = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(phones);
};

exports.phonesShow = function (req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end(fs.readFileSync('phones/' + req.params.id + '.json'));
};
