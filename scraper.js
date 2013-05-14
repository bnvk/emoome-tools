// Modules
var request = require("request"),
	cheerio = require("cheerio"),
	fs = require("fs"),
	_ = require('underscore');


// File Manipulation
var SaveFile = require('./lib/save_file');


// Debug
var debug = {
	added_words: [],
	added_phrases: [],
	duplicates: [],
	filtered: [],
	actions: []
}


// Instructions & Filename - what job to do (and how to do it)
var instructions = require('./jobs/' + process.argv[3]);
var filename = './scraped/' + instructions.full + '_' + instructions.language + '.json';

// If file exist
fs.exists(filename, function(exists) {

	debug.actions.push('Checking for existing file: ' + filename);

	if (exists) {
		debug.actions.push('Splendid file exists open it up');			

		//var template = new OpenFile(fs, filename);

	    fs.stat(filename, function(error, stats) {
	      fs.open(filename, "r", function(error, fd) {
	
	        var buffer = new Buffer(stats.size);
	
	        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
	          fs.close(fd);
	
	          var template = JSON.parse(buffer.toString("utf8", 0, buffer.length));

	          startRequest(template);
	        });
	      });
	    });
	}
	else {
		debug.actions.push('Here we go create new file template');
		var template = {
			title: instructions.title,
			language: instructions.language,
			full: instructions.full,
			topic: instructions.topic,
			sources: [],
			words: {"U":[],"E":[],"I":[],"D":[],"S":[],"P":[],"A":[]},
			phrases: {"U":[],"E":[],"I":[],"D":[],"S":[],"P":[],"A":[]}
		};

		startRequest(template);		
	}

});


// Processing Logic
var ProcessText = function(template, text) {

	var text_lower = text.toLowerCase();
	var text_check = text_lower.split(' ');
	var text_count = text_check.length;

	// Phrases
	if (text_count > 1) {

		var check_phrase = _.indexOf(template.phrases[instructions.type], text_lower);

		// Add Phrase
		if (check_phrase === -1 && text !== ' ') {

			// Add
			template.phrases[instructions.type].push(text_lower);

			// Add to debug
			debug.added_phrases.push(text_lower);
		}
		else {
			debug.duplicates.push(text_lower);			
		}
	}
	else if (text_count === 1) {

		var check_word = _.indexOf(template.words[instructions.type], text_lower);

		// Add Single Word
		if (check_word === -1 && text_lower !== '') {

			// Add
			template.words[instructions.type].push(text_lower);

			// Add to debug
			debug.added_words.push(text_lower);
		}
		else {
			debug.duplicates.push(text_lower);			
		}
	}
}


// Make Request which start whole thing off
var startRequest = function(template) {

	request({ uri: instructions.url }, function(error, response, body) {
	
		// Debuging
		debug.actions.push('Making request');
		var element_count = 0;
		
		template.sources.push(instructions.url);
	
		// Load DOM
		var $ = cheerio.load(body, {
			ignoreWhitespace: false,
			lowerCaseTags: false
		});
	
	
		// Parse DOM
		if (instructions.element) {
			$(instructions.element).each(function() {

				element_count++;

				// Get HTML text
				var text = $(this).text();
				var check_filter = _.indexOf(instructions.filter, text);

				// Filter Out Junk
				if (check_filter === -1) {

					// Clean
					text = instructions.clean(text);

					// Handle Ouput
					if (text.type === 'string') {

						//debug.actions.push('inside ProcessText.string');
						ProcessText(template, text.data);
					}
					else if (text.type === 'array') {

						//debug.actions.push('inside ProcessText.array');
						for (word in text.data) {
							ProcessText(template, text.data[word]);
						}
					}
				}
				// Fails filter
				else {
					debug.filtered.push(check_filter + ' filtered: ' + text);
				}
			});
		}
		// Manual Processing
		else {
			text = instructions.clean();
			element_count = 'manual data';

			// Handle Ouput
			if (text.type === 'string') {
				ProcessText(template, text.data);
			}
			else if (text.type === 'array') {
				for (word in text.data) {
					ProcessText(template, text.data[word]);
				}
			}				
		}


		// Debug
		debug.actions.push('Processed ' + element_count + ' elements');


		// Final Action (save, debug)
		if (process.argv[2] === "save") {
			debug.actions.push('Saving file, good show old bean');
			var saveFile = new SaveFile(fs, filename, template);
			console.log(debug);
		}
		else if (process.argv[2] === "debug") {
			debug.actions.push('Showing only debug');
			console.log(debug);
		}
	});
};

