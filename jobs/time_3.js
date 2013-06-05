// time_3.js
module.exports = {
	title: 'Time Words',
	full: 'time',
	language: 'english',
	type: 'I',
	topic: 'TI',
	url: 'http://www.english-for-students.com/Noun-Words-for-Time.html',
	element: 'div.Liner ol li',
	filter: [
 
	],
	clean: function(text) {

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