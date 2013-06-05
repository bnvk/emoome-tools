// food_10.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'S',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/desserts.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "almond cookie<br> ambrosia<br> angelfood cake<br> apple brown betty<br> apple crisp<br> apple pie<br> baked alaska<br> baked apple<br> baklava<br> banana split<br> belgian waffle<br> biscotti<br> black forest cake<br> blueberry muffin<br> bombe<br> boston cream pie<br> bread pudding<br> brownie<br> buttercream frosting<br> butterscotch<br> cake<br> cannoli<br> caramel apple<br> carrot cake<br> cheesecake<br> cherry pie<br> chocolate bar<br> chocolate cake<br> chocolate chip cookie<br> chocolate mousse<br> churro<br> cinnamon roll<br> cobbler<br> coconut cake<br> coconut cream pie<br> coffee cake<br> cookie<br> crepe suzette<br> cupcake<br> custard<br> danish pastry<br> dessert<br> devil's food cake<br> doughnut<br> dumplings<br> eclair<br> flan<br> fortune cookie<br> french toast<br> fritter<br> frosting<br> frozen yogurt<br> fruit cake<br> fruit cocktail<br> fruit salad<br> fudge<br> gelatin<br> gelato<br> gingersnaps<br> gingerbread<br> honey<br> hot-fudge sundae<br> ice cream<br> ice cream cake<br> icing<br> jam<br> jelly<br> jellyroll<br> key lime pie<br> ladyfingers<br> lemon bars<br> lemon meringue pie<br> macaroon<br> marshmallow<br> meringue<br> milkshake<br> molasses<br> mousse<br> muffin<br> neapolitan ice cream<br> nougat<br> nut brittle<br> oatmeal cookie<br> pancakes<br> panna cotta<br> parfait<br> pastry<br> peanut brittle<br> peanutbutter cookie<br> pecan pie<br> pie<br> poached pears<br> popcicle<br> popover<br> pound cake<br> praline<br> pudding<br> pumpkin pie<br> quick bread<br> red velvet cake<br> rhubarb pie<br> raisin bread<br> rice pudding<br> scone<br> sherbet<br> shortbread<br> s'mores<br> snickerdoodle<br> soda<br> soda bread<br> sorbet<br> souffle<br> sponge cake<br> spumoni<br> strawberry shortcake<br> strudel<br> sugar<br> sugar cookie<br> sundae<br> sweet potato pie<br> sweet roll<br> sweets<br> tapioca pudding<br> tart<br> toasted marshmallow<br> toffee<br> torte<br> trifle<br> truffle<br> turnover<br> upside-down cake<br> vanilla cream pie<br> vanilla pudding<br> waffle<br> watermelon ice<br> yellow cake<br> zabiglone".split('<br> ')
		};

		return output;
	}
};