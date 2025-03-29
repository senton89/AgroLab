const API_URL = 'http://localhost:5005/api/samples'; // Убедитесь, что этот URL соответствует вашему API

const SampleService = {
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

    async getSampleList() {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Не удалось получить образцы');
        }
        return await response.json();
    },

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

    async deleteSample(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Не удалось удалить образец');
        }
        return await response.json();
    },

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
    }
};

export default SampleService;