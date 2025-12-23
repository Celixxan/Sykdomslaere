/**
 * Spørsmål: Nevrologi
 * Epilepsi, MS, Parkinson, GCS, hjerneslag
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'nevro-1',
        category: 'nevrologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva betyr GCS 8?',
        options: [
            'Pasienten er våken og orientert',
            'Pasienten er lett omtåket',
            'Pasienten er bevisstløs og trenger sikring av luftveier',
            'Pasienten er død'
        ],
        correctAnswer: 2,
        explanation: 'GCS ≤8 indikerer alvorlig bevissthetsnedsettelse og behov for luftveissikring (intubering). Pasienten kan ikke beskytte egne luftveier.'
    },
    {
        id: 'nevro-2',
        category: 'nevrologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved hjerneslag er tid en kritisk faktor – "time is brain".',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Ved hjerneslag dør millioner av hjerneceller hvert minutt uten behandling. Trombolyse må gis innen 4,5 timer, og trombektomi innen 6-24 timer avhengig av klinikk.'
    },
    {
        id: 'nevro-3',
        category: 'nevrologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En 70 år gammel kvinne utvikler plutselig høyresidig facialisparese, høyresidig arm/bensvakhet og taleproblemer. Symptomene startet for 45 minutter siden. Hva er viktigst?',
        options: [
            'Gi blodtrykksenkende og observer',
            'Umiddelbar CT og vurdering for trombolyse',
            'Bestille MR til neste dag',
            'Sende hjem med oppfølging hos fastlege'
        ],
        correctAnswer: 1,
        explanation: 'Plutselig halvsidig lammelse og taleproblemer er klassisk hjerneslag. Innen 4,5 timer kan trombolyse være aktuelt. CT utelukker blødning før behandling.'
    }
);
