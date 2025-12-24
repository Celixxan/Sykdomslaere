/**
 * Spørsmål: Akuttmedisin
 * ABCDE, sepsis, anafylaksi, brannskade, smerter
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'akutt-1',
        category: 'akuttmedisin',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er førstelinjebehandling ved anafylaktisk sjokk?',
        options: [
            'Antihistaminer intravenøst',
            'Kortikosteroider per os',
            'Adrenalin intramuskulært',
            'Salbutamol på forstøver'
        ],
        correctAnswer: 2,
        explanation: 'Adrenalin IM (0,5 mg voksen) er førstelinjebehandling ved anafylaksi. Det virker raskt på bronkospasme, vasodilatjon og ødem. Gis i låret.'
    },
    {
        id: 'akutt-2',
        category: 'akuttmedisin',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'ABCDE-prinsippet betyr at luftveier (A) alltid vurderes før sirkulasjon (C).',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'ABCDE er en systematisk tilnærming: Airway, Breathing, Circulation, Disability, Exposure. Man behandler livstruende problemer i rekkefølge, starter med luftveier.'
    },
    {
        id: 'akutt-3',
        category: 'akuttmedisin',
        difficulty: 'exam',
        type: 'case',
        question: 'En 30 år gammel mann kommer med brannskade etter husbrann. Han har sot rundt nese/munn, heshet og stridor. Hva er første prioritet?',
        options: [
            'Beregne brannskadeareal',
            'Sikre luftveier – mistenkt inhalasjonsskade',
            'Starte væskebehandling',
            'Gi smertestillende'
        ],
        correctAnswer: 1,
        explanation: 'Sot i ansikt, heshet og stridor indikerer inhalasjonsskade med risiko for luftveisødem. Luftveissikring er førsteprioritet da ødem kan utvikle seg raskt og obstruere luftveiene.'
    },
    {
        id: 'akutt-4',
        category: 'akuttmedisin',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva står NEWS2 for og hva brukes det til?',
        options: [
            'New Emergency Warning System – varslingssystem for brann',
            'National Early Warning Score – identifisere klinisk forverring',
            'Nursing Evaluation Worksheet – dokumentasjon av pleie',
            'Neurological Examination Workup – nevrologisk undersøkelse'
        ],
        correctAnswer: 1,
        explanation: 'NEWS2 (National Early Warning Score) er et skåringssystem basert på vitale parametre. Det brukes til å identifisere pasienter med risiko for klinisk forverring og behov for opptrapping.'
    },
    {
        id: 'akutt-5',
        category: 'akuttmedisin',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Ved hjertestans skal man starte HLR umiddelbart, også før man ringer 113.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Ved hjertestans skal man først ringe 113 (eller rope om hjelp), deretter starte HLR. Tidlig varsling sikrer at profesjonell hjelp kommer raskt, og AMK kan veilede i HLR.'
    },
    {
        id: 'akutt-6',
        category: 'akuttmedisin',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med kjent bieallefgi blir stukket og utvikler hevelse i ansikt, pustevansker og blodtrykksfall. Adrenalin IM er gitt. Hva er neste tiltak?',
        options: [
            'Vente og se om adrenalin virker',
            'Gi iv væske, observer luftveier, gjenta adrenalin om 5 min ved manglende respons',
            'Kun gi antihistamin og sende hjem',
            'Gi kun kortison per os'
        ],
        correctAnswer: 1,
        explanation: 'Ved anafylaksi etter adrenalin: væskeresuscitering, sikre luftveier, observer. Adrenalin kan gjentas hvert 5. min. Antihistaminer og steroider er tilleggsbehandling.'
    },
    {
        id: 'akutt-7',
        category: 'akuttmedisin',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er riktig kompresjonsfrekvens ved HLR hos voksne?',
        options: [
            '60-80 per minutt',
            '100-120 per minutt',
            '140-160 per minutt',
            '80-100 per minutt'
        ],
        correctAnswer: 1,
        explanation: 'HLR-retningslinjer anbefaler 100-120 kompresjoner per minutt med dybde 5-6 cm. Komplett brystveggs tilbakefjæring mellom kompresjonene er viktig.'
    },
    {
        id: 'akutt-8',
        category: 'akuttmedisin',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved sjokk er blekhet, kaldsvette og rask puls vanlige tegn.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Sjokk gir kompensatoriske tegn: takykardi, blek/kaldsvett hud, forlenget kapillær refill, angst/uro. Ved dekompensert sjokk kommer hypotensjon og bevissthetsendring.'
    },
    {
        id: 'akutt-9',
        category: 'akuttmedisin',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient med brystsmerter har BT 80/50, kald/klam, takykard og forvirret. Hva er tilstanden?',
        options: [
            'Stabil angina',
            'Kardiogent sjokk',
            'Panikkanfall',
            'Hyperventilering'
        ],
        correctAnswer: 1,
        explanation: 'Brystsmerter + hypotensjon + sjokktegn = kardiogent sjokk, sannsynligvis fra akutt hjerteinfarkt med pumpsvikt. Krever akutt PCI, inotropi og evt. mekanisk sirkulasjonsstøtte.'
    },
    {
        id: 'akutt-10',
        category: 'akuttmedisin',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hvordan beregnes brannskadeareal hos voksne (Wallaces 9-regel)?',
        options: [
            'Hode = 18%, hver arm = 9%',
            'Hode = 9%, hver arm = 9%, bryst = 18%',
            'Alt er 10% hver',
            'Kun måling med linjal'
        ],
        correctAnswer: 1,
        explanation: 'Wallaces 9-regel: Hode 9%, hver arm 9%, bryst 18%, rygg 18%, hvert ben 18%, perineum 1%. Pasientens håndflate = ca. 1% av kroppsoverflaten.'
    },
    {
        id: 'akutt-11',
        category: 'akuttmedisin',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Ved drukning skal man alltid starte HLR med innblåsinger før kompresjoner.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Ved drukning er hypoksi hovedproblemet. Man starter med 5 innblåsinger før kompresjoner (i motsetning til standard HLR). Oksygenering er kritisk.'
    },
    {
        id: 'akutt-12',
        category: 'akuttmedisin',
        difficulty: 'exam',
        type: 'case',
        question: 'En pasient har sterk allergisk reaksjon med stridor. Adrenalin IM og inhalasjoner hjelper ikke. Hva er neste steg?',
        options: [
            'Gi mer antihistamin',
            'Forbered kirurgisk luftvei (krikotomi) ved truende obstruksjon',
            'Vent og observer',
            'Send hjem'
        ],
        correctAnswer: 1,
        explanation: 'Ved truende luftveisobstruksjon som ikke responderer på adrenalin, må man være forberedt på kirurgisk luftvei (krikotomi). Intubering kan være vanskelig ved ødem.'
    }
);
