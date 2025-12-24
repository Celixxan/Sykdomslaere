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
    },
    {
        id: 'endo-4',
        category: 'endokrinologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er HbA1c et mål på?',
        options: [
            'Blodsukkeret akkurat nå',
            'Gjennomsnittlig blodsukker siste 2-3 måneder',
            'Insulinproduksjon',
            'Kolesterolnivå'
        ],
        correctAnswer: 1,
        explanation: 'HbA1c (glykosylert hemoglobin) reflekterer gjennomsnittlig blodsukker over erytrocyttenes levetid (ca. 2-3 måneder). Brukes til diabeteskontroll.'
    },
    {
        id: 'endo-5',
        category: 'endokrinologi',
        difficulty: 'medium',
        type: 'case',
        question: 'En pasient med hypertyreose utvikler plutselig høy feber, takykardi, agitasjon og bevissthetsendring. Hva mistenker du?',
        options: [
            'Vanlig influensa',
            'Tyreotoksisk krise (tyreoideastorm)',
            'Hypoglykemi',
            'Panikkangst'
        ],
        correctAnswer: 1,
        explanation: 'Tyreotoksisk krise er en livstruende forverring av hypertyreose med feber, ekstrem takykardi, agitasjon og bevissthetsendring. Krever akutt intensivbehandling.'
    },
    {
        id: 'endo-6',
        category: 'endokrinologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er forskjellen mellom diabetes type 1 og type 2?',
        options: [
            'Type 1 er mildere enn type 2',
            'Type 1 skyldes autoimmun ødeleggelse av betaceller, type 2 skyldes insulinresistens',
            'Type 2 rammer kun barn',
            'Det er ingen forskjell'
        ],
        correctAnswer: 1,
        explanation: 'Type 1 diabetes er autoimmun destruksjon av insulinproduserende celler (absolutt insulinmangel). Type 2 er insulinresistens + relativ insulinmangel, ofte livsstilsrelatert.'
    },
    {
        id: 'endo-7',
        category: 'endokrinologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Ved alvorlig hypoglykemi (<3 mmol/L) med bevisstløshet skal man gi sukker per os.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Ved bevisstløshet er det aspirasjonsfare. Gi glukagon im/sc eller iv glukose. Aldri gi noe per os til bevisstløs pasient.'
    },
    {
        id: 'endo-8',
        category: 'endokrinologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En diabetespasient på metformin skal ha CT med kontrast. eGFR er 35. Hva er viktig?',
        options: [
            'Fortsette metformin som vanlig',
            'Seponere metformin før og etter undersøkelsen pga. risiko for laktacidose',
            'Doble metformindosen',
            'Metformin har ingen interaksjon med kontrast'
        ],
        correctAnswer: 1,
        explanation: 'Metformin + jodholdig kontrast + nedsatt nyrefunksjon gir risiko for laktacidose. Metformin seponeres før og gjenopptas 48 timer etter hvis nyrefunksjonen er stabil.'
    },
    {
        id: 'endo-9',
        category: 'endokrinologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er TSH-nivået ved primær hypotyreose?',
        options: [
            'Lavt TSH',
            'Høyt TSH',
            'Normalt TSH',
            'TSH er ikke relevant'
        ],
        correctAnswer: 1,
        explanation: 'Ved primær hypotyreose er stoffskiftet lavt (lav T4/T3), og hypofysen kompenserer med økt TSH-produksjon. Høy TSH + lav fritt T4 = primær hypotyreose.'
    },
    {
        id: 'endo-10',
        category: 'endokrinologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Alle pasienter med diabetes type 2 trenger insulin.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Mange med type 2 kan behandles med livsstil og perorale antidiabetika. Insulin kan bli nødvendig over tid, men er ikke alltid påkrevet fra start.'
    },
    {
        id: 'endo-11',
        category: 'endokrinologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med Addisons sykdom kommer med hypotensjon, kvalme og forvirring etter gastroenteritt. Hva mistenker du?',
        options: [
            'Vanlig mageinfeksjon',
            'Addison-krise (akutt binyrebarksvikt)',
            'Hypoglykemi',
            'Dehydrering kun'
        ],
        correctAnswer: 1,
        explanation: 'Addison-krise utløses ofte av stress/sykdom. Mangel på kortisol og aldosteron gir hypotensjon, hyponatremi, hyperkalemi og sirkulatorisk kollaps. Krever akutt hydrokortison iv.'
    },
    {
        id: 'endo-12',
        category: 'endokrinologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er typiske for hypertyreose?',
        options: [
            'Vektøkning, tretthet, kuldefølsomhet',
            'Vekttap, hjertebank, varmeintoleranse, tremor',
            'Ingen symptomer',
            'Kun hoste og forkjølelse'
        ],
        correctAnswer: 1,
        explanation: 'Hypertyreose gir økt metabolisme: vekttap, takykardi, tremor, varmeintoleranse, nervøsitet, diaré. Graves sykdom gir i tillegg ofte eksoftalmus.'
    }
);
