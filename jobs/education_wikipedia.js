// education_wikipedia.js
module.exports = {
	title: 'Education Words',
	full: 'education',
	language: 'english',
	type: 'U',
	topic: 'ED',
	url: 'http://en.wikipedia.org/wiki/Glossary_of_education_terms_(T%E2%80%93Z)',
	element: '#mw-content-text ul li b a',
	filter: [
	  'Law (principle)'
	],
	clean: function(text) {

		text = text.replace(' (trait)', '');
		text = text.replace('Of ', '');
		text = text.replace(' (process)', '');
		text = text.replace(' (academic)', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};