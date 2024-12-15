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
};

export default MockCultureService;