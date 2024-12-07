// MockEquipmentService.js
const mockEquipmentData = [
    {
        id: 1,
        name: 'Экскаватор',
        category: 'Строительное оборудование',
        model: 'CAT 320D',
        inventoryNumber: 'INV-001',
        factoryNumber: 'FAC-001',
        dateOfCommissioning: '2020-01-01',
        certificateNumber: 'CERT-001',
        inspectionDate: '2023-01-01',
        validUntilDate: '2025-01-01',
        width: '2.5',
        length: '7.5',
        height: '3.0',
        depth: '2.0',
        dateOfDecommissioning: ''
    },
    // Add more mock data as needed
];

const MockEquipmentService = {
    async addEquipment(equipment) {
        const newEquipment = { ...equipment, id: mockEquipmentData.length + 1 };
        mockEquipmentData.push(newEquipment);
        return newEquipment;
    },

    async fetchEquipment() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockEquipmentData);
            }, 500); // Simulate network delay
        });
    }
};

export default MockEquipmentService;