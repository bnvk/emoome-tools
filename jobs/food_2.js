// food_2.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'S',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/herbs.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "allspice<br> angelica<br> anise<br> annato<br> basil<br> bay<br> berbere<br> borage<br> capers<br> caraway<br> cardamon<br> carob<br> cayenne pepper<br> celery seed<br> chervil<br> chicory<br> chili pepper<br> chives<br> cicely<br> cilantro<br> cinnamon<br> clove<br> coriander<br> curry leaf<br> dill<br> epazote<br> fennel<br> fenugreek<br> filé<br> galangal<br> garam masala<br> garlic<br> garlic chives<br> ginger<br> green onion<br> harissa<br> horseradish<br> hyssop<br> jasmine flowers<br> jerk spice<br> juniper berry<br> kaffir lime leaves<br> lavender<br> lemon balm<br> lemon verbena<br> licorice<br> lovage<br> mace<br> marjoram<br> mint<br> mustard seed<br> nasturtium<br> nutmeg<br> onion<br> oregano<br> paprikaa<br> parsley<br> pepper<br> peppermint<br> rosemary<br> rue<br> saffron<br> sage<br> salad burnet<br> sassafras<br> savory<br> spearmint<br> star anise<br> sumac<br> tarragon<br> thyme<br> tumeric<br> vanilla<br> wasabi<br> watercress<br> wintergreen<br> woodruff<br> yellow mustard".split('<br> ')
		};

		return output;
	}
};