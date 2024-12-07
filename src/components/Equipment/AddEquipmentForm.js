// AddEquipmentForm.jsx
import React, { useState } from 'react';

const AddEquipmentForm = ({ onAdd }) => {
    const [errors, setErrors] = useState({}); // State to hold validation errors
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        model: '',
        inventoryNumber: '',
        factoryNumber: '',
        dateOfCommissioning: '',
        certificateNumber: '',
        inspectionDate: '',
        validUntilDate: '',
        width: '',
        length: '',
        height: '',
        depth: '',
        dateOfDecommissioning: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAdd(formData);
            setFormData({
                name: '',
                category: '',
                model: '',
                inventoryNumber: '',
                factoryNumber: '',
                dateOfCommissioning: '',
                certificateNumber: '',
                inspectionDate: '',
                validUntilDate: '',
                width: '',
                length: '',
                height: '',
                depth: '',
                dateOfDecommissioning: ''
            });
        }
    };
    const labels = {
        name: 'Название',
        category: 'Категория',
        model: 'Модель',
        inventoryNumber: 'Номер инвентаря',
        factoryNumber: 'Номер завода',
        dateOfCommissioning: 'Дата ввода в эксплуатацию',
        certificateNumber: 'Номер свидетельства',
        inspectionDate: 'Дата проверки',
        validUntilDate: 'Годен до',
        width: 'Ширина',
        length: 'Длина',
        height: 'Высота',
        depth: 'Глубина',
        dateOfDecommissioning: 'Дата вывода из использования'
    };

    const validateForm = () => {
        const newErrors = {};
        // Validate each field based on the specified types
        if (!formData.name) newErrors.name = 'Название обязательно';
        if (!formData.category) newErrors.category = 'Категория обязательна';
        if (!formData.model) newErrors.model = 'Модель обязательна';
        if (!formData.inventoryNumber) newErrors.inventoryNumber = 'Номер инвентаря обязателен';
        if (!formData.factoryNumber) newErrors.factoryNumber = 'Номер завода обязателен';

        // Validate date fields
        if (!formData.dateOfCommissioning) newErrors.dateOfCommissioning = 'Дата ввода в эксплуатацию обязательна';
        if (!formData.certificateNumber) newErrors.certificateNumber = 'Номер свидетельства обязателен';
        if (!formData.inspectionDate) newErrors.inspectionDate = 'Дата проверки обязательна';
        if (!formData.validUntilDate) newErrors.validUntilDate = 'Годен до обязательна';

        // Validate decimal fields
        const decimalFields = ['width', 'length', 'height', 'depth'];
        decimalFields.forEach(field => {
            if (!formData[field] || isNaN(formData[field]) || Number(formData[field]) < 0) {
                newErrors[field] = `${labels[field]} должно быть положительным числом`;
            }
        });
        // Check if there are any errors
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };


        return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md overflow-auto">
            <h2 className="text-lg font-bold mb-4">Добавить новое оборудование</h2>
            {Object.keys(formData).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block mb-1 text-gray-700">{labels[key]}</label>
                    <input
                        type={key.toLowerCase().includes('date') ? 'date' : 'text'}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    { errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddEquipmentForm;