// patterns_duos.js
module.exports = {
	title: 'Alliterations',
	full: 'patterns',
	language: 'english',
	type: 'duos',
	topic: 'patterns',
	url: 'http://www.enchantedlearning.com/wordlist/duos.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abbott and costello<br> adam and eve<br> apples and oranges<br> an arm and a leg<br> antony and cleopatra<br> bacon and eggs<br> barbie and ken<br> batman and robin<br> bed and breakfast<br> before and after<br> bert and ernie<br> big and small<br> big and tall<br> black and white<br> bonnie and clyde<br> bow and arrow<br> boys and girls<br> bread and butter<br> cain and abel<br> castor and pollux<br> cold and hot<br> crick and watson<br> cut and paste<br> day and night<br> death and taxes<br> dick and jane<br> divide and conquer<br> dogs and cats<br> each and every<br> ebony and ivory<br> fast and slow<br> fat and thin<br> fife and drum<br> fire and brimstone<br> fish and chips<br> flotsam and jetsam<br> free and clear<br> gilbert and sullivan<br> give and take<br> good and bad<br> good and evil<br> hansel and gretel<br> happy and sad<br> heaven and earth<br> heaven and hell<br> high and low<br> hiroshima and nagasaki<br> hot and cold<br> the iliad and the odyssey<br> in and out<br> jack and jill<br> jekyll and hyde<br> king and queen<br> kirk and spock<br> ladies and gentlemen<br> lady and the tramp<br> lancelot and guinevere<br> laurel and hardy<br> lewis and clark<br> left and right<br> love and hate<br> lucy and desi<br> mad dogs and englishmen<br> marx and engels<br> meat and potatoes<br> michelson and morley<br> mom and pop<br> motherhood and apple pie<br> napoleon and josephine<br> near and far<br> new and old<br> old and young<br> open and shut<br> orpheus and eurydice<br> the owl and the pussycat<br> phobos and deimos<br> porgy and bess<br> punch and judy<br> push and pull<br> question and answer<br> republicans and democrats<br> right and left<br> right and wrong<br> rock and a hard place<br> rock and roll<br> romeo and juliet<br> romulus and remus<br> salt and pepper<br> simon and garfunkel<br> skull and bones<br> smoke and mirrors<br> stars and stripes<br> sweet and sour<br> tarzan and jane<br> thunder and lightning<br> trinidad and tobago<br> tom and jerry<br> tristan and isolde<br> tweedledum and tweedledee<br> ulna and radius<br> up and down<br> venus and mars<br> war and peace<br> watson and crick<br> xylem and phloem<br> yin and yang<br> young and old<br> zeroes and ones".split('<br> ')
		};

		return output;
	}
};