// places_3.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://www.enchantedlearning.com/wordlist/usstates.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "alabama<br> alaska<br> arizona<br> arkansas<br> california<br> colorado<br> connecticut<br> delaware<br> district of columbia<br> florida<br> georgia<br> hawaii<br> idaho<br> illinois<br> indiana<br> iowa<br> kansas<br> kentucky<br> louisiana<br> maine<br> maryland<br> massachusetts<br> michigan<br> minnesota<br> mississippi<br> missouri<br> montana<br> nebraska<br> nevada<br> new hampshire<br> new jersey<br> new mexico<br> new york<br> north carolina<br> north dakota<br> ohio<br> oklahoma<br> oregon<br> pennsylvania<br> rhode island<br> south carolina<br> south dakota<br> tennessee<br> texas<br> utah<br> vermont<br> virginia<br> washington<br> west virginia<br> wisconsin<br> wyoming".split('<br> ')
		};

		return output;
	}
};