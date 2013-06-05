// exercise_2.js
module.exports = {
	title: 'Exercise Words',
	full: 'exercise',
	language: 'english',
	type: 'P',
	topic: 'E',
	url: 'http://www.crossfit.com/cf-info/excercise.html',
	element: 'div.blogbody ul li a',
	filter: [
	  'CrossFit Exercise Demos',
	  'CrossFit Games',
	  'CrossFit Kids'
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