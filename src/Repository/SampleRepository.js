import SampleService from '../services/SampleService';
import MockSampleService from '../components/Mockups/MockSampleService';
import { useEffect, useState } from "react";

const useMock = true;

const SampleRepository = () => {
    const service = useMock ? MockSampleService() : SampleService; // Выбор между моковым и реальным сервисом
    const [sampleList, setSampleList] = useState()
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние ошибки

    useEffect(() => {
        const fetchSampleList = async () => {
            try {
                const samples = await service.getSampleList();
                setSampleList(samples);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Устанавливаем состояние загрузки в false
            }
        };

        fetchSampleList();
    }, [service]); // Зависимость от сервиса

    const addSample = async (newSample) => {
        try {
            const addedSample = await service.addSample(newSample);
            setSampleList((prevList) => [...prevList, addedSample]); // Обновляем список образцов
            return addedSample;
        } catch (error) {
            throw error;
        }
    };

    const updateSample = async (id, updatedSample) => {
        try {
            const updatedSampleResponse = await service.updateSample(id, updatedSample);
            setSampleList((prevList) =>
                prevList.map(sample => sample.id === id ? updatedSampleResponse : sample)
            ); // Обновляем список образцов
            return updatedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    const deleteSample = async (id) => {
        try {
            const deletedSampleResponse = await service.deleteSample(id);
            setSampleList((prevList) => prevList.filter(sample => sample.id !== id)); // Обновляем список образцов
            return deletedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    return {
        sampleList,
        loading,
        error,
        addSample,
        updateSample,
        deleteSample,
    };
};

export default SampleRepository;