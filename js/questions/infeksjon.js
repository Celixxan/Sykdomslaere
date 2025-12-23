/**
 * Spørsmål: Infeksjon
 * Sepsis, pneumoni, UVI, antibiotika
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'infeksjon-1',
        category: 'infeksjon',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke kriterier inngår i qSOFA for å identifisere sepsis?',
        options: [
            'Feber, hoste og hodepine',
            'Respirasjonsfrekvens ≥22, endret bevissthet, systolisk BT ≤100',
            'CRP >100, leukocytose og takykardi',
            'Urinproduksjon <0,5 ml/kg/t og laktat >4'
        ],
        correctAnswer: 1,
        explanation: 'qSOFA (quick SOFA) inkluderer: respirasjonsfrekvens ≥22/min, endret mental status (GCS <15), systolisk blodtrykk ≤100 mmHg. ≥2 poeng indikerer økt risiko.'
    },
    {
        id: 'infeksjon-2',
        category: 'infeksjon',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Antibiotika er effektivt mot virale infeksjoner som influensa.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Antibiotika virker kun på bakterier, ikke virus. Virale infeksjoner som influensa behandles symptomatisk eller med antivirale midler, ikke antibiotika.'
    },
    {
        id: 'infeksjon-3',
        category: 'infeksjon',
        difficulty: 'exam',
        type: 'case',
        question: 'En 68 år gammel mann med pneumoni utvikler økende tachypné (28/min), forvirring og blodtrykk 85/50. Laktat er 4,2 mmol/L. Hva er diagnosen?',
        options: [
            'Ukomplisert pneumoni',
            'Septisk sjokk',
            'Lett dehydrering',
            'Angst relatert til sykdom'
        ],
        correctAnswer: 1,
        explanation: 'Infeksjon med hypotensjon som ikke responderer på væske, samt forhøyet laktat (>2), definerer septisk sjokk. Krever umiddelbar væskeresuscitering, antibiotika og ofte vasopressor.'
    },
    {
        id: 'infeksjon-4',
        category: 'infeksjon',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er "golden hour" ved sepsis?',
        options: [
            'Tiden pasienten kan vente før behandling',
            'Den første timen hvor rask behandling er livsviktig',
            'Tiden det tar før antibiotika virker',
            'Tiden mellom blodprøver'
        ],
        correctAnswer: 1,
        explanation: 'Ved sepsis er den første timen kritisk. Antibiotika skal gis innen 1 time, og væskeresuscitering startes umiddelbart. Forsinkelse øker mortaliteten betydelig.'
    },
    {
        id: 'infeksjon-5',
        category: 'infeksjon',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'CRP er en spesifikk markør som skiller bakteriell infeksjon fra viral.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'CRP stiger ved inflammasjon generelt, både bakteriell og viral. Det er ikke spesifikt for bakteriell infeksjon. Procalcitonin er mer spesifikk for bakterielle infeksjoner.'
    },
    {
        id: 'infeksjon-6',
        category: 'infeksjon',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er viktigste tiltak for å forebygge sykehusinfeksjoner?',
        options: [
            'Bruk av bredspektret antibiotika til alle',
            'God håndhygiene',
            'Isolering av alle pasienter',
            'Daglig skifte av alle katetre'
        ],
        correctAnswer: 1,
        explanation: 'Håndhygiene er det viktigste enkelttiltak for å forebygge smittespredning i helsetjenesten. Hånddesinfeksjon eller håndvask skal utføres før og etter pasientkontakt.'
    }
);
