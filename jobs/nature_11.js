// nature_11.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/camping.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "adventure<br> animals<br><br> backpack<br> boots<br><br> cabin<br> camp<br> camper<br> campfire<br> campground<br> canoe<br> canteen<br> cap<br> caravan<br> climb<br> compass<br> day pack<br> dehydrated food<br> dugout<br> equipment<br> evergreen<br> fishing<br> flashlight<br> forest<br> gear<br> gorp<br> hammock<br> hat<br> hike<br> hiking boots<br> hunting<br> hut<br> insect<br> insect repellent<br> kayak<br> knapsack<br> lake<br> lantern<br> map<br> moon<br> mountain<br> national park<br> natural<br> nature<br> oar<br> outdoors<br> outside<br> paddle<br> park<br> path<br> pup tent<br> rope<br> scenery<br> sleeping bag<br> stars<br> state park<br> sun<br> sunscreen<br> tarp<br> tent<br> trail<br> trail mix<br> trailer<br> trees<br> trip<br> vest<br> walking<br> water bottle<br> waterfall<br> wildlife<br> woods".split('<br> ')
		};

		return output;
	}
};