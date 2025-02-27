// AddCultureForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCultureForm = ({ onAdd, onClose }) => {
    const [cultureName, setCultureName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (!cultureName.trim()) {
            setError('Название культуры обязательно');
            return false;
        }
        setError('');
        return true;
    };

    const handleSave = () => {
        if (validateForm()) {
            onAdd({ cultureName });
            setCultureName('');
            navigate('/culture-table');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default AddCultureForm;