// humor_3.js
module.exports = {
	title: 'Humor Words',
	full: 'humor',
	language: 'english',
	type: 'I',
	topic: 'HU',
	url: 'http://www.buzzle.com/articles/types-of-comedy.html',
	element: '#rs_read_this table td div div b',
	filter: [],
	clean: function(text) {
		
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};