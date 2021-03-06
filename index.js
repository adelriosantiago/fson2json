//fson2json (FileSystem Object Notation to JavaScript Object Notation)

'use strict';

var path = require('path'),
	fs = require('fs'),
	_ = require('lodash'),
	mkdirp = require('mkdirp');

/*//Default options
var defaultOptions = { dbPath: "./fson/" };

function convert(json, subPath) {
	if (_.isUndefined(subPath)) subPath = "";
	
	_.forOwn(json, function(v, k) {
		var keyPath = path.join(defaultOptions.dbPath, subPath, k);
		
		if (_.isObject(v)) {
			//Create dir, will do nothing if the dir already exists
			mkdirp(keyPath, function(err) {
				if (err) console.error(err);
				
				convert(v, path.join(subPath, k));
			});
		} else {
			//Create file
			fs.writeFile(keyPath, v, function(err) {
				if (err) return console.log(err);
			});
		}
	})
}

function options(opts) {
	defaultOptions = _.merge(defaultOptions, opts);
}*/

module.exports = {
	convert: convert,
	options: options
};