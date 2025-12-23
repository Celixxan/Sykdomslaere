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
    }
);
