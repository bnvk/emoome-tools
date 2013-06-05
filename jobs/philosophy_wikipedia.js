// philosophy_wikipedia.js
module.exports = {
	title: 'Philosophy Words',
	full: 'philosophy',
	language: 'english',
	type: 'I',
	topic: 'PH',
	url: 'http://en.wikipedia.org/wiki/Glossary_of_philosophy',
	element: '#mw-content-text dl.glossary dt dfn a',
	filter: [
	 'Top',
     '0–9',
     'A',
     'B',
     'C',
     'D',
     'E',
     'F',
     'G',
     'H',
     'I',
     'J',
     'K',
     'L',
     'M',
     'N',
     'O',
     'P',
     'Q',
     'R',
     'S',
     'T',
     'U',
     'V',
     'W',
     'X',
     'Y',
     'Z',
	 '[1]',      
     '[2]',
	 '[6]',
     '[7]',
	],
	clean: function(text) {

		text = text.replace('', '');
		text = text.replace('\'', '');
		text = text.replace(' (philosophy)', '');
	
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