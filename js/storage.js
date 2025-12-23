/**
 * storage.js
 * LocalStorage-håndtering for quiz-resultater og statistikk
 */

const Storage = {
    KEYS: {
        RESULTS: 'sykdomslare_results',
        STATS: 'sykdomslare_stats'
    },

    /**
     * Hent lagrede resultater
     */
    getResults() {
        try {
            const data = localStorage.getItem(this.KEYS.RESULTS);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('[storage.js] Feil ved lesing:', e);
            return [];
        }
    },

    /**
     * Lagre nytt resultat
     */
    saveResult(result) {
        try {
            const results = this.getResults();
            results.push({
                ...result,
                timestamp: Date.now()
            });
            localStorage.setItem(this.KEYS.RESULTS, JSON.stringify(results));
        } catch (e) {
            console.error('[storage.js] Feil ved lagring:', e);
        }
    },

    /**
     * Hent statistikk per kategori
     */
    getStats() {
        try {
            const data = localStorage.getItem(this.KEYS.STATS);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.error('[storage.js] Feil ved lesing av stats:', e);
            return {};
        }
    },

    /**
     * Oppdater statistikk for en kategori
     */
    updateStats(category, correct, total) {
        try {
            const stats = this.getStats();
            if (!stats[category]) {
                stats[category] = { correct: 0, total: 0 };
            }
            stats[category].correct += correct;
            stats[category].total += total;
            localStorage.setItem(this.KEYS.STATS, JSON.stringify(stats));
        } catch (e) {
            console.error('[storage.js] Feil ved oppdatering av stats:', e);
        }
    },

    /**
     * Nullstill all data
     */
    clearAll() {
        localStorage.removeItem(this.KEYS.RESULTS);
        localStorage.removeItem(this.KEYS.STATS);
    }
};

console.log('[storage.js] Loaded');
