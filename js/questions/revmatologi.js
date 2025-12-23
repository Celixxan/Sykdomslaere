/**
 * Spørsmål: Revmatologi
 * Artrose, artritt, autoimmune sykdommer
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'revma-1',
        category: 'revmatologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva skiller revmatoid artritt fra artrose?',
        options: [
            'Artrose gir morgenstivhet >1 time',
            'Revmatoid artritt er ikke-inflammatorisk',
            'Revmatoid artritt gir symmetrisk leddbetennelse og morgenstivhet >1 time',
            'Artrose affiserer alltid små ledd først'
        ],
        correctAnswer: 2,
        explanation: 'Revmatoid artritt er autoimmun med symmetrisk polyartritt, morgenstivhet >1 time og systemiske symptomer. Artrose er degenerativ med mekanisk smerte og kort morgenstivhet.'
    },
    {
        id: 'revma-2',
        category: 'revmatologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Artrose rammer kun eldre mennesker.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Selv om artrose er vanligere med økende alder, kan yngre også rammes, spesielt etter skader, ved overvekt eller ved medfødt leddmisdannelse.'
    },
    {
        id: 'revma-3',
        category: 'revmatologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En 35 år gammel kvinne har morgenstivhet i 2 timer, symmetrisk hevelse i MCP- og PIP-ledd, og er sliten. SR og CRP er forhøyet. Hva mistenker du?',
        options: [
            'Artrose i hendene',
            'Revmatoid artritt',
            'Fibromyalgi',
            'Karpaltunnelsyndrom'
        ],
        correctAnswer: 1,
        explanation: 'Symmetrisk polyartritt i små ledd, langvarig morgenstivhet og forhøyede inflammasjonsmarkører hos ung kvinne er klassisk for revmatoid artritt. Krever revmatologisk vurdering.'
    }
);
