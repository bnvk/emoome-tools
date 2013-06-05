// clothing_2.js
module.exports = {
	title: 'Clothing Words',
	full: 'cothing',
	language: 'english',
	type: 'S',
	topic: 'CL',
	url: 'http://www.enchantedlearning.com/wordlist/shoes.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "ankle boot<br> army boots<br> athletic shoes<br> ballet shoes<br> beach shoes<br> boat shoes<br> boots<br> bowling shoes<br> brogues<br> cleats<br> climbing shoes<br> clogs<br> court shoes<br> cowboy boots<br> cycling shoes<br> deck shoes<br> dress shoes<br> elevator shoes<br> espadrilles<br> figure skates<br> flip-flops<br> galoshes<br> golf shoes<br> gumboots<br> heels<br> high heels<br> high-top sneakers<br> hiking boots<br> ice skates<br> inline skates<br> jackboots<br> jump boots<br> kamiks<br> loafers<br> mary janes<br> moccasins<br> mukluks<br> mules<br> open-toes shoes<br> oxfords<br> penny loafers<br> platform shoes<br> pointe shoes<br> pumps<br> rainboots<br> riding boots<br> rollerblades<br> rollerskates<br> running shoes<br> saddle shoes<br> sandals<br> shoes<br> skates<br> skate shoes<br> ski boots<br> slides<br> sling-backs<br> slippers<br> sneakers<br> steel-toe boots<br> stiletto heels<br> swim fins<br> tap shoes<br> tennis shoes<br> toe shoes<br> track shoes<br> valenki<br> waders<br> wedge shoes<br> wellington boots<br> wingtip shoes<br> work boots<br> zories".split('<br> ')
		};

		return output;
	}
};