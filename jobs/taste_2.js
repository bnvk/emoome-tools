// taste_2.js
module.exports = {
	title: 'Taste Words',
	full: 'taste',
	language: 'english',
	type: 'S',
	topic: 'TA',
	url: 'http://www.onelook.com/?lang=all&w=*:taste&ws1=1&first=101',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "foretaste<br> gust<br> indelicate<br> palatableness<br> sipid<br> touch<br> acerbic<br> aesthetics<br> ageustia<br> asperity<br> astringent<br> chalybeate<br> chic<br> connoisseurship<br> degust, degustate<br> discerning<br> discretion<br> dulcet<br> dulcify<br> dulcorate<br> edulcorate<br> elixir<br> flat<br> garlic<br> geumaphobia<br> gout<br> grapy<br> groundling<br> gusto<br> hard<br> harsh<br> hops<br> hypogeusia<br> mawkish<br> oxygeusia<br> palatability<br> palative<br> parageusia<br> partiality<br> popularize<br> refined<br> savorless<br> spicery<br> spiciness<br> spicy<br> strong<br> swallow<br> taste cell<br> toothsome<br> unsavory<br> unsavoury<br> vertu<br> acetous<br> acidulousness<br> ageusia<br> alish<br> almond<br> ambrosian<br> artistic<br> attaste<br> austerity<br> baroque<br> beauty<br> blanch<br> brackish<br> coarseness<br> colour<br> commonness<br> convention<br> daint<br> delibate<br> discriminate<br> eat<br> educated<br> enrich<br> flashy<br> flavourful<br> flavourless<br> fond<br> fruity<br> garlicky<br> gothicism<br> gourmandise<br> graceful<br> grapey<br> gross".split('<br> ')
		};

		return output;
	}
};