// performing_3.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'U',
	topic: 'PR',
	url: 'http://en.wikipedia.org/wiki/Outline_of_performing_arts',
	element: '#mw-content-text ul li a',
	filter: [
	 '1 Common performing arts',
     '2 History of performing arts',
     '3 Contents of a work of performing art',
     '4 Venue types',
     '5 Participants',
     '6 Production activities',
     '7 See also',
     '8 External links',	
	 'History of acrobatics',
     'History of busking',
     'History of dance',
     'History of ballet',
     'History of film',
     'History of juggling',
     'History of magic',
     'History of marching bands',
     'History of music',
     'History of opera',
     'History of theatre',	
     'This outline displayed as a mindmap',
     'Bibliography of Performing Arts In The East',
     'v',
     't',
     'e',
     'General reference',
     'Culture and the arts',
     'Geography and places',
     'Health and fitness',
     'History and events',
     'Mathematics and logic',
     'Natural and physical sciences',
     'People and self',
     'Philosophy and thinking',
     'Religion and belief systems',
     'Society and social sciences',
     'Technology and applied sciences'	
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