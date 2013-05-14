// legal_2.js
module.exports = {
	title: 'Legal Words',
	full: 'legal',
	language: 'english',
	type: 'U',
	topic: 'LE',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/The-law-laws-and-parts-of-laws',
	element: 'div.entry a h3',
	filter: [
		'	',
		' \r\n\t',
		'	\r\n\t',
		'\r\n\t',
		' |  ',
		'  |  ',
		': \r\n\t',
		': ',
		'" ',
		'"',
		' |  ',
		' '
	],
	clean: function(text) {
		text = text.replace('\r\n\t', '');
		text = text.replace(' \r\n\t', '');
		text = text.replace(': \r\n\t ', '');
		text = text.replace(': \r\n\t', '');
		text = text.replace(': ', '');
		text = text.replace(':', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};