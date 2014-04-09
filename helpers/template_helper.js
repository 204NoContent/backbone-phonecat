var _ = require('underscore');
var fs = require('graceful-fs');
var path = require('path');
var wrench = require('wrench');
var ejs = require('ejs');

exports.createJstSync = function (dir) {
    var templates = [];
    var file = 'public/javascripts/jst.js';
    if (fs.existsSync(dir)) {
        templates = _.reject(wrench.readdirSyncRecursive(dir), function (result) { return path.extname(result) !== '.jst'; });
    }

    fs.writeFileSync(file, 'window.JST = {};\n');
    _.each(templates, function (template) {
        var processed_file = ejs.render(fs.readFileSync(dir + '/' + template).toString());
        _.templateSettings = {
            evaluate    : /\[\[([\s\S]+?)\]\]/g,
            interpolate : /\[\[-([\s\S]+?)\]\]/g,
            escape      : /\[\[=([\s\S]+?)\]\]/g
        };
        var template_function;
        try {
            template_function = _.template(processed_file).source;
        } catch (e) {
            e.message += '\n    at ' + template + ': ??';
            console.log(e.stack);
            process.exit();
        }
        fs.appendFileSync(file, 'window.JST[' + JSON.stringify(template.replace('.jst', '')) + '] = ' + template_function + ';\n');
    });
};
