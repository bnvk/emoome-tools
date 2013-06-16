// medicine_9.js
module.exports = {
	title: 'Medicine Words',
	full: 'medicine',
	language: 'english',
	type: 'D',
	topic: 'MD',
	url: 'http://www.rxlist.com/script/main/hp.asp',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "Abilify, Aciphex, Actonel, Actoplus MET, Actos, Adacel, Adderall, Adderall XR, Advair Diskus, Aggrenox, Aloxi, Amphetamine Salts ER, Alimta, AndroGel, Angiomax, Aranesp, Asacol, Atorvastatin Calcium, Atripla, Avapro, Avastin, Avelox, Avodart, Avonex, Benicar, Benicar HCT, Betaseron, Boniva, Budesonide, Byetta, Bystolic, Celebrex, Chantix, Cialis, Colcrys, Combivent, Concerta, Copaxone, Crestor, Cubicin, Cymbalta, Detrol LA, Dexilant, Diovan, Diovan HCT, Donepezil HCl, Effexor XR, Eloxatin, Enbrel, Epogen, Epzicom, Erbitux, Evista, Exelon, Exforge, Fentanyl, Flomax, Flovent HFA, Fluticasone Propionate, Focalin XR, Forteo, Gammagard Liquid, Gamunex-C, Gardasil, Geodon, Gilenya, Gleevec, Herceptin, Humalog, Humalog Kwikpen, Humira , Incivek, Invega, Invega Sustenna, Isentress , Janumet, Januvia, Kaletra, Lamictal, Lantus, Lantus Solostar, Levaquin, Levemir, Lexapro, Lexiscan, Lidoderm , Lialda, Lipitor, Loestrin 24 FE, Lotrel, Lovaza, Lovenox, Lucentis, Lumigan, Lunesta, Lyrica, Methylphenidate, Methylphenidate ER, Metoprolol Succinate, Mirena, Namenda, Nasonex, Neurontin, Neupogen, Nexium, Niaspan, NovoLog, Norvir, NovoSeven RT, Nuvaring, Nutropin AQ, Opana ER, Orencia, Ortho Tri-Cyclen Lo, Oxycontin, Pegasys, Plavix, Pneumovax 23, Pradaxa, Premarin, Prevnar 13, Prezista, Pristiq, Privigen , Procrit, Proair HFA, Prograf, Provigil, Pulmozyme, Rebif, Reclast, Remicade, Renvela, Restasis, Revlimid, Reyataz, Risperdal Consta, Ritalin, Rituxan, Sandostatin LAR, Sensipar, Seroquel, Seroquel XR, Singulair, Solodyn, Spiriva Handihaler, Stelara, Strattera, Suboxone, Symbicort, Synagis, Synthroid, Taxotere, Tarceva, Travatan Z, Treanda, Tricor, Trilipix, Truvada, Tysabri, Varivax, Velcade, Venlafaxine HCl ER, Ventolin HFA, VESIcare, Viagra, Victoza, Viread, Vytorin, Vyvanse, Welchol, Xeloda, Xgeva, Xifaxan, Xolair, Xopenex, Yervoy, Zetia, Zometa, Zostavax, Zosyn, Zyprexa, Zyprexa Zydis, Zyvox".split(', ')
		};

		return output;
	}
};