const API_URL = 'http://localhost:5005/api/samples'; // Убедитесь, что этот URL соответствует вашему API

const SampleService = {
    // Метод для добавления нового образца
    async addSample(sample) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sample),
        });

        if (!response.ok) {
            throw new Error('Не удалось добавить образец');
        }
        return await response.json();
    },

    // Метод для получения списка образцов
    async getSampleList() {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Не удалось получить образцы');
        }
        return await response.json();
    },

    // Метод для обновления существующего образца
    async updateSample(id, updatedSample) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedSample),
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить образец');
        }
        return await response.json();
    },

    // Метод для удаления образца
    async deleteSample(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить образец');
        }
        return await response.json();
    },

    // Метод для загрузки файла образца
    async uploadSampleFile(formData) {
        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Не удалось загрузить файл');
        }

        return await response.json();
    },

    // Метод для сохранения результатов анализа
    async saveAnalysisResults(analysisData) {
        const response = await fetch(`${API_URL}/analysis`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(analysisData),
        });

        if (!response.ok) {
            throw new Error('Не удалось сохранить результаты анализа');
        }

        return await response.json();
    },

    // Метод для генерации протокола
    async generateProtocol(sampleId) {
        const response = await fetch(`${API_URL}/${sampleId}/protocol`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Не удалось сформировать протокол');
        }

        // Проверяем тип ответа
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            // Если сервер возвращает JSON с URL для скачивания
            return await response.json();
        } else {
            // Если сервер возвращает бинарные данные (файл)
            return {
                data: await response.blob(),
                fileName: `protocol-${sampleId}.docx`
            };
        }
    }
};

export default SampleService;