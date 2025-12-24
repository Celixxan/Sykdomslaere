/**
 * Spørsmål: Farmakologi
 * Legemidler, virkningsmekanismer, bivirkninger
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'farm-1',
        category: 'farmakologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken legemiddelgruppe hemmer blodplateaggregasjon og brukes som tromboseprofylakse?',
        options: [
            'Betablokkere',
            'Platehemmere (f.eks. ASA, klopidogrel)',
            'Protonpumpehemmere',
            'ACE-hemmere'
        ],
        correctAnswer: 1,
        explanation: 'Platehemmere som acetylsalisylsyre (ASA) og klopidogrel hemmer blodplateaggregasjon og brukes ved hjerte-karsykdom for å forebygge trombose.'
    },
    {
        id: 'farm-2',
        category: 'farmakologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Paracetamol har antiinflammatorisk effekt.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Paracetamol har smertestillende og febernedsettende effekt, men mangler antiinflammatorisk virkning. NSAIDs har alle tre effektene.'
    },
    {
        id: 'farm-3',
        category: 'farmakologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient på warfarin får forskrevet ciprofloksacin for urinveisinfeksjon. Hva må du være oppmerksom på?',
        options: [
            'Ingen interaksjon',
            'Økt blødningsrisiko - ciprofloksacin forsterker warfarineffekt',
            'Warfarin mister effekt',
            'Ciprofloksacin mister effekt'
        ],
        correctAnswer: 1,
        explanation: 'Ciprofloksacin hemmer CYP-enzymer og øker warfarinkonsentrasjonen. Dette gir økt blødningsrisiko. INR må følges tett og warfarindosen justeres.'
    },
    {
        id: 'farm-4',
        category: 'farmakologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er hovedvirkningen av betablokkere på hjertet?',
        options: [
            'Øker hjertefrekvensen',
            'Senker hjertefrekvensen og blodtrykket',
            'Øker hjertets kontraktilitet',
            'Utvider koronarkarene'
        ],
        correctAnswer: 1,
        explanation: 'Betablokkere hemmer betareseptorer og gir bradykardi (langsommere hjerterytme), redusert kontraktilitet og lavere blodtrykk. Brukes ved hypertensjon, angina og hjertesvikt.'
    },
    {
        id: 'farm-5',
        category: 'farmakologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'NSAIDs kan forverre nyrefunksjonen og bør brukes med forsiktighet hos eldre.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'NSAIDs hemmer prostaglandiner som er viktige for nyregjennomblødning. Hos eldre og ved nedsatt nyrefunksjon kan NSAIDs gi akutt nyresvikt. Brukes med forsiktighet.'
    },
    {
        id: 'farm-6',
        category: 'farmakologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken bivirkningsrisiko er viktig å kjenne til ved bruk av ACE-hemmere?',
        options: [
            'Hårtap',
            'Tørrhoste og angioødem',
            'Vektøkning',
            'Hudpigmentering'
        ],
        correctAnswer: 1,
        explanation: 'ACE-hemmere kan gi tørrhoste (opptil 10%) pga. bradykininakkumulering. Sjelden, men alvorlig bivirkning er angioødem. Ved hoste kan ARB være alternativ.'
    },
    {
        id: 'farm-7',
        category: 'farmakologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Opioider kan gi obstipasjon som bivirkning.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Obstipasjon er en svært vanlig bivirkning av opioider og utvikler ikke toleranse. Laksantia bør gis profylaktisk til pasienter på fast opioidbehandling.'
    },
    {
        id: 'farm-8',
        category: 'farmakologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En diabetespasient på metformin skal til CT med jodholdige kontrastvæsker. Hva er viktig?',
        options: [
            'Fortsette metformin som vanlig',
            'Seponere metformin før/etter undersøkelsen pga. risiko for laktacidose',
            'Doble metformindosen',
            'Bytte til insulin permanent'
        ],
        correctAnswer: 1,
        explanation: 'Metformin + jodholdig kontrast kan gi laktacidose ved kontrastindusert nyrepåvirkning. Metformin seponeres vanligvis 48 timer før og gjenopptas etter at nyrefunksjonen er kontrollert.'
    },
    {
        id: 'farm-9',
        category: 'farmakologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er antidoten ved opioidoverdose?',
        options: [
            'Flumazenil',
            'Nalokson',
            'Acetylcystein',
            'Atropin'
        ],
        correctAnswer: 1,
        explanation: 'Nalokson er en opioidantagonist som reverserer opioideffekter, inkludert respirasjonsdepresjon. Gis iv, im eller nasalt. Har kort virketid, så observasjon er viktig.'
    },
    {
        id: 'farm-10',
        category: 'farmakologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Antibiotika er effektive mot virusinfeksjoner.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Antibiotika virker kun mot bakterier, ikke virus. Unødvendig antibiotikabruk bidrar til resistensutvikling. Virale infeksjoner behandles symptomatisk eller med antivirale midler.'
    },
    {
        id: 'farm-11',
        category: 'farmakologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient på SSRI (sertralin) får forskrevet tramadol for smerter. Hva er risikoen?',
        options: [
            'Ingen interaksjon',
            'Serotonergt syndrom',
            'Tap av smertelindring',
            'Tap av antidepressiv effekt'
        ],
        correctAnswer: 1,
        explanation: 'SSRI + tramadol gir økt serotoninaktivitet og risiko for serotonergt syndrom (tremor, hypertermi, agitasjon, klonus). Kombinasjonen bør unngås eller brukes med forsiktighet.'
    },
    {
        id: 'farm-12',
        category: 'farmakologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvordan virker protonpumpehemmere (PPI)?',
        options: [
            'Nøytraliserer magesyre',
            'Hemmer protonpumpen og reduserer syreproduksjon',
            'Beskytter mageslimhinnen',
            'Dreper H. pylori'
        ],
        correctAnswer: 1,
        explanation: 'PPIs hemmer irreversibelt protonpumpen (H+/K+-ATPase) i parietalcellene og reduserer magesyreproduksjonen kraftig. Brukes ved GERD, ulcus og som profylakse.'
    }
);
