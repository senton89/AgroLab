import AuthService from '../services/AuthService';
import ReagentRepository from '../Repository/ReagentRepository'
class AuthRepository {
    async registerUser(credentials) {
        // Call the API to register the user
        const result = await AuthService.registerUser(credentials);
        if(result){
            const reagents = await ReagentRepository.fetchReagents();
            this.checkExpiryDates(reagents);
            return true;
        }
        return false;
    }

    static async loginUser(credentials) {
        // Call the API to login the user
        const result = await AuthService.loginUser(credentials)??false;
        return result;
    }

    async logoutUser() {
        // Call the API to logout the user
        return AuthService.logoutUser();
    }

    async getUser() {
        // Get the user from local storage
        return AuthService.getUser();
    }

    checkExpiryDates = (reagents) => {
        const today = new Date();
        reagents.forEach(reagent => {
            const expiryDate = new Date(reagent.expiryDate);
            if (expiryDate < today) {
                alert(`Срок годности реагента "${reagent.name}" истек!`);
            } else if (expiryDate - today <= 7 * 24 * 60 * 60 * 1000) { // Если срок годности истекает в течение недели
                alert(`Срок годности реагента "${reagent.name}" истекает через ${Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))} дней!`);
            }
        });
    };
}

export default AuthRepository;