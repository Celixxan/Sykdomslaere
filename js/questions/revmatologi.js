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
    },
    {
        id: 'revma-4',
        category: 'revmatologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hvilke ledd er typisk affisert ved artrose?',
        options: [
            'MCP-ledd (knokene)',
            'Store vektbærende ledd som hofter og knær',
            'Kun ryggsøylen',
            'Kun håndledd'
        ],
        correctAnswer: 1,
        explanation: 'Artrose rammer typisk store vektbærende ledd (hofter, knær) samt fingerledd (DIP, CMC-1). MCP-ledd er sjeldent affisert (i motsetning til RA).'
    },
    {
        id: 'revma-5',
        category: 'revmatologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Urinsyre forårsaker urinsyregikt (podagra) når nivået i blodet er forhøyet.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Urinsyregikt skyldes utfelling av urinsyrekrystaller i ledd ved hyperurikemi. Gir typisk akutte, svært smertefulle anfall, ofte i stortåens grunnledd (podagra).'
    },
    {
        id: 'revma-6',
        category: 'revmatologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er biologiske legemidler (biologics) brukt til i revmatologi?',
        options: [
            'Vitamintilskudd',
            'Målrettet immunsuppresjon ved autoimmune sykdommer som RA',
            'Antibiotika mot leddinfeksjoner',
            'Smertestillende uten immunpåvirkning'
        ],
        correctAnswer: 1,
        explanation: 'Biologiske legemidler (TNF-hemmere, IL-6-hemmere, etc.) brukes ved utilstrekkelig effekt av konvensjonelle DMARDs. De målretter spesifikke immunmekanismer.'
    },
    {
        id: 'revma-7',
        category: 'revmatologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Septisk artritt er en akutt tilstand som krever umiddelbar behandling.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Septisk artritt er en infeksjon i ledd som kan ødelegge brusken raskt. Krever akutt antibiotika og ofte leddpunksjon/skylling. Forsinket behandling gir permanent skade.'
    },
    {
        id: 'revma-8',
        category: 'revmatologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En mann våkner med intenst rødt, hovent, smertefullt stortåledd. Han drikker mye øl. Hva er sannsynlig diagnose?',
        options: [
            'Revmatoid artritt',
            'Akutt urinsyregikt (podagra)',
            'Artrose',
            'Septisk artritt'
        ],
        correctAnswer: 1,
        explanation: 'Akutt monoartritt i MTP-1 (stortå) hos mann med høyt alkoholforbruk er klassisk urinsyregikt. Diagnosen bekreftes med leddpunksjon som viser uratkrystaller.'
    },
    {
        id: 'revma-9',
        category: 'revmatologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er systemisk lupus erythematosus (SLE)?',
        options: [
            'En infeksjonssykdom',
            'En autoimmun multisystemsykdom',
            'En type kreft',
            'En aldersrelatert sykdom'
        ],
        correctAnswer: 1,
        explanation: 'SLE er en autoimmun sykdom som kan ramme hud, ledd, nyrer, hjerte, lunger og CNS. Typisk hos unge kvinner. Sommerfuglutslett og fotosensitivitet er karakteristisk.'
    },
    {
        id: 'revma-10',
        category: 'revmatologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Metotreksat er et vanlig brukt DMARD ved revmatoid artritt.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Metotreksat er ankerdrug ved RA. Det er et sykdomsmodifiserende antirevmatisk legemiddel (DMARD) som bremser leddødeleggelse. Gis ukentlig.'
    },
    {
        id: 'revma-11',
        category: 'revmatologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En kvinne med RA på metotreksat og biologisk behandling får feber og hoste. Hva er viktig?',
        options: [
            'Fortsette behandling som normalt',
            'Vurdere infeksjon - immunsupprimerte pasienter er sårbare',
            'Øke metotreksat-dosen',
            'Ignorere symptomene'
        ],
        correctAnswer: 1,
        explanation: 'Immunsupprimerte pasienter på DMARDs/biologics har økt infeksjonsrisiko. Feber og luftveissymptomer krever rask vurdering. Vurder seponering av immunsuppresjon ved alvorlig infeksjon.'
    },
    {
        id: 'revma-12',
        category: 'revmatologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken blodprøve er typisk forhøyet ved inflammatoriske revmatiske sykdommer?',
        options: [
            'Hemoglobin',
            'SR (senkning) og CRP',
            'Kreatinin',
            'Glukose'
        ],
        correctAnswer: 1,
        explanation: 'SR og CRP er inflammasjonsmarkører som typisk er forhøyet ved aktiv inflammatorisk sykdom. De brukes til å monitorere sykdomsaktivitet og behandlingsrespons.'
    }
);
