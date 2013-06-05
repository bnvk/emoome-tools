// talking_1.js
module.exports = {
	title: 'Talking Words',
	full: 'talking',
	language: 'english',
	type: 'A',
	topic: 'T',
	url: 'http://www.enchantedlearning.com/wordlist/said.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acknowledged<br> added<br> admitted<br> advised<br> affirmed<br> agreed<br> alleged<br> alluded<br> announced<br> answered<br> apologized<br> appealed<br> argued<br> articulated<br> asserted<br> assured<br> avowed<br> babbled<br> bargained<br> barked<br> bawled<br> began<br> begged<br> bellowed<br> blurted<br> boasted<br> bragged<br> cajoled<br> cautioned<br> challenged<br> chanted<br> chided<br> claimed<br> commanded<br> commented<br> complained<br> conceded<br> concluded<br> concurred<br> confessed<br> confided<br> confirmed<br> consented<br> contended<br> continued<br> corrected<br> countered<br> cried<br> criticized<br> croaked<br> cross-examined<br> crowed<br> cursed<br> debated<br> decided<br> declared<br> decreed<br> demanded<br> denied<br> dictated<br> digressed<br> directed<br> disclosed<br> divulged<br> drawled<br> droned<br> echoed<br> elaborated<br> emphasized<br> enjoined<br> enunciated<br> equivocated<br> exaggerated<br> exclaimed<br> exhorted<br> explained<br> extolled<br> faltered<br> foretold<br> fretted<br> fumed<br> gasped<br> growled<br> grumbled<br> grunted<br> guessed<br> gurgled<br> gushed<br> hinted<br> hissed<br> hooted<br> howled<br> implied<br> implored<br> inquired<br> insisted<br> instructed<br> interjected<br> interrupted<br> intoned<br> jabbered<br> jeered<br> jested<br> joked<br> kibbitzed<br> lamented<br> laughed<br> lectured<br> lied<br> maintained<br> marveled<br> mentioned<br> moaned<br> mumbled<br> murmured<br> muttered<br> nagged<br> noted<br> objected<br> observed<br> offered<br> ordered<br> panted<br> pleaded<br> pledged<br> pointed out<br> pondered<br> postulated<br> prayed<br> preached<br> predicted<br> proceeded<br> proclaimed<br> professed<br> promised<br> proposed<br> protested<br> queried<br> questioned<br> quipped<br> quoted<br> railed<br> ranted<br> raved<br> recalled<br> recited<br> recommended<br> reiterated<br> related<br> remembered<br> reminded<br> repeated<br> replied<br> reported<br> reprimanded<br> retorted<br> revealed<br> roared<br> scoffed<br> scolded<br> screamed<br> screeched<br> shouted<br> shrieked<br> sighed<br> snapped<br> snarled<br> sneered<br> snickered<br> snorted<br> sobbed<br> speculated<br> sputtered<br> stammered<br> stated<br> stipulated<br> stressed<br> stuttered<br> suggested<br> surmised<br> swore<br> sympathized<br> tattled<br> taunted<br> teased<br> testified<br> theorized<br> threatened<br> told<br> urged<br> uttered<br> ventured<br> voiced<br> volunteered<br> vouched<br> waffled<br> wailed<br> warned<br> whimpered<br> whispered<br> wondered<br> yelled<br> yelped<br> yowled".split('<br> ')
		};

		return output;
	}
};