// intelligence_2.js
module.exports = {
	title: 'Intelligence Words',
	full: 'intelligence',
	language: 'english',
	type: 'I',
	topic: 'I',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Intelligence-intuition-and-ability-to-understand',
	element: '#thesaurusentry a h3',
	filter: [],
	clean: function(text) {
	
		if (text.length > 1) {	
			var output = {
				type: "string",
				data: text
			};
		}
		else {
			var output = '';
		}

		return output;
	}
};