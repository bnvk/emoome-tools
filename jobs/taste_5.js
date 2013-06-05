// taste_5.js
module.exports = {
	title: 'Taste Words',
	full: 'taste',
	language: 'english',
	type: 'S',
	topic: 'TA',
	url: 'http://www.onelook.com/?lang=all&w=*:taste&ws1=1&first=401',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "caprylic acid<br> capsicum<br> caraway<br> carroty<br> carvacrol<br> caviar<br> chalky<br> charred<br> chasse<br> cheddar<br> cheesy<br> chicory<br> chloral<br> choke pear<br> cinnamon<br> convallarin<br> copperas<br> copperish<br> coriander<br> corked<br> corky<br> crab<br> crabbed<br> creosol<br> cress<br> cumin<br> curly endive<br> cyclamate<br> degustation<br> deliciously<br> disgustful<br> disrelish<br> dulcamarin<br> durian<br> earthy<br> eating<br> elecampane<br> esthetic<br> esthetical<br> eucalyptol<br> eugenol<br> farinaceous<br> ferrous sulphate<br> filbert<br> finicky<br> flavoring<br> flavorless".split('<br> ')
		};

		return output;
	}
};