// performing_4.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'U',
	topic: 'PR',
	url: 'http://en.wikipedia.org/wiki/Wikipedia:WikiProject_Stagecraft/Terminology/List_of_theatre_terms',
	element: '#mw-content-text dl dt b',
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