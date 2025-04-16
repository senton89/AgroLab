// MockCultureService.js
const mockCultures = [
    'Пшеница',
    'Рожь',
    'Ячмень',
    'Овес',
    'Кукуруза',
    'Соя',
    'Подсолнечник'
];

const MockCultureService = {
    async fetchCultures() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockCultures);
            }, 100); // Имитация задержки
        });
    },

    async addCulture(culture) {
        return new Promise((resolve) => {
            setTimeout(() => {
                mockCultures.push(culture);
                resolve(culture);
            }, 100); // Имитация задержки
        });
    },
    async updateCulture(oldCulture, newCulture) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = mockCultures.indexOf(oldCulture);
                if (index !== -1) {
                    mockCultures[index] = newCulture;
                    resolve(newCulture);
                } else {
                    resolve(null);
                }
            }, 100); // Simulate delay
        });
    },

    async deleteCulture(culture) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const cultureToDelete = typeof culture === 'object' ? culture.name : culture;
                const index = mockCultures.indexOf(cultureToDelete);

                if (index !== -1) {
                    mockCultures.splice(index, 1);
                    resolve({ success: true });
                } else {
                    resolve({ success: false, error: 'Culture not found' });
                }
            }, 100); // Simulate delay
        });
    }
};

export default MockCultureService;