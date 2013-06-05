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
	not_filtered: [],
	filtered: [],
	actions: []
}


// Instructions & Filename - what job to do (and how to do it)
var instructions = require('./jobs/' + process.argv[3]);
var filename = './scraped/' + instructions.language + '/' + instructions.full + '.json';

// If file exist
fs.exists(filename, function(exists) {

	debug.actions.push('Checking for existing file: ' + filename);

	if (exists) {
		debug.actions.push('Splendid file exists open it up');

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

		if (process.argv[4] === 'patterns') {

			debug.actions.push('Here we go create Patterns file template');

			var template = {
				title: instructions.title,
				language: instructions.language,
				full: instructions.full,
				topic: instructions.topic,
				sources: [],
				phrases: {"alliterations":[],"opposites":[],"duos":[],"D":[],"S":[],"P":[],"A":[]}
			};
		}
		else {

			debug.actions.push('Here we go create Normal file template');
			
			var template = {
				title: instructions.title,
				language: instructions.language,
				full: instructions.full,
				topic: instructions.topic,
				sources: [],
				words: {"U":[],"E":[],"I":[],"D":[],"S":[],"P":[],"A":[]},
				phrases: {"U":[],"E":[],"I":[],"D":[],"S":[],"P":[],"A":[]}
			};
		}

		startRequest(template);		
	}

});


// Processing Logic
var ProcessText = function(type, template, text) {

	var text_trim  = text.trim(),
	text_ready = text_trim.toLowerCase();

	// For Word / Phrase check
	var text_check = text_ready.split(' ');

	// Is Phrase
	if (text_check.length > 1) {

		var check_phrase = _.indexOf(template.phrases["U"], text_ready);

		// Check if existing / then add Phrase
		if (check_phrase === -1 && text !== ' ') {

			// Add
			template.phrases["U"].push(text_ready);

			// Add to debug
			debug.added_phrases.push(text_ready);
		}
		else {
			debug.duplicates.push(text_ready);
		}
	}
	// Is Word
	else if (text_check.length === 1) {

		var check_array = [
			_.indexOf(template.words["E"], text_ready),
			_.indexOf(template.words["I"], text_ready),
			_.indexOf(template.words["D"], text_ready),
			_.indexOf(template.words["S"], text_ready),
			_.indexOf(template.words["A"], text_ready),
			_.indexOf(template.words["P"], text_ready),
			_.indexOf(template.words["U"], text_ready)
		];

		// Check if existing / then add Word
		if (_.without(check_array, -1).length === 0 && text !== '') {

			// Add
			template.words[type].push(text_ready);

			// Add to debug
			debug.added_words.push(text_ready);
		}
		else {
			debug.duplicates.push(text_ready);
		}
	}
}


// Make Request which start whole thing off
var startRequest = function(template) {

	request({ uri: instructions.url }, function(error, response, body) {
	
		// Debuging
		debug.actions.push('Making request');
		var element_count = 0;		
		
		// Add Source if NOT added
		if (_.indexOf(template.sources, instructions.url) === -1) {	
			debug.actions.push('Added URL: ' + instructions.url);
			template.sources.push(instructions.url);
		}

		// Parse JSON (from old API)
		if (instructions.element === 'json') {
		
			var api = JSON.parse(body);

			for (word in api.words) {
				element_count++;
				ProcessText(api.type, template, api.words[word]);
			};
		}
		// Parse DOM		
		else if (instructions.element) {

			// Load DOM
			var $ = cheerio.load(body, {
				ignoreWhitespace: false,
				lowerCaseTags: false
			});

			$(instructions.element).each(function() {

				element_count++;

				// Get HTML text
				var text_original = $(this).text();
				var text_clean = instructions.clean(text_original);
				var check_filter = _.indexOf(instructions.filter, text_original);

				// Debug Filter (is in list word)
				//console.log(check_filter + ' --- ' + text_clean);

				// Filter Out Junk
				if (check_filter === -1) {

					// Pre Clean for debug
					debug.not_filtered.push(text_original);

					// Handle Ouput
					if (text_clean.type === 'string') {
						ProcessText(instructions.type, template, text_clean.data);
					}
					else if (text_clean.type === 'array') {

						for (word in text_clean.word) {
							ProcessText(instructions.type, template, text_clean.word[word]);
						}
					}
					else {
						console.log('not processed: ' + text_clean);
					}
				}
				// Fails filter
				else {
					debug.filtered.push(text_original);
				}
			});
		}
		// Manual Processing
		else {
			text = instructions.clean();
			element_count = 'manual data';

			// Handle Ouput
			if (text.type === 'string') {
				ProcessText(instructions.type, template, text.data);
			}
			else if (text.type === 'array') {
				for (word in text.data) {
					ProcessText(instructions.type, template, text.data[word]);
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

