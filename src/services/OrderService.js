// OrderService.js
const API_URL = 'http://localhost:5005/api/orders'; // Убедитесь, что этот URL соответствует вашему API

const OrderService = {
    async addOrder(order) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        if (!response.ok) {
            throw new Error('Не удалось добавить образец');
        }
        return await response.json();
    },

    async fetchOrders() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Не удалось получить образцы');
        }
        return await response.json();
    }
};

export default OrderService;