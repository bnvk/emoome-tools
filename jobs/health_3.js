// health_3.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'P',
	topic: 'HE',
	url: 'http://www.enchantedlearning.com/wordlist/body.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abdomen<br> adam's apple<br> adenoids<br> adrenal gland<br> anatomy<br> ankle<br> anus<br> appendix<br> arch<br> arm<br> artery<br> back<br> ball of the foot<br> belly<br> belly button<br> big toe<br> bladder<br> blood<br> blood vessels<br> body<br> bone<br> brain<br> breast<br> buttocks<br> calf<br> capillary<br> carpal<br> cartilage<br> cell<br> cervical vertebrae<br> cheek<br> chest<br> chin<br> circulatory system<br> clavicle<br> coccyx<br> collar bone<br> diaphragm<br> digestive system<br> ear<br> ear lobe<br> elbow<br> endocrine system<br> esophagus<br> eye<br> eyebrow<br> eyelashes<br> eyelid<br> face<br> fallopian tubes<br> feet<br> femur<br> fibula<br> filling<br> finger<br> fingernail<br> follicle<br> foot<br> forehead<br> gallbladder<br> glands<br> groin<br> gums<br> hair<br> hand<br> head<br> heart<br> heel<br> hip<br> humerus<br> immune system<br> instep<br> index finger<br> intestines<br> iris<br> jaw<br> kidney<br> knee<br> larynx<br> leg<br> ligament<br> lip<br> liver<br> lobe<br> lumbar vertebrae<br> lungs<br> lymph node<br> mandible<br> metacarpal<br> metatarsal<br> molar<br> mouth<br> muscle<br> nail<br> navel<br> neck<br> nerves<br> nipple<br> nose<br> nostril<br> organs<br> ovary<br> palm<br> pancreas<br> patella<br> pelvis<br> phalanges<br> pharynx<br> pinky<br> pituitary<br> pore<br> pupil<br> radius<br> rectum<br> red blood cells<br> respiratory system<br> ribs<br> sacrum<br> scalp<br> scapula<br> senses<br> shin<br> shoulder<br> shoulder blade<br> skeleton<br> skin<br> skull<br> sole<br> spinal column<br> spinal cord<br> spine<br> spleen<br> sternum<br> stomach<br> tarsal<br> teeth<br> tendon<br> testes<br> thigh<br> thorax<br> throat<br> thumb<br> thyroid<br> tibia<br> tissue<br> toe<br> toenail<br> tongue<br> tonsils<br> tooth<br> torso<br> trachea<br> ulna<br> ureter<br> urethra<br> urinary system<br> uterus<br> uvula<br> vein<br> vertebra<br> waist<br> white blood cells<br> wrist".split('<br> ')
		};

		return output;
	}
};