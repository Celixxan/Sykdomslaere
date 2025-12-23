/**
 * Spørsmål: Akuttmedisin
 * ABCDE, sepsis, anafylaksi, brannskade, smerter
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'akutt-1',
        category: 'akuttmedisin',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er førstelinjebehandling ved anafylaktisk sjokk?',
        options: [
            'Antihistaminer intravenøst',
            'Kortikosteroider per os',
            'Adrenalin intramuskulært',
            'Salbutamol på forstøver'
        ],
        correctAnswer: 2,
        explanation: 'Adrenalin IM (0,5 mg voksen) er førstelinjebehandling ved anafylaksi. Det virker raskt på bronkospasme, vasodilatjon og ødem. Gis i låret.'
    },
    {
        id: 'akutt-2',
        category: 'akuttmedisin',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'ABCDE-prinsippet betyr at luftveier (A) alltid vurderes før sirkulasjon (C).',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'ABCDE er en systematisk tilnærming: Airway, Breathing, Circulation, Disability, Exposure. Man behandler livstruende problemer i rekkefølge, starter med luftveier.'
    },
    {
        id: 'akutt-3',
        category: 'akuttmedisin',
        difficulty: 'exam',
        type: 'case',
        question: 'En 30 år gammel mann kommer med brannskade etter husbrann. Han har sot rundt nese/munn, heshet og stridor. Hva er første prioritet?',
        options: [
            'Beregne brannskadeareal',
            'Sikre luftveier – mistenkt inhalasjonsskade',
            'Starte væskebehandling',
            'Gi smertestillende'
        ],
        correctAnswer: 1,
        explanation: 'Sot i ansikt, heshet og stridor indikerer inhalasjonsskade med risiko for luftveisødem. Luftveissikring er førsteprioritet da ødem kan utvikle seg raskt og obstruere luftveiene.'
    }
);
