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
    },
    {
        id: 'lunge-4',
        category: 'lungesykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er vanligste årsak til samfunnservervet pneumoni?',
        options: [
            'Staphylococcus aureus',
            'Streptococcus pneumoniae (pneumokokker)',
            'Pseudomonas aeruginosa',
            'Klebsiella pneumoniae'
        ],
        correctAnswer: 1,
        explanation: 'Pneumokokker er vanligste årsak til samfunnservervet pneumoni. Behandles vanligvis med penicillin som førstevalg.'
    },
    {
        id: 'lunge-5',
        category: 'lungesykdommer',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'ARDS (acute respiratory distress syndrome) behandles primært med høye doser kortikosteroider.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'ARDS behandles primært med lungeskånsom ventilasjon (lave tidalvolum), bukleie og behandling av underliggende årsak. Steroider har begrenset dokumentasjon.'
    },
    {
        id: 'lunge-6',
        category: 'lungesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En KOLS-pasient har pO2 6,8 kPa og pCO2 8,5 kPa på blodgass. Hva viser dette?',
        options: [
            'Normal blodgass for KOLS',
            'Kun hypoksemi',
            'Respirasjonssvikt type 2 (hypoksemi + hyperkapni)',
            'Kun metabolsk acidose'
        ],
        correctAnswer: 2,
        explanation: 'Lav pO2 (<8 kPa) + høy pCO2 (>6 kPa) = type 2 respirasjonssvikt. Pasienten kan ikke ventilere ut nok CO2. Krever ofte NIV (non-invasiv ventilasjon) ved KOLS-forverring.'
    }
);
