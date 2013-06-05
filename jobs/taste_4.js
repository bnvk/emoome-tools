// taste_4.js
module.exports = {
	title: 'Taste Words',
	full: 'taste',
	language: 'english',
	type: 'S',
	topic: 'TA',
	url: 'http://www.onelook.com/?lang=all&w=*:taste&ws1=1&first=301',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "bromoform<br> creosote<br> empyreuma<br> epicurean<br> esthetics<br> fumaric acid<br> gamy<br> groundnut<br> hop<br> iodoform<br> lean<br> myrrh<br> organoleptic<br> outrageous<br> papilla<br> perry<br> racy<br> salty<br> sweetener<br> tangelo<br> abietine<br> absinthe<br> acetic<br> acid drop<br> acidic<br> acquired taste<br> ad captandum<br> adscititious<br> aesthetical<br> ammonia<br> anabaena<br> anchovy<br> appetite<br> aromatic<br> aromatize<br> arraign<br> artemisia<br> absinthium<br> beery<br> belles-lettres<br> benzoin<br> bitter principle<br> bittern<br> bitterwood tree<br> bitterwort<br> black salt<br> bland<br> blandness<br> borax<br> briny<br> bubblegum<br> caffeine<br> calamus".split('<br> ')
		};

		return output;
	}
};