// clothing_1.js
module.exports = {
	title: 'Clothing Words',
	full: 'cothing',
	language: 'english',
	type: 'S',
	topic: 'CL',
	url: 'http://www.enchantedlearning.com/wordlist/hats.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "akubra<br> alpine hat<br> balaclava<br> balmoral<br> baseball cap<br> batting helmet<br> beanie<br> bearskin hat<br> beret<br> bicorne<br> biretta	<br> boater<br> bonnet<br> bowler<br> cap<br> chapeau<br> chef's hat<br> cloche<br> coonskin hat<br> cowboy hat<br> cricket helmet<br> crown<br> cycling helmet<br> deerstalker<br> derby<br> diving helmet<br> dunce cap<br> engineer's cap<br> equestrian helmet<br> fedora<br> fez<br> flat cap<br> football helmet<br> glengarry<br> hat<br> headdress<br> helmet<br> hard hat<br> homburg<br> jester's hat<br> juliet cap<br> knit cap<br> miter<br> mortarboard<br> motocross helmet<br> nightcap<br> panama hat<br> pillbox hat<br> pith helmet<br> porkpie<br> rainhat<br> riding cap<br> ski cap<br> ski helmet<br> skull cap<br> snood<br> sombrero<br> space helmet<br> stovepipe hat<br> straw hat<br> sun bonnet<br> sun hat<br> swim cap<br> tam<br> tam o'shanter<br> ten-gallon hat<br> tiara<br> top hat<br> toque<br> tricorne<br> turban<br> viking helmet<br> visor<br> watch cap<br> witch's hat<br> yarmulke<br> zucchetto".split('<br> ')
		};

		return output;
	}
};