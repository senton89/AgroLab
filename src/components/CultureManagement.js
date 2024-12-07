// CultureManagement.jsx
import React, { useState } from 'react';
import CultureTable from './CultureTable';
import AddCultureForm from './AddCultureForm';

const CultureManagement = () => {
    const [cultures, setCultures] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddCulture = (newCulture) => {
        setCultures([...cultures, newCulture]);
        setIsFormVisible(false); // Скрыть форму после добавления
    };

    return (
        <div className="flex flex-col">
            <div className="w-1/3 p-1">
                <h1 className="text-2xl font-bold mb-3">Учет культур</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setIsFormVisible(!isFormVisible)} // Переключение видимости формы
                >
                    {isFormVisible ? 'Скрыть форму' : 'Добавить культуру'}
                </button>
                {isFormVisible && <AddCultureForm onAdd={handleAddCulture}/>} {/* Условный рендеринг формы */}
            </div>
            <div className="flex-1 ">
                <CultureTable cultures={cultures}/>
            </div>
        </div>
    );
};

export default CultureManagement;