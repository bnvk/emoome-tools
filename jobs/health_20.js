// health_20.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'I',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/Behavioral-Health-Br-Fe/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};