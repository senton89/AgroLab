// CustomerService.js
const API_URL = 'http://localhost:5005/api/customers'; // Adjust the endpoint as necessary

const CustomerService = {
    async addCustomer(customer) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer),
        });
        if (!response.ok) {
            throw new Error('Failed to add customer');
        }
        return await response.json();
    },

    async fetchCustomers() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch customers');
        }
        return await response.json();
    }
};

export default CustomerService;