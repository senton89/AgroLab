// CultureRepository.js
import CultureService from '../services/CultureService';
import MockCultureService from '../components/Mockups/MockCultureService'; // Импортируйте мок-сервис

const isTesting = true; // Проверяем, находимся ли мы в тестовом режиме

const CultureRepository = {
    async getCultures() {
        const service = isTesting ? MockCultureService : CultureService; // Выбор сервиса
        return await service.fetchCultures(); // Используем выбранный сервис
    },

    async createCulture(culture) {
        const service = isTesting ? MockCultureService : CultureService; // Выбор сервиса
        return await service.addCulture(culture); // Используем выбранный сервис
    },
    async updateCulture(oldCulture, newCulture) {
        const service = isTesting ? MockCultureService : CultureService;
        return await service.updateCulture(oldCulture, newCulture);
    },
};

export default CultureRepository;