// internet_2.js
module.exports = {
	title: 'Internet Words',
	full: 'internet',
	language: 'english',
	type: 'D',
	topic: 'IN',
	url: 'http://www.matisse.net/files/glossary.html',
	element: 'body dl dt b',
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