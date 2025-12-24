/**
 * Spørsmål: Karsykdommer
 * Hypertensjon, aterosklerose, varicer
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'kar-1',
        category: 'karsykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva regnes som grenseverdi for hypertensjon hos voksne?',
        options: [
            '120/80 mmHg',
            '130/85 mmHg',
            '140/90 mmHg',
            '150/95 mmHg'
        ],
        correctAnswer: 2,
        explanation: 'Hypertensjon defineres som blodtrykk ≥140/90 mmHg ved gjentatte målinger. Dette er grenseverdien som brukes i norske retningslinjer.'
    },
    {
        id: 'kar-2',
        category: 'karsykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Aterosklerose er en reversibel tilstand som alltid kan kureres med medisiner.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Aterosklerose er en kronisk, progressiv tilstand. Livsstilsendringer og medisiner kan bremse utviklingen, men etablerte plakk kan ikke fullstendig reverseres.'
    },
    {
        id: 'kar-3',
        category: 'karsykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 55 år gammel kvinne med kjent hypertensjon klager over hodepine, synsforstyrrelser og blodtrykk målt til 210/120 mmHg. Hva er riktig tiltak?',
        options: [
            'Gi paracetamol og be henne hvile',
            'Akutt innleggelse – mistenkt hypertensiv krise',
            'Øke dose av eksisterende blodtrykksmedisiner',
            'Bestille time til fastlege neste uke'
        ],
        correctAnswer: 1,
        explanation: 'Blodtrykk >180/120 mmHg med symptomer som hodepine og synsforstyrrelser indikerer hypertensiv krise med organpåvirkning. Dette krever akutt innleggelse og behandling.'
    },
    {
        id: 'kar-4',
        category: 'karsykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hvilken livsstilsfaktor er viktigst å adressere ved hypertensjon?',
        options: [
            'Redusere koffeininntak',
            'Redusere saltinntak og øke fysisk aktivitet',
            'Spise mer kjøtt',
            'Sove mindre'
        ],
        correctAnswer: 1,
        explanation: 'Saltreduksjon, vektreduksjon, økt fysisk aktivitet og redusert alkoholinntak er de viktigste livsstilstiltakene ved hypertensjon.'
    },
    {
        id: 'kar-5',
        category: 'karsykdommer',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Varicer (åreknuter) oppstår kun i bena.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Varicer kan oppstå flere steder, inkludert øsofagus (øsofagusvaricer ved portal hypertensjon), rectum (hemoroider) og scrotum (varicocele).'
    },
    {
        id: 'kar-6',
        category: 'karsykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er den vanligste årsaken til perifer arteriell sykdom (PAS)?',
        options: [
            'Medfødt hjertefeil',
            'Aterosklerose',
            'Venøs insuffisiens',
            'Lymfødem'
        ],
        correctAnswer: 1,
        explanation: 'Aterosklerose er den dominerende årsaken til PAS. Risikofaktorer inkluderer røyking, diabetes, hypertensjon og hyperlipidemi.'
    },
    {
        id: 'kar-7',
        category: 'karsykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Claudicatio intermittens er smerter i bena som oppstår ved hvile.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Claudicatio intermittens er smerter som oppstår ved gange og forsvinner ved hvile. Hvilesmerter indikerer kritisk iskemi og er et alvorligere tegn.'
    },
    {
        id: 'kar-8',
        category: 'karsykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 70 år gammel mann med diabetes har sår på stortåen som ikke gror, kald fot og svak puls. Ankel-arm-indeks er 0,5. Hva er diagnosen?',
        options: [
            'Venøs insuffisiens',
            'Diabetisk nevropati alene',
            'Kritisk ekstremitetsiskemi',
            'Normalt for alderen'
        ],
        correctAnswer: 2,
        explanation: 'AAI <0,5 med hvilesmerter eller sår indikerer kritisk iskemi. Krever rask vaskulær vurdering for revaskularisering for å unngå amputasjon.'
    },
    {
        id: 'kar-9',
        category: 'karsykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken undersøkelse er gullstandard for å diagnostisere dyp venetrombose (DVT)?',
        options: [
            'D-dimer blodprøve',
            'Ultralyd doppler av bena',
            'Røntgen av bena',
            'MR av hodet'
        ],
        correctAnswer: 1,
        explanation: 'Ultralyd doppler er førstevalg for DVT-diagnostikk. D-dimer brukes for å utelukke DVT ved lav klinisk mistanke, men er ikke spesifikk.'
    },
    {
        id: 'kar-10',
        category: 'karsykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved mistenkt DVT skal pasienten holde seg i ro og unngå mobilisering.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Tidligere anbefaling om sengeleie er forlatt. Tidlig mobilisering med antikoagulasjon er trygt og anbefales ved DVT.'
    },
    {
        id: 'kar-11',
        category: 'karsykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient utvikler plutselig ensidig legghevelse, smerter og rødhet etter langdistanseflyvning. Wells-score er høy. Hva gjør du?',
        options: [
            'Avventer og ser an',
            'Starter antikoagulasjon og bestiller ultralyd',
            'Gir kun smertestillende',
            'Anbefaler støttestrømper og sender hjem'
        ],
        correctAnswer: 1,
        explanation: 'Ved høy klinisk mistanke om DVT startes antikoagulasjon (DOAK/lavmolekylært heparin) før bildediagnostikk for å forhindre lungeemboli.'
    },
    {
        id: 'kar-12',
        category: 'karsykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er hovedsymptomet ved akutt aortadisseksjon?',
        options: [
            'Gradvis økende brystsmerter over dager',
            'Plutselig, rivende smerte i bryst/rygg',
            'Smerter kun ved bevegelse',
            'Smerter som bedres ved hvile'
        ],
        correctAnswer: 1,
        explanation: 'Aortadisseksjon gir typisk plutselig, intens "rivende" smerte i bryst eller rygg. Blodtrykksforskjell mellom armene kan forekomme. Akutt livstruende tilstand.'
    }
);
