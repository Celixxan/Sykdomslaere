/**
 * Spørsmål: Hematologi
 * DVT, lungeemboli, anemi
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'hema-1',
        category: 'hematologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er Wells-skår brukt til?',
        options: [
            'Vurdering av blødningsrisiko',
            'Klinisk sannsynlighet for DVT eller lungeemboli',
            'Gradering av anemi',
            'Vurdering av trombocyttfunksjon'
        ],
        correctAnswer: 1,
        explanation: 'Wells-skår er et klinisk verktøy for å vurdere pre-test sannsynlighet for dyp venetrombose (DVT) eller lungeemboli (LE), og styrer videre utredning.'
    },
    {
        id: 'hema-2',
        category: 'hematologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Jernmangelanemi gir typisk mikrocytære, hypokrome erytrocytter.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Jernmangel fører til redusert hemoglobinproduksjon, som gir små (mikrocytære) og bleke (hypokrome) røde blodceller. Lav MCV og MCH er typisk.'
    },
    {
        id: 'hema-3',
        category: 'hematologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En 45 år gammel kvinne etter langdistanseflygning klager over plutselig dyspné, brystsmerter og takykardi. SpO2 er 91%. Hva mistenker du?',
        options: [
            'Angstanfall etter flyreisen',
            'Akutt lungeemboli',
            'Jetlag med tretthet',
            'Vanlig forkjølelse'
        ],
        correctAnswer: 1,
        explanation: 'Plutselig dyspné, brystsmerter og hypoksi etter langvarig immobilisering (flyreise) er klassisk presentasjon av lungeemboli. Krever akutt utredning med D-dimer og CT-angio.'
    },
    {
        id: 'hema-4',
        category: 'hematologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er typiske symptomer på anemi?',
        options: [
            'Økt energi og rødme',
            'Tretthet, blekhet og dyspné ved anstrengelse',
            'Vektøkning og hevelser',
            'Feber og frysninger'
        ],
        correctAnswer: 1,
        explanation: 'Anemi gir redusert oksygentransport som fører til tretthet, blekhet, dyspné, hjertebank og svimmelhet, spesielt ved anstrengelse.'
    },
    {
        id: 'hema-5',
        category: 'hematologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Ved dyp venetrombose (DVT) i leggen er det alltid synlig hevelse og rødhet.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'DVT kan være asymptomatisk eller ha subtile symptomer. Mange tilfeller oppdages ikke før lungeemboli. Klinisk undersøkelse alene er utilstrekkelig for diagnose.'
    },
    {
        id: 'hema-6',
        category: 'hematologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken type anemi gir makrocytære erytrocytter (høy MCV)?',
        options: [
            'Jernmangelanemi',
            'B12- eller folatmangel',
            'Talassemi',
            'Blødningsanemi'
        ],
        correctAnswer: 1,
        explanation: 'Vitamin B12- og folatmangel forstyrrer DNA-syntese og gir store, umodne røde blodceller (makrocytose). MCV >100 fL er typisk. Jernmangel gir mikrocytose.'
    },
    {
        id: 'hema-7',
        category: 'hematologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'D-dimer er en spesifikk test for DVT og lungeemboli.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'D-dimer er sensitiv, men ikke spesifikk. Den stiger ved mange tilstander (infeksjon, kreft, graviditet). Negativ D-dimer utelukker DVT/LE ved lav klinisk mistanke.'
    },
    {
        id: 'hema-8',
        category: 'hematologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient på warfarin har INR 1,5 og skal opereres. Hva gjør du?',
        options: [
            'Operere umiddelbart',
            'Gi vitamin K og vente til INR normaliseres',
            'Seponere warfarin, eventuelt bruke lavmolekylært heparin som bro',
            'Doble warfarindosen'
        ],
        correctAnswer: 2,
        explanation: 'Ved planlagt kirurgi seponeres warfarin 5 dager før. Ved høy tromboserisiko gis LMWH som broberedning. Vitamin K gis kun ved akutt behov eller for høy INR.'
    },
    {
        id: 'hema-9',
        category: 'hematologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er trombocytopeni?',
        options: [
            'Forhøyet antall blodplater',
            'Lavt antall blodplater (<150 x 10^9/L)',
            'Høyt hemoglobin',
            'Lavt antall hvite blodceller'
        ],
        correctAnswer: 1,
        explanation: 'Trombocytopeni er lavt platetall (<150). Kan gi blødningstendens. Årsaker inkluderer benmargssykdom, medikamenter, ITP, DIC og sepsis.'
    },
    {
        id: 'hema-10',
        category: 'hematologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'DOAK (direktevirkende orale antikoagulantia) krever regelmessig INR-kontroll.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'DOAK (rivaroksaban, apiksaban, dabigatran) har forutsigbar farmakokinetikk og krever ikke rutinemessig INR-kontroll, i motsetning til warfarin.'
    },
    {
        id: 'hema-11',
        category: 'hematologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med atrieflimmer og CHA2DS2-VASc score på 4 bruker ikke antikoagulasjon. Hva er risikoen?',
        options: [
            'Ingen risiko',
            'Betydelig økt risiko for tromboembolisk hjerneslag',
            'Kun risiko for blødning',
            'Risiko for hjerteinfarkt'
        ],
        correctAnswer: 1,
        explanation: 'CHA2DS2-VASc ≥2 hos menn eller ≥3 hos kvinner indikerer høy slagrisiko. Antikoagulasjon anbefales sterkt for å forebygge tromboembolisk hjerneslag.'
    },
    {
        id: 'hema-12',
        category: 'hematologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typisk behandling ved akutt massiv lungeemboli med sirkulatorisk påvirkning?',
        options: [
            'Kun observasjon',
            'Trombolyse eller embolektomi',
            'Kun antibiotika',
            'Utsette behandling til diagnosesikkerhet'
        ],
        correctAnswer: 1,
        explanation: 'Massiv lungeemboli med hemodynamisk instabilitet (hypotensjon, sjokk) er livstruende. Systemisk trombolyse eller kirurgisk/kateterbasert embolektomi kan være livreddende.'
    }
);
