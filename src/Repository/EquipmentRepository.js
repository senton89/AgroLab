// EquipmentRepository.js
import { useState, useEffect } from 'react';
import EquipmentService from '../services/EquipmentService';
import MockEquipmentService from "../components/Mockups/MockEquipmentService";

const isMock = true;

const useEquipmentRepository = (equipmentService = MockEquipmentService) => {
    if(!isMock) {
        equipmentService = EquipmentService;
    }
    const [equipmentList, setEquipmentList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEquipment = async () => {
        setLoading(true);
        try {
            const data = await equipmentService.fetchEquipment();
            setEquipmentList(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addEquipment = async (newEquipment) => {
        try {
            await equipmentService.addEquipment(newEquipment);
        } catch (err) {
            setError(err.message);
        }
    };

    const updateEquipment = async (id, updatedEquipment) => {
        try {
            // For mock service, implement update logic
            if (equipmentService === MockEquipmentService) {
                // Find the equipment in the list and update it
                const updatedList = equipmentList.map(equipment =>
                    equipment.id === id ? { ...equipment, ...updatedEquipment } : equipment
                );
                setEquipmentList(updatedList);
                return updatedEquipment;
            } else {
                // For real service, call the API
                const result = await equipmentService.updateEquipment(id, updatedEquipment);
                await fetchEquipment(); // Refresh the list
                return result;
            }
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    useEffect(() => {
        fetchEquipment();
    }, []);

    return {
        equipmentList,
        loading,
        error,
        addEquipment,
        updateEquipment
    };
};

export default useEquipmentRepository;