// CultureRepository.js
import CultureService from '../services/CultureService';

const CultureRepository = {
    async getCultures() {
        return await CultureService.fetchCultures();
    },

    async createCulture(culture) {
        return await CultureService.addCulture(culture);
    },
};

export default CultureRepository;