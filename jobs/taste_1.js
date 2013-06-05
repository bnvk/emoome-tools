// taste_1.js
module.exports = {
	title: 'Taste Words',
	full: 'taste',
	language: 'english',
	type: 'S',
	topic: 'TA',
	url: 'http://www.onelook.com/?lang=all&w=*:taste&ws1=1&first=1',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "savor<br> relish<br> savour<br> smack<br> bitter<br> flavor<br> palate<br> sense<br> gustation<br> refinement<br> sip<br> tasting<br> discrimination<br> penchant<br> sample<br> try<br> experience<br> fashion<br> gustatory modality<br> gustatory perception<br> gustatory sensation<br> liking<br> sense of taste<br> taste perception<br> taste sensation<br> tasted<br> tastes<br> appreciation<br> buds<br> discernment<br> inclination<br> morsel<br> mouthful<br> partake<br> perceptiveness<br> predilection<br> preference<br> try out<br> sour<br> sweet<br> flavour<br> tang<br> sapidity<br> tasteless<br> bitterness<br> salt<br> acid<br> luscious<br> palatable<br> sapor<br> sweetness<br> tasteful<br> dainty<br> sourness<br> acrid<br> insipid<br> piquant<br> rancid<br> savory<br> sharp<br> spice<br> style<br> tartness<br> tasty<br> virtu<br> acerbity<br> acetify<br> acidify<br> acidity<br> acidulate<br> acidulous<br> aftertaste<br> astringence<br> astringency<br> culture<br> delectable<br> delicacy<br> distasteful<br> elegant<br> rank<br> salinity<br> saltiness<br> sapid<br> savoury<br> sugariness<br> sweeten<br> taste bud<br> tooth<br> trend<br> vogue<br> winy<br> acerb<br> bittersweet<br> coarse<br> crude<br> decent<br> degust<br> dowdy".split('<br> ')
		};

		return output;
	}
};