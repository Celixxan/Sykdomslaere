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
    },
    {
        id: 'oye-6',
        category: 'oyesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er uveitt?',
        options: [
            'Infeksjon i øyelokket',
            'Inflammasjon i øyets midtre lag (uvea)',
            'Katarakt (grå stær)',
            'Netthinneløsning'
        ],
        correctAnswer: 1,
        explanation: 'Uveitt er inflammasjon i uvea (iris, corpus ciliare, choroidea). Gir rødt øye, smerte, fotofobi og evt. synspåvirkning. Kan være assosiert med systemsykdommer.'
    },
    {
        id: 'oye-7',
        category: 'oyesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Glaukom (grønn stær) gir alltid symptomer tidlig i forløpet.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Kronisk åpenvinklet glaukom er ofte asymptomatisk til sent i forløpet. Synsfeltutfall oppdages først når betydelig skade har skjedd. Screening er viktig hos risikogrupper.'
    },
    {
        id: 'oye-8',
        category: 'oyesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient ser plutselig lysglimt og flytende prikker ("fluer"), deretter et "gardin" som dekker deler av synsfeltet. Diagnose?',
        options: [
            'Migrene med aura',
            'Netthinneløsning (retinal detachment)',
            'Konjunktivitt',
            'Tørre øyne'
        ],
        correctAnswer: 1,
        explanation: 'Lysglimt + flytere + synsfeltdefekt ("gardin") = netthinneløsning. Øyeblikkelig hjelp-tilstand som krever rask kirurgisk behandling for å bevare synet.'
    },
    {
        id: 'oye-9',
        category: 'oyesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er katarakt (grå stær)?',
        options: [
            'Forhøyet øyetrykk',
            'Uklarhet i øyets linse',
            'Betennelse i øyet',
            'Skade på synsnerven'
        ],
        correctAnswer: 1,
        explanation: 'Katarakt er uklarhet i øyets linse som gir gradvis synstap. Vanlig ved økende alder. Behandles kirurgisk med linsebytte når det påvirker funksjon.'
    },
    {
        id: 'oye-10',
        category: 'oyesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Diabetisk retinopati er en vanlig årsak til blindhet og krever regelmessig øyescreening.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Diabetisk retinopati skader netthinnen og er en ledende årsak til blindhet. Regelmessig øyebunnsundersøkelse hos diabetikere oppdager forandringer tidlig, før synstap.'
    },
    {
        id: 'oye-11',
        category: 'oyesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'Et barn får kjemikalie (lut) i øyet. Hva er første og viktigste tiltak?',
        options: [
            'Dekke øyet og frakte til sykehus',
            'Umiddelbar og rikelig skylling med vann i 20-30 minutter',
            'Gi øyedråper med antibiotika',
            'Vente til sykehus for skylling'
        ],
        correctAnswer: 1,
        explanation: 'Ved kjemisk øyeskade er umiddelbar skylling med vann livreddende for synet. Skyll i 20-30 minutter FØRST, deretter til øyelege. Ikke vent!'
    },
    {
        id: 'oye-12',
        category: 'oyesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er aldersrelatert makuladegenerasjon (AMD)?',
        options: [
            'Infeksjon i makula',
            'Degenerasjon av makula som gir sentralt synstap',
            'Grå stær',
            'Glaukom'
        ],
        correctAnswer: 1,
        explanation: 'AMD skader makula (skarpsynet) og gir sentralt synstap. Tørr form er vanligst. Våt form kan behandles med anti-VEGF injeksjoner. Vanligste årsak til synstap hos eldre.'
    }
);
