// food_6.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'A',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/cooking.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "aerate<br> aged<br> bake<br> barbecue<br> baste<br> batter<br> beat<br> bind<br> blacken<br> blanche<br> blend<br> boil<br> bone<br> braise<br> bread<br> brew<br> broil<br> brown<br> brush<br> burn<br> butterfly<br> canned<br> caramelize<br> char<br> char-broil<br> chill<br> chop<br> chunk<br> churn<br> clarify<br> coddle<br> combine<br> cool<br> congeal<br> core<br> cream<br> cured<br> cut<br> debone<br> decorate<br> deep fry<br> deglaze<br> descale<br> devil<br> dice<br> dip<br> dough<br> drain<br> drizzle<br> dry<br> escallop<br> ferment<br> fillet<br> filter<br> flambe<br> flavor<br> flip<br> fold<br> freeze<br> french fry<br> fricassee<br> frost<br> froth<br> fry<br> garnish<br> gel<br> glaze<br> grate<br> gratin<br> grease<br> grill<br> grind<br> hard boil<br> harden<br> hash<br> heat<br> hull<br> ice<br> infuse<br> jell<br> juice<br> julienne<br> knead<br> layer<br> leaven<br> macerate<br> marinate<br> mash<br> measure<br> melt<br> microwave<br> mix<br> mold<br> oil<br> oven fry<br> overcook<br> pan fry<br> parboil<br> pare<br> peel<br> percolate<br> pickle<br> pit<br> poach<br> pop<br> pour<br> precook<br> prepare<br> preserve<br> press<br> pressure-cook<br> process<br> pulp<br> puree<br> quarter<br> raw<br> reduce<br> refrigerate<br> render<br> rise<br> roast<br> roll<br> rub<br> salt<br> saute<br> scald<br> scallop<br> schirr<br> scoop<br> score<br> scramble<br> sear<br> season<br> separate<br> serve<br> shell<br> shred<br> shuck<br> sieve<br> sift<br> simmer<br> skewer<br> skim<br> skin<br> slice<br> sliver<br> slow cook<br> smoke<br> snip<br> soak<br> soft boil<br> souse<br> sprinkle<br> steam<br> steep<br> stew<br> stir<br> stir fry<br> strain<br> stuff<br> sweat<br> sweeten<br> temper<br> tenderize<br> thicken<br> thin<br> toast<br> top<br> toss<br> trim<br> truss<br> turn<br> uncured<br> unmold<br> warm<br> wash<br> wedge<br> whip<br> whisk<br> zap<br> zest".split('<br> ')
		};

		return output;
	}
};