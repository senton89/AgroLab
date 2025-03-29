// AddCultureForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CultureRepository from '../../Repository/CultureRepository';

const AddCultureForm = ({ onAdd, onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { culture } = location.state || {};

    const [cultureName, setCultureName] = useState('');
    const [error, setError] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [originalCulture, setOriginalCulture] = useState('');

    useEffect(() => {
        if (culture) {
            setCultureName(culture);
            setIsEditMode(true);
            setOriginalCulture(culture);
        }
    }, [culture]);

    const validateForm = () => {
        if (!cultureName.trim()) {
            setError('Название культуры обязательно');
            return false;
        }
        setError('');
        return true;
    };

    const handleSave = async () => {
        if (validateForm()) {
            try {
                if (isEditMode) {
                    // Update existing culture
                    await CultureRepository.updateCulture(originalCulture, cultureName);
                } else {
                    // Add new culture
                    await CultureRepository.createCulture(cultureName);
                }
                setCultureName('');
                navigate('/culture-table');
            } catch (error) {
                setError('Произошла ошибка при сохранении культуры');
            }
        }
    };

    return (
        <div className="bg-white mt-20 p-8 rounded-lg shadow-md max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-700 text-lg font-semibold">Добавление новой культуры</h2>
            
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Наименование</label>
                <input
                    className={`w-full p-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
                    placeholder="Введите название культуры"
                    type="text"
                    value={cultureName}
                    onChange={(e) => {
                        setCultureName(e.target.value);
                        if (error) setError('');
                    }}
                    required
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="flex justify-between mt-6">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow"
                    onClick={() => navigate('/culture-table')}
                >
                    Отмена
                </button>
                <button
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded shadow"
                    onClick={handleSave}
                >
                    {isEditMode ? 'Сохранить изменения' : 'Сохранить'}
                </button>
            </div>
        </div>
    );
};

export default AddCultureForm;