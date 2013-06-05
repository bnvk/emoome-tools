// religion_4.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://phrontistery.info/church.html',
	element: 'table.words tr td:first-child',
	filter: [
    
	],
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