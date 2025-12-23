/**
 * Spørsmål: Nyrer og urinveier
 * UVI, urosepsis, AKI, CKD
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'nyre-1',
        category: 'nyrer-urinveier',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er typiske for ukomplisert nedre urinveisinfeksjon (cystitt)?',
        options: [
            'Feber >38°C og flankesmerter',
            'Svie ved vannlating og hyppig vannlatingstrang',
            'Kvalme, oppkast og generell sykdomsfølelse',
            'Hodepine og nakkestivhet'
        ],
        correctAnswer: 1,
        explanation: 'Ukomplisert cystitt gir typisk dysuri (svie), pollakisuri (hyppig vannlating) og urgency. Feber og flankesmerter tyder på pyelonefritt.'
    },
    {
        id: 'nyre-2',
        category: 'nyrer-urinveier',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Akutt nyresvikt (AKI) kan være reversibel hvis årsaken behandles tidlig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'AKI er ofte reversibel ved tidlig intervensjon. Viktig å identifisere og behandle utløsende årsak (dehydrering, sepsis, nefrotoksiske medikamenter).'
    },
    {
        id: 'nyre-3',
        category: 'nyrer-urinveier',
        difficulty: 'exam',
        type: 'case',
        question: 'En 78 år gammel mann med UVI utvikler plutselig feber 39,5°C, takykardi, hypotensjon og forvirring. Hva mistenker du?',
        options: [
            'Vanlig febril UVI som kan behandles poliklinisk',
            'Urosepsis – krever akutt innleggelse og iv antibiotika',
            'Demens med samtidig UVI',
            'Dehydrering som kan behandles med oral væske'
        ],
        correctAnswer: 1,
        explanation: 'Feber, takykardi, hypotensjon og endret mental status hos pasient med UVI indikerer urosepsis. Dette er en livstruende tilstand som krever akutt innleggelse og iv antibiotika.'
    },
    {
        id: 'nyre-4',
        category: 'nyrer-urinveier',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken parameter er viktigst for å vurdere nyrefunksjon?',
        options: [
            'Urinmengde alene',
            'eGFR (estimert glomerulær filtrasjonsrate)',
            'Blodtrykk',
            'Vekt'
        ],
        correctAnswer: 1,
        explanation: 'eGFR beregnes fra kreatinin og gir et estimat på nyrefunksjon. CKD stadieinndeles etter eGFR. Urinmengde alene er ikke tilstrekkelig.'
    },
    {
        id: 'nyre-5',
        category: 'nyrer-urinveier',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Kronisk nyresykdom (CKD) stadium 5 betyr at pasienten trenger dialyse eller nyretransplantasjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'CKD stadium 5 (eGFR <15) kalles nyresvikt i endestadium. De fleste vil trenge nyreerstattende behandling (dialyse eller transplantasjon) for å overleve.'
    }
);
