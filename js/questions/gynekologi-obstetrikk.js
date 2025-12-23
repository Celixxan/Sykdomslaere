/**
 * Spørsmål: Gynekologi og obstetrikk
 * Endometriose, klimakteriet, mastitt
 */

window.QuizQuestions = window.QuizQuestions || [];

window.QuizQuestions.push(
    {
        id: 'gyn-1',
        category: 'gynekologi-obstetrikk',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Hva er typiske symptomer på endometriose?',
        options: [
            'Smertefri, uregelmessig menstruasjon',
            'Dysmenoré, dyspareuni og kroniske bekkensmerter',
            'Amenoré og vektøkning',
            'Hyppig vannlating og feber'
        ],
        correctAnswer: 1,
        explanation: 'Endometriose gir typisk sykliske smerter (dysmenoré), smerter ved samleie (dyspareuni), kroniske bekkensmerter og kan påvirke fertilitet.'
    },
    {
        id: 'gyn-2',
        category: 'gynekologi-obstetrikk',
        difficulty: 'easy',
        type: 'truefalse',
        question: 'Mastitt hos ammende kvinner krever alltid seponering av amming.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Ved mastitt anbefales fortsatt amming/pumping for å tømme brystet. Seponering kan forverre tilstanden. Antibiotika gis ved bakteriell mastitt, men amming kan fortsette.'
    },
    {
        id: 'gyn-3',
        category: 'gynekologi-obstetrikk',
        difficulty: 'exam',
        type: 'case',
        question: 'En 52 år gammel kvinne har hetetokter, nattsvette, søvnproblemer og vaginale plager. Siste menstruasjon var for 14 måneder siden. Hva er tilstanden?',
        options: [
            'Hypotyreose',
            'Klimakteriet (menopausen)',
            'Hyperprolaktinemi',
            'Tidlig graviditet'
        ],
        correctAnswer: 1,
        explanation: 'Amenoré >12 måneder hos kvinne >45 år, kombinert med vasomotoriske symptomer (hetetokter, svette) og urogenitale plager, indikerer menopause.'
    },
    {
        id: 'gyn-4',
        category: 'gynekologi-obstetrikk',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Hva er preeklampsi?',
        options: [
            'Lavt blodtrykk i svangerskapet',
            'Hypertensjon og proteinuri etter uke 20 i svangerskapet',
            'Diabetes i svangerskapet',
            'Kvalme tidlig i svangerskapet'
        ],
        correctAnswer: 1,
        explanation: 'Preeklampsi er svangerskapsforgiftning med hypertensjon (≥140/90) og proteinuri etter uke 20. Kan utvikles til eklampsi med kramper. Krever tett oppfølging.'
    },
    {
        id: 'gyn-5',
        category: 'gynekologi-obstetrikk',
        difficulty: 'medium',
        type: 'truefalse',
        question: 'Ektopisk graviditet (utenforlivmor svangerskap) er alltid lokalisert i egglederen.',
        options: ['Sant', 'Usant'],
        correctAnswer: 1,
        explanation: 'Ca. 95% av ektopiske svangerskap er i egglederen, men de kan også forekomme i ovariet, cervix, bukhulen eller tidligere keisersnittarr.'
    }
);
