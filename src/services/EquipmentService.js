// EquipmentService.js

const API_URL = 'http://localhost:5005/api/equipment';

const EquipmentService = {
    // Метод для добавления нового оборудования
    async addEquipment(equipment) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(equipment), // Преобразуем данные в JSON
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить оборудование'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для получения списка оборудования
    async fetchEquipment() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить оборудование'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для обновления существующего оборудования
    async updateEquipment(id, updatedEquipment) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEquipment),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить оборудование');
        }
        return await response.json();
    }
};

export default EquipmentService;