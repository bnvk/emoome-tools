// religion_wikipedia2.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://en.wikipedia.org/wiki/List_of_titles_and_names_of_Krishna',
	element: '#mw-content-text ol li',
	filter: [
	 '^ Sankara glosses "Hari" this way in his commentary on the word "Hari" in Vishnu-sahasra-nama.',
     '^ Monier-Williams: "lord of the senses".'
	],
	clean: function(text) {

		//text = text.replace('', '');
		text = text.split(': ');

		if (text[0].length > 1) {	
			var output = {
				type: "string",
				data: text[0]
			};
		}
		else {
			var output = '';
		}

		return output;
	}
};