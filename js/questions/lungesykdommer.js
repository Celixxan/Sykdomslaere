/**
 * Spørsmål: Lungesykdommer
 * KOLS, astma, ARDS, pneumoni, covid-19
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'lunge-1',
        category: 'lungesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva skiller KOLS fra astma?',
        options: [
            'KOLS gir reversibel luftveisobstruksjon',
            'Astma er alltid forårsaket av røyking',
            'KOLS har hovedsakelig irreversibel obstruksjon',
            'Astma gir aldri nattlige symptomer'
        ],
        correctAnswer: 2,
        explanation: 'KOLS kjennetegnes av kronisk, hovedsakelig irreversibel luftveisobstruksjon, mens astma typisk har reversibel obstruksjon. KOLS skyldes oftest røyking.'
    },
    {
        id: 'lunge-2',
        category: 'lungesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved KOLS-forverring skal man alltid gi høykonsentrert oksygen (100%) for å sikre god oksygenering.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'KOLS-pasienter kan ha hypoksisk respirasjonsdrive. For høy oksygentilførsel kan hemme respirasjonssenteret. Mål er SpO2 88-92% ved KOLS-forverring.'
    },
    {
        id: 'lunge-3',
        category: 'lungesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 45 år gammel kvinne med astma får akutt dyspné. Hun klarer ikke fullføre setninger, bruker aksessorisk respirasjonsmuskulatur og har SpO2 på 88%. Hva indikerer dette?',
        options: [
            'Mild astmaforverring – gi inhalasjonssteroid',
            'Moderat forverring – observer hjemme',
            'Alvorlig astmaanfall – krever akutt behandling',
            'Normal astmavariasjon – ingen tiltak nødvendig'
        ],
        correctAnswer: 2,
        explanation: 'Kan ikke fullføre setninger, bruk av aksessorisk muskulatur og SpO2 <92% er tegn på alvorlig astmaanfall. Krever akutt behandling med oksygen, beta-2-agonist og steroider.'
    }
);
