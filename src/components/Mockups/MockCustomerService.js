// MockCustomerService.js
const mockCustomerData = [
    {
        id: 1,
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        address: 'Улица Ленина, 1',
        inn: '1234567890'
    },
    {
        id: 2,
        name: 'Петр Петров',
        email: 'petr@example.com',
        address: 'Улица Пушкина, 2',
        inn: '0987654321'
    },
    // Добавьте больше моковых данных по мере необходимости
];

const MockCustomerService = {
    async addCustomer(customer) {
        const newCustomer = { ...customer, id: mockCustomerData.length + 1 };
        mockCustomerData.push(newCustomer);
        return newCustomer;
    },

    async fetchCustomers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockCustomerData);
            }, 500); // Симуляция задержки сети
        });
    }
};

export default MockCustomerService;