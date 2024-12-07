// EquipmentService.js
const API_URL = 'http://localhost:5005/api/equipment'; // Adjust the endpoint as necessary

const EquipmentService = {
    async addEquipment(equipment) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(equipment),
        });
        if (!response.ok) {
            throw new Error('Failed to add equipment');
        }
        return await response.json();
    },

    async fetchEquipment() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch equipment');
        }
        return await response.json();
    }
};

export default EquipmentService;