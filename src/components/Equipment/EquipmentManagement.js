// EquipmentManagement.jsx
import React from 'react';
import EquipmentTable from './EquipmentTable';
import { useNavigate } from 'react-router-dom';
import useEquipmentRepository from '../../Repository/EquipmentRepository';
import MockEquipmentService from "../Mockups/MockEquipmentService";

const EquipmentManagement = () => {
    const { equipmentList, loading, error, deleteEquipment } = useEquipmentRepository(MockEquipmentService);
    const navigate = useNavigate();

    const handleDeleteEquipment = async (id) => {
        try {
            await deleteEquipment(id);
        } catch (error) {
            console.error('Error deleting equipment:', error);
            alert('Ошибка при удалении оборудования');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col w-full pt-6 p-8">
            <button
                    onClick={() => navigate('/add-equipment')}
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 self-end mb-10 w-1/6"
                >
                    Добавить оборудование
                </button>
            <div className="overflow-hidden w-full rounded-lg">
                <EquipmentTable equipmentList={equipmentList} onDelete={handleDeleteEquipment} />
            </div>
        </div>
    );
};

export default EquipmentManagement;