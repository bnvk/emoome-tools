// moral_1.js
module.exports = {
	title: 'Moral Words',
	full: 'moral',
	language: 'english',
	type: 'I',
	topic: 'M',
	url: 'http://www.enchantedlearning.com/wordlist/virtues.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "accountability<br> affection<br> agreeableness<br> amiability<br> benevolence<br> bravery<br> care<br> caring<br> charity<br> cleanliness<br> compassion<br> concern<br> confidence<br> consideration<br> contentment<br> cooperation<br> courage<br> courtesy<br> creativity<br> curiosity<br> determination<br> devotion<br> dignity<br> diligence<br> discipline<br> discretion<br> duty<br> earnest<br> enthusiasm<br> ethical<br> excellence<br> faithfulness<br> flexibility<br> friendliness<br> focus<br> forgiveness<br> fortitude<br> friendliness<br> frugality<br> generosity<br> gentleness<br> good<br> goodwill<br> grace<br> graciousness<br> gratitude<br> helpfulness<br> honesty<br> honor<br> honorable<br> hope<br> hopefulness<br> humanity<br> humility<br> humor<br> idealism<br> impartiality<br> industry<br> innocence<br> integrity<br> intelligence<br> joy<br> joyfulness<br> justice<br> kindness<br> leniency<br> love<br> loyalty<br> magnanimity<br> mercy<br> moderation<br> modesty<br> moral<br> morality<br> nice<br> nobility<br> noble<br> obedience<br> openness<br> orderliness<br> patience<br> peacefulness<br> perseverance<br> persistence<br> probity<br> propriety<br> prudence<br> purity<br> purposefulness<br> questioning<br> quiet<br> reliability<br> reputable<br> respect<br> respectfulness<br> resilience<br> resourcefulness<br> respect<br> responsibility<br> restraint<br> reverence<br> righteousness<br> sensitivity<br> self-discipline<br> selflessness<br> simplicity<br> sincerity<br> spontaneity<br> steadfastness<br> strength<br> sympathy<br> tact<br> tenderness<br> thrift<br> tolerance<br> toughness<br> tranquility<br> trust<br> trustworthiness<br> truthfulness<br> understanding<br> unity<br> upstanding<br> virtuous<br> vitality<br> wholesome<br> wisdom<br> wonder<br> worthiness<br> worthy<br> zeal".split('<br> ')
		};

		return output;
	}
};