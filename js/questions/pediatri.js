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
    },
    {
        id: 'ped-4',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er typisk for falsk krupp (laryngitt)?',
        options: [
            'Høy feber og sikling',
            'Bjeffende hoste, heshet og inspiratorisk stridor',
            'Produktiv hoste med grønt ekspektorat',
            'Utslett og leddsmerter'
        ],
        correctAnswer: 1,
        explanation: 'Falsk krupp gir typisk bjeffende hoste (seal bark), heshet og inspiratorisk stridor. Ofte verre om natten. Mild feber. Behandles med fuktig luft og ev. steroider.'
    },
    {
        id: 'ped-5',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Kapillær refill >2 sekunder hos barn kan indikere dårlig perifer sirkulasjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Kapillær refill-tid >2 sekunder indikerer nedsatt perifer sirkulasjon og kan være et tidlig tegn på sirkulatorisk svikt hos barn. Normal kapillær refill er <2 sekunder.'
    }
);
