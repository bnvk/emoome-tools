// poession_3.js
module.exports = {
	title: 'Posession Words',
	full: 'posession',
	language: 'english',
	type: 'U',
	topic: 'PI',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Invading-and-taking-control-by-force',
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