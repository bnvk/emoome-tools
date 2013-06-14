// writing_2.js
module.exports = {
	title: 'Writing Words',
	full: 'writing',
	language: 'english',
	type: 'I',
	topic: 'WR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/Words-used-to-describe-writing-or-speech-style',
	element: '#thesaurusentry a h3',
	filter: [
		'in',
		'be couched in something',
		'have something/a lot/nothing etc to say for yourself',
		'with (your) tongue in (your) cheek'
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