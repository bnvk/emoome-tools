// education_4.js
module.exports = {
	title: 'Education Words',
	full: 'education',
	language: 'english',
	type: 'D',
	topic: 'ED',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/The-school-or-university-day',
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