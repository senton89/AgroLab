import axios from 'axios';

const apiService = {
    submitLabel: async (data) => {
        try {
            const response = await axios.post('/api/labels', data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default apiService;