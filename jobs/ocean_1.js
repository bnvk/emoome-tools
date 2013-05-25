// ocean_1.js
module.exports = {
	title: 'Ocean Words',
	full: 'ocean',
	language: 'english',
	type: 'S',
	topic: 'O',
	url: 'http://www.enchantedlearning.com/wordlist/ocean.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abalone<br> algae<br> amberjack<br> anglerfish<br> barnacle<br> barracuda<br> barrier reef<br> bass<br> bivalve<br> blowfish<br> brittle star<br> chiton<br> clam<br> clown fish<br> cod<br> coelacanth<br> conch<br> copepod<br> coral<br> coral reef<br> crab<br> currents<br> cuttlefish<br> diatoms<br> dogfish<br> dolphin<br> dugong<br> ebb tide<br> eel<br> elephant seal<br> euphotic zone<br> fin<br> fish<br> flounder<br> flying fish<br> fur seal<br> gar<br> giant squid<br> grouper<br> gull<br> hammerhead shark<br> harbor seal<br> harp seal<br> hermit crab<br> herring<br> horseshoe crab<br> humpback whale<br> intertidal zone<br> jellyfish<br> kelp<br> kelp forest<br> killer whale<br> krill<br> limpet<br> littoral zone<br> lobster<br> loggerhead turtle<br> mackerel<br> mako shark<br> manatee<br> man-o'-war<br> manta ray<br> marine biology<br> marine life<br> megamouth shark<br> mollusk<br> moray eel<br> mullet<br> mussels<br> narwhal<br> nautilus<br> neap tide<br> ocean<br> octopus<br> orca<br> otter<br> oyster<br> phytoplankton<br> pinniped<br> plankton<br> pompano<br> porpoise<br> pufferfish<br> queen conch<br> ray<br> reef<br> right whale<br> sailfish<br> salinity<br> salmon<br> salt water<br> sand dollar<br> scales<br> scallop<br> school<br> sea<br> sea anemone<br> sea bass<br> sea cow<br> sea cucumber<br> seagrass<br> seagull<br> seahorse<br> seal<br> sealion<br> sea star<br> sea turtle<br> sea urchin<br> seaweed<br> sea worm<br> shad<br> shark<br> shipwreck<br> shrimp<br> snail<br> snapper<br> sponge<br> squid<br> starfish<br> stingray<br> submarine<br> sunfish<br> sunlit ocean zone<br> swordfish<br> tarpon<br> tide pool<br> tides<br> tiger shark<br> triggerfish<br> tsunami<br> tuna<br> turtle<br> urchin<br> walrus<br> waves<br> whale<br> whale shark<br> whelk<br> whitecaps<br> worms<br> yellowfin<br> zooplankton".split('<br> ')
		};

		return output;
	}
};