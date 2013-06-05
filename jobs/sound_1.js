// sound_1.js
module.exports = {
	title: 'Sound Words',
	full: 'sound',
	language: 'english',
	type: 'S',
	topic: 'SN',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Relating-to-sound',
	element: '#thesaurusentry div.entry a h3',
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