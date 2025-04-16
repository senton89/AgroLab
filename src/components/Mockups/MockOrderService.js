// MockOrderService.js

let orders = [
    {
        id: 1,
        customer: 'ООО АФ «Семена Приобья»',
        innKpp: '630514',
        applicationNumber: '№29 от 18.04.2024',
        contractNumber: '№21Л от 19.05.2024',
        specificationNumber: '№2 от 19.04.2024',
        sampleArrivalDate: '18.04.2024',
        testingPeriod: '18.04.24-27.04.24',
        culture: 'Семена овсяницы луговой',
        sort: 'Удача',
        sampleCode: '107 ФС 24',
        sampleCollector: 'Сотрудник ИЛ',
        harvestYear: '2023',
        reproduction: 'ОС – оригинальные семена',
        seedCategory: '',
        sampleWeight: '500 г.',
        batchNumber: '123',
        batchWeight: '250',
        storageLocation: 'склад',
        seedPurpose: ''
    },
    // Add more orders as needed
];

const MockOrderService = {
    getOrders: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...orders]);
            }, 500);
        });
    },

    addOrder: async (order) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newOrder = {...order, id: orders.length + 1};
                orders.push(newOrder);
                resolve(newOrder);
            }, 500);
        });
    },

    updateOrder: async (id, updatedOrder) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = orders.findIndex(order => order.id === id);
                if (index !== -1) {
                    orders[index] = {...orders[index], ...updatedOrder};
                    resolve(orders[index]);
                } else {
                    reject(new Error('Order not found'));
                }
            }, 500);
        });
    },

    deleteOrder: async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = orders.findIndex(order => order.id === id);
                if (index !== -1) {
                    orders.splice(index, 1);
                    resolve({success: true});
                } else {
                    reject(new Error('Order not found'));
                }
            }, 500);
        });
    }
}

export default MockOrderService;