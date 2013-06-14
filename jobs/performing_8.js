// performing_8.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'P',
	topic: 'PR',
	url: 'http://dance.about.com/od/ballroomterms/Ballroom_Terms.htm',
	element: '#articlebody p a',
	filter: [],
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