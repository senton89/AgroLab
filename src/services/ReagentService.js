const API_URL = 'http://localhost:5005/api/reagents';

const ReagentService = {
    // Метод для добавления нового реагента
    async addReagent(reagent) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(reagent), // Преобразуем данные в JSON
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить реагент'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для получения списка реагентов
    async fetchReagents() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить реагенты'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для обновления существующего реагента
    async updateReagent(id, updatedReagent) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReagent),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить реагент');
        }
        return await response.json();
    }
};

export default ReagentService;