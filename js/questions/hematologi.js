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
    }
);
