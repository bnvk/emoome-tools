// exercise_5.js
module.exports = {
	title: 'Exercise Words',
	full: 'exercise',
	language: 'english',
	type: 'P',
	topic: 'E',
	url: 'http://healthcare.utah.edu/home/resources/English%20handout%20on%20exercise.pdf',
	element: '',
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "Running • Run • Sprints • Sprinting • Hurdles • bicycling • cycling • Swimming • Tennis • Golf • Walk dog • Walks • Exploring • Hula hooping • Rollerskating • Rollerblading • Skateboarding • Jump rope • Climbing trees • Hopscotch • Stretching • Basketball • Jog • Yard work • Housecleaning • Dancing • Stretch bands • Free weights • Climbing • Rock Climbing • Stretching • Paintball • Hiking • Golf • Gym • The Gym • Gymnastics • Tennis • Swimming • Skateboarding • Canoeing • Playground • Ping pong • Rafting • River rafting • Cheerleading • Marching band • Baseball • Softball • Track • Cross country • Martial arts • Racquetball • Stretching • Yoga • Pilates • Stair climbing • Elliptical trainer • Elliptical • Indoor rower • Stairmaster • Stationary bicycle • Treadmill • Walking • Cycling • Jogging • Running • ski • skiing • alpine skiing • nordic skiing • Cross-country skiing • Cross-country running • Nordic walking • Inline skating • Rowing • Swimming • Kickboxing • Skipping rope • jump rope • Circuit training • 5BX • XBX • Anaerobic exercise • Weights • Weight • weightlifting • weightlifters".split(' • ')
		};

		return output;
	}
};