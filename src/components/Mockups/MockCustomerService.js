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
];

const MockCustomerService = {
    async addCustomer(customer) {
        // If customer has an id, it's an update
        if (customer.id) {
            const index = mockCustomerData.findIndex(c => c.id === customer.id);
            if (index !== -1) {
                mockCustomerData[index] = { ...customer };
                return customer;
            }
        }

        // Otherwise it's a new customer
        const newCustomer = { ...customer, id: mockCustomerData.length + 1 };
        mockCustomerData.push(newCustomer);
        return newCustomer;
    },

    async fetchCustomers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...mockCustomerData]);
            }, 500);
        });
    },

    async updateCustomer(id, updatedCustomer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = mockCustomerData.findIndex(customer => customer.id === id);
                if (index !== -1) {
                    mockCustomerData[index] = { ...mockCustomerData[index], ...updatedCustomer };
                    resolve(mockCustomerData[index]);
                } else {
                    reject(new Error('Customer not found'));
                }
            }, 500);
        });
    },

    async deleteCustomer(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = mockCustomerData.findIndex(customer => customer.id === id);
                if (index !== -1) {
                    mockCustomerData.splice(index, 1);
                    resolve({ success: true });
                } else {
                    reject(new Error('Customer not found'));
                }
            }, 500);
        });
    }
};

export default MockCustomerService;