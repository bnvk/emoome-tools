// health_1.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'U',
	topic: 'HE',
	url: 'http://www.enchantedlearning.com/wordlist/doctor.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abscess<br> ache<br> acute<br> ailing<br> ailment<br> allergy<br> ambulance<br> antibiotic<br> appointment<br> artery<br> bacteria<br> bandage<br> benign<br> biopsy<br> birth<br> black-and-blue<br> bleed<br> blister<br> blood<br> blood pressure<br> blood type<br> blurred vision<br> bone<br> braces<br> breathe<br> breathing<br> broken bone<br> bruise<br> burn<br> cancer<br> care<br> cartilage<br> cast<br> cavity<br> chart<br> chills<br> chronic<br> circulatory system<br> clinic<br> clot<br> coma<br> concussion<br> contagious<br> contusion<br> cough<br> culture<br> cut<br> cyst<br> death<br> deficiency<br> delivery<br> dentist<br> dental<br> dentures<br> diabetes<br> diagnose<br> diagnosis<br> diarrhea<br> diet<br> digestive system<br> disease<br> disinfect<br> disorder<br> doctor<br> dose<br> dosage<br> dose<br> drug<br> emergency room<br> exam<br> examination<br> eye test<br> faint<br> fever<br> filling<br> first aid<br> flu<br> fracture<br> gland<br> growth<br> headache<br> heal<br> health<br> healthy<br> hearing test<br> heart<br> heartbeat<br> height<br> hygienist<br> hypodermic needle<br> ill<br> illness<br> immune<br> immune system<br> immunization<br> infection<br> inflammation<br> injury<br> inoculation<br> intensive care<br> jaundice<br> jaw<br> joints<br> kidney<br> laparoscope<br> laryngitis<br> lotion<br> lungs<br> malignant<br> medic<br> medical<br> medication<br> medicine<br> minerals<br> mucus<br> muscle<br> needle<br> nerves<br> nurse<br> nutrition<br> ointment<br> operate<br> operation<br> opthalmologist<br> optometrist<br> orderly<br> pain<br> painful<br> pediatrician<br> physical<br> physical therapy<br> physician<br> pill<br> placebo<br> plasma<br> pneumonia<br> poison<br> practitioner<br> prescription<br> pressure<br> procedure<br> pulse<br> pus<br> quarantine<br> rash<br> reaction<br> recover<br> recovery<br> reflex<br> respiratory system<br> runny nose<br> scab<br> scale<br> scalpel<br> scan<br> second opinion<br> seizure<br> shock<br> shot<br> sick<br> sickness<br> skeleton<br> skull<br> sling<br> sore<br> specialist<br> spinal<br> splinter<br> sprain<br> sterilized<br> sting<br> stitches<br> stomach<br> stomach ache<br> stretcher<br> surgery<br> survive<br> swab<br> swollen<br> symptom<br> syndrome<br> temperature<br> tendon<br> test<br> therapy<br> therapeutic<br> toxic<br> transfusion<br> treat<br> treatment<br> tumor<br> tweezers<br> ultrasound<br> urine<br> vaccination<br> vaccine<br> vector<br> vein<br> venom<br> virus<br> vitamins<br> vomit<br> wart<br> weight<br> weakness<br> wheezing<br> wound<br> x-ray".split('<br> ')
		};

		return output;
	}
};