// exercise_1.js
module.exports = {
	title: 'Exercise Words',
	full: 'exercise',
	language: 'english',
	type: 'P',
	topic: 'E',
	url: 'http://greatist.com/fitness/50-bodyweight-exercises-you-can-do-anywhere',
	element: 'div.field-items div.field-item p strong',
	filter: [
	  ' '
	],
	clean: function(text) {

		text = text.replace(' (I, Y, T, W O)', '');
		text = text.split('. ');	

		if (text.length > 1) {	
			var output = {
				type: "string",
				data: text[1]
			};
		}
		else {
			var output = '';
		}

		return output;
	}
};