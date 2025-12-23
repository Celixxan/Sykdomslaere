/**
 * Spørsmål: Hjertesykdommer
 * Hjertesvikt, angina, ACS, atrieflimmer
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'hjerte-1',
        category: 'hjertesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilket symptom er IKKE typisk for venstresidig hjertesvikt?',
        options: [
            'Dyspné ved anstrengelse',
            'Ortopné',
            'Perifere ødemer i anklene',
            'Lungestuvning'
        ],
        correctAnswer: 2,
        explanation: 'Perifere ødemer er typisk for høyresidig hjertesvikt. Venstresidig hjertesvikt gir primært lungesymptomer som dyspné, ortopné og lungestuvning.'
    },
    {
        id: 'hjerte-2',
        category: 'hjertesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved mistanke om akutt hjerteinfarkt skal pasienten få acetylsalisylsyre (ASA) så raskt som mulig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'ASA hemmer blodplateaggregering og reduserer mortalitet ved akutt hjerteinfarkt. 300 mg tygges og svelges så raskt som mulig ved mistanke om ACS.'
    },
    {
        id: 'hjerte-3',
        category: 'hjertesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 72 år gammel mann med atrieflimmer bruker warfarin. Han kommer inn med INR på 8,5 uten blødning. Hva er riktig tiltak?',
        options: [
            'Fortsette som før, INR er ikke farlig høy',
            'Seponere warfarin midlertidig, gi vitamin K per os',
            'Akutt gi plasma og protrombinkompleks',
            'Doble dosen warfarin for å stabilisere'
        ],
        correctAnswer: 1,
        explanation: 'INR >5 uten blødning behandles med seponering av warfarin og lavdose vitamin K (1-2,5 mg per os). Protrombinkompleks reserveres for alvorlig blødning.'
    }
);
