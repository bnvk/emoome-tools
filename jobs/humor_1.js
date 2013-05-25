// humor_1.js
module.exports = {
	title: 'Humor Words',
	full: 'humor',
	language: 'english',
	type: 'I',
	topic: 'HU',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Relating-to-humour',
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