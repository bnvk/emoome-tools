// activism_1.js
module.exports = {
	title: 'Activisim Words',
	full: 'activism',
	language: 'english',
	type: 'I',
	topic: 'AT',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Protesters-rebels-and-terrorists',
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