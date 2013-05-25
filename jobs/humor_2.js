// humor_1.js
module.exports = {
	title: 'Humor Words',
	full: 'humor',
	language: 'english',
	type: 'I',
	topic: 'HU',
	url: 'http://www.onelook.com/?loc=rz7&w=*&clue=comedy',
	element: 'table a',
	filter: [
		"home",
		"play",
		"big",
		"browse dictionaries",
		"bbc 7",
		"bbc radio 4",
		"next page >>",
		"more info on wildcards",
		"link to us",
		"word of the day"
	],
	clean: function(text) {
	
		text = text.replace(' (movie)', '');
	
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};