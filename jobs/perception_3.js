// perception_3.js
module.exports = {
	title: 'Perception Words',
	full: 'perception',
	language: 'english',
	type: 'I',
	topic: 'PE',
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