/**
 * Spørsmål: Pediatri
 * Akutt sykt barn, ABCDE
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'ped-1',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er normal respirasjonsfrekvens for et barn på 2 år?',
        options: [
            '12-16/min',
            '20-30/min',
            '40-60/min',
            '8-12/min'
        ],
        correctAnswer: 1,
        explanation: 'Barn har høyere respirasjonsfrekvens enn voksne. For 2-åringer er 20-30/min normalt. Frekvensen synker med økende alder.'
    },
    {
        id: 'ped-2',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Barn kompenserer lenge for sirkulatorisk sjokk, men kan dekompensere plutselig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Barn har effektive kompensasjonsmekanismer (takykardi, vasokonstriksjon), men når disse svikter, kan dekompensering skje raskt. Tidlig intervensjon er kritisk.'
    },
    {
        id: 'ped-3',
        category: 'pediatri',
        difficulty: 'exam',
        type: 'case',
        question: 'Et 3 år gammelt barn har plutselig feber 40°C, sikling, stridor og sitter foroverbøyd. Hva mistenker du?',
        options: [
            'Falsk krupp',
            'Akutt epiglotitt',
            'Vanlig forkjølelse',
            'Astmaanfall'
        ],
        correctAnswer: 1,
        explanation: 'Høy feber, sikling (svelgvansker), stridor og "tripod-stilling" er klassisk for epiglotitt. Dette er en livstruende tilstand som krever umiddelbar behandling. Ikke undersøk svelget!'
    }
);
