/**
 * Spørsmål: Pediatri
 * Akutt sykt barn, ABCDE
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'ped-1',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er normal respirasjonsfrekvens for et barn på 2 år?',
        options: [
            '12-16/min',
            '20-30/min',
            '40-60/min',
            '8-12/min'
        ],
        correctAnswer: 1,
        explanation: 'Barn har høyere respirasjonsfrekvens enn voksne. For 2-åringer er 20-30/min normalt. Frekvensen synker med økende alder.'
    },
    {
        id: 'ped-2',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Barn kompenserer lenge for sirkulatorisk sjokk, men kan dekompensere plutselig.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Barn har effektive kompensasjonsmekanismer (takykardi, vasokonstriksjon), men når disse svikter, kan dekompensering skje raskt. Tidlig intervensjon er kritisk.'
    },
    {
        id: 'ped-3',
        category: 'pediatri',
        difficulty: 'exam',
        type: 'case',
        question: 'Et 3 år gammelt barn har plutselig feber 40°C, sikling, stridor og sitter foroverbøyd. Hva mistenker du?',
        options: [
            'Falsk krupp',
            'Akutt epiglotitt',
            'Vanlig forkjølelse',
            'Astmaanfall'
        ],
        correctAnswer: 1,
        explanation: 'Høy feber, sikling (svelgvansker), stridor og "tripod-stilling" er klassisk for epiglotitt. Dette er en livstruende tilstand som krever umiddelbar behandling. Ikke undersøk svelget!'
    },
    {
        id: 'ped-4',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er typisk for falsk krupp (laryngitt)?',
        options: [
            'Høy feber og sikling',
            'Bjeffende hoste, heshet og inspiratorisk stridor',
            'Produktiv hoste med grønt ekspektorat',
            'Utslett og leddsmerter'
        ],
        correctAnswer: 1,
        explanation: 'Falsk krupp gir typisk bjeffende hoste (seal bark), heshet og inspiratorisk stridor. Ofte verre om natten. Mild feber. Behandles med fuktig luft og ev. steroider.'
    },
    {
        id: 'ped-5',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Kapillær refill >2 sekunder hos barn kan indikere dårlig perifer sirkulasjon.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Kapillær refill-tid >2 sekunder indikerer nedsatt perifer sirkulasjon og kan være et tidlig tegn på sirkulatorisk svikt hos barn. Normal kapillær refill er <2 sekunder.'
    },
    {
        id: 'ped-6',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er dehydreringsgrad ved inndragne øyne, nedsatt hudturgor og irritabilitet hos barn?',
        options: [
            'Lett dehydrering (3-5%)',
            'Moderat dehydrering (6-9%)',
            'Alvorlig dehydrering (>10%)',
            'Ingen dehydrering'
        ],
        correctAnswer: 1,
        explanation: 'Inndragne øyne, nedsatt hudturgor og irritabilitet tyder på moderat dehydrering (6-9%). Alvorlig dehydrering gir slapphet, svært nedsatt turgor og sirkulatorisk påvirkning.'
    },
    {
        id: 'ped-7',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Feberkramper er vanligvis godartede og krever sjelden langvarig behandling.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Simple feberkramper (kort, generalisert, ett anfall per feberepisode) er godartede. De fleste barn trenger ingen langtidsbehandling, men foreldrene trenger informasjon og trygghet.'
    },
    {
        id: 'ped-8',
        category: 'pediatri',
        difficulty: 'exam',
        type: 'case',
        question: 'Et spedbarn på 6 uker har eksplosive grønne avføringer, sprutbrekninger etter måltid og dårlig vektøpptgang. Hva vurderes?',
        options: [
            'Normal spising',
            'Kumelkproteinallergi eller pylorusstenose',
            'Obstipasjon',
            'For mye mat'
        ],
        correctAnswer: 1,
        explanation: 'Sprutbrekninger + dårlig trivsel hos spedbarn: vurder pylorusstenose (projectile vomiting, metabolsk alkalose). Grønne avføringer kan indikere kumelkproteinallergi.'
    },
    {
        id: 'ped-9',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typisk for RS-virus bronkiolitt hos spedbarn?',
        options: [
            'Kun feber uten respirasjonsproblemer',
            'Pipende respirasjon, nesefløyten, inndragninger og spiseproblemer',
            'Diaré og oppkast',
            'Utslett over hele kroppen'
        ],
        correctAnswer: 1,
        explanation: 'RSV-bronkiolitt gir typisk tett nese, hoste, pipende respirasjon, inndragninger og ernæringsvansker. Vanligst hos barn <12 måneder. Kan kreve sykehusinnleggelse.'
    },
    {
        id: 'ped-10',
        category: 'pediatri',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Barn kan ha bakteriemi uten tydelig infeksjonsfokus.',
        options: ['Sant', 'Usant'],
        correctAnswer: 0,
        explanation: 'Okkult bakteriemi kan forekomme hos febrile barn, spesielt de under 3 år. Vurdering av alvorlighetsgrad er viktig. Alvorlig syke barn krever bred utredning.'
    },
    {
        id: 'ped-11',
        category: 'pediatri',
        difficulty: 'exam',
        type: 'case',
        question: 'Et barn på 4 år har feber, ensidig halssmerte, trismus og asymmetrisk tonsiller. Diagnose?',
        options: [
            'Vanlig tonsillitt',
            'Peritonsillær abscess',
            'Mononukleose',
            'Falsk krupp'
        ],
        correctAnswer: 1,
        explanation: 'Ensidig halssmerte, trismus (begrenset gapeevne), asymmetriske tonsiller og feber hos barn = peritonsillær abscess. Krever antibiotika og ofte drenasje.'
    },
    {
        id: 'ped-12',
        category: 'pediatri',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er viktig å huske om medikamentdosering hos barn?',
        options: [
            'Bruk alltid voksendoser',
            'Dosering baseres på kroppsvekt (mg/kg)',
            'Barn trenger ingen medisiner',
            'Gi alltid høyeste dose for sikkerhet'
        ],
        correctAnswer: 1,
        explanation: 'Barn er ikke små voksne. Medikamentdoser beregnes ut fra kroppsvekt (mg/kg) eller kroppsoverflate. Overdosering og underdosering kan ha alvorlige konsekvenser.'
    }
);
