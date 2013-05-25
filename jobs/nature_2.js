// art_1.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'U',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/summer.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "backpacking<br> beach<br> blistering heat<br> boating<br> camp<br> camping<br> canoeing<br> daisy<br> diving<br> flowers<br> gardening<br> grass<br> heat<br> hiking<br> holiday<br> hot<br> humidity<br> journey<br> lightning<br> ocean<br> outdoors<br> outings<br> outside<br> park<br> picnic<br> recreation<br> relax<br> rest<br> road trip<br> rose<br> sandals<br> sandcastle<br> sailing<br> sea<br> searing heat<br> seashore<br> showers<br> summer<br> summer solstice<br> sun<br> sunflower<br> sunny<br> sunscreen<br> swim<br> swimsuit<br> tan<br> thunder<br> thunderstorm<br> warm weather<br> waterski<br> zoris".split('<br> ')
		};

		return output;
	}
};