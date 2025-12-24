/**
 * Spørsmål: Gastro
 * Akutt abdomen, ileus, IBD/IBS, GI-blødning
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'gastro-1',
        category: 'gastro',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er det viktigste kjennetegnet på mekanisk ileus?',
        options: [
            'Diaré og feber',
            'Kolikksmerter, oppkast og opphørt avføring/luft',
            'Konstant magesmerter uten oppkast',
            'Normal tarmfunksjon med kvalme'
        ],
        correctAnswer: 1,
        explanation: 'Mekanisk ileus gir typisk kolikksmerter (bølgende), oppkast, utspilt abdomen og opphørt passasje av avføring og luft. Krever ofte kirurgisk intervensjon.'
    },
    {
        id: 'gastro-2',
        category: 'gastro',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Melena (svart, tjæreaktig avføring) indikerer blødning fra øvre gastrointestinaltraktus.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Melena skyldes nedbrutt blod fra øvre GI-traktus (proksimalt for Treitz ligament). Den svarte fargen kommer av hemoglobin som er omdannet av magesyre og bakterier.'
    },
    {
        id: 'gastro-3',
        category: 'gastro',
        difficulty: 'exam',
        type: 'case',
        question: 'En 35 år gammel mann kommer med plutselige, intense magesmerter. Ved undersøkelse har han brettshard buk, er takykard og blek. Hva mistenker du primært?',
        options: [
            'Irritabel tarm-syndrom (IBS)',
            'Gastroenteritt',
            'Perforert ulcus – akutt abdomen',
            'Forstoppelse'
        ],
        correctAnswer: 2,
        explanation: 'Brettshard buk (défense musculaire) med akutte smerter og sirkulatorisk påvirkning indikerer peritonitt, ofte fra perforert ulcus. Dette er en kirurgisk akuttsituasjon.'
    },
    {
        id: 'gastro-4',
        category: 'gastro',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er hovedforskjellen mellom IBD og IBS?',
        options: [
            'IBD og IBS er samme sykdom',
            'IBD er inflammatorisk, IBS er funksjonell uten inflammasjon',
            'IBS gir blodig avføring, IBD gjør ikke det',
            'IBD behandles kun med kostendringer'
        ],
        correctAnswer: 1,
        explanation: 'IBD (Crohn, ulcerøs kolitt) er inflammatoriske tarmsykdommer med vevsskade. IBS er en funksjonell lidelse uten strukturelle forandringer eller inflammasjon.'
    },
    {
        id: 'gastro-5',
        category: 'gastro',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Hematochezia (friskt blod i avføring) kommer alltid fra nedre GI-traktus.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Vanligvis indikerer hematochezia blødning fra kolon/rectum, men massiv øvre GI-blødning kan også gi friskt blod rektalt pga. rask tarmmotilitet.'
    },
    {
        id: 'gastro-6',
        category: 'gastro',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient har hatt kraftig hematemese og melena. Han er blek, takykard (120/min) og hypotensiv (BT 85/50). Hva er viktigst?',
        options: [
            'Bestille gastroskopi til neste dag',
            'Akutt væskeresuscitering og blodtransfusjon, gastroskopi som ø.hjelp',
            'Gi kun protonpumpehemmer og observer',
            'Sende hjem med oppfølging hos fastlege'
        ],
        correctAnswer: 1,
        explanation: 'Massiv øvre GI-blødning med sirkulatorisk påvirkning krever akutt resuscitering (væske, blod), stabilisering og hastegaztroskopi for hemostase. Livstruende tilstand.'
    },
    {
        id: 'gastro-7',
        category: 'gastro',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er førstevalg behandling for Helicobacter pylori-infeksjon?',
        options: [
            'Kun antacida',
            'Trippelbehandling med PPI og to antibiotika',
            'Kirurgi',
            'Kun kostendring'
        ],
        correctAnswer: 1,
        explanation: 'H. pylori eradikeres med trippelbehandling: protonpumpehemmer (PPI) + to antibiotika (vanligvis amoksicillin + klaritromycin) i 7-14 dager.'
    },
    {
        id: 'gastro-8',
        category: 'gastro',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Akutt pankreatitt gir typisk smerter som stråler gjennom til ryggen.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Akutt pankreatitt gir intense epigastriesmerter som ofte stråler til ryggen ("beltesmerter"). Smertelindring oppnås ofte ved å sitte fremoverlent.'
    },
    {
        id: 'gastro-9',
        category: 'gastro',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med alkoholmisbruk kommer med intense magesmerter, oppkast og forhøyet lipase >3x øvre normalgrense. Diagnose?',
        options: [
            'Gastritt',
            'Akutt pankreatitt',
            'Magesår',
            'Blindtarmbetennelse'
        ],
        correctAnswer: 1,
        explanation: 'Epigastriesmerter + oppkast + lipase/amylase >3x øvre grense = akutt pankreatitt. Alkohol og gallesten er vanligste årsaker. Behandles med faste, væske og smertelindring.'
    },
    {
        id: 'gastro-10',
        category: 'gastro',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er karakteristiske for appendisitt (blindtarmbetennelse)?',
        options: [
            'Smerter som starter rundt navlen og flytter seg til høyre fossa iliaca',
            'Smerter kun i venstre side',
            'Diaré uten smerter',
            'Smerter som forsvinner ved måltider'
        ],
        correctAnswer: 0,
        explanation: 'Klassisk appendisitt starter med periumbilical smerte som etter timer flytter seg til høyre fossa iliaca. Feber, kvalme og slippømhet (rebound) er vanlig.'
    },
    {
        id: 'gastro-11',
        category: 'gastro',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Cøliaki er en allergi mot gluten som kan behandles med antihistaminer.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Cøliaki er en autoimmun sykdom (ikke allergi) der gluten trigger immunrespons som skader tynntarmsmucosa. Eneste behandling er livslang glutenfri diett.'
    },
    {
        id: 'gastro-12',
        category: 'gastro',
        difficulty: 'exam',
        type: 'case',
        question: 'En 60-åring med levercirrhose har tiltagende ascites og spiser lite. Albumin er lav. Hva er riktig kostveiledning?',
        options: [
            'Proteinrestriksjon for å forebygge encefalopati',
            'Adekvat proteininntak (1,2-1,5 g/kg), saltrestriksjon, små hyppige måltider',
            'Ingen restriksjoner',
            'Kun væskerestriksjon'
        ],
        correctAnswer: 1,
        explanation: 'Ved cirrhose trenger pasienten faktisk nok protein for å unngå sarkopeni. Saltrestriksjon hjelper mot ascites. Proteinrestriksjon anbefales kun ved akutt encefalopati.'
    }
);
