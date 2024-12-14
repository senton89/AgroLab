// ReagentService.js
const API_URL = 'http://localhost:5005/api/reagents'; // Замените на ваш реальный URL API

const ReagentService = {
    async addReagent(reagent) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reagent),
        });
        if (!response.ok) {
            throw new Error('Не удалось добавить реагент');
        }
        return await response.json();
    },

    async fetchReagents() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Не удалось получить реагенты');
        }
        return await response.json();
    }
};

export default ReagentService;