/**
 * Spørsmål: Geriatri
 * Demens, delir, ernæring
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'geriatri-1',
        category: 'geriatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva skiller delir fra demens?',
        options: [
            'Delir utvikler seg over måneder, demens akutt',
            'Delir er akutt og fluktuerende, demens er kronisk og gradvis',
            'Demens gir hallusinasjoner, delir gjør ikke det',
            'Det er ingen forskjell mellom tilstandene'
        ],
        correctAnswer: 1,
        explanation: 'Delir er en akutt, fluktuerende forvirringstilstand ofte utløst av somatisk sykdom. Demens utvikler seg gradvis over måneder/år. Delir kan oppstå hos pasienter med demens.'
    },
    {
        id: 'geriatri-2',
        category: 'geriatri',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Underernæring er vanlig hos eldre pasienter på sykehus.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Opptil 30-50% av eldre sykehuspasienter er underernært eller i risiko. Årsakene inkluderer redusert appetitt, svelgvansker, sykdom og polyfarmasi.'
    },
    {
        id: 'geriatri-3',
        category: 'geriatri',
        difficulty: 'exam',
        type: 'case',
        question: 'En 85 år gammel mann med kjent demens blir plutselig forvirret, agitert og ser ting som ikke er der. Han har også feber og dysuri. Hva er mest sannsynlig?',
        options: [
            'Forverring av demens',
            'Delir utløst av urinveisinfeksjon',
            'Psykiatrisk sykdom',
            'Normal aldring'
        ],
        correctAnswer: 1,
        explanation: 'Akutt forvirringsendring hos eldre med demens er delir inntil motsatt er bevist. UVI er en vanlig utløser. Behandling av underliggende årsak (infeksjon) er viktigst.'
    },
    {
        id: 'geriatri-4',
        category: 'geriatri',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er polyfarmasi?',
        options: [
            'Bruk av kun ett legemiddel',
            'Bruk av mange legemidler samtidig',
            'Allergi mot legemidler',
            'Mangel på legemidler'
        ],
        correctAnswer: 1,
        explanation: 'Polyfarmasi defineres ofte som bruk av 5+ legemidler. Vanlig hos eldre og øker risiko for bivirkninger, interaksjoner og dårlig compliance. Regelmessig legemiddelgjennomgang er viktig.'
    },
    {
        id: 'geriatri-5',
        category: 'geriatri',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Fall hos eldre er alltid forårsaket av klossete oppførsel og kan ikke forebygges.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Fall hos eldre har ofte flere årsaker: legemidler, synssvekkelse, muskelsvakhet, delirium, miljøfaktorer. Systematisk fallforebygging kan redusere fallrisiko betydelig.'
    }
);
