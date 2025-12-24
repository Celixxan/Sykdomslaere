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
    },
    {
        id: 'infeksjon-7',
        category: 'infeksjon',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typisk behandlingsvarighet for samfunnservervet pneumoni?',
        options: [
            '1-2 dager',
            '5-7 dager',
            '3-4 uker',
            '3 måneder'
        ],
        correctAnswer: 1,
        explanation: 'Ukomplisert samfunnservervet pneumoni behandles vanligvis i 5-7 dager med antibiotika. Lengre behandling ved komplikasjoner eller alvorlig sykdom.'
    },
    {
        id: 'infeksjon-8',
        category: 'infeksjon',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'MRSA står for meticillinresistent Staphylococcus aureus.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'MRSA er resistent mot meticillin og de fleste betalaktamantibiotika. Viktig å oppdage og isolere for å hindre spredning. Behandles med vancomycin eller lignende.'
    },
    {
        id: 'infeksjon-9',
        category: 'infeksjon',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med feber og nakkestivhet har purulent spinalvæske med høyt celletall og lavt glukose. Diagnose?',
        options: [
            'Viral meningitt',
            'Bakteriell meningitt',
            'Migrene',
            'Subaraknoidalblødning'
        ],
        correctAnswer: 1,
        explanation: 'Purulent spinalvæske med høy pleocytose (nøytrofile), lavt glukose og høyt protein = bakteriell meningitt. Krever umiddelbar empirisk antibiotika (ceftriaxon + ampicillin).'
    },
    {
        id: 'infeksjon-10',
        category: 'infeksjon',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Når skal blodkulturer tas ved sepsis?',
        options: [
            'Etter at antibiotika er gitt',
            'Før antibiotika gis, men uten å forsinke behandling',
            'Kun hvis pasienten har feber over 40°C',
            'Blodkulturer er ikke nødvendig ved sepsis'
        ],
        correctAnswer: 1,
        explanation: 'Blodkulturer bør tas før antibiotika for å identifisere mikroben, men skal aldri forsinke oppstart av behandling. Ta kulturer raskt, deretter antibiotika innen 1 time.'
    },
    {
        id: 'infeksjon-11',
        category: 'infeksjon',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Bredspektret antibiotika bør brukes som førstevalg ved alle infeksjoner.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Smalspektret antibiotika foretrekkes når mulig for å redusere resistensutvikling. Bredspektret reserveres for alvorlige infeksjoner eller ukjent etiologi.'
    },
    {
        id: 'infeksjon-12',
        category: 'infeksjon',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med diabetes har feber, hevelse og krepitasjoner i huden på leggen. Hva mistenkes?',
        options: [
            'Vanlig erysipelas',
            'Nekrotiserende fasciitt',
            'Allergisk reaksjon',
            'DVT'
        ],
        correctAnswer: 1,
        explanation: 'Krepitasjoner i huden (gass i vev) + systemisk sykdom hos diabetiker = mistenk nekrotiserende fasciitt. Livstruende tilstand som krever akutt kirurgisk debridement og iv antibiotika.'
    }
);
