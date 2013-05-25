// entertainment_1.js
module.exports = {
	title: 'Entertainment Words',
	full: 'entertainment',
	language: 'english',
	type: 'I',
	topic: 'EN',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Types-of-story-or-play',
	element: '#thesaurusentry a h3',
	filter: [],
	clean: function(text) {
	
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};