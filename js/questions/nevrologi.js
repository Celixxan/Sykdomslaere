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
    },
    {
        id: 'nevro-4',
        category: 'nevrologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er FAST-testen brukt til?',
        options: [
            'Vurdering av blodtrykk',
            'Rask identifisering av hjerneslag',
            'Testing av hjertefunksjon',
            'Måling av blodsukker'
        ],
        correctAnswer: 1,
        explanation: 'FAST: Face (ansiktslammelse), Arm (armsvakhet), Speech (talevansker), Time (ring 113). Brukes for rask identifisering av hjerneslag i prehospital setting.'
    },
    {
        id: 'nevro-5',
        category: 'nevrologi',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Status epilepticus defineres som vedvarende anfall >5 minutter eller gjentatte anfall uten oppvåkning.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Status epilepticus er en akutt, livstruende tilstand med vedvarende anfall >5 min eller gjentatte anfall uten full restitusjon. Krever umiddelbar behandling med benzodiazepiner.'
    },
    {
        id: 'nevro-6',
        category: 'nevrologi',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er de tre komponentene i Glasgow Coma Scale (GCS)?',
        options: [
            'Puls, blodtrykk og respirasjon',
            'Øyeåpning, verbal respons og motorisk respons',
            'Pupillreaksjon, smertereaksjon og tale',
            'Bevissthet, hukommelse og orientering'
        ],
        correctAnswer: 1,
        explanation: 'GCS måler bevissthetsnivå via tre komponenter: Eye (øyeåpning, 1-4), Verbal (verbal respons, 1-5), Motor (motorisk respons, 1-6). Totalt 3-15 poeng.'
    },
    {
        id: 'nevro-7',
        category: 'nevrologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilke symptomer er typiske for Parkinsons sykdom?',
        options: [
            'Plutselige anfall og hukommelsestap',
            'Bradykinesi, rigiditet, hviletremor og postural instabilitet',
            'Lammelser og synstap',
            'Feber og hodepine'
        ],
        correctAnswer: 1,
        explanation: 'Parkinsons klassiske tetrade: bradykinesi (langsomme bevegelser), rigiditet (stivhet), hviletremor (pillertrilletremor), postural instabilitet. Skyldes dopaminmangel i basalgangliene.'
    },
    {
        id: 'nevro-8',
        category: 'nevrologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Multippel sklerose (MS) rammer kun eldre over 60 år.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'MS debuterer vanligvis i ung voksen alder (20-40 år) og rammer kvinner dobbelt så ofte som menn. Det er en autoimmun demyeliniserende sykdom i CNS.'
    },
    {
        id: 'nevro-9',
        category: 'nevrologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient får plutselig sterk hodepine ("verste hodepinen i mitt liv") og nakkestivhet. CT-caput er normal. Hva er neste steg?',
        options: [
            'Sende hjem med smertestillende',
            'Lumbalpunksjon for å utelukke subaraknoidalblødning',
            'MR om 3 uker',
            'Gi migreneprofylakse'
        ],
        correctAnswer: 1,
        explanation: 'Thunderclap-hodepine + nakkestivhet = mistenk SAH. CT er sensitiv tidlig, men lumbalpunksjon gjøres hvis CT er negativ for å se etter xantokromi (blod i spinalvæske).'
    },
    {
        id: 'nevro-10',
        category: 'nevrologi',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er forskjellen mellom iskemisk og hemoragisk hjerneslag?',
        options: [
            'Det er ingen forskjell',
            'Iskemisk skyldes blodpropp, hemoragisk skyldes blødning',
            'Hemoragisk er mildere enn iskemisk',
            'Iskemisk behandles med antikoagulasjon akutt'
        ],
        correctAnswer: 1,
        explanation: 'Iskemisk slag (85%) skyldes blodpropp som blokkerer en arterie. Hemoragisk slag (15%) skyldes blødning i hjernen. CT skiller mellom dem og styrer behandling.'
    },
    {
        id: 'nevro-11',
        category: 'nevrologi',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Epilepsi kan ofte kontrolleres godt med antiepileptiske medikamenter.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Ca. 70% av epilepsipasienter oppnår anfallsfrihet med riktig medisin. Valg av medikament avhenger av anfallstype. Noen trenger kombinasjonsbehandling.'
    },
    {
        id: 'nevro-12',
        category: 'nevrologi',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med nydiagnostisert epilepsi har hatt to tonisk-kloniske anfall. Hva er førstevalg behandling?',
        options: [
            'Ingen behandling før flere anfall',
            'Antiepileptikum som valproat, levetiracetam eller lamotrigin',
            'Kun beroligende ved anfall',
            'Kirurgi umiddelbart'
        ],
        correctAnswer: 1,
        explanation: 'Etter to uprovoserte anfall stilles epilepsidiagnose og behandling startes. Valg av antiepileptikum avhenger av anfallstype, alder og kjønn (unngå valproat hos fertile kvinner).'
    }
);
