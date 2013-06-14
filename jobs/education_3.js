// education_3.js
module.exports = {
	title: 'Education Words',
	full: 'education',
	language: 'english',
	type: 'U',
	topic: 'ED',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/School-pupils',
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