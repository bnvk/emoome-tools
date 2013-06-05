// measurement_2.js
module.exports = {
	title: 'Measurement Words',
	full: 'measurement',
	language: 'english',
	type: 'I',
	topic: 'ME',
	url: 'http://www.enchantedlearning.com/wordlist/big.shtml',
	element: false,
	filter: [],
	clean: function(text) {

		var output = {
			type: "array",
			data: "astronomical<br> boundless<br> broad<br> brawny<br> capacious<br> chunky<br> colossal<br> considerable<br> copious<br> corpulent<br> deep<br> economy-sized<br> elephantine<br> enormous<br> epic<br> expansive<br> extensive<br> extra-large<br> family-sized<br> fat<br> full<br> full-sized<br> gargantuan<br> giant<br> gigantic<br> ginormous<br> goodly<br> grand<br> great<br> heaping<br> heavy<br> hefty<br> herculean<br> huge<br> hulking<br> humongous<br> husky<br> immense<br> imposing<br> impressive<br> infinite<br> jumbo<br> king-sized<br> large<br> limitless<br> lofty<br> long<br> mammoth<br> massive<br> mega<br> mighty<br> miles-wide<br> monsterous<br> monumental<br> mountainous<br> multifarious<br> multitude<br> multiplicity<br> numerous<br> obese<br> outsized<br> overabundant<br> oversized<br> piled high<br> plentiful<br> plump<br> portly<br> powerful<br> prodigious<br> queen-sized<br> roly-poly<br> sizable<br> spacious<br> stout<br> strapping<br> substantial<br> super<br> super-sized<br> sweeping<br> tall<br> thick<br> thick-set<br> towering<br> tremendous<br> unlimited<br> untold amounts<br> vast<br> very large<br> voluminous<br> weighs a ton<br> weighty<br> whopping<br> wide".split('<br> ')
		};

		return output;
	}
};