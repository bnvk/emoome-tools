// performing_5.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'P',
	topic: 'PR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/To-dance',
	element: '#thesaurusentry a h3',
	filter: [],
	clean: function(text) {

		text = text.replace('', '');
	
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