// deception_3.js
module.exports = {
	title: 'Deception Words',
	full: 'deception',
	language: 'english',
	type: 'U',
	topic: 'DE',
	url: 'http://dictionary.cambridge.org/topics/honesty-and-dishonesty/dishonest/',
	element: 'li a span.hwd span.results span.base b.hw',
	filter: [],
	clean: function(text) {

		//text = text.replace('', '');
	
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