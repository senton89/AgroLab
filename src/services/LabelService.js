import axios from 'axios';

const labelService = {
    // Метод для отправки метки на сервер
    submitLabel: async (data) => {
        try {
            const response = await axios.post('/api/labels', data); // Отправка POST-запроса
            return response.data; // Возвращаем данные ответа
        } catch (error) {
            console.error(error); // Логируем ошибку
            throw error; // Пробрасываем ошибку для обработки в компоненте
        }
    },
};

export default labelService;