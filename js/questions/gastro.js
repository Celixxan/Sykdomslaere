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
    }
);
