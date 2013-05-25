// art_1.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/birds.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "african gray parrot<br> african penguin<br> albatross<br> american flamingo<br> american golden plover<br> american robin<br> american tree sparrow<br> archaeopteryx<br> arctic tern<br> auk<br> aves<br> avian<br> aviary<br> avifauna<br> avocet<br> bald eagle<br> barn owl<br> beak<br> bill<br> bird<br> birdcage<br> birder<br> birdhouse<br> birding<br> bird of paradise<br> bird watching<br> bittern<br> blackbird<br> black swan<br> bluebird<br> blue jay<br> bobolink<br> bobwhite<br> bowerbird<br> brood<br> brown pelican<br> budgerigar<br> budgie<br> bullfinch<br> bunting<br> canada goose<br> canary<br> cardinal<br> cassowary<br> catbird<br> chick<br> chickadee<br> chicken<br> clutch<br> cockatiel<br> cockatoo<br> common rhea<br> congregation<br> coot<br> cormorant<br> covey<br> cowbird<br> crake<br> crane<br> creeper<br> crest<br> crossbill<br> crow<br> cuckoo<br> curlew<br> darter<br> dinornis<br> dodo<br> dove<br> downy woodpecker<br> duck<br> eagle<br> egg<br> eastern bluebird<br> egret<br> eider<br> emperor penguin<br> emu<br> falcon<br> feather<br> finch<br> flamingo<br> fledge<br> fledgling<br> flicker<br> flight<br> flight feathers<br> flightless<br> flock<br> fly<br> flycatcher<br> fowl<br> frigatebird<br> gander<br> gizzard<br> golden eagle<br> gnatcatcher<br> goldfinch<br> goose<br> grackle<br> great egret<br> great horned owl<br> grebe<br> grosbeak<br> grouse<br> gull<br> gyrfalcon<br> harpy eagle<br> hawaiian goose<br> hawk<br> hen<br> heron<br> hoatzin<br> hummingbird<br> ibis<br> ichthyornis<br> incubate<br> jackdaw<br> jay<br> junco<br> kakapo<br> kestrel<br> kingbird<br> kildeer<br> kingfisher<br> kite<br> kiwi<br> kookaberra<br> lark<br> leghorn<br> longspur<br> loon<br> lorikeet<br> macaw<br> magpie<br> mallard duck<br> marbled murrelet<br> martin<br> meadowlark<br> merganser<br> migrate<br> migration<br> moa<br> mockingbird<br> nandu<br> nene<br> nest<br> nestling<br> nighthawk<br> nightingale<br> nightjar<br> nutcracker<br> nuthatch<br> oriole<br> ornithologist<br> ornithology<br> oropendola<br> osprey<br> ostrich<br> owl<br> oxpecker<br> parakeet<br> parrot<br> partridge<br> peacock<br> peafowl<br> pelican<br> penguin<br> peregrine falcon<br> petrel<br> pigeon<br> pintail<br> plover<br> prairie chicken<br> ptarmigan<br> puffin<br> pygmy owl<br> quail<br> quetzal<br> rail<br> raven<br> razorbill<br> redbilled oxpecker<br> red hooded duck<br> red-tailed hawk<br> redwing<br> rhea<br> rhode island red<br> ring-billed gull<br> roadrunner<br> robin<br> rock dove<br> rock pigeon<br> rockhopper penguin<br> rook<br> rookery<br> roost<br> rooster<br> roseate spoonbill<br> ruby-throated hummingbird<br> sandpiper<br> scarlet macaw<br> screech owl<br> scrub jay<br> seabird<br> shearwater<br> shore bird<br> shrike<br> snipe<br> snow goose<br> snowy owl<br> skylark<br> snowbirds<br> songbird<br> sparrow<br> spoonbill<br> spotted owl<br> starling<br> stint<br> stork<br> swallow<br> swan<br> swift<br> syrinx<br> tail<br> tanager<br> tern<br> thrasher<br> thrush<br> toucan<br> trumpeter swan<br> turkey<br> turtle dove<br> umbrellabird<br> vireo<br> vulture<br> warbler<br> waterthrush<br> waxwing<br> western meadowlark<br> western spotted owl<br> whip-poor-will<br> white dove<br> white pelican<br> wing<br> woodpecker<br> wood thrush<br> wren<br> xenops<br> yellowthroat<br>".split('<br> ')
		};

		return output;
	}
};