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
    }
);
