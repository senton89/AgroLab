// MockOrderService.js
const MockOrderService = {
    getOrders: async () => {
        return [
            {
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
            // Добавьте другие образцы по мере необходимости
        ];
    },
    addOrder: async (order) => {
        // Здесь можно добавить логику для добавления образца
        console.log('Добавлен новый заказ:', order);
    },

    updateOrder: async (id, updatedOrder) => {
        console.log('Обновлен заказ:', id, updatedOrder);
        return updatedOrder;
    }
};

export default MockOrderService;