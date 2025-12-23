/**
 * app.js
 * Hovedapplikasjon - initialisering og event-binding
 * Lastes sist etter alle andre moduler
 */

const App = {
    timerInterval: null,

    /**
     * Initialiser applikasjonen
     */
    init() {
        console.log('[app.js] Initializing...');

        // Cache DOM-elementer
        UI.init();

        // Bind events
        this.bindEvents();

        // Sett opp kategorier (placeholder til fase 2)
        this.setupCategories();

        // Vis setup-view
        UI.showView('setup');

        console.log('[app.js] Ready');
    },

    /**
     * Sett opp kategorier fra quiz-engine
     */
    setupCategories() {
        // Kun kategorier med spørsmål vises (fase 2: kun introduksjon)
        const categories = [
            { id: 'introduksjon', name: 'Introduksjon (5 spørsmål)' }
            // Flere kategorier legges til i fase 3
        ];

        AppState.categories = categories;
        UI.populateCategories(categories);
    },

    /**
     * Bind alle event listeners
     */
    bindEvents() {
        const el = UI.elements;

        // Modus-valg
        el.btnTraining.addEventListener('click', () => {
            UI.setModeButtons('training');
        });

        el.btnExam.addEventListener('click', () => {
            UI.setModeButtons('exam');
        });

        // Kategori-valg
        el.categorySelect.addEventListener('change', () => {
            AppState.selectedCategory = el.categorySelect.value;
            UI.updateStartButton();
        });

        // Vanskelighetsgrad
        el.difficultySelect.addEventListener('change', () => {
            AppState.selectedDifficulty = el.difficultySelect.value;
        });

        // Start quiz
        el.btnStart.addEventListener('click', () => {
            this.startQuiz();
        });

        // Svaralternativer (delegert)
        el.optionsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.option-btn');
            if (btn && !btn.disabled) {
                this.handleAnswer(btn);
            }
        });

        // Neste spørsmål
        el.btnNext.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Avslutt quiz
        el.btnQuit.addEventListener('click', () => {
            this.endQuiz();
        });

        // Prøv igjen
        el.btnRetry.addEventListener('click', () => {
            this.startQuiz();
        });

        // Tilbake til setup
        el.btnBack.addEventListener('click', () => {
            UI.showView('setup');
        });

        // Default: treningsmodus
        UI.setModeButtons('training');
    },

    /**
     * Start quiz
     */
    startQuiz() {
        const category = AppState.selectedCategory;
        const difficulty = AppState.selectedDifficulty;

        // Reset state
        resetQuizState();

        // Start quiz-engine
        const hasQuestions = QuizEngine.startQuiz(category, difficulty);

        if (!hasQuestions) {
            alert('Ingen spørsmål funnet for denne kombinasjonen av kategori og vanskelighetsgrad.');
            return;
        }

        // Vis quiz-view
        UI.showView('quiz');

        // Vis timer i eksamensmodus
        if (AppState.mode === 'exam') {
            AppState.examTimeRemaining = AppState.examTimeLimit;
            UI.showTimer(true);
            this.startTimer();
        } else {
            UI.showTimer(false);
        }

        // Vis første spørsmål
        this.showCurrentQuestion();
    },

    /**
     * Vis nåværende spørsmål
     */
    showCurrentQuestion() {
        const question = QuizEngine.getCurrentQuestion();
        if (!question) return;

        const { questions, currentIndex } = AppState.quiz;
        UI.renderQuestion(question, currentIndex, questions.length);
    },

    /**
     * Håndter svar
     */
    handleAnswer(button) {
        const answerIndex = parseInt(button.dataset.index);

        // Marker valgt
        UI.selectOption(button);

        // Registrer svar
        const result = QuizEngine.submitAnswer(answerIndex);

        // Vis feedback (kun treningsmodus)
        if (AppState.mode === 'training') {
            UI.showFeedback(result.isCorrect, result.correctAnswer, result.explanation);
        } else {
            // Eksamensmodus: gå direkte videre
            setTimeout(() => this.nextQuestion(), 300);
        }
    },

    /**
     * Gå til neste spørsmål
     */
    nextQuestion() {
        if (QuizEngine.isQuizComplete()) {
            this.endQuiz();
            return;
        }

        if (QuizEngine.nextQuestion()) {
            this.showCurrentQuestion();
        } else {
            this.endQuiz();
        }
    },

    /**
     * Avslutt quiz og vis resultater
     */
    endQuiz() {
        // Stopp timer
        this.stopTimer();

        // Hent resultater
        const results = QuizEngine.getResults();

        // Lagre
        Storage.saveResult({
            category: AppState.selectedCategory,
            difficulty: AppState.selectedDifficulty,
            mode: AppState.mode,
            ...results
        });

        Storage.updateStats(AppState.selectedCategory, results.correct, results.total);

        // Vis resultater
        UI.renderResults(results);
        UI.showView('result');
    },

    /**
     * Start eksamen-timer
     */
    startTimer() {
        this.stopTimer();
        this.timerInterval = setInterval(() => {
            AppState.examTimeRemaining--;
            UI.updateTimer(AppState.examTimeRemaining);

            if (AppState.examTimeRemaining <= 0) {
                this.endQuiz();
            }
        }, 1000);

        UI.updateTimer(AppState.examTimeRemaining);
    },

    /**
     * Stopp timer
     */
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
};

// Start når DOM er klar
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
