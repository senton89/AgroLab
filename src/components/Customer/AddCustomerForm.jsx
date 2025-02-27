// AddCustomerForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomerForm = ({ onAdd }) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        address: '',
        inn: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Очистка ошибки при изменении поля
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Проверка обязательных полей
        if (!formData.name) newErrors.name = 'Имя заказчика обязательно';
        if (!formData.inn) newErrors.inn = 'ИНН обязателен';
        
        // Проверка email
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }
        
        // Проверка ИНН
        if (formData.inn) {
            if (!/^\d+$/.test(formData.inn)) {
                newErrors.inn = 'ИНН должен содержать только цифры';
            } else if (formData.inn.length !== 10 && formData.inn.length !== 12) {
                newErrors.inn = 'ИНН должен содержать 10 или 12 цифр';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAdd(formData);
            setFormData({
                id: '',
                name: '',
                email: '',
                address: '',
                inn: ''
            });
            navigate('/customer-table');
        }
    };

    const labels = {
        id: 'ID',
        name: 'Имя',
        email: 'Email',
        address: 'Адрес',
        inn: 'ИНН'
    };

    return (
        <div className="flex-1 flex items-center justify-center p-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-6">Добавление нового заказчика</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div className="mb-4" key={key}>
                            <label className="block mb-1 text-gray-700">{labels[key]}</label>
                            <input
                                type={key === 'email' ? 'email' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors[key] ? 'border-red-500' : 'border-gray-300'} rounded`}
                                required={key === 'name' || key === 'inn'}
                            />
                            {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                        </div>
                    ))}
                    <div className="flex justify-between mt-6">
                        <button 
                            type="button" 
                            onClick={() => navigate('/customer-table')} 
                            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow"
                        >
                            Отмена
                        </button>
                        <button 
                            type="submit" 
                            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded shadow"
                        >
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomerForm;