/**
 * quiz-engine.js
 * Kjerne quiz-logikk: hente spørsmål, sjekke svar, beregne score
 */

const QuizEngine = {
    // Dummy-spørsmål for testing (fase 2)
    allQuestions: [
        {
            id: 'intro-1',
            category: 'introduksjon',
            difficulty: 'easy',
            type: 'mcq',
            question: 'Hva står NEWS2 for?',
            options: [
                'National Early Warning Score 2',
                'Norwegian Emergency Warning System 2',
                'Nurse Evaluation Warning Scale 2',
                'National Emergency Ward Score 2'
            ],
            correctAnswer: 0,
            explanation: 'NEWS2 (National Early Warning Score 2) er et standardisert scoringssystem for tidlig identifisering av akutt sykdom.'
        },
        {
            id: 'intro-2',
            category: 'introduksjon',
            difficulty: 'easy',
            type: 'truefalse',
            question: 'Ved hjertestans skal man starte HLR umiddelbart.',
            options: ['Sant', 'Usant'],
            correctAnswer: 0,
            explanation: 'Ved hjertestans er rask oppstart av HLR avgjørende for overlevelse. Hver minutt uten HLR reduserer sjansen for overlevelse med ca. 10%.'
        },
        {
            id: 'intro-3',
            category: 'introduksjon',
            difficulty: 'medium',
            type: 'mcq',
            question: 'Hvilken NEWS2-score indikerer behov for umiddelbar klinisk vurdering?',
            options: [
                '1-4',
                '5-6',
                '7 eller høyere',
                '0'
            ],
            correctAnswer: 2,
            explanation: 'NEWS2-score på 7 eller høyere indikerer kritisk sykdom og behov for umiddelbar klinisk vurdering og tiltak.'
        },
        {
            id: 'intro-4',
            category: 'introduksjon',
            difficulty: 'medium',
            type: 'case',
            question: 'En 68 år gammel mann kommer inn med brystsmerter, svetting og kvalme. Hva er første prioritet?',
            options: [
                'Ta EKG',
                'Sikre frie luftveier og sjekke bevissthet',
                'Gi smertestillende',
                'Ringe pårørende'
            ],
            correctAnswer: 1,
            explanation: 'ABCDE-prinsippet: Alltid sikre luftveier (A) og sjekke bevissthet først. Deretter kan man gå videre med undersøkelser som EKG.'
        },
        {
            id: 'intro-5',
            category: 'introduksjon',
            difficulty: 'exam',
            type: 'mcq',
            question: 'Hvilken respiratorisk frekvens gir 3 poeng i NEWS2?',
            options: [
                '12-20/min',
                '21-24/min',
                '9-11/min',
                '≤8 eller ≥25/min'
            ],
            correctAnswer: 3,
            explanation: 'Respiratorisk frekvens ≤8 eller ≥25 per minutt gir 3 poeng i NEWS2, som indikerer alvorlig avvik fra normalverdier.'
        }
    ],

    /**
     * Filtrer spørsmål basert på kategori og vanskelighetsgrad
     */
    getFilteredQuestions(category, difficulty) {
        let filtered = this.allQuestions;

        if (category && category !== 'all') {
            filtered = filtered.filter(q => q.category === category);
        }

        if (difficulty && difficulty !== 'all') {
            filtered = filtered.filter(q => q.difficulty === difficulty);
        }

        return filtered;
    },

    /**
     * Bland array (Fisher-Yates shuffle)
     */
    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    /**
     * Start ny quiz
     */
    startQuiz(category, difficulty, maxQuestions = 10) {
        const filtered = this.getFilteredQuestions(category, difficulty);
        const shuffled = this.shuffle(filtered);
        const questions = shuffled.slice(0, maxQuestions);

        AppState.quiz = {
            questions,
            currentIndex: 0,
            answers: [],
            startTime: Date.now(),
            endTime: null
        };

        return questions.length > 0;
    },

    /**
     * Hent nåværende spørsmål
     */
    getCurrentQuestion() {
        const { questions, currentIndex } = AppState.quiz;
        return questions[currentIndex] || null;
    },

    /**
     * Registrer svar og gå til neste
     */
    submitAnswer(answerIndex) {
        const question = this.getCurrentQuestion();
        if (!question) return null;

        const isCorrect = answerIndex === question.correctAnswer;

        AppState.quiz.answers.push({
            questionId: question.id,
            givenAnswer: answerIndex,
            correctAnswer: question.correctAnswer,
            isCorrect
        });

        return {
            isCorrect,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation
        };
    },

    /**
     * Gå til neste spørsmål
     */
    nextQuestion() {
        const { questions, currentIndex } = AppState.quiz;
        if (currentIndex < questions.length - 1) {
            AppState.quiz.currentIndex++;
            return true;
        }
        return false;
    },

    /**
     * Sjekk om quiz er ferdig
     */
    isQuizComplete() {
        const { questions, answers } = AppState.quiz;
        return answers.length >= questions.length;
    },

    /**
     * Beregn resultater
     */
    getResults() {
        const { questions, answers, startTime } = AppState.quiz;
        AppState.quiz.endTime = Date.now();

        const correct = answers.filter(a => a.isCorrect).length;
        const total = questions.length;
        const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
        const timeSpent = Math.round((AppState.quiz.endTime - startTime) / 1000);

        return {
            correct,
            wrong: total - correct,
            total,
            percent,
            timeSpent,
            answers,
            questions
        };
    },

    /**
     * Hent alle unike kategorier
     */
    getCategories() {
        const categories = new Set(this.allQuestions.map(q => q.category));
        return Array.from(categories);
    },

    /**
     * Tell spørsmål per kategori
     */
    getQuestionCount(category, difficulty) {
        return this.getFilteredQuestions(category, difficulty).length;
    }
};

console.log('[quiz-engine.js] Loaded');
