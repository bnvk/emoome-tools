// health_24.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/General-Information-and-Infectious-Diseases-A-Co/index.html',
	element: '#content h2 a',
	filter: [
		'The Nature of Germs and Infection',
		'Body Defenses',
		'Signs and Symptoms',
		
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(' (Immunization)', '');
		text = text.replace(' (Valley Fever)', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};