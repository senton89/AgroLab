// EquipmentManagement.jsx
import React from 'react';
import EquipmentTable from './EquipmentTable';
import { useNavigate } from 'react-router-dom';
import useEquipmentRepository from '../../Repository/EquipmentRepository';
import MockEquipmentService from "../Mockups/MockEquipmentService";

const EquipmentManagement = () => {
    const { equipmentList, loading, error } = useEquipmentRepository(MockEquipmentService);
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col w-full pt-6 p-8 mx-6">
            <button
                    onClick={() => navigate('/add-equipment')}
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 self-end mb-10 w-1/6"
                >
                    Добавить оборудование
                </button>
            <div className="rounded-lg overflow-hidden w-full ">
                <EquipmentTable equipmentList={equipmentList} />
            </div>
        </div>
    );
};

export default EquipmentManagement;