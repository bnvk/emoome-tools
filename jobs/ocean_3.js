// ocean_3.js
module.exports = {
	title: 'Ocean Words',
	full: 'ocean',
	language: 'english',
	type: 'U',
	topic: 'O',
	url: 'http://www.enchantedlearning.com/wordlist/boat.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abeam<br> aft<br> aground<br> aircraft carrier<br> aloft<br> amphibious vehicle<br> anchor<br> astern<br> bail<br> ballast<br> barge<br> barque<br> bathyscaphe<br> battlecruiser<br> battleship<br> beam<br> bearing<br> bilge<br> boat<br> boater<br> boating<br> boat lift<br> boatswain<br> boom<br> bow<br> bowsprit<br> bulkhead<br> buoy<br> cabin cruiser<br> canoe<br> capsize<br> caravel<br> cargo ship<br> carrier<br> cast off<br> catamarin<br> clipper<br> cockpit<br> container ship<br> convoy<br> crew<br> crow's nest<br> cruise<br> cruiser<br> cruise ship<br> current<br> cutter<br> davy jones' locker<br> deck<br> deackhands<br> destroyer<br> dinghy<br> displacement<br> dock<br> docking<br> dory<br> draft<br> dreadnought<br> drift<br> drydock<br> dugout<br> engine<br> engine room<br> escort ship<br> fathom<br> ferry<br> figurehead<br> fireboat<br> fishing boat<br> flat-bottom boat<br> flotilla<br> foremast<br> foresail<br> freighter<br> frigate<br> funnel<br> furl<br> galleon<br> galley<br> gangway<br> gondola<br> gunboat<br> gunwale<br> halyard<br> headsail<br> helm<br> helmsman<br> hoist<br> hoovercraft<br> houseboat<br> hull<br> hydrofoil<br> hydroplane<br> ice breaker<br> inboard motor<br> jet boat<br> jib<br> junk<br> kayak<br> keel<br> keelboat<br> ketch<br> knot<br> landing craft<br> lanyard<br> larboard<br> launch<br> league<br> leeward<br> lifeboat<br> lifeline<br> limey<br> lines<br> listing<br> log<br> mainmast<br> marine<br> mariner<br> maritime<br> mast<br> mizzen<br> mizzenmast<br> mooring<br> motorboat<br> motor launch<br> narrowboat<br> nautical<br> nautical mile<br> naval<br> navigate<br> navy<br> nun<br> oar<br> ocean going<br> ocean liner<br> offshore<br> oil tanker<br> onboard<br> outboard motor<br> outrigger canoe<br> overboard<br> paddle<br> passage<br> passenger<br> pedal boat<br> pennant<br> personal flotation device<br> pfd<br> pirate<br> police boat<br> port<br> porthole<br> powerboat<br> propeller<br> pt boat<br> punt<br> raft<br> rigging<br> riverboat<br> rocket boat<br> rope<br> row<br> rowboat<br> rudder<br> runabout<br> sail<br> sailboat<br> sailor<br> schooner<br> scull<br> seafarer<br> seasick<br> ship<br> shrimp boat<br> ski boat<br> skipjack<br> sloop<br> speedboat<br> spinnaker<br> starboard<br> steamboat<br> steamship<br> stern<br> stow<br> submarine<br> submersible<br> swift boat<br> tack<br> tanker<br> tender<br> tide<br> tiller<br> topsail<br> towboat<br> transom<br> trawler<br> tug<br> tugboat<br> u-boat<br> undocking<br> vessel<br> voyage<br> wake<br> warship<br> water-borne<br> watercraft<br> waterline<br> water taxi<br> whaler<br> wheel<br> wheelhouse<br> winch<br> windjammer<br> windward<br> yacht<br> yawl".split('<br> ')
		};

		return output;
	}
};