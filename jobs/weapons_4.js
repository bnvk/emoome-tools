// weapons_4.js
module.exports = {
	title: 'Weapons Words',
	full: 'weapons',
	language: 'english',
	type: 'D',
	topic: 'W',
	url: 'http://en.wikipedia.org/wiki/List_of_shotguns',
	element: '#mw-content-text ul li a',
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
     'List of firearms',
     'List of revolvers',
     'List of pistols',
     'List of multiple barrel firearms',
     'List of submachine guns',
     'List of assault rifles',
     'List of machine guns',
     'List of sniper rifles',
     '[1]',
     '[2]',
     '[3]',
     '[4]',
     '[5]'        
	],
	clean: function(text) {

		if (text.length > 1) {
			var output = {
				type: "string",
				data: text
			};
		}
		else {
			output = '';
		}

		return output;
	}
};