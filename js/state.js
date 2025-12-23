/**
 * state.js
 * Global app state management
 * Lastes først – andre moduler avhenger av dette
 */

const AppState = {
    // Nåværende view: 'setup' | 'quiz' | 'result'
    currentView: 'setup',

    // Quiz-modus: 'training' | 'exam'
    mode: 'training',

    // Valgt kategori og vanskelighetsgrad
    selectedCategory: null,
    selectedDifficulty: 'all',

    // Nåværende quiz-sesjon
    quiz: {
        questions: [],
        currentIndex: 0,
        answers: [],
        startTime: null,
        endTime: null
    },

    // Eksamen-timer (sekunder)
    examTimeLimit: 20 * 60, // 20 minutter default
    examTimeRemaining: null,

    // Kategorier (fylles ut i senere fase)
    categories: []
};

// Hjelpefunksjon for å resette quiz-state
function resetQuizState() {
    AppState.quiz = {
        questions: [],
        currentIndex: 0,
        answers: [],
        startTime: null,
        endTime: null
    };
    AppState.examTimeRemaining = null;
}

console.log('[state.js] Loaded');
