// news_2.js
module.exports = {
	title: 'News Words',
	full: 'news',
	language: 'english',
	type: 'U',
	topic: 'NE',
	url: 'http://www.macmillandictionary.com/thesaurus-category/british/General-words-for-information-news-and-facts',
	element: '#thesaurusentry a h3',
	filter: [],
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