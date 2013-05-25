// art_1.js
module.exports = {
	title: 'Hygiene Words',
	full: 'hygiene',
	language: 'english',
	type: 'D',
	topic: 'HY',
	url: 'http://www.enchantedlearning.com/wordlist/bathroom.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "antiseptic<br> aspirin<br> atomizer<br> bandages<br> basin<br> bath<br> bath mat<br> bath robe<br> bath towel<br> bathtub<br> bidet<br> brush<br> bubble bath<br> bubbles<br> cleaning<br> cologne<br> comb<br> conditioner<br> cotton balls<br> curlers<br> curling iron<br> dental floss<br> disinfectant<br> droppers<br> dry<br> eau de cologne<br> emery board<br> eyedropper<br> face cloth<br> faucet<br> floss<br> flush<br> garbage can<br> hairbrush<br> hair dryer<br> hamper<br> hand towel<br> laundry hamper<br> lavatory<br> loofah<br> lotion<br> make-up<br> medications<br> medicine<br> medicine cabinet<br> mirror<br> moisturizer<br> mouthwash<br> nail clippers<br> nail file<br> nail polish<br> nail scissors<br> ointment<br> paper towel<br> perfume<br> plumbing<br> plunger<br> powder<br> q-tips<br> razor<br> razor blade<br> restroom<br> rug<br> scale<br> scissors<br> shampoo<br> shave<br> shaver<br> shaving cream<br> shower<br> shower curtain<br> shower stall<br> sink<br> soap<br> soap dish<br> soap dispenser<br> sponge<br> swabs<br> talcum power<br> tissues<br> toilet<br> toilet paper<br> toilet seat<br> toothbrush<br> toothpaste<br> towel<br> towel rack<br> trash can<br> tub<br> tweezers<br> urinal<br> wash<br> wash basin<br> washroom<br> waste basket<br> water<br> water closet<br> wc<br> whirlpool<br> wipes".split('<br> ')
		};

		return output;
	}
};