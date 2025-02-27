// ReagentManagement.jsx
import React, { useState, useEffect } from 'react';
import ReagentTable from './ReagentTable';
import AddReagentForm from './AddReagentForm';
import useReagentRepository from '../../Repository/ReagentRepository'
import { useNavigate } from 'react-router-dom';

const ReagentManagement = () => {
    const { reagentList, loading, error, addReagent, fetchReagents } = useReagentRepository(); // Используйте хук
    const [isFormVisible, setIsFormVisible] = useState(false); // Состояние для управления видимостью формы
    const navigate = useNavigate();

    useEffect(() => {
        const loadReagents = async () => {
            await fetchReagents();
        };

        loadReagents();
    }, [fetchReagents]);

    const handleAddReagent = async (newReagent) => {
        try {
            await addReagent(newReagent); // Добавляем реагент
            await fetchReagents(); // Обновляем список реагентов
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col w-full">
            <button 
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 w-1/6 self-end m-6"
                onClick={() => navigate('/reagents/add')}
            >
                Добавить реагент
            </button>
                <ReagentTable reagents={reagentList} />
            
            </div>
        </div>
    );
};

export default ReagentManagement;