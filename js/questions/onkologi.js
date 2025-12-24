/**
 * Spørsmål: Onkologi
 * Grunnleggende kreftlære
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'onko-1',
        category: 'onkologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er nøytropeni, og hvorfor er det farlig ved kjemoterapi?',
        options: [
            'Lavt antall røde blodceller – gir blødningsfare',
            'Lavt antall nøytrofile granulocytter – gir infeksjonsfare',
            'Lavt antall blodplater – gir anemi',
            'Høyt antall hvite blodceller – gir trombose'
        ],
        correctAnswer: 1,
        explanation: 'Nøytropeni er lavt antall nøytrofile granulocytter. Ved kjemoterapi gir dette økt infeksjonsrisiko. Nøytropeni med feber er en akutt situasjon som krever rask antibiotikabehandling.'
    },
    {
        id: 'onko-2',
        category: 'onkologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Palliativ behandling betyr at man har gitt opp pasienten.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Palliativ behandling handler om best mulig livskvalitet når kurativ behandling ikke er mulig. Det inkluderer aktiv symptomlindring, støtte og omsorg – ikke å "gi opp".'
    },
    {
        id: 'onko-3',
        category: 'onkologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient under kjemoterapi får feber 38,5°C og frysninger. Blodprøver viser nøytrofile 0,3. Hva er riktig tiltak?',
        options: [
            'Gi paracetamol og observer hjemme',
            'Bestille blodprøver til neste dag',
            'Akutt innleggelse og bredspektret antibiotika iv',
            'Anbefale rikelig drikke og hvile'
        ],
        correctAnswer: 2,
        explanation: 'Febril nøytropeni (feber + nøytrofile <0,5) er en akutt, potensielt livstruende tilstand. Krever øyeblikkelig innleggelse og bredspektret antibiotika innen 1 time.'
    },
    {
        id: 'onko-4',
        category: 'onkologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er TNM-systemet?',
        options: [
            'En type cellegift',
            'Et klassifikasjonssystem for kreftstadium',
            'En blodprøve for kreftmarkører',
            'En type strålebehandling'
        ],
        correctAnswer: 1,
        explanation: 'TNM-systemet beskriver kreftstadium: T (tumorstørrelse), N (lymfeknutespredning), M (fjernmetastaser). Viktig for behandlingsvalg og prognose.'
    },
    {
        id: 'onko-5',
        category: 'onkologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Alle kreftpasienter med smerter bør få tilbud om adekvat smertelindring, inkludert opioider om nødvendig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'God smertelindring er en grunnleggende rettighet. WHOs smertetrapp brukes, og opioider skal ikke holdes tilbake av frykt for avhengighet hos kreftpasienter med smerter.'
    },
    {
        id: 'onko-6',
        category: 'onkologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er WHOs smertetrapp?',
        options: [
            'En treningsmetode',
            'Trinnvis tilnærming til smertebehandling: non-opioid → svak opioid → sterk opioid',
            'En type strålebehandling',
            'Kirurgisk inngrep for smerte'
        ],
        correctAnswer: 1,
        explanation: 'WHOs smertetrapp: Trinn 1 (paracetamol/NSAIDs), Trinn 2 (+ svake opioider), Trinn 3 (sterke opioider). Adjuvant behandling kan legges til på alle trinn.'
    },
    {
        id: 'onko-7',
        category: 'onkologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Strålebehandling kan brukes både kurativt og palliativt.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Strålebehandling kan gis kurativt (høye doser for å eliminere kreft) eller palliativt (lavere doser for symptomlindring som smerter fra skjelettmetastaser).'
    },
    {
        id: 'onko-8',
        category: 'onkologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En kreftpasient med ryggmetastaser utvikler plutselig gangvansker og urinretensjon. Hva mistenkes?',
        options: [
            'Vanlig svakhet',
            'Medullakompresjon – akutt nevrologisk tilstand',
            'Urinveisinfeksjon',
            'Bivirkninger av kjemoterapi'
        ],
        correctAnswer: 1,
        explanation: 'Medullakompresjon er en onkologisk akuttsituasjon. Ryggmetastaser kan komprimere ryggmargen og gi pareser, sensorisk utfall og blære/tarmforstyrrelser. Krever akutt MR og steroider.'
    },
    {
        id: 'onko-9',
        category: 'onkologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er immunterapi i kreftbehandling?',
        options: [
            'Behandling med antibiotika',
            'Behandling som stimulerer immunsystemet til å bekjempe kreften',
            'Kun vitamintilskudd',
            'Cellegift'
        ],
        correctAnswer: 1,
        explanation: 'Immunterapi (f.eks. checkpoint-hemmere) frigjør immunsystemets evne til å angripe kreftceller. Revolusjonerende behandling for flere krefttyper.'
    },
    {
        id: 'onko-10',
        category: 'onkologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Kvalme og oppkast er vanlige bivirkninger av kjemoterapi.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Kjemoterapi gir ofte kvalme og oppkast. Moderne antiemetika (5-HT3-antagonister, NK1-antagonister, steroider) reduserer dette betydelig. Forebyggende behandling er viktig.'
    },
    {
        id: 'onko-11',
        category: 'onkologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med lungekreft klager over hodepine, ansiktsødem og utspilte halsvener. Hva mistenkes?',
        options: [
            'Migrene',
            'Vena cava superior syndrom',
            'Allergisk reaksjon',
            'Infeksjon'
        ],
        correctAnswer: 1,
        explanation: 'Vena cava superior-syndrom skyldes obstruksjon av øvre hulvene, ofte fra lungekreft. Gir ansikts-/halsødem, hodepine og dyspné. Onkologisk akuttsituasjon.'
    },
    {
        id: 'onko-12',
        category: 'onkologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er viktig ved ernæring hos kreftpasienter?',
        options: [
            'Pasienten bør faste for å sulte kreften',
            'Adekvat ernæring er viktig for å tåle behandling og opprettholde livskvalitet',
            'Kun væske er nødvendig',
            'Karbohydrater bør unngås helt'
        ],
        correctAnswer: 1,
        explanation: 'God ernæring forbedrer toleranse for behandling, livskvalitet og prognose. Ernæringsscreening og -støtte er en viktig del av kreftomsorg.'
    }
);
