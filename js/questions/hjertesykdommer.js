/**
 * Spørsmål: Hjertesykdommer
 * Hjertesvikt, angina, ACS, atrieflimmer
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'hjerte-1',
        category: 'hjertesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilket symptom er IKKE typisk for venstresidig hjertesvikt?',
        options: [
            'Dyspné ved anstrengelse',
            'Ortopné',
            'Perifere ødemer i anklene',
            'Lungestuvning'
        ],
        correctAnswer: 2,
        explanation: 'Perifere ødemer er typisk for høyresidig hjertesvikt. Venstresidig hjertesvikt gir primært lungesymptomer som dyspné, ortopné og lungestuvning.'
    },
    {
        id: 'hjerte-2',
        category: 'hjertesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved mistanke om akutt hjerteinfarkt skal pasienten få acetylsalisylsyre (ASA) så raskt som mulig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'ASA hemmer blodplateaggregering og reduserer mortalitet ved akutt hjerteinfarkt. 300 mg tygges og svelges så raskt som mulig ved mistanke om ACS.'
    },
    {
        id: 'hjerte-3',
        category: 'hjertesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 72 år gammel mann med atrieflimmer bruker warfarin. Han kommer inn med INR på 8,5 uten blødning. Hva er riktig tiltak?',
        options: [
            'Fortsette som før, INR er ikke farlig høy',
            'Seponere warfarin midlertidig, gi vitamin K per os',
            'Akutt gi plasma og protrombinkompleks',
            'Doble dosen warfarin for å stabilisere'
        ],
        correctAnswer: 1,
        explanation: 'INR >5 uten blødning behandles med seponering av warfarin og lavdose vitamin K (1-2,5 mg per os). Protrombinkompleks reserveres for alvorlig blødning.'
    },
    {
        id: 'hjerte-4',
        category: 'hjertesykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er typisk lokalisasjon for smerter ved angina pectoris?',
        options: [
            'Høyre side av brystet',
            'Retrosternalt med utstråling til venstre arm/kjeve',
            'Nedre del av magen',
            'Kun i ryggen'
        ],
        correctAnswer: 1,
        explanation: 'Angina gir typisk retrosternale (bak brystbeinet) smerter som kan stråle til venstre arm, kjeve, rygg eller epigastriet. Ofte utløst av anstrengelse.'
    },
    {
        id: 'hjerte-5',
        category: 'hjertesykdommer',
        difficulty: 'medium',
        type: 'case',
        question: 'En pasient med hjertesvikt har tatt på seg 3 kg på 3 dager og har økte ødemer. Hva tyder dette på?',
        options: [
            'Pasienten spiser for mye',
            'Væskeretensjon og forverring av hjertesvikt',
            'Normal vektøkning',
            'Muskeloppbygging'
        ],
        correctAnswer: 1,
        explanation: 'Rask vektøkning (>2 kg/uke) hos hjertesviktpasient indikerer væskeretensjon. Pasienten bør kontakte lege for vurdering av diuretikabehandling.'
    },
    {
        id: 'hjerte-6',
        category: 'hjertesykdommer',
        difficulty: 'exam',
        type: 'mcq',
        question: 'Hvilken EKG-forandring er mest typisk for akutt STEMI?',
        options: [
            'Forlenget QT-tid',
            'ST-elevasjon i sammenhengende avledninger',
            'Kun inverterte T-bølger',
            'Normalfunn på EKG'
        ],
        correctAnswer: 1,
        explanation: 'STEMI (ST-elevasjonsinfarkt) viser ST-elevasjon i minst 2 sammenhengende avledninger. Dette indikerer transmural iskemi og krever akutt reperfusjonsbehandling (PCI eller trombolyse).'
    },
    {
        id: 'hjerte-7',
        category: 'hjertesykdommer',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er hovedrisikoen ved ubehandlet atrieflimmer?',
        options: [
            'Hjerteinfarkt',
            'Hjerneslag (tromboembolisme)',
            'Lungebetennelse',
            'Nyresvikt'
        ],
        correctAnswer: 1,
        explanation: 'Atrieflimmer gir uregelmessig hjerterytme med risiko for blodproppdannelse i atriet. Proppen kan løsne og forårsake hjerneslag. Antikoagulasjon vurderes ut fra CHA2DS2-VASc.'
    },
    {
        id: 'hjerte-8',
        category: 'hjertesykdommer',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Nitroglyserin virker ved å dilatere koronararteriene og redusere hjertets arbeidsbelastning.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Nitroglyserin er en vasodilator som utvider både koronarkar og perifere vener. Dette reduserer preload og hjertets oksygenbehov, og bedrer koronar blodgjennomstrømning.'
    },
    {
        id: 'hjerte-9',
        category: 'hjertesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med kjent hjertesvikt våkner om natten med akutt dyspné, må sitte oppreist og hoster rosa, skummende ekspektorat. Hva er tilstanden?',
        options: [
            'Astmaanfall',
            'Akutt lungeødem',
            'Panikkanfall',
            'Pneumothorax'
        ],
        correctAnswer: 1,
        explanation: 'Rosa, skummende ekspektorat + akutt dyspné + ortopné = akutt lungeødem ved dekompensert venstresidig hjertesvikt. Krever akutt behandling med diuretika, oksygen og evt. NIV.'
    },
    {
        id: 'hjerte-10',
        category: 'hjertesykdommer',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvilken medikamentgruppe er førstevalg ved systolisk hjertesvikt?',
        options: [
            'Kalsiumkanalblokkere',
            'ACE-hemmere eller ARB',
            'Antibiotika',
            'Antihistaminer'
        ],
        correctAnswer: 1,
        explanation: 'ACE-hemmere (eller ARB ved intoleranse) er hjørnestein i hjertesviktbehandling. De reduserer afterload, hemmer remodellering og bedrer prognose.'
    },
    {
        id: 'hjerte-11',
        category: 'hjertesykdommer',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Betablokkere skal unngås ved hjertesvikt fordi de svekker hjertefunksjonen.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Betablokkere er en av fire pilarer i hjertesviktbehandling (sammen med ACE-hemmer, MRA og SGLT2-hemmer). De bedrer langtidsprognose ved å redusere hjertefrekvens og remodellering.'
    },
    {
        id: 'hjerte-12',
        category: 'hjertesykdommer',
        difficulty: 'exam',
        type: 'case',
        question: 'En 65-åring kommer med brystsmerter i 2 timer, ST-depresjon på EKG og forhøyet troponin. Diagnose?',
        options: [
            'Stabil angina',
            'STEMI',
            'NSTEMI',
            'Perikarditt'
        ],
        correctAnswer: 2,
        explanation: 'Brystsmerter + ST-depresjon + forhøyet troponin = NSTEMI (non-ST-elevasjon hjerteinfarkt). Behandles med antitrombotisk terapi og vurderes for koronar angiografi.'
    }
);
