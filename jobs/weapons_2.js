// weapons_2.js
module.exports = {
	title: 'Weapons Words',
	full: 'weapons',
	language: 'english',
	type: 'D',
	topic: 'W',
	url: 'http://en.wikipedia.org/wiki/List_of_assault_rifles',
	element: '#mw-content-text table tr td:first-child a',
	filter: [],
	clean: function(text) {

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};