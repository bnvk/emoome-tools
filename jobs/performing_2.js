// performing_2.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'U',
	topic: 'PR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Actors-and-actresses',
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