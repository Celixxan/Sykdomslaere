/**
 * Spørsmål: Bevegelsesapparatet
 * Brudd, hofte, ribbein, håndledd
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'bevegelse-1',
        category: 'bevegelsesapparatet',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typisk feilstilling ved hoftebrudd (collum femoris)?',
        options: [
            'Benet er forlenget og innadrotert',
            'Benet er forkortet og utadrotert',
            'Benet er i normalstilling',
            'Benet er flektert i hoften'
        ],
        correctAnswer: 1,
        explanation: 'Ved lårhalsbrudd ligger benet typisk forkortet og utadrotert pga. muskeldraget. Pasienten kan ikke løfte benet fra underlaget.'
    },
    {
        id: 'bevegelse-2',
        category: 'bevegelsesapparatet',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ribbeinsbrudd kan føre til pneumothorax.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Ribbeinsfragmenter kan perforere pleura og lunge, og forårsake pneumothorax. Alltid vurdere lungeskade ved ribbeinsbrudd, spesielt ved flere brudd.'
    },
    {
        id: 'bevegelse-3',
        category: 'bevegelsesapparatet',
        difficulty: 'exam',
        type: 'case',
        question: 'En 82 år gammel kvinne faller på isen og lander på utstrakt hånd. Håndleddet er deformert og smertefullt. Røntgen viser brudd med dorsal vinkling. Hva er diagnosen?',
        options: [
            'Scaphoidfraktur',
            'Colles-fraktur (distalt radiusbrudd)',
            'Håndleddsforstuing',
            'Karpaltunnelsyndrom'
        ],
        correctAnswer: 1,
        explanation: 'Fall på utstrakt hånd hos eldre gir typisk Colles-fraktur: distalt radiusbrudd med dorsal vinkling ("gaffeldeformitet"). Vanligste bruddtype hos eldre kvinner med osteoporose.'
    }
);
