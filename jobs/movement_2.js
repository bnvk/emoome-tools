// movement_2.js
module.exports = {
	title: 'Movement Words',
	full: 'movement',
	language: 'english',
	type: 'P',
	topic: 'MO',
	url: 'http://makememusical.blogspot.com/2011/01/101-movement-words-fantastic-list-for.html',
	element: '.MsoListParagraphCxSpFirst, .MsoListParagraphCxSpMiddle',
	filter: [],
	clean: function(text) {

		text = text.replace('', '');
		text_split = text.split('. ');

		if (text_split[1] !== undefined) {	
			var output = {
				type: "string",
				data: text_split[1]
			};
		}
		else {

			console.log(text_split[1]);
			var output = '';
		}

		return output;
	}
};