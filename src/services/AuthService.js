const API_URL = 'http://localhost:5005/api/users'; // Replace with your API URL

class AuthService {
    async registerUser(credentials) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                return true;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async loginUser(credentials) {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                return true;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async logoutUser() {
        localStorage.removeItem('user');
    }

    async getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}

export default AuthService;