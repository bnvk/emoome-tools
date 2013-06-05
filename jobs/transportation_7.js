// transportation_7.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'D',
	topic: 'TR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/General-words-for-transportation',
	element: 'div.entry a h3',
	filter: [],
	clean: function(text) {

		var output = {
			type: 'string',
			data: text
		};

		return output;
	}
};