// CultureService.js

const API_URL = 'http://localhost:5005/api/cultures';

const CultureService = {
    // Метод для получения культур
    async fetchCultures() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить культуры'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для добавления новой культуры
    async addCulture(culture) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(culture), // Преобразуем данные в JSON
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить культуру'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для обновления существующей культуры
    async updateCulture(oldCulture, newCulture) {
        const response = await fetch(`${API_URL}/${typeof oldCulture === 'string' ? oldCulture : oldCulture.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCulture),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить культуру');
        }
        return await response.json();
    },
    async deleteCulture(culture) {
        const cultureName = typeof culture === 'object' ? culture.name : culture;
        const response = await fetch(`${API_URL}/${encodeURIComponent(cultureName)}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить культуру');
        }

        return await response.json();
    }
};

export default CultureService;