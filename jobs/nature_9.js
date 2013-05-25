// nature_9.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/tree.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "almond<br> apple<br> apricot<br> ash<br> aspen<br> baobob<br> banyan<br> bark<br> beech<br> black ash<br> black willow<br> bigtooth aspen<br> birch<br> bodhi<br> bristlecone pine<br> buckeye<br> butternut<br> cabbage palmetto<br> camellia<br> catalpa<br> cedar<br> cherry<br> chestnut<br> choke cherry<br> coconut palm<br> cone<br> cottonwood<br> crape myrtle<br> crabapple<br> cypress<br> date<br> dogwood<br> douglas fir<br> elderberry<br> elm<br> eucalyptus<br> evergreen<br> fig<br> filbert<br> fir<br> flame tree<br> forest<br> ginkgo<br> goldenlarch<br> grapefruit<br> grove<br> gum<br> hackberry<br> haw<br> hawthorn<br> hemlock<br> hickory<br> holly<br> honeylocust<br> ipil<br> ironwood<br> jack pine<br> jacktree<br> japanese maple<br> jujuba<br> jungle<br> juniper<br> kapok tree<br> katsura<br> kukui nut<br> kumquat<br> larch<br> lilac<br> linden<br> live oak<br> loblolly pine<br> locust<br> loquat<br> lone pine<br> longleaf pine<br> magnolia<br> mahogany<br> mangrove<br> maple<br> mimosa<br> mountainash<br> nectarine<br> northern red oak<br> norway maple<br> oak<br> olive<br> orange<br> paper birch<br> palm<br> palmetto<br> pawpaw<br> peach<br> pear<br> pecan<br> persimmon<br> pine<br> piñon pine<br> plum<br> poplar<br> quaking aspen<br> quince<br> rain forest<br> redbud<br> redwood<br> rings<br> rubber tree<br> sassafras<br> scotch pine<br> sequoia<br> serviceberry<br> silver maple<br> sitka spruce<br> slippery elm<br> spruce<br> sugar maple<br> sweetgum<br> sycamore<br> teak<br> tree<br> tulip-tree<br> tupelo<br> upright red maple<br> viburnum<br> walnut<br> weeping willow<br> white ash<br> white oak<br> white pine<br> willow<br> wingnut<br> witchhazel<br> yellowwood<br> yew<br> zebrawood<br> zelkova".split('<br> ')
		};

		return output;
	}
};