// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/mammal.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "aardvark<br> african elephant<br> african wild cat<br> agouti<br> alpaca<br> american bison<br> anteater<br> antelope<br> ape<br> arctic fox<br> arctic wolf<br> armadillo<br> arsinoitherium<br> artiodactyls<br> aye-aye<br> baboon<br> badger<br> bactrian camel<br> badger<br> bandicoot<br> bat<br> bear<br> beaver<br> beluga whale<br> bighorn sheep<br> bilby<br> binturong<br> bison<br> black bear<br> black bear hamster<br> blue whale<br> bobcat<br> bongo<br> bonobo<br> bowhead whale<br> brown bear<br> buffalo<br> bull<br> bushbaby<br> california sea lion<br> camel<br> cape buffalo<br> capybera<br> caracal<br> caribou<br> carnivora<br> cat<br> catamount<br> cattle<br> cavy<br> cheetah<br> chimipanzee<br> chinchilla<br> chipmunk<br> coati<br> collared peccary<br> colugo<br> cougar<br> cow<br> coyote<br> coypu<br> dall sheep<br> dall's porpoise<br> dalmatian<br> deer<br> dhole<br> dingo<br> doedicurus<br> dog<br> dolphin<br> donkey<br> dromedary<br> duck-billed platypus<br> dugong<br> echidna<br> ekaltadelta<br> eland<br> elephant<br> elephant seal<br> elk<br> eohippus<br> ermine<br> fennec fox<br> ferret<br> fin whale<br> flying squirrel<br> fossa<br> fox<br> fruit bat<br> galagos<br> gazelle<br> gerbil<br> gibbon<br> giraffe<br> glyptodon<br> gnu<br> goat<br> golden lion tamarin<br> gopher <br> gorilla<br> gray whale<br> great apes<br> grizzly bear<br> groundhog<br> guinea pig<br> hamster<br> hare<br> harp seal<br> hedgehog<br> hippo<br> hippopotamus<br> horse<br> howler monkey<br> human being<br> humpback whale<br> hyena<br> hyracotherium<br> hyrax<br> ibex<br> impala<br> insectivores<br> jaguar<br> javelina<br> kangaroo<br> kangaroo rat<br> karakul<br> killer whale<br> kinkajou<br> koala<br> kudu<br> lagomorph<br> lemming<br> lemur<br> leopard<br> lion<br> llama<br> longhorn<br> loris<br> lynx<br> macaque<br> macrauchenia<br> mammal<br> mammoth<br> manatee<br> mandrill<br> marine mammals<br> marmoset<br> marmot<br> marsupial<br> mastodon<br> meerkat<br> mink<br> mice<br> mole<br> mongoose<br> monkey<br> monotreme<br> moose<br> morganucodon<br> mountain lion<br> mouse<br> musk ox<br> muskrat<br> mustelids<br> nabarlek<br> naked mole-rat<br> narwhal<br> northern elephant seal<br> northern fur seal<br> northern right whale<br> numbat<br> nutria<br> ocelot<br> okapi<br> onager<br> opossum<br> orangutan<br> orca<br> oryx<br> otter<br> ox<br> panda<br> pangolin<br> panther<br> perissodactyls<br> pig<br> pika<br> pinnipeds<br> placental mammals<br> platybelodon<br> platypus<br> polar bear<br> porcupine<br> porpoise<br> primates<br> proboscideans<br> pronghorn<br> puma<br> quagga<br> quokka<br> quoll<br> rabbit<br> raccoon<br> rat<br> red kangaroo<br> red panda<br> red wolf<br> reindeer<br> rhino<br> rhinoceros<br> right whale<br> ring-tailed lemur<br> ringtail possum<br> river otter<br> rodent<br> seal<br> sea otter<br> serval<br> sheep<br> shrew<br> siamang<br> skunk<br> sloth<br> smilodon<br> snow leopard<br> spectacled porpoise<br> spiny anteater<br> squirrel<br> squirrel<br> sugar glider<br> tamarin<br> tapir<br> tarsier<br> tasmanian devil<br> tasmanian tiger<br> three-toed sloth<br> tiger<br> tree shrew <br> ungulates<br> vampire bat<br> virginia opossum<br> wallaby<br> walrus<br> warthog<br> weasel<br> weddell seal<br> whale<br> wildebeest<br> wolverine<br> woodland caribou<br> wolf<br> woodchuck<br> wombat<br> woodchuck<br> woolly mammoth<br> woolly rhinoceros<br> yak<br> zebra<br> zorilla<br> zorro".split('<br> ')
		};

		return output;
	}
};