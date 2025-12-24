/**
 * Spørsmål: Psykisk helse
 * Depresjon, angst, psykose, suicidalvurdering
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'psyk-1',
        category: 'psykisk-helse',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er kjernesymptomer ved depresjon?',
        options: [
            'Hallusinasjoner og vrangforestillinger',
            'Nedsatt stemningsleie, interessetap og energimangel',
            'Kun søvnproblemer',
            'Aggresjon og impulsivitet'
        ],
        correctAnswer: 1,
        explanation: 'Depresjonens kjernesymptomer er nedsatt stemningsleie, tap av interesse/glede (anhedoni) og energimangel. Tilleggssymptomer inkluderer søvn-, appetitt- og konsentrasjonsproblemer.'
    },
    {
        id: 'psyk-2',
        category: 'psykisk-helse',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Det er trygt å spørre pasienter direkte om selvmordstanker.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Å spørre direkte om selvmordstanker øker IKKE risikoen for suicid. Det kan tvert imot være en lettelse for pasienten å bli spurt, og gir mulighet for hjelp og intervensjon.'
    },
    {
        id: 'psyk-3',
        category: 'psykisk-helse',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient uttrykker selvmordstanker med konkret plan og tilgang til metode. Hva er riktig tiltak?',
        options: [
            'La pasienten gå hjem og bestille time til neste uke',
            'Akutt psykiatrisk vurdering, ikke la pasienten være alene',
            'Gi en brosjyre om krisehjelp',
            'Anbefale å snakke med venner'
        ],
        correctAnswer: 1,
        explanation: 'Selvmordstanker med konkret plan og tilgang til metode er høy risiko. Pasienten skal ikke forlates alene og trenger akutt psykiatrisk vurdering. Fjern tilgang til metode.'
    },
    {
        id: 'psyk-4',
        category: 'psykisk-helse',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er typiske symptomer ved panikkangst?',
        options: [
            'Gradvis økende uro over dager',
            'Plutselig intens frykt, hjertebank, svette, pustevansker',
            'Kun søvnløshet',
            'Langvarig tristhet'
        ],
        correctAnswer: 1,
        explanation: 'Panikkanfall kommer brått med intens frykt, palpitasjoner, svetting, skjelving, pustevansker og følelse av å dø. Varer vanligvis 10-30 minutter.'
    },
    {
        id: 'psyk-5',
        category: 'psykisk-helse',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Ved psykose kan pasienten ha vrangforestillinger og hallusinasjoner.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Psykose kjennetegnes av realitetsbrist: vrangforestillinger (feilaktige overbevisninger) og/eller hallusinasjoner (sanseopplevelser uten ytre stimuli). Kan sees ved schizofreni, bipolar lidelse, rus m.m.'
    },
    {
        id: 'psyk-6',
        category: 'psykisk-helse',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er viktig i kommunikasjon med en psykotisk pasient?',
        options: [
            'Argumentere mot vrangforestillingene',
            'Være rolig, tydelig og ikke bekrefte vrangforestillinger',
            'Ignorere det pasienten sier',
            'Snakke raskt og gi mye informasjon'
        ],
        correctAnswer: 1,
        explanation: 'Ved psykose: vær rolig, klar og forutsigbar. Ikke argumenter mot eller bekreft vrangforestillinger. Fokuser på pasientens følelser og opplevelser. Sikkerhet er viktig.'
    },
    {
        id: 'psyk-7',
        category: 'psykisk-helse',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Angstlidelser er blant de vanligste psykiske lidelsene.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Angstlidelser er svært vanlige og rammer ca. 15-20% av befolkningen i løpet av livet. Inkluderer generalisert angst, sosial angst, panikklidelse, fobier og PTSD.'
    },
    {
        id: 'psyk-8',
        category: 'psykisk-helse',
        difficulty: 'exam',
        type: 'case',
        question: 'En ung mann bringes inn av politiet. Han er svært urolig, snakker fort, har ikke sovet på dager og mener han har spesielle evner. Hva mistenker du?',
        options: [
            'Depresjon',
            'Manisk episode ved bipolar lidelse',
            'Generalisert angst',
            'Sosial fobi'
        ],
        correctAnswer: 1,
        explanation: 'Oppstemthet, redusert søvnbehov, taletrang, grandiositet (spesielle evner) og økt aktivitet er typisk for mani. Bipolar lidelse type I inkluderer maniske episoder.'
    },
    {
        id: 'psyk-9',
        category: 'psykisk-helse',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er PTSD (posttraumatisk stresslidelse)?',
        options: [
            'Frykt for sosiale situasjoner',
            'Vedvarende stressreaksjon etter traumatisk hendelse',
            'Generell bekymring for alt',
            'Tvangstanker'
        ],
        correctAnswer: 1,
        explanation: 'PTSD oppstår etter traumer og kjennetegnes av gjenopplevelser (flashbacks), unnvikelse, negative tanker/følelser og hyperaktivering. Kan behandles med traumefokusert terapi.'
    },
    {
        id: 'psyk-10',
        category: 'psykisk-helse',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Eldre kan også utvikle depresjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Depresjon hos eldre er vanlig men underdiagnostisert. Symptomene kan være atypiske: somatiske plager, kognitiv svikt, irritabilitet. Tap, ensomhet og sykdom er risikofaktorer.'
    },
    {
        id: 'psyk-11',
        category: 'psykisk-helse',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med depresjon starter på SSRI. Når kan du forvente full effekt?',
        options: [
            'Innen 1-2 dager',
            'Etter 2-4 uker, full effekt etter 6-8 uker',
            'Umiddelbart',
            'Etter 6 måneder'
        ],
        correctAnswer: 1,
        explanation: 'SSRI har forsinket effekt. Noe bedring ses etter 2-4 uker, men full effekt kan ta 6-8 uker. Viktig å informere pasienten om dette for å sikre compliance.'
    },
    {
        id: 'psyk-12',
        category: 'psykisk-helse',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke faktorer øker risiko for suicid?',
        options: [
            'Kun psykisk sykdom',
            'Tidligere forsøk, plan, tilgang til metode, håpløshet, rusmisbruk',
            'Bare høy alder',
            'Kun mannlig kjønn'
        ],
        correctAnswer: 1,
        explanation: 'Suicidrisiko øker med: tidligere forsøk (viktigste), konkret plan og tilgang til metode, psykisk lidelse, rusmisbruk, håpløshet, tap/krise, sosial isolasjon og mannlig kjønn.'
    }
);
