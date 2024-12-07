// EquipmentManagement.jsx
import React, { useState } from 'react';
import EquipmentTable from './EquipmentTable';
import AddEquipmentForm from './AddEquipmentForm';
import useEquipmentRepository from '../../Repository/EquipmentRepository';
import MockEquipmentService from "../Mockups/MockEquipmentService";

const EquipmentManagement = () => {
    const { equipmentList, loading, error, addEquipment } = useEquipmentRepository(MockEquipmentService); // Pass the mock service
    // const { equipmentList, loading, error, addEquipment } = useEquipmentRepository();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddEquipment = (newEquipment) => {
        addEquipment(newEquipment);
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-1">
            <h1 className="text-2xl font-bold mb-3">Учет оборудования</h1>
            <button
                onClick={toggleFormVisibility}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {isFormVisible ? 'Скрыть форму' : 'Добавить новое оборудование'}
            </button>
            {isFormVisible && <AddEquipmentForm onAdd={handleAddEquipment} />}
            <EquipmentTable equipmentList={equipmentList} />
        </div>
    );
};

export default EquipmentManagement;