// food_3.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'S',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/vegetables.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acorn squash<br> alfalfa<br> artichoke<br> arugula<br> asparagus<br> avocado<br> bamboo shoots<br> basil<br> beans<br> beets<br> bell pepper<br> black-eyed peas<br> broccoli<br> brussels sprouts<br> capers<br> carrot<br> cauliflower<br> celeriac<br> celery<br> chard<br> chick peas<br> chinese cabbage<br> chives<br> collard greens<br> cress<br> cucumber<br> daikon<br> dandelion greens<br> eggplant<br> endive<br> fava bean<br> fennel<br> garlic<br> ginger<br> gourd<br> greenbean<br> greens<br> hot chile peppers<br> iceberg lettuce<br> jicama<br> kale<br> kohlrabi<br> leek<br> lentils<br> lettuce<br> lima bean<br> maize<br> mung bean<br> mushroom<br> mustard greens<br> okra<br> olive<br> onion<br> parsley<br> parsnip<br> pattypan squash<br> pea<br> peapod<br> peanut<br> peppers<br> pickle<br> potato<br> pumpkin<br> radicchio<br> radish<br> rhubarb<br> rocket<br> romaine<br> rutabaga<br> salad<br> salsa<br> scallion<br> seaweed<br> shallot<br> sorrel<br> soybean<br> spinach<br> sprouts<br> salsify<br> spuds<br> squash<br> string bean<br> succotash<br> sweet potato<br> swiss chard<br> taro<br> tomatillo<br> tomato<br> tuber<br> turnip<br> vegetable<br> wasabi<br> water chestnut<br> watercress<br> yam<br> zucchini".split('<br> ')
		};

		return output;
	}
};