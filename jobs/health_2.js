// health_2.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.enchantedlearning.com/wordlist/dentist.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abscess<br> ache<br> acid<br> adult teeth<br> alignment<br> baby teeth<br> bacteria<br> bicuspid<br> caries<br> cavity<br> chew<br> decay<br> enamel<br> face<br> front teeth<br> gingivitis<br> health<br> healthy<br> hurt<br> hygiene<br> impacted<br> incisor<br> infection<br> inflammation<br> injury<br> numb<br> overbite<br> pain<br> painful<br> painless<br> plaque<br> toothache<br> underbite".split('<br> ')
		};

		return output;
	}
};