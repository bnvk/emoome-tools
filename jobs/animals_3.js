// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/cats.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abyssinnian<br> alley cat<br> angora<br> bengal tiger<br> bobcat<br> bobtail<br> bombay<br> british shorthair<br> burmese<br> calico<br> caracal<br> cat<br> cheetah<br> clouded leopard<br> cougar<br> curl<br> devon rex<br> egyptian mau<br> felidae<br> feline<br> ginger<br> himalayan<br> jaguar<br> jaguarundi<br> javanese<br> kitten<br> kitty<br> leopard<br> lion<br> longhair<br> lynx<br> maine coon<br> manx<br> margay<br> marmalade<br> mountain lion<br> mouser<br> norwegian forest cat<br> ocelot<br> oriental<br> panther<br> persian<br> puma<br> ragdoll<br> rex<br> russian blue<br> scottish fold<br> serval<br> shorthair<br> siamese<br> siberian tiger<br> snow leopard<br> somali<br> sphynx<br> tabby<br> tiger<br> tom<br> tomcat<br> turkish angora<br> turkish van<br> wildcat<br> wirehair".split('<br> ')
		};

		return output;
	}
};