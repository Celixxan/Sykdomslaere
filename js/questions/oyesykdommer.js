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
    },
    {
        id: 'oye-4',
        category: 'oyesykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er det viktigste du IKKE skal gjøre ved mistanke om gjennomborende øyeskade?',
        options: [
            'Dekke øyet med øyeskjold',
            'Ringe 113',
            'Trykke på øyet eller forsøke å fjerne fremmedlegeme',
            'Holde pasienten i ro'
        ],
        correctAnswer: 2,
        explanation: 'Ved penetrerende øyeskade skal man ALDRI trykke på øyet eller forsøke å fjerne fremmedlegeme. Dekk med øyeskjold (ikke bandasje som trykker), og frakt til øyelege umiddelbart.'
    },
    {
        id: 'oye-5',
        category: 'oyesykdommer',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Plutselig smertefritt synstap på ett øye kan skyldes sentral retinal arterieokklusjon og er en øyeblikkelig hjelp-situasjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Sentral retinal arterieokklusjon gir plutselig, smertefritt synstap. Det er en vaskulær akuttsituasjon med svært kort tidsvindu for behandling (minutter til timer).'
    }
);
