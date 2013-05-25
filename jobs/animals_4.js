// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/dogs.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "afghan hound<br> african wild dog<br> airedale terrier<br> akita<br> alaskan malamute<br> american cocker spaniel<br> australian cattle dog<br> bark<br> basenji<br> basset hound<br> beagle<br> bergamasco<br> bichon frise<br> bird dog<br> bloodhound<br> border collie<br> borzoi<br> boston terrier<br> boxer<br> breed<br> briard<br> brittany<br> bulldog<br> bullmastiff<br> bull terrier<br> cairn terrier<br> cape hunting dog<br> chihuahua<br> chinese crested dog<br> chow chow<br> cocker spaniel<br> collie<br> companion dog<br> coon hound<br> corgi<br> cur<br> dachshund<br> dalmatian<br> dhole<br> dingo<br> doberman pinscher<br> dog<br> elkhound<br> feist<br> fighting dog<br> fox hound<br> fox terrier<br> german shepherd<br> golden retriever<br> great dane<br> great pyrenees<br> greyhound<br> growl<br> guard dog<br> gun dogs<br> harrier<br> herding dog<br> hound<br> hunting dog<br> husky<br> irish setter<br> jack russell terrier<br> keeshond<br> kerry blue terrier<br> king charles spaniel<br> labrador retriever<br> lap dog<br> lhasa apso<br> malamute<br> maltese<br> mastiff<br> mexican hairless<br> miniature schnauser<br> mongrel<br> mutt<br> newfoundland<br> norfolk terrier<br> old english sheepdog<br> papillon<br> pedigree<br> pekingese<br> pinscher<br> pit bull<br> pointer<br> police dog<br> pomeranian<br> poodle<br> portuguese water dog<br> pug<br> pup<br> puppy<br> purebred<br> rat terrier<br> rescue dog<br> retriever<br> rhodesian ridgeback<br> rottweiler<br> saluki<br> samoyed<br> scent hound<br> schnauser<br> scottish terrier<br> search-and-rescue dog<br> sled dog<br> service dog<br> setter<br> siberian husky<br> sighthound<br> spaniel<br> spitz<br> springer spaniel<br> st. bernard<br> terrier<br> toy dog<br> utonagen<br> vizsla<br> water dog<br> weimaraner<br> welsh corgi<br> west highland white terrier<br> westie<br> wheaten terrier<br> whippet<br> wild dog<br> working dog<br> yorkshire terrier".split('<br> ')
		};

		return output;
	}
};