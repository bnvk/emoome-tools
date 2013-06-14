// exercise_4.js
module.exports = {
	title: 'Exercise Words',
	full: 'exercise',
	language: 'english',
	type: 'P',
	topic: 'E',
	url: 'http://www.becomehealthynow.com/category/exerciseaerobic/',
	element: 'p.mira_Title span.mira_articletitle a',
	filter: [
		' Introduction to the Aerobic Exercise Program',
		'Goal Setting in Exercise',
		'Frequently Asked Questions about Aerobic Exercise',
		'Nutritional Support for Exercise',
    	'Perceived Exertion',
	    'Personal Aerobic Exercise Program Tool Kit'
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