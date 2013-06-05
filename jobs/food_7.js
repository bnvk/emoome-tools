// food_9.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'U',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/restaurant.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "a la carte<br> a la mode<br> appetizer<br> beef<br> beverage<br> bill<br> bistro<br> boiled<br> bowl<br> braised<br> bread<br> breakfast<br> brunch<br> butter<br> cafe<br> cafeteria<br> cake<br> candle<br> cashier<br> centerpiece<br> chair<br> charge<br> chef<br> chicken<br> coffee<br> cola<br> cold<br> condiments<br> cook<br> cooked<br> course<br> cream<br> credit card<br> cutlery<br> deli<br> delicatessen<br> delicious<br> dessert<br> dine<br> diner<br> dining<br> dinner<br> dish<br> dishwasher<br> doggie bag<br> dressing<br> eat<br> eggs<br> entree<br> fish<br> food<br> fork<br> french fries<br> fries<br> fruit<br> glass<br> gourmand<br> gourmet<br> grilled<br> hamburger<br> head waiter<br> high tea<br> hors d'oeuvre<br> hostess<br> hot<br> ice<br> ice cubes<br> iced<br> ingredients<br> ketchup<br> kitchen<br> knife<br> lemonade<br> lettuce<br> lunch<br> main course<br> maitre d'<br> manager<br> meal<br> meat<br> medium<br> menu<br> milk<br> mug<br> mustard<br> napkin<br> noodles<br> onion<br> order<br> party<br> pasta<br> pepper<br> plate<br> platter<br> pop<br> rare<br> reservation<br> restaurant<br> roasted<br> roll<br> salad<br> salt<br> sandwich<br> sauce<br> saucer<br> seafood<br> seared<br> server<br> side order<br> silverware<br> soda<br> soup<br> special<br> spices<br> spicy<br> spill<br> spoon<br> starters<br> steak<br> sugar<br> supper<br> table<br> tablecloth<br> tasty<br> tax<br> tea<br> tip<br> toast<br> to go<br> tomato<br> utensils<br> vegetables<br> waiter<br> waitress<br> water<br> well-done".split('<br> ')
		};

		return output;
	}
};