// ReagentManagement.jsx
import React, { useState } from 'react';
import ReagentTable from './ReagentTable';
import AddReagentForm from './AddReagentForm';

const ReagentManagement = () => {
    const [reagents, setReagents] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false); // Состояние для управления видимостью формы

    const handleAddReagent = (newReagent) => {
        setReagents([...reagents, newReagent]);
        setIsFormVisible(false); // Скрыть форму после добавления реагента
    };

    return (
        <div className="flex flex-col">
            <div className="w-1/3 p-1">
                <h1 className="text-2xl font-bold mb-3">Учет реагентов</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setIsFormVisible(!isFormVisible)} // Показать форму при нажатии
                >
                    {isFormVisible ? "Скрыть форму" : "Добавить реагент"}
                </button>
            </div>
            {isFormVisible && <AddReagentForm onAdd={handleAddReagent}/>}
            <div className="flex-1">
            <ReagentTable reagents={reagents} />
        </div>
        </div>
    );
};

export default ReagentManagement;