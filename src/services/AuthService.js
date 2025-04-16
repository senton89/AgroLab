const API_URL = 'http://localhost:5005/api/users';
class AuthService {
    // Метод для регистрации пользователя
    async registerUser(credentials) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials), // Преобразуем данные в JSON
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user)); // Сохраняем пользователя в локальном хранилище
                return true;
            } else {
                throw new Error(data.error); // Генерируем ошибку, если регистрация не удалась
            }
        } catch (error) {
            console.error(error); // Логируем ошибку
            return false;
        }
    }

    // Метод для входа пользователя
    async loginUser(credentials) {
        return true;
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials), // Преобразуем данные в JSON
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user)); // Сохраняем пользователя в локальном хранилище
                return true;
            } else {
                throw new Error(data.error); // Генерируем ошибку, если вход не удался
            }
        } catch (error) {
            console.error(error); // Логируем ошибку
            return false;
        }
    }

    // Статический метод для выхода пользователя
    static async logoutUser() {
        localStorage.removeItem('user'); // Удаляем пользователя из локального хранилища
    }

    // Метод для получения информации о текущем пользователе
    async getUser() {
        const user = localStorage.getItem('user'); // Получаем пользователя из локального хранилища
        return user ? JSON.parse(user) : null; // Возвращаем пользователя или null
    }
}

export default AuthService;