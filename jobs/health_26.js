// health_24.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/Infectious-Diseases-He-My/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(' (Peptic Ulcer Disease)', '');
		text = text.replace(' (Rubeola)', '');
		text = text.replace(', Atypical', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};