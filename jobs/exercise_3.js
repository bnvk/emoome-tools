// exercise_3.js
module.exports = {
	title: 'Exercise Words',
	full: 'exercise',
	language: 'english',
	type: 'P',
	topic: 'E',
	url: 'http://en.wikipedia.org/wiki/List_of_weight_training_exercises',
	element: '#mw-content-text h4 span.mw-headline',
	filter: [
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