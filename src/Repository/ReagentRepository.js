// ReagentRepository.js
import { useState, useEffect } from 'react';
import ReagentService from '../services/ReagentService';
import MockReagentService from '../components/Mockups/MockReagentService'; // Импортируйте мок-сервис

const useMock = true;
const useReagentRepository = (reagentService) => {
    if(useMock) reagentService = MockReagentService;
    const [reagentList, setReagentList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addReagent = async (reagent) => {
        try {
            await reagentService.addReagent(reagent);
            await fetchReagents();
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchReagents = async () => {
        setLoading(true);
        try {
            const data = await reagentService.fetchReagents();
            setReagentList(data); // Исправлено: используйте setReagentList вместо this.setReagentList
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
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
        fetchReagents,
    };
};

export default useReagentRepository;