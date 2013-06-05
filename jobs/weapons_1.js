// weapons_1.js
module.exports = {
	title: 'Weapons Words',
	full: 'weapons',
	language: 'english',
	type: 'D',
	topic: 'W',
	url: 'http://www.enchantedlearning.com/wordlist/weapons.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "a-bomb<br> ammo<br> ammunition<br> armaments<br> arms<br> arrow<br> assault rifle<br> atom bomb<br> atomic bomb<br> autocannon<br> automatic rifle<br> axe<br> ballista<br> ballistic missile<br> bat<br> baton<br> battle axe<br> bayonet<br> bazooka<br> billy club<br> biological weapon<br> blackjack<br> blade<br> blaster<br> blowgun<br> blowpipe<br> bludgeon<br> bomb<br> boobytrap<br> boomerang<br> bow and arrow<br> bowie knife<br> brass knuckles<br> bullet<br> bullwhip<br> cannon<br> carbine<br> catapault<br> cat o'nine tails<br> cleaver<br> club<br> crossbow<br> cudgel<br> cutlass<br> dagger<br> dart<br> depth charge<br> epee<br> explosives<br> firearm<br> flail<br> flamethrower<br> flintlock<br> foil<br> gatling gun<br> grenade<br> grenade launcher<br> guided missile<br> gun<br> gunpowder<br> halberd<br> hand grenade<br> handgun<br> harpoon<br> hatchet<br> howitzer<br> hunting knife<br> javelin<br> katena<br> knife<br> knout<br> kris<br> lance<br> landmine<br> longbow<br> longsword<br> mace<br> machete<br> machine gun<br> magnum<br> maul<br> mine<br> missile<br> morning star<br> mortar<br> munitions<br> musket<br> mustard gas<br> muzzleloader<br> nerve gas<br> night stick<br> nuclear bomb<br> nunchaku<br> numchucks<br> onager<br> ordnance<br> peashooter<br> pepper spray<br> pickaxe<br> pike<br> pistol<br> pommel<br> quarterstaff<br> rapier<br> revolver<br> rifle<br> rocket<br> rocket launcher<br> saber<br> scimitar<br> scythe<br> semiautomatic<br> shell<br> shillelagh<br> shooter<br> shotgun<br> sickle<br> slingshot<br> spear<br> spiked mace<br> stiletto<br> stun gun<br> submachine gun<br> switchblade<br> sword<br> tank<br> tank gun<br> taser<br> tear gas<br> tomahawk<br> torpedo<br> trebuchet<br> trident<br> tripwire<br> truncheon<br> uzi<br> weapon<br> weapon of mass destruction<br> weaponry<br> whip".split('<br> ')
		};

		return output;
	}
};