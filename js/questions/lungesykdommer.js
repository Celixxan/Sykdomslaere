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
    },
    {
        id: 'lunge-7',
        category: 'lungesykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hvilken inhalator brukes som anfallsmedisin ved astma?',
        options: [
            'Inhalasjonssteroid (f.eks. budesonid)',
            'Korttidsvirkende beta-2-agonist (f.eks. salbutamol)',
            'Langtidsvirkende antikolinergika',
            'Antibiotika på inhalator'
        ],
        correctAnswer: 1,
        explanation: 'SABA (korttidsvirkende beta-2-agonist) som salbutamol (Ventoline) er anfallsmedisin. Gir rask bronkodilaterende effekt. Inhalasjonssteroid er vedlikeholdsbehandling.'
    },
    {
        id: 'lunge-8',
        category: 'lungesykdommer',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Spirometri som viser FEV1/FVC <0,7 etter bronkodilatator er diagnostisk for KOLS.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'FEV1/FVC-ratio <0,7 (70%) etter bronkodilatator bekrefter obstruktiv lungesykdom. Ved KOLS er obstruksjonen ikke fullt reversibel, i motsetning til astma.'
    },
    {
        id: 'lunge-9',
        category: 'lungesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En ung mann får plutselig brystsmerter og dyspné. Han er høy og slank. Røntgen viser luft i pleurahulen. Diagnose?',
        options: [
            'Pneumoni',
            'Spontan pneumothorax',
            'Lungeemboli',
            'Pleuravæske'
        ],
        correctAnswer: 1,
        explanation: 'Spontan pneumothorax rammer typisk høye, slanke unge menn. Luft i pleurahulen kollapser lungen. Behandles med observasjon, nåleaspirasjon eller thoraxdren avhengig av størrelse.'
    },
    {
        id: 'lunge-10',
        category: 'lungesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typiske symptomer ved lungeemboli?',
        options: [
            'Kun hoste',
            'Plutselig dyspné, brystsmerter og takykardi',
            'Langsom utvikling av hevelse i bena',
            'Feber over flere uker'
        ],
        correctAnswer: 1,
        explanation: 'Lungeemboli gir ofte plutselig dyspné, pleuritiske brystsmerter, takykardi og evt. hemoptyse. Kan være livstruende. D-dimer og CT-angiografi brukes i diagnostikk.'
    },
    {
        id: 'lunge-11',
        category: 'lungesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Røykeslutt er det viktigste enkelttiltaket for å bremse KOLS-progresjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Røykeslutt er eneste tiltak som er bevist å bremse lungefunksjonstapet ved KOLS. Inhalatorer lindrer symptomer, men påvirker ikke sykdomsprogresjonen like mye.'
    },
    {
        id: 'lunge-12',
        category: 'lungesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med KOLS har feber, grønt ekspektorat og forverret dyspné. CRP er forhøyet. Hva er behandlingen?',
        options: [
            'Kun øke inhalatordosen',
            'Antibiotika, prednisolon og bronkodilatator',
            'Avvente og se an',
            'Kun paracetamol'
        ],
        correctAnswer: 1,
        explanation: 'Infeksiøs KOLS-forverring behandles med antibiotika (ofte amoksicillin eller doksysyklin), peroral prednisolon-kur og intensivert bronkodilaterende behandling.'
    }
);
