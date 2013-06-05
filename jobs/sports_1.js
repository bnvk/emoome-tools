// sports_1.js
module.exports = {
	title: 'Sports Words',
	full: 'sports',
	language: 'english',
	type: 'P',
	topic: 'SP',
	url: 'http://www.enchantedlearning.com/wordlist/sports.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "aerobics<br> archer<br> archery<br> arena<br> arrow<br> athlete<br> athletics<br> axel<br> badminton<br> ball<br> base<br> baseball<br> basketball<br> bat<br> baton<br> batter<br> batting<br> biathlon<br> bicycle<br> bicycling<br> bike<br> biking<br> billiards<br> bobsleigh<br> bocce<br> boomerang<br> boules<br> bow<br> bowler<br> bowling<br> boxer<br> boxing<br> bronze medal<br> bunt<br> canoe<br> canoeing<br> catch<br> catcher<br> champion<br> championship<br> cleats<br> club<br> coach<br> compete<br> competing<br> competition<br> competitor<br> crew<br> cricket<br> croquet<br> cross country<br> cue<br> curling<br> cycle<br> cycling<br> cyclist<br> dart<br> dartboard<br> deadlifting<br> decathlon<br> defense<br> diamond<br> discus<br> dive<br> diver<br> diving<br> dodgeball<br> doubleheader<br> dugout<br> epee<br> equestrian<br> equipment<br> exercise<br> fencing<br> field<br> fielder<br> field hockey<br> fielding<br> figure skating<br> fitness<br> football<br> forward<br> free throw<br> frisbee<br> game<br> gear<br> geocaching<br> go<br> goal<br> goalie<br> gold medal<br> golf<br> golfer<br> golfing<br> guard<br> gym<br> gymnast<br> gymnastics<br> gymnasium<br> halftime<br> hammer throw<br> handball<br> hang gliding<br> hardball<br> helmet<br> heptathlon<br> high jump<br> hitter<br> hockey<br> hole-in-one<br> home<br> home plate<br> home run<br> home team<br> hoop<br> horseshoes<br> huddle<br> hurdle<br> ice hockey<br> ice rink<br> ice skates<br> ice skating<br> infield<br> infielder<br> inline skates<br> inning<br> jai-alai<br> javelin<br> jog<br> jogger<br> judo<br> jump<br> jumper<br> jumping<br> jump rope<br> karate<br> kayak<br> kayaker<br> kayaking<br> kickball<br> kneepads<br> king fu<br> kite<br> lacrosse<br> lawn bowling<br> league<br> long jump<br> lose<br> loser<br> luge<br> lutz<br> major league<br> mallet<br> martial arts<br> mat<br> medal<br> minor league<br> mitt<br> mouthguard<br> move<br> movement<br> mvp<br> net<br> no-hitter<br> nordic skiing<br> offense<br> ollie<br> olympics<br> orienteering<br> out<br> outfield<br> outfielder<br> paddle<br> paddleball<br> paddling<br> paintball<br> parasailing<br> parkour<br> pentathlon<br> pickleball<br> ping pong<br> pitch<br> pitcher<br> play<br> player<br> playing<br> playoffs<br> pogo stick<br> pole<br> pole vault<br> polo<br> pool<br> puck<br> quarter<br> quarterback<br> quiver<br> race<br> racer<br> racewalking<br> racing<br> racket<br> racquetball<br> rafting<br> referee<br> relay<br> ride<br> riding<br> rink<br> rock climbing<br> roller skates<br> roller skating<br> row<br> rower<br> rowing<br> rugby<br> run<br> runner<br> running<br> sailing<br> score<br> scoreboard<br> scuba<br> scull<br> sculling<br> shortstop<br> shot put<br> silver medal<br> skate<br> skating rink<br> skeleton<br> ski<br> skier<br> skiing<br> slalom<br> sled<br> sledder<br> sledding<br> snorkling<br> snowboard<br> snowboarder<br> snowboarding<br> snowshoeing<br> soccer<br> softball<br> somersault<br> speed skating<br> sport<br> sportsmanship<br> squash<br> stadium<br> stick<br> strike<br> stroke<br> sumo wrestling<br> surfer<br> surfing<br> swim<br> swimmer<br> swimming<br> synchronized swimming<br> table tennis<br> taekwondo<br> tag<br> target<br> team<br> teammate<br> tee<br> telemark skiing<br> tennis<br> tetherball<br> throw<br> throwing<br> tie<br> toboggan<br> track and field<br> trampoline<br> triathlon<br> triathlete<br> triple jump<br> triple play<br> tug of war<br> ultramarathon<br> ultramarathoner<br> umpire<br> unicycle<br> unicyclist<br> uniform<br> vault<br> vaulter<br> vaulting<br> visiting team<br> volley<br> volley ball<br> wakeboarding<br> walk<br> walker<br> walking<br> water polo<br> waterski<br> waterskier<br> waterskiing<br> weightlifter<br> weightlifting<br> weights<br> wetsuit<br> white water rafting<br> wicket<br> win<br> windsurfer<br> windsurfing<br> winner<br> winning<br> world cup<br> world series<br> wrestler<br> wrestling".split('<br> ')
		};

		return output;
	}
};