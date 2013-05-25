// nature_5.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/nature.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "anemone<br> apple blossom<br> aster<br> azalea<br> baby's breath<br> bachelor button<br> begonia<br> bellflower<br> bells of ireland<br> bitterroot<br> black-eyed susan<br> bluebells<br> bluebonnet<br> bougainvillea<br> bouquet<br> buttercup<br> butterfly bush<br> california poppy<br> calendula<br> calla lily<br> camellia<br> candytuft<br> canna<br> carnation<br> carrion flower<br> chicory<br> chrysanthemum<br> clover<br> columbine<br> cornflower<br> corpse flower<br> cosmo<br> crocus<br> daffodil<br> dahlia<br> daisy<br> dandelion<br> delphinium<br> dianthus<br> dogwood<br> edelweiss<br> floret<br> florist<br> flower<br> forget-me-not<br> foxglove<br> freesia<br> gardenia<br> gerbera daisy<br> gillyflower<br> gladiolus<br> goldenrod<br> hawthorn<br> heather<br> hibiscus<br> hollyhock<br> honeysuckle<br> hydrangea<br> indian blanket<br> iris<br> jasmine<br> jessamine<br> johnny-jump-up<br> jonquil<br> kangaroo paw<br> lady's slipper<br> lantana<br> larkspur<br> laurel<br> lavender<br> lilac<br> lily<br> lily-of-the-valley<br> magnolia<br> mallow<br> marigold<br> mayflower<br> mimosa<br> mistletoe<br> mock orange<br> morning glory<br> mountain laurel<br> myrtle<br> narcissus<br> nasturtium<br> oleander<br> orange blossom<br> orchid<br> pansy<br> pasque flower<br> passionflower<br> peach blossom<br> peony<br> petal<br> phlox<br> plumeria<br> poinsettia<br> poppy<br> primrose<br> pussy willow<br> queen anne's lace<br> ranunculus<br> rhododendron<br> rose<br> safflower<br> sego lily<br> sepal<br> snapdragon<br> stock<br> sunflower<br> sweet pea<br> thistle<br> tickseed<br> tiger lily<br> trillium<br> tulip<br> venus flytrap<br> veronica<br> vetch<br> violet<br> wallflower<br> wildflowers<br> wild prairie rose<br> wisteria<br> wolfsbane<br> yucca flower<br> zinnia".split('<br> ')
		};

		return output;
	}
};