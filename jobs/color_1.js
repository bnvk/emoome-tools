// color_1.js
module.exports = {
	title: 'Color Words',
	full: 'color',
	language: 'english',
	type: 'S',
	topic: 'CO',
	url: 'http://www.enchantedlearning.com/wordlist/colors.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "amber<br> amethyst<br> apricot<br> aqua<br> aquamarine<br> auburn<br> azure<br> beige<br> black<br> blue<br> bronze<br> brown<br> buff<br> burnt umber<br> cardinal<br> carmine<br> celadon<br> cerise<br> cerulean<br> charcoal<br> chartreuse<br> chocolate<br> cinnamon<br> color<br> complementary<br> copper<br> coral<br> cream<br> crimson<br> cyan<br> dark<br> denim<br> desert sand<br> ebony<br> ecru<br> eggplant<br> emerald<br> forest green<br> fuchsia<br> gold<br> goldenrod<br> gray<br> green<br> grey<br> hot pink<br> hue<br> indigo<br> ivory<br> jade<br> jet<br> jungle green<br> kelly green<br> khaki<br> lavender<br> lemon<br> light<br> lilac<br> lime<br> magenta<br> mahogany<br> maroon<br> mauve<br> mustard<br> navy blue<br> ocher<br> olive<br> orange<br> orchid<br> pale<br> pastel<br> peach<br> periwinkle<br> persimmon<br> pewter<br> pink<br> primary<br> puce<br> pumpkin<br> purple<br> rainbow<br> red<br> rose<br> ruby<br> russet<br> rust<br> saffron<br> salmon<br> sapphire<br> scarlet<br> sea green<br> secondary<br> sepia<br> shade<br> shamrock<br> sienna<br> silver<br> spectrum<br> slate<br> steel blue<br> tan<br> tangerine<br> taupe<br> teal<br> terracotta<br> thistle<br> tint<br> tomato<br> topaz<br> turquoise<br> ultramarine<br> umber<br> vermilion<br> violet<br> viridian<br> wheat<br> white<br> wisteria<br> yellow<br>".split('<br> ')
		};

		return output;
	}
};