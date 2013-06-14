// health_19.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'I',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/Behavioral-Health-A-Br/index.html',
	element: '#content h2 a',
	filter: [
		'What is Behavioral Health?',
		'Human Diseases and Conditions',
		'The Brain and Nervous System'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(' (Enuresis)', '');
		text = text.replace(' (Neurochemistry)', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};