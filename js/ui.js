/**
 * ui.js
 * DOM-manipulasjon og UI-oppdateringer
 */

const UI = {
    // Cache DOM-elementer
    elements: {},

    /**
     * Initialiser element-cache
     */
    init() {
        this.elements = {
            // Views
            setupView: document.getElementById('setup-view'),
            quizView: document.getElementById('quiz-view'),
            resultView: document.getElementById('result-view'),

            // Setup
            categorySelect: document.getElementById('category-select'),
            difficultySelect: document.getElementById('difficulty-select'),
            btnTraining: document.getElementById('btn-training'),
            btnExam: document.getElementById('btn-exam'),
            btnStart: document.getElementById('btn-start'),

            // Quiz
            quizProgress: document.getElementById('quiz-progress'),
            quizTimer: document.getElementById('quiz-timer'),
            progressFill: document.getElementById('progress-fill'),
            questionType: document.getElementById('question-type'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            feedbackContainer: document.getElementById('feedback-container'),
            feedbackText: document.getElementById('feedback-text'),
            feedbackExplanation: document.getElementById('feedback-explanation'),
            btnNext: document.getElementById('btn-next'),
            btnQuit: document.getElementById('btn-quit'),

            // Results
            scorePercent: document.getElementById('score-percent'),
            scoreCorrect: document.getElementById('score-correct'),
            scoreWrong: document.getElementById('score-wrong'),
            scoreTotal: document.getElementById('score-total'),
            resultMessage: document.getElementById('result-message'),
            btnRetry: document.getElementById('btn-retry'),
            btnBack: document.getElementById('btn-back')
        };

        console.log('[ui.js] Elements cached');
    },

    /**
     * Vis en spesifikk view, skjul andre
     */
    showView(viewName) {
        const views = ['setup', 'quiz', 'result'];
        views.forEach(v => {
            const el = this.elements[`${v}View`];
            if (el) {
                el.classList.toggle('hidden', v !== viewName);
            }
        });
        AppState.currentView = viewName;
    },

    /**
     * Populer kategori-dropdown
     */
    populateCategories(categories) {
        const select = this.elements.categorySelect;
        select.innerHTML = '<option value="">-- Velg kategori --</option>';

        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            select.appendChild(option);
        });
    },

    /**
     * Oppdater modus-knapper
     */
    setModeButtons(mode) {
        this.elements.btnTraining.classList.toggle('active', mode === 'training');
        this.elements.btnExam.classList.toggle('active', mode === 'exam');
        AppState.mode = mode;
    },

    /**
     * Aktiver/deaktiver start-knapp
     */
    updateStartButton() {
        const hasCategory = this.elements.categorySelect.value !== '';
        this.elements.btnStart.disabled = !hasCategory;
    },

    /**
     * Vis spørsmål
     */
    renderQuestion(question, index, total) {
        // Progress
        this.elements.quizProgress.textContent = `Spørsmål ${index + 1} / ${total}`;
        const percent = ((index) / total) * 100;
        this.elements.progressFill.style.width = `${percent}%`;

        // Type-badge
        const typeLabels = {
            mcq: 'Flervalg',
            truefalse: 'Sant/Usant',
            case: 'Kasus'
        };
        this.elements.questionType.textContent = typeLabels[question.type] || 'Spørsmål';

        // Spørsmålstekst
        this.elements.questionText.textContent = question.question;

        // Svaralternativer
        this.elements.optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];

        question.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.index = i;
            btn.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            `;
            this.elements.optionsContainer.appendChild(btn);
        });

        // Skjul feedback og neste-knapp
        this.elements.feedbackContainer.classList.add('hidden');
        this.elements.btnNext.classList.add('hidden');
    },

    /**
     * Vis feedback etter svar (kun treningsmodus)
     */
    showFeedback(isCorrect, correctIndex, explanation) {
        const container = this.elements.feedbackContainer;
        container.classList.remove('hidden', 'correct', 'incorrect');
        container.classList.add(isCorrect ? 'correct' : 'incorrect');

        this.elements.feedbackText.textContent = isCorrect ? 'Riktig!' : 'Feil!';
        this.elements.feedbackExplanation.textContent = explanation || '';

        // Marker korrekt/feil svar
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correctIndex) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected')) {
                btn.classList.add('incorrect');
            }
        });

        this.elements.btnNext.classList.remove('hidden');
    },

    /**
     * Marker valgt svar
     */
    selectOption(button) {
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    },

    /**
     * Vis/skjul timer
     */
    showTimer(show) {
        this.elements.quizTimer.classList.toggle('hidden', !show);
    },

    /**
     * Oppdater timer-display
     */
    updateTimer(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        this.elements.quizTimer.textContent =
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },

    /**
     * Vis resultater
     */
    renderResults(results) {
        this.elements.scorePercent.textContent = `${results.percent}%`;
        this.elements.scoreCorrect.textContent = results.correct;
        this.elements.scoreWrong.textContent = results.wrong;
        this.elements.scoreTotal.textContent = results.total;

        // Melding basert på score
        let message = '';
        if (results.percent >= 90) {
            message = '<h3>Fantastisk!</h3><p>Du mestrer dette stoffet svært godt.</p>';
        } else if (results.percent >= 70) {
            message = '<h3>Bra jobbet!</h3><p>Du har god forståelse, men det er rom for forbedring.</p>';
        } else if (results.percent >= 50) {
            message = '<h3>På rett vei</h3><p>Fortsett å øve for å styrke kunnskapen din.</p>';
        } else {
            message = '<h3>Ikke gi opp!</h3><p>Les gjennom stoffet på nytt og prøv igjen.</p>';
        }
        this.elements.resultMessage.innerHTML = message;
    }
};

console.log('[ui.js] Loaded');
