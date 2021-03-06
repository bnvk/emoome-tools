// health_24.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.humanillnesses.com/Infectious-Diseases-Sk-Z/index.html',
	element: '#content h2 a',
	filter: [
		'The Human Body: Systems Working Together'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' Disease (CJD)', '');
		text = text.replace(' (Lockjaw)', '');
		text = text.replace(' (Chicken Pox) and Herpes Zoster (Shingles)', '');
		text = text.replace(' Infections', '');
 
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};