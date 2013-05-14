// legal_2.js
module.exports = {
	title: 'Companies Words',
	full: 'companies',
	language: 'english',
	type: 'D',
	topic: 'CM',
	url: 'http://en.wikipedia.org/wiki/List_of_companies_of_the_United_States',
	element: '#mw-content-text .column-width ul li a',
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

		console.log(text);

//		text = text.replace('.', '');		
		text = text.replace('\'', '');
	
		var output = {
			type: 'string',
			data: text
		};


		return output;

	}
};