// health_1.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.enchantedlearning.com/wordlist/doctor.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "allergy<br> benign<br> blood type<br> cancer<br> care<br> coma<br> cavity<br> chills<br> chronic<br> concussion<br> contagious<br> contusion<br> cough<br> cut<br> cyst<br> death<br> deficiency<br> delivery<br> diabetes<br> diarrhea<br> diet<br> digestive system<br> disease<br> disinfect<br> disorder<br> fever<br> flu<br> fracture<br> headache<br> heal<br> health<br> healthy<br> ill<br> illness<br> immune<br> immune system<br> infection<br> inflammation<br> injury<br> jaundice<br> laryngitis<br> lotion<br> malignant<br> minerals<br> nutrition<br> ointment<br> pain<br> painful<br> physical<br> physical therapy<br> pressure<br> pneumonia<br> rash<br> reaction<br> recover<br> recovery<br> scale<br> seizure<br> shock<br> shot<br> sick<br> sickness<br> sore<br> splinter<br> sprain<br> sting<br> survive<br> swab<br> symptom<br> syndrome<br> temperature<br> toxic<br> venom<br> vitamins<br> ailing<br> ailment<br> birth<br> bleed<br> blurred vision<br> broken bone<br> bruise<br> burn<br> clot<br> faint<br> runny nose<br> virus<br> vomit<br> weight<br> weakness<br> wheezing<br> wound".split('<br> ')
		};

		return output;
	}
};