const API_URL = 'http://localhost:5005/api/orders';

const OrderService = {
    // Метод для добавления нового заказа
    async addOrder(order) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(order), // Преобразуем данные в JSON
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить заказ'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для получения списка заказов
    async getOrders() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить заказы'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для обновления существующего заказа
    async updateOrder(id, updatedOrder) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedOrder),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить заказ');
        }
        return await response.json();
    },

    // Метод для удаления заказа
    async deleteOrder(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить заказ');
        }
        return await response.json();
    }
};

export default OrderService;