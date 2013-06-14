// health_24.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/Infectious-Diseases-My-Si/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace('/Pericarditis', '');
		text = text.replace(' (Ear Infections)', '');
		text = text.replace(' (Whooping Cough)', '');
		text = text.replace(' (German Measles)', '');
		text = text.replace('STDs', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};