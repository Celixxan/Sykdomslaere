/**
 * quiz-engine.js
 * Kjerne quiz-logikk: hente spørsmål, sjekke svar, beregne score
 */

const QuizEngine = {
    // Alle spørsmål (fylles ut i senere fase)
    allQuestions: [],

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
