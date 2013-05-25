// art_1.js
module.exports = {
	title: 'Drugs Words',
	full: 'drugs',
	language: 'english',
	type: 'D',
	topic: 'D',
	url: 'http://www.angelfire.com/nc3/darkside/lisdrug.html',
	element: 'div p strong',
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