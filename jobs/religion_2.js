// religion_1.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'https://en.wikipedia.org/wiki/List_of_religions_and_spiritual_traditions',
	element: '#mw-content-text h3 span.mw-headline',
	filter: [
	 'By demographics',
     'By area',
     'Other',
     'African',
     'American',
     'Eurasian',
     'Oceania/Pacific',
     'Ancient Near Eastern',
     'Indo-European'     
	],
	clean: function(text) {

		text = text.replace('	', '');
	
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