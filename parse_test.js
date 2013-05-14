// Modules
var request = require("request"),
	cheerio = require("cheerio"),
	fs = require("fs"),
	_ = require('underscore');


request({ uri: 'http://www.enchantedlearning.com/wordlist/legal.shtml' }, function(error, response, body) {
	

	// Load DOM
	var $ = cheerio.load(body, {
		ignoreWhitespace: false,
		lowerCaseTags: false
	});

	// Parse DOM
	var data = $('table tbody tr td font');
	
	console.log();
	
});

