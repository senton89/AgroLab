// ReagentManagement.jsx
import React, { useState, useEffect } from 'react';
import ReagentTable from './ReagentTable';
import AddReagentForm from './AddReagentForm';
import useReagentRepository from '../../Repository/ReagentRepository'
import { useNavigate } from 'react-router-dom';

const ReagentManagement = () => {
    const { reagentList, loading, error, addReagent, fetchReagents,deleteReagent } = useReagentRepository(); // Используйте хук
    const [isFormVisible, setIsFormVisible] = useState(false); // Состояние для управления видимостью формы
    const navigate = useNavigate();

    useEffect(() => {
        const loadReagents = async () => {
            await fetchReagents();
        };

        loadReagents();
    }, [fetchReagents]);

    const handleDeleteReagent = async (id) => {
        try {
            await deleteReagent(id);
            await fetchReagents(); // Refresh the list
        } catch (err) {
            alert(`Ошибка при удалении: ${err.message}`);
        }
    };

    return (
        <div className="container mx-4 p-4">
            <div className="flex flex-col w-full">
            <button 
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 w-1/6 self-end m-6"
                onClick={() => navigate('/reagents/add')}
            >
                Добавить реактив
            </button>
                <ReagentTable reagents={reagentList} onDelete={handleDeleteReagent}/>
            
            </div>
        </div>
    );
};

export default ReagentManagement;