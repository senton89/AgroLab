// CustomerService.js

const API_URL = 'http://localhost:5005/api/customers';

const CustomerService = {
    // Метод для добавления нового клиента
    async addCustomer(customer) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(customer), // Преобразуем данные в JSON
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить клиента'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для получения списка клиентов
    async fetchCustomers() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить клиентов'); // Генерируем ошибку, если запрос не удался
        }
        return await response.json(); // Возвращаем данные в формате JSON
    },

    // Метод для обновления существующего клиента
    async updateCustomer(id, updatedCustomer) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCustomer),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить клиента');
        }
        return await response.json();
    }
};

export default CustomerService;