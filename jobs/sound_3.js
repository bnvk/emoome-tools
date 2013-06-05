// sound_3.js
module.exports = {
	title: 'Sound Words',
	full: 'sound',
	language: 'english',
	type: 'S',
	topic: 'SN',
	url: 'http://www.owenscorning.com/around/sound/glossary.asp',
	element: 'table table p.left span.black strong b',
	filter: [],
	clean: function() {
	
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