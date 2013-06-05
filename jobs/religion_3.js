// religion_1.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://www.religionfacts.com/christianity/denominations.htm',
	element: '#content table td:nth-child(2) strong a',
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