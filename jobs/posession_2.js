// poession_2.js
module.exports = {
	title: 'Posession Words',
	full: 'posession',
	language: 'english',
	type: 'U',
	topic: 'PI',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Owners-and-ownership',
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