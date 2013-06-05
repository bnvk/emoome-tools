// crime_1.js
module.exports = {
	title: 'Crime Words',
	full: 'crime',
	language: 'english',
	type: 'U',
	topic: 'CR',	
	url: 'http://www.myvocabulary.com/word-list/police-law-enforcement-vocabulary/',
	element: 'span.word_bank',
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
		
		text = text.split(', ');
		
		var output = {
			type: 'array',
			data: text
		};

		return output;
	}
};