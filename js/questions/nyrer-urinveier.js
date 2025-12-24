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
    },
    {
        id: 'nyre-6',
        category: 'nyrer-urinveier',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typisk behandling for ukomplisert cystitt hos kvinner?',
        options: [
            'Intravenøs antibiotika i 2 uker',
            'Peroral antibiotika (f.eks. nitrofurantoin) i 3-5 dager',
            'Ingen behandling, går over av seg selv',
            'Kirurgisk inngrep'
        ],
        correctAnswer: 1,
        explanation: 'Ukomplisert cystitt hos kvinner behandles med kort antibiotikakur. Nitrofurantoin 50 mg x 3 i 5 dager eller pivmecillinam er førstevalg i Norge.'
    },
    {
        id: 'nyre-7',
        category: 'nyrer-urinveier',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Asymptomatisk bakteriuri skal alltid behandles med antibiotika.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Asymptomatisk bakteriuri behandles kun hos gravide og før urologiske inngrep. Hos andre gir behandling ingen fordel og fremmer resistensutvikling.'
    },
    {
        id: 'nyre-8',
        category: 'nyrer-urinveier',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med nyresvikt har kalium på 6,8 mmol/L og EKG-forandringer. Hva er første tiltak?',
        options: [
            'Gi kaliumtilskudd',
            'Gi kalsiumglukonat iv for å stabilisere hjertet',
            'Avvente og ta ny prøve',
            'Starte peroral behandling'
        ],
        correctAnswer: 1,
        explanation: 'Alvorlig hyperkalemi (>6,5 med EKG-forandringer) er livstruende. Kalsiumglukonat iv gis først for hjertebeskyttelse, deretter tiltak for å senke kalium (insulin/glukose, dialyse).'
    },
    {
        id: 'nyre-9',
        category: 'nyrer-urinveier',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke tegn indikerer pyelonefritt (øvre UVI) i stedet for cystitt?',
        options: [
            'Kun svie ved vannlating',
            'Feber, flankesmerter og bankeømhet over nyrelosjen',
            'Kun hyppig vannlating',
            'Ingen symptomer'
        ],
        correctAnswer: 1,
        explanation: 'Pyelonefritt gir systemiske symptomer (feber, frysninger) og flankesmerter/bankeømhet. Krever lengre antibiotikabehandling og noen ganger innleggelse.'
    },
    {
        id: 'nyre-10',
        category: 'nyrer-urinveier',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'NSAIDs (ibuprofen, naproksen) er trygge å bruke ved nedsatt nyrefunksjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'NSAIDs er nefrotoksiske og kan forverre nyrefunksjonen. De hemmer prostaglandiner som opprettholder renal blodgjennomstrømning. Bør unngås ved CKD.'
    },
    {
        id: 'nyre-11',
        category: 'nyrer-urinveier',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient på dialyse har ikke hatt avføring på 4 dager og klager over magesmerter. Kalium er 5,9. Hva er viktig tiltak?',
        options: [
            'Gi kaliumholdig avføringsmiddel',
            'Behandle obstipasjon med kaliumfritt alternativ, vurder ekstra dialyse',
            'Avvente til neste dialyse',
            'Gi banan for å øke kalium'
        ],
        correctAnswer: 1,
        explanation: 'Obstipasjon hos dialysepasient er alvorlig da det kan gi hyperkalemi. Bruk kaliumfrie laksantia. Unngå Klyx (inneholder kalium). Vurder ekstra dialyse ved høyt kalium.'
    },
    {
        id: 'nyre-12',
        category: 'nyrer-urinveier',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er prerenal årsak til akutt nyresvikt (AKI)?',
        options: [
            'Nyrestein som blokkerer ureter',
            'Dehydrering eller lavt blodtrykk som reduserer blodtilførsel til nyrene',
            'Glomerulonefritt',
            'Prostataobstruksjon'
        ],
        correctAnswer: 1,
        explanation: 'Prerenal AKI skyldes redusert blodtilførsel til nyrene (hypovolemi, sjokk, hjertesvikt). Nyrene er friske, men får for lite blod. Behandles med væske/hemodynamisk støtte.'
    }
);
