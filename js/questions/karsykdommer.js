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
    }
);
