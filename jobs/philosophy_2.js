// philosophy_2.js
module.exports = {
	title: 'Philosophy Words',
	full: 'philosophy',
	language: 'english',
	type: 'I',
	topic: 'PH',
	url: 'http://www.philosophy-index.com/terms/',
	element: '#mb ul li a',
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
		text = text.replace(' (logic)', '');
		text = text.replace(' (epistemology)', '');
		text = text.replace(' (philosophy of mind)', '');
		text = text.replace(' (modal logic)', '');
		text = text.replace(' (Wittgenstein)', '');
		text = text.replace('\'', '');
		text = text.replace(' (meta-logic)', '');
	
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