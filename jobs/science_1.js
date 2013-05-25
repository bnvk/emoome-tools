// art_1.js
module.exports = {
	title: 'Science Words',
	full: 'science',
	language: 'english',
	type: 'I',
	topic: 'SC',
	url: 'http://www.enchantedlearning.com/wordlist/astronomy.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "albedo<br> alpha centauri<br> apastron<br> aperature<br> aphelion<br> apogee<br> asterism<br> asteroid<br> astronaut<br> astronomer<br> astronomical unit<br> astronomy<br> axial tilt<br> azimuth<br> background radiation<br> bailey's beads<br> big bang theory<br> binary star<br> black body<br> black hole<br> bolometer<br> celestial<br> celestial equator<br> cislunar<br> cluster<br> comet<br> conjunction<br> constellation<br> coriolis force<br> cosmic rays<br> corona<br> cosmology<br> cosmonaut<br> cosmos<br> crater<br> crescent moon<br> dark matter<br> day<br> declination<br> deep space<br> deneb<br> density<br> docking<br> doppler shift<br> double star<br> drake equation<br> dust<br> dwarf planet<br> dwarf star<br> earth<br> earthbound<br> eccentricity<br> eclipse<br> ecliptic<br> elliptical orbit<br> equinox<br> escape velocity<br> event horizon<br> exoplanet<br> extragalaxtic<br> falling star<br> flare<br> flyby<br> free fall<br> full moon<br> galaxy<br> gamma ray<br> gas giant<br> gegenschein<br> geostationary<br> geosynchronous<br> gibbous moon<br> globular cluster<br> gravitation<br> gravitational constant<br> gravitational lens<br> gravity<br> half moon<br> heliocentric<br> hydrogen<br> helium<br> h-r diagram<br> hubble telescope<br> hubble's law<br> hyperbolic orbit<br> hypernova<br> ice giant<br> inclination<br> inertia<br> inferior planets<br> inner planets<br> interstellar<br> interstellar dust<br> ionosphere<br> jupiter<br> kepler's laws<br> kiloparsec<br> kirkwood gaps<br> kuiper belt<br> lagrange points<br> lens<br> light-year<br> local arm<br> local group<br> lunar<br> magnitude<br> mare<br> mars<br> mass<br> mercury<br> meteor<br> meteor shower<br> meteorite<br> meteoroid<br> milky way<br> minor planet<br> mir<br> moon<br> muttnik<br> nadir<br> nasa<br> nebula<br> neptune<br> neutron star<br> new moon<br> north star<br> nova<br> observatory<br> occultation<br> oort cloud<br> opposition<br> orbit<br> orbital eccentricity<br> orbital inclination<br> outer planets<br> parallax<br> parsec<br> partial eclipse<br> penumbra<br> perigee<br> perihelion<br> perturbation<br> phase<br> plane of the ecliptic<br> planet<br> planetary nebula<br> planetoid<br> pluto<br> pole star<br> precession<br> probe<br> pulsar<br> quarter moon<br> quasar<br> radiant<br> radiation<br> red dwarf<br> red giant star<br> red shift<br> revolve<br> right ascension<br> rings<br> roche limit<br> rocket<br> satellite<br> saturn<br> scientific notation<br> scintillation<br> shooting star<br> solar<br> sidereal<br> singularity<br> sky<br> solar<br> solar system<br> solar wind<br> solstice<br> space<br> space exploration<br> space station<br> spectroscope<br> spectrum<br> sputnik<br> star<br> starlight<br> sun<br> sunspot<br> superior planets<br> supernova<br> synodic<br> syzygy<br> telemetry<br> telescope<br> terminator<br> terrestrial<br> total eclipse<br> totality<br> transit<br> translunar<br> transneptunians<br> twinkling<br> umbra<br> universe<br> uranus<br> vacuum<br> van allen belt<br> variable star<br> venus<br> vernal equinox<br> visual magnitude<br> waning<br> wavelength<br> waxing<br> weightlessness<br> white dwarf<br> white giant<br> wormhole<br> x-rays<br> yellow dwarf<br> zenith<br> zodiac".split('<br> ')
		};

		return output;
	}
};