// weapons_5.js
module.exports = {
	title: 'Weapons Words',
	full: 'weapons',	
	language: 'english',
	type: 'D',
	topic: 'V',
	url: 'http://www.enchantedlearning.com/wordlist/military.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "ammo<br> ammunition<br> arrow<br> ballistic<br> battleship<br> bayonet<br> bomb<br> bow and arrow<br> bullet<br> cannon<br> cannon ball<br> catapult<br> fleet<br> flotilla<br> grenade<br> grenade launcher<br> gun<br> gunner<br> gunpowder<br> howitzer<br> jet<br> missile<br> mortar<br> munition<br> musket<br> rifle<br> rocket artillery<br> spear<br> submarine<br> tank<br> tomahawk<br> torpedo<br> weapon".split('<br> ')
		};

		return output;
	}
};