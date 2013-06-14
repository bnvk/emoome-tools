// art_2.js
module.exports = {
	title: 'Art Words',
	full: 'art',
	language: 'english',
	type: 'U',
	topic: 'AR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Artistic-activities',
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