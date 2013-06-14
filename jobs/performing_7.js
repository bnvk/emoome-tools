// performing_7.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'P',
	topic: 'PR',
	url: 'http://dictionary.cambridge.org/topics/entertainment/entertainers-in-general/',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acrobat, artiste, celebrity, clown, comedian, comic, compere, contortionist, drum majorette, duo, entertainer, escort agency, escort,  fire-eater, fool, geisha, guest, hostess, impresario, impressionist, jester, joker, jokester, juggler, majorette, matador, mimic, performer,  picador, puppeteer, roadshow, showgirl, showman, snake charmer, stand-up, star, stripper, performer, troubadour, trouper, twirler, warm up".split(', ')
		};

		return output;
	}
};