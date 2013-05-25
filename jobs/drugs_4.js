// art_1.js
module.exports = {
	title: 'Drugs Words',
	full: 'drugs',
	language: 'english',
	type: 'D',
	topic: 'D',
	url: 'http://en.wikipedia.org/wiki/List_of_drugs_banned_from_the_Olympics',
	element: '#mw-content-text table.multicol ul li a',
	filter: [],
	clean: function(text) {

		text = text.replace('\r\n    ', '');
		text = text.replace(': ', '');
		text = text.replace(':', '');
	
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};