// art_1.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'U',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/fall.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acorn<br> autumn<br> autumnal equinox<br> bale of hay<br> chestnuts<br> chilly<br> cobweb<br> fall<br> falling leaves<br> gourd<br> harvest<br> harvest moon<br> hay<br> hayride<br> haystack<br> leaf<br> leaves<br> maize<br> pine cone<br> scarecrow<br> season<br> sleet".split('<br> ')
		};

		return output;
	}
};