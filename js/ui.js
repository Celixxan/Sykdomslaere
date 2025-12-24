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
            reviewView: document.getElementById('review-view'),

            // Setup
            categorySelect: document.getElementById('category-select'),
            difficultySelect: document.getElementById('difficulty-select'),
            btnTraining: document.getElementById('btn-training'),
            btnExam: document.getElementById('btn-exam'),
            btnStart: document.getElementById('btn-start'),
            categoryStats: document.getElementById('category-stats'),
            catStatAttempts: document.getElementById('cat-stat-attempts'),
            catStatPercent: document.getElementById('cat-stat-percent'),
            catStatFill: document.getElementById('cat-stat-fill'),

            // Quiz
            quizProgress: document.getElementById('quiz-progress'),
            quizTimer: document.getElementById('quiz-timer'),
            progressFill: document.getElementById('progress-fill'),
            questionType: document.getElementById('question-type'),
            questionText: document.getElementById('question-text'),
            questionCard: document.querySelector('.question-card'),
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
            btnBack: document.getElementById('btn-back'),
            btnReview: document.getElementById('btn-review'),

            // Review
            reviewList: document.getElementById('review-list'),
            btnBackReview: document.getElementById('btn-back-review'),

            // Dark mode
            btnDarkMode: document.getElementById('btn-dark-mode')
        };

        console.log('[ui.js] Elements cached');
    },

    /**
     * Vis en spesifikk view, skjul andre
     */
    showView(viewName) {
        const views = ['setup', 'quiz', 'result', 'review'];
        views.forEach(v => {
            const el = this.elements[`${v}View`];
            if (el) {
                el.classList.toggle('hidden', v !== viewName);
            }
        });
        AppState.currentView = viewName;

        // Scroll til toppen ved view-bytte
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Sett fokus basert på view
        setTimeout(() => {
            if (viewName === 'setup') {
                this.elements.categorySelect.focus();
            } else if (viewName === 'quiz') {
                this.elements.questionText.focus();
            } else if (viewName === 'result') {
                this.elements.scorePercent.focus();
            }
        }, 100);
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
     * Vis kategori-statistikk
     */
    showCategoryStats(category) {
        if (!category) {
            this.elements.categoryStats.classList.add('hidden');
            return;
        }

        const stats = Storage.getStats();
        let catStats;

        if (category === 'all') {
            // Sum alle kategorier
            catStats = { correct: 0, total: 0 };
            Object.values(stats).forEach(s => {
                catStats.correct += s.correct || 0;
                catStats.total += s.total || 0;
            });
        } else {
            catStats = stats[category] || { correct: 0, total: 0 };
        }

        if (catStats.total === 0) {
            this.elements.categoryStats.classList.add('hidden');
            return;
        }

        const percent = Math.round((catStats.correct / catStats.total) * 100);

        this.elements.catStatAttempts.textContent = catStats.total;
        this.elements.catStatPercent.textContent = `${percent}%`;
        this.elements.catStatFill.style.width = `${percent}%`;
        this.elements.categoryStats.classList.remove('hidden');
    },

    /**
     * Vis spørsmål (renderQuestion)
     */
    renderQuestion(question, index, total) {
        // Progress-tekst og bar
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
        this.elements.questionText.setAttribute('tabindex', '-1');

        // Render svaralternativer
        this.renderAnswers(question.options);

        // Skjul feedback og neste-knapp
        this.elements.feedbackContainer.classList.add('hidden');
        this.elements.feedbackContainer.classList.remove('correct', 'incorrect');
        this.elements.btnNext.classList.add('hidden');

        // Fokus til spørsmålet for skjermlesere
        setTimeout(() => {
            this.elements.questionText.focus();
        }, 50);
    },

    /**
     * Render svaralternativer
     */
    renderAnswers(options) {
        this.elements.optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D', 'E'];

        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.dataset.index = i;
            btn.setAttribute('aria-label', `Alternativ ${letters[i]}: ${opt}`);
            btn.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            `;
            this.elements.optionsContainer.appendChild(btn);
        });
    },

    /**
     * Vis feedback etter svar (renderFeedback)
     * Kun brukt i treningsmodus
     */
    renderFeedback(isCorrect, correctIndex, explanation) {
        const container = this.elements.feedbackContainer;
        container.classList.remove('hidden', 'correct', 'incorrect');
        container.classList.add(isCorrect ? 'correct' : 'incorrect');

        this.elements.feedbackText.textContent = isCorrect ? 'Riktig!' : 'Feil!';
        this.elements.feedbackExplanation.textContent = explanation || '';

        // Marker korrekt/feil svar visuelt
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correctIndex) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected')) {
                btn.classList.add('incorrect');
            }
        });

        // Vis neste-knapp
        this.elements.btnNext.classList.remove('hidden');

        // Scroll til feedback
        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Fokus til neste-knapp
        setTimeout(() => {
            this.elements.btnNext.focus();
        }, 100);
    },

    // Alias for bakoverkompatibilitet
    showFeedback(isCorrect, correctIndex, explanation) {
        this.renderFeedback(isCorrect, correctIndex, explanation);
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
     * Deaktiver alle svaralternativer (brukes i eksamensmodus)
     */
    disableOptions() {
        const buttons = this.elements.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
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

        // Visuell advarsel når tiden er lav
        if (seconds <= 60) {
            this.elements.quizTimer.classList.add('timer-warning');
        } else {
            this.elements.quizTimer.classList.remove('timer-warning');
        }
    },

    /**
     * Vis resultater (renderResults)
     */
    renderResults(results) {
        this.elements.scorePercent.textContent = `${results.percent}%`;
        this.elements.scorePercent.setAttribute('tabindex', '-1');
        this.elements.scoreCorrect.textContent = results.correct;
        this.elements.scoreWrong.textContent = results.wrong;
        this.elements.scoreTotal.textContent = results.total;

        // Melding basert på score
        let message = '';
        let emoji = '';
        if (results.percent >= 90) {
            emoji = '🌟';
            message = '<h3>Fantastisk!</h3><p>Du mestrer dette stoffet svært godt.</p>';
        } else if (results.percent >= 70) {
            emoji = '👍';
            message = '<h3>Bra jobbet!</h3><p>Du har god forståelse, men det er rom for forbedring.</p>';
        } else if (results.percent >= 50) {
            emoji = '📚';
            message = '<h3>På rett vei</h3><p>Fortsett å øve for å styrke kunnskapen din.</p>';
        } else {
            emoji = '💪';
            message = '<h3>Ikke gi opp!</h3><p>Les gjennom stoffet på nytt og prøv igjen.</p>';
        }
        this.elements.resultMessage.innerHTML = `<span class="result-emoji">${emoji}</span>${message}`;

        // Fokus til score for skjermlesere
        setTimeout(() => {
            this.elements.scorePercent.focus();
        }, 100);
    },

    /**
     * Vis/skjul gjennomgang-knapp basert på feil svar
     */
    showReviewButton(hasWrongAnswers) {
        if (hasWrongAnswers) {
            this.elements.btnReview.classList.remove('hidden');
        } else {
            this.elements.btnReview.classList.add('hidden');
        }
    },

    /**
     * Render feil svar for gjennomgang
     */
    renderReview(wrongAnswers) {
        const container = this.elements.reviewList;
        container.innerHTML = '';

        if (wrongAnswers.length === 0) {
            container.innerHTML = '<p class="card">Ingen feil svar å vise!</p>';
            return;
        }

        wrongAnswers.forEach((item, index) => {
            const letters = ['A', 'B', 'C', 'D', 'E'];
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `
                <p class="review-question">${index + 1}. ${item.question.question}</p>
                <div class="review-answers">
                    <div class="review-answer your-answer">
                        Ditt svar: ${letters[item.givenAnswer]}. ${item.question.options[item.givenAnswer]}
                    </div>
                    <div class="review-answer correct-answer">
                        Riktig svar: ${letters[item.correctAnswer]}. ${item.question.options[item.correctAnswer]}
                    </div>
                </div>
                <div class="review-explanation">
                    <strong>Forklaring:</strong>
                    ${item.question.explanation}
                </div>
            `;
            container.appendChild(div);
        });
    },

    /**
     * Bytt mørk/lys modus
     */
    toggleDarkMode() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    },

    /**
     * Last inn lagret tema
     */
    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
};

console.log('[ui.js] Loaded');
