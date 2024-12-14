// ReagentRepository.js
import { useState, useEffect } from 'react';
import ReagentService from '../services/ReagentService';

const useReagentRepository = (reagentService) => {
    if(reagentService===null)
    {
        reagentService = ReagentService;
    }
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
            this.setReagentList(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
return {
    reagentList,
    loading,
    error,
    addReagent,
    fetchReagents,
};
};

export default useReagentRepository;