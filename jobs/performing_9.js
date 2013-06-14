// performing_9.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'U',
	topic: 'PR',
	url: 'http://www.thefreedictionary.com/performing+arts',
	element: 'div.Rel a',
	filter: [
	 'give'
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