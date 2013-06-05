// food_4.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'S',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/fruit.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "apple<br> apricot<br> avocado<br> banana<br> berry<br> blackberry<br> blood orange<br> blueberry<br> boysenberry<br> breadfruit<br> cantaloupe<br> cherry<br> citron<br> citrus<br> coconut<br> crabapple<br> cranberry<br> current<br> date<br> dragonfruit<br> durian<br> elderberry<br> fig<br> grape<br> grapefruit<br> guava<br> honeydew<br> jackfruit<br> kiwi<br> kumquat<br> lemon<br> lime<br> lingonberry<br> loquat<br> lychee<br> mandarin orange<br> mango<br> marionberry<br> melon<br> mulberry<br> nectarine<br> orange<br> papaya<br> passion fruit<br> peach<br> pear<br> persimmon<br> pineapple<br> plantain<br> plum<br> pluot<br> pomegranite<br> pomelo<br> prune<br> quince<br> raisin<br> raspberry<br> star fruit<br> strawberry<br> tangelo<br> tangerine<br> ugli fruit<br> watermelon".split('<br> ')
		};

		return output;
	}
};