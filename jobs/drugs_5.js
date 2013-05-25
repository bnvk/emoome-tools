// art_1.js
module.exports = {
	title: 'Drugs Words',
	full: 'drugs',
	language: 'english',
	type: 'U',
	topic: 'D',
	url: 'http://www.drugrehab.co.uk/street-drug-names.htm',
	element: '#Artikel table td p b',
	filter: [
		'"i\'ve got my son back through narconon drug rehab!"',
		"p\'s",
		"\r\n      j",
		"\r\n      s",
		"p\'s",
		"e\'s",
		"b\'s"
	],
	clean: function(text) {

		if (text.length > 1) {

			text = text.replace('\r\n\t\t', '');
			text = text.replace(': ', '');
			text = text.replace(':', '');
		
			var output = {
				type: "string",
				data: text
			};
	
			return output;
		}
		
		return '';
	}
};