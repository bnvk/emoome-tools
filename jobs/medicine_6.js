// medicine_6.js
module.exports = {
	title: 'Medicine Words',
	full: 'medicine',
	language: 'english',
	type: 'U',
	topic: 'MD',
	url: 'http://www.enchantedlearning.com/wordlist/dentist.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abscess<br> ache<br> acid<br> adult teeth<br> alignment<br> amalgam<br> anesthesia<br> anesthetic<br> appointment<br> assistant<br> baby teeth<br> bacteria<br> bands<br> bib<br> bicuspid<br> bite<br> braces<br> bridge<br> bristle<br> brush<br> canine<br> caps<br> caries<br> cavity<br> cement<br> checkup<br> chew<br> cleaning<br> consultation<br> correction<br> crown<br> cuspid<br> decay<br> degree<br> dental<br> dental school<br> dentist<br> dentures<br> diagnosis<br> drill<br> education<br> enamel<br> endodontics<br> exam<br> examination<br> face<br> false teeth<br> fear<br> filling<br> floss<br> fluoride<br> food<br> front teeth<br> gargle<br> gingivitis<br> gold<br>  health<br> healthy<br> hurt<br> hygiene<br> hygienist<br> impacted<br> implant<br> impression<br> incision<br> incisor<br> infection<br> inflammation<br> injection<br> injury<br> inlay<br> instrument<br> insurance<br> jaw<br> lab<br> laboratory<br> lips<br> local<br> local anesthesia<br> malocclusion<br> medication<br> medicine<br> molar<br> mold<br> mouth<br> needle<br> nerve<br> numb<br> nurse<br> office<br> open<br> operate<br> oral surgery<br> orthodontist<br> overbite<br> pain<br> painful<br> painless<br> palate<br> permanent teeth<br> partial<br> patient<br> periodontal<br> plaque<br> premolar<br> prevention<br> primary teeth<br> protect<br> pull<br> pulp<br> pyorrhea<br> remedy<br> retainer<br> rinse<br> root<br> root canal<br> rubber bands<br> sealant<br> shot<br> sink<br> smile<br> sugar<br> surgery<br> suture<br> sweets<br> teeth<br> tissue<br> tooth<br> toothache<br> toothbrush<br> tooth fairy<br> toothpaste<br> toothpick<br> treatment<br> underbite<br> white<br> whiten<br> wisdom tooth<br> wisdom teeth<br> x-ray".split('<br> ')
		};

		return output;
	}
};