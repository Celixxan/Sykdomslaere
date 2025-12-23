/**
 * Spørsmål: Endokrinologi
 * Hyper/hypotyreose, diabetes
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'endo-1',
        category: 'endokrinologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er typiske for hypotyreose?',
        options: [
            'Vekttap, hjertebank og varmeintoleranse',
            'Tretthet, vektøkning og kuldefølsomhet',
            'Økt appetitt, diaré og tremor',
            'Polyuri, polydipsi og vekttap'
        ],
        correctAnswer: 1,
        explanation: 'Hypotyreose gir lavt stoffskifte: tretthet, vektøkning, kuldefølsomhet, obstipasjon, tørr hud og bradykardi. Motsatt av hypertyreose.'
    },
    {
        id: 'endo-2',
        category: 'endokrinologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved mistanke om hypoglykemi skal man alltid vente på blodprøvesvar før behandling.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Hypoglykemi er potensielt livstruende og må behandles umiddelbart med glukose. Blodprøve kan tas, men behandling skal ikke forsinkes. "Gi sukker først, spør etterpå."'
    },
    {
        id: 'endo-3',
        category: 'endokrinologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En 62 år gammel diabetiker kommer inn med blodsukker 28 mmol/L, uttørring, dyp respirasjon og fruktlukt fra pusten. Hva indikerer dette?',
        options: [
            'Vanlig hyperglykemi – juster insulindose',
            'Diabetisk ketoacidose (DKA) – akutt tilstand',
            'Hypoglykemi – gi sukker',
            'Urinveisinfeksjon med lett forhøyet blodsukker'
        ],
        correctAnswer: 1,
        explanation: 'Høyt blodsukker, dehydrering, Kussmaul-respirasjon (dyp, rask) og ketoselukt indikerer DKA. Dette er en akutt, livstruende tilstand som krever iv væske, insulin og overvåkning.'
    }
);
