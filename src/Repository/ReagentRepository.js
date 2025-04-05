import { useState, useEffect } from 'react';
import ReagentService from '../services/ReagentService';
import MockReagentService from '../components/Mockups/MockReagentService'; // Импортируйте мок-сервис

const useMock = true; // Проверка, используем ли мы мок-сервис
const useReagentRepository = (reagentService) => {
    if(useMock) reagentService = MockReagentService; // Используйте мок-сервис, если в тестовом режиме

    const [reagentList, setReagentList] = useState([]); // Список реагентов
    const [loading, setLoading] = useState(false); // Статус загрузки
    const [error, setError] = useState(null); // Ошибка, если она возникла

    // Метод для добавления реагента
    const addReagent = async (reagent) => {
        try {
            await reagentService.addReagent(reagent); // Добавляем новый реагент
            await fetchReagents(); // Обновляем список реагентов
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
        }
    };

    // Метод для обновления реагента
    const updateReagent = async (id, updatedReagent) => {
        try {
            // Для мок-сервиса реализуйте логику обновления
            if (useMock) {
                // Найдите реагент в списке и обновите его
                const updatedList = reagentList.map(reagent =>
                    reagent.id === id ? { ...reagent, ...updatedReagent } : reagent
                );
                setReagentList(updatedList); // Обновляем список реагентов
                return updatedReagent;
            } else {
                // Для реального сервиса вызовите API
                const result = await reagentService.updateReagent(id, updatedReagent);
                await fetchReagents(); // Обновляем список
                return result;
            }
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
            throw err;
        }
    };

    // Метод для получения реагентов
    const fetchReagents = async () => {
        setLoading(true); // Начинаем загрузку
        try {
            const data = await reagentService.fetchReagents(); // Получаем реагенты
            setReagentList(data); // Обновляем список реагентов
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
        } finally {
            setLoading(false); // Завершаем загрузку
        }
    };

    useEffect(() => {
        fetchReagents(); // Загружаем реагенты при монтировании компонента
    }, []);

    return {
        reagentList,
        loading,
        error,
        addReagent,
        updateReagent,
        fetchReagents,
    }; // Возвращаем данные и методы
};

export default useReagentRepository;