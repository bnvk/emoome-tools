// taste_2.js
module.exports = {
	title: 'Taste Words',
	full: 'taste',
	language: 'english',
	type: 'S',
	topic: 'TA',
	url: 'http://www.onelook.com/?lang=all&w=*:taste&ws1=1&first=201',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "grossness<br> gustable<br> hoppy<br> ironish<br> lusciously<br> maraschino<br> mild<br> mouth-watering<br> nidorosity<br> nutty<br> prelibation<br> raunch<br> rummy<br> salso-acid<br> saltly<br> saporine<br> saporous<br> savourless<br> scrumptiously<br> semisweet<br> shady<br> sick joke<br> sickish<br> smatch<br> stiff<br> suavity<br> subacid<br> sugary<br> sup<br> sweetwort<br> tacky<br> tangs<br> tastily<br> tinny<br> unpalatability<br> unpalatableness<br> unperceptive<br> unsalty<br> untaste<br> vulgarism<br> winey<br> yarrish<br> zesty<br> vulgar<br> delicious<br> blood<br> pungent<br> taster<br> aesthetic<br> ambrosia<br> civilization<br> delicate<br> distaste<br> fulsome<br> wormwood<br> alliaceous<br> bite<br> chloroform<br> connoisseur<br> creamy<br> disgust<br> elegance<br> exquisite<br> fishy<br> genteel<br> gracious<br> gustatory<br> sugar<br> tart<br> tinge<br> zest<br> acerbate<br> allspice<br> ambrosial<br> anchovy pear<br> asafetida<br> barbarism".split('<br> ')
		};

		return output;
	}
};