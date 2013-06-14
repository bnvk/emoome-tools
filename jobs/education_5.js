// education_5.js
module.exports = {
	title: 'Education Words',
	full: 'education',
	language: 'english',
	type: 'I',
	topic: 'ED',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/General-words-for-study-and-studying',
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