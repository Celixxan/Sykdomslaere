/**
 * Spørsmål: Øyesykdommer
 * Rødt øye
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'oye-1',
        category: 'oyesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer ved rødt øye krever akutt øyelegevurdering?',
        options: [
            'Kløe og lett rødhet',
            'Synstap, sterke smerter eller lysfølsomhet',
            'Lett irritasjon om morgenen',
            'Tørre øyne etter PC-arbeid'
        ],
        correctAnswer: 1,
        explanation: 'Synstap, sterke smerter, fotofobi eller synlig hypopyon er alarmsymptomer som kan indikere akutt glaukom, uveitt eller keratitt. Krever akutt vurdering.'
    },
    {
        id: 'oye-2',
        category: 'oyesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Konjunktivitt (øyekatarr) gir vanligvis ikke smerter, bare irritasjon og sekresjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Konjunktivitt gir rødhet, kløe, irritasjon og sekresjon, men sjelden sterke smerter. Smerter indikerer ofte mer alvorlige tilstander som keratitt eller uveitt.'
    },
    {
        id: 'oye-3',
        category: 'oyesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 65 år gammel mann kommer med plutselig rødt øye, sterke smerter, kvalme og ser regnbuering rundt lys. Pupillen er vid og reagerer dårlig. Hva mistenker du?',
        options: [
            'Allergisk konjunktivitt',
            'Bakteriell konjunktivitt',
            'Akutt vinkelblokk-glaukom',
            'Subkonjunktival blødning'
        ],
        correctAnswer: 2,
        explanation: 'Akutt rødt øye med sterke smerter, kvalme, haloer og vid, lite reaktiv pupille er klassisk for akutt vinkelblokk-glaukom. Dette er en øyeblikkelig hjelp-tilstand for å bevare synet.'
    }
);
