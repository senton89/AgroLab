import CultureService from '../services/CultureService';
import MockCultureService from '../components/Mockups/MockCultureService';

const isTesting = true; // Проверка, находимся ли мы в тестовом режиме

const CultureRepository = {
    // Метод для получения культур
    async getCultures() {
        const service = isTesting ? MockCultureService : CultureService;
        return await service.fetchCultures();
    },

    // Метод для создания новой культуры
    async createCulture(culture) {
        const service = isTesting ? MockCultureService : CultureService;
        return await service.addCulture(culture);
    },

    // Метод для обновления существующей культуры
    async updateCulture(oldCulture, newCulture) {
        const service = isTesting ? MockCultureService : CultureService;
        return await service.updateCulture(oldCulture, newCulture);
    },

    // Метод для получения культуры по имени
    async getCultureByName(cultureName) {
        const service = isTesting ? MockCultureService : CultureService;
        const cultures = await service.fetchCultures();

        // Найти культуру по имени
        return cultures.find(culture =>
            typeof culture === 'object' ?
                culture.name === cultureName :
                culture === cultureName
        );
    },

    // Метод для получения норм по культуре
    async getNormsByCulture(cultureName, category, reproduction) {
        const culture = await this.getCultureByName(cultureName);

        if (!culture || typeof culture !== 'object') {
            return null;
        }

        // Вернуть нормы в зависимости от категории и размножения
        if (category === 'seeds' && culture.seedNorms) {
            return culture.seedNorms[reproduction] || null;
        } else if (category === 'potatoes' && culture.potatoNorms) {
            return culture.potatoNorms[reproduction] || null;
        }

        return null;
    },

    // Метод для удаления культуры
    async deleteCulture(culture) {
        const service = isTesting ? MockCultureService : CultureService;
        return await service.deleteCulture(culture);
    }
};

export default CultureRepository;