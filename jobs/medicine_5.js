// medicine_5.js
module.exports = {
	title: 'Medicine Words',
	full: 'medicine',
	language: 'english',
	type: 'I',
	topic: 'MD',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Types-and-forms-of-medicine',
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