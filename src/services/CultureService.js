// CultureService.js
const API_URL = 'http://localhost:5005/api/cultures'; // Adjust the endpoint as necessary

const CultureService = {
    async fetchCultures() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch cultures');
        }
        return await response.json();
    },

    async addCulture(culture) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(culture),
        });
        if (!response.ok) {
            throw new Error('Failed to add culture');
        }
        return await response.json();
    },
};

export default CultureService;