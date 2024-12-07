// EquipmentRepository.js
import { useState, useEffect } from 'react';
import EquipmentService from '../services/EquipmentService';

const useEquipmentRepository = (equipmentService) => {
    if(equipmentService===null)
    {
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

    useEffect(() => {
        fetchEquipment();
    }, []);

    return {
        equipmentList,
        loading,
        error,
        addEquipment,
    };
};

export default useEquipmentRepository;