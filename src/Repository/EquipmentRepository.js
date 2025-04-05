import { useState, useEffect } from 'react';
import EquipmentService from '../services/EquipmentService';
import MockEquipmentService from "../components/Mockups/MockEquipmentService";

const isMock = true; // Проверка, используем ли мы мок-сервис

const useEquipmentRepository = (equipmentService = MockEquipmentService) => {
    if(!isMock) {
        equipmentService = EquipmentService; // Используйте реальный сервис, если не в тестовом режиме
    }
    const [equipmentList, setEquipmentList] = useState([]); // Список оборудования
    const [loading, setLoading] = useState(false); // Статус загрузки
    const [error, setError] = useState(null); // Ошибка, если она возникла

    // Метод для получения оборудования
    const fetchEquipment = async () => {
        setLoading(true); // Начинаем загрузку
        try {
            const data = await equipmentService.fetchEquipment(); // Получаем оборудование
            setEquipmentList(data); // Обновляем список оборудования
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
        } finally {
            setLoading(false); // Завершаем загрузку
        }
    };

    // Метод для добавления оборудования
    const addEquipment = async (newEquipment) => {
        try {
            await equipmentService.addEquipment(newEquipment); // Добавляем новое оборудование
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
        }
    };

    // Метод для обновления оборудования
    const updateEquipment = async (id, updatedEquipment) => {
        try {
            // Для мок-сервиса реализуйте логику обновления
            if (equipmentService === MockEquipmentService) {
                // Найдите оборудование в списке и обновите его
                const updatedList = equipmentList.map(equipment =>
                    equipment.id === id ? { ...equipment, ...updatedEquipment } : equipment
                );
                setEquipmentList(updatedList); // Обновляем список оборудования
                return updatedEquipment;
            } else {
                // Для реального сервиса вызовите API
                const result = await equipmentService.updateEquipment(id, updatedEquipment);
                await fetchEquipment(); // Обновляем список
                return result;
            }
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
            throw err;
        }
    };

    useEffect(() => {
        fetchEquipment(); // Загружаем оборудование при монтировании компонента
    }, []);

    return {
        equipmentList,
        loading,
        error,
        addEquipment,
        updateEquipment
    }; // Возвращаем данные и методы
};

export default useEquipmentRepository;