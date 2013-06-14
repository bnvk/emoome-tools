// health_10.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/original/Gas-Hep/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(' (Rubella)', '');
		text = text.replace(' (Dyspepsia)', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};