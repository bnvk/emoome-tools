// games_3.js
module.exports = {
	title: 'Games Words',
	full: 'games',
	language: 'english',
	type: 'A',
	topic: 'GA',
	url: 'http://en.wikibooks.org/wiki/Card_Games/List',
	element: '#mw-content-text ul li a',
	filter: [
	 '1 Trick Taking Card Games',
     '2 Rummy Card Games',
     '3 Casino and Gambling Card Games',
     '4 Solitaire Card Games',
     '5 Shedding Card Games',
     '6 Accumulating Card Games',
     '7 Fishing Card Games',
     '8 Drinking Card Games',
     '9 Miscellaneous Card Games'
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