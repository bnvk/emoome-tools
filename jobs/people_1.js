// people_1.js
module.exports = {
	title: 'People Words',
	full: 'people',
	language: 'english',
	type: 'I',
	topic: 'P',
	url: 'http://www.enchantedlearning.com/wordlist/people.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acquaintance<br> admirer<br> adolescent<br> adult<br> adversary<br> ally<br> amigo<br> ancestor<br> angel<br> antagonist<br> anybody<br> anyone<br> apparition<br> associate<br> baby<br> backer<br> beau<br> benefactor<br> best friend<br> boy<br> boyfriend<br> bride<br> bridegroom<br> brother<br> bud<br> buddy<br> champion<br> character<br> cherub<br> child<br> children<br> chum<br> citizen<br> clan<br> classmate<br> cohort<br> collaborator<br> colleague<br> combatant<br> compadre<br> companion<br> comrade<br> confederate<br> confidant<br> contact<br> coworker<br> crew<br> crony<br> customer<br> descendant<br> doppelgänger<br> dude<br> employee<br> enemy<br> everybody<br> everyone<br> family<br> fellow<br> fiancé<br> fiancée<br> flatmate<br> foe<br> folks<br> freshman<br> friend<br> gent<br> gentleman<br> girl<br> girlfriend<br> groom<br> grown-up<br> guy<br> house-mate<br> human<br> human being<br> individual<br> infant<br> inhabitant<br> in-law<br> junior<br> kid<br> kin<br> kith<br> lad<br> laddie<br> lady<br> lass<br> lassie<br> lover<br> man<br> mate<br> men<br> minor<br> mortal<br> neighbor<br> newborn<br> nobody<br> no one<br> occupant<br> opponent<br> pal<br> partner<br> patron<br> people<br> person<br> populace<br> population<br> preteen<br> rank and file<br> relations<br> relative<br> resident<br> retiree<br> rival<br> roommate<br> schoolboy<br> schoolgirl<br> schoolmate<br> senior<br> sidekick<br> sister<br> socialite<br> somebody<br> someone<br> sophomore<br> soul<br> sponsor<br> spouse<br> steady<br> stranger<br> supporter<br> sweetheart<br> teammate<br> teen<br> teenager<br> toddler<br> tot<br> tribe<br> tween<br> tyke<br> urchin<br> well-wisher<br> woman<br> women<br> workmate<br> youngster<br> youth".split('<br> ')
		};

		return output;
	}
};