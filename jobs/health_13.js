// health_13.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/original/Men-Os/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(', Infectious', '');
		text = text.replace(' (Dissociative Identity Disorder)', '');
		text = text.replace(' Disorder', '');
		text = text.replace(' Disease', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};