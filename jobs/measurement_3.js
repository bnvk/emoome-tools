// measurement_3.js
module.exports = {
	title: 'Measurement Words',
	full: 'measurement',
	language: 'english',
	type: 'I',
	topic: 'ME',
	url: 'http://www.enchantedlearning.com/wordlist/many.shtml',
	element: false,
	filter: [],
	clean: function(text) {

		var output = {
			type: "array",
			data: "acres<br> army<br> assortment<br> astronomical amount<br> batch<br> billions<br> blizzard<br> boatload<br> boundless amount <br> buckets<br> bunches<br> bundles<br> by the yard<br> cart-loads<br> clusters<br> collection<br> colossal amount <br> congregation<br> copious amounts<br> crowds<br> deluge<br> dozens<br> droves<br> enormous amount <br> epic amount <br> expansive<br> extensive<br> flock<br> gaggle<br> gargantuan<br> gathering<br> gazillions<br> giant<br> gigantic<br> ginormous<br> great<br> great deal<br> group<br> heaps<br> herd<br> horde<br> hundreds<br> huge numbers<br> humongous<br> infinite<br> jumble<br> large amount<br> limitless<br> loads<br> lots<br> mammoth<br> many<br> mass<br> masses<br> mega<br> miles<br> millions<br> mob<br> mountains<br> mountainous<br> multifarious<br> multitude<br> multiplicity<br> numerous<br> oceans<br> oodles<br> overabundance<br> pack<br> parcel<br> piles<br> plenty<br> pots<br> prodigious amount<br> profusion<br> quantity<br> reams<br> sacks<br> scads<br> set<br> several<br> slew<br> some<br> stacks<br> sundry<br> swarm<br> sweeping<br> teeming with <br> thousands<br> tons<br> throng<br> towering<br> tremendous<br> troop<br> umpteen<br> untold amounts<br> vast amounts<br> volumes<br> wealth<br> wide<br> yards<br> zillions".split('<br> ')
		};

		return output;
	}
};