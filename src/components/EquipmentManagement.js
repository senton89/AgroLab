// EquipmentManagement.jsx
import React, { useState } from 'react';
import EquipmentTable from './EquipmentTable';
import AddEquipmentForm from './AddEquipmentForm';

const EquipmentManagement = () => {
    const [equipmentList, setEquipmentList] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false); // Состояние для управления видимостью формы

    const handleAddEquipment = (newEquipment) => {
        setEquipmentList([...equipmentList, newEquipment]);
        setIsFormVisible(false); // Закрыть форму после добавления оборудования
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible); // Переключить видимость формы
    };

    return (
        <div className="container mx-auto p-1">
            <h1 className="text-2xl font-bold mb-3">Учет оборудования</h1>
            <button
                onClick={toggleFormVisibility}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {isFormVisible ? 'Скрыть форму' : 'Добавить новое оборудование'}
            </button>
            {isFormVisible && <AddEquipmentForm onAdd={handleAddEquipment}/>}
            <EquipmentTable equipmentList={equipmentList}/>
        </div>
    );
};

export default EquipmentManagement;