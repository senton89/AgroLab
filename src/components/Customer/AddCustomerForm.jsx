// AddCustomerForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useCustomerRepository from '../../Repository/CustomerRepository';

const AddCustomerForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { customer } = location.state || {}; // Get customer from location state if editing
    const { addCustomer } = useCustomerRepository();

    const [isEditMode, setIsEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        inn: ''
    });

    // If customer data is provided, set it to form data (edit mode)
    useEffect(() => {
        if (customer) {
            setFormData(customer);
            setIsEditMode(true);
        }
    }, [customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when field is changed
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Имя заказчика обязательно';
        if (!formData.email) newErrors.email = 'Email обязателен';
        if (!formData.address) newErrors.address = 'Адрес обязателен';
        if (!formData.inn) newErrors.inn = 'ИНН обязателен';

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                if (isEditMode) {
                    // Update existing customer
                    await addCustomer(formData); // In a real app, this would be updateCustomer
                } else {
                    // Add new customer
                    await addCustomer(formData);
                }
                navigate('/customers');
            } catch (error) {
                console.error('Error saving customer:', error);
                setErrors({ submit: 'Ошибка при сохранении заказчика. Пожалуйста, попробуйте снова.' });
            }
        }
    };

    const handleCancel = () => {
        navigate('/customers');
    };

    return (
        <div className="flex-1 p-8">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    {isEditMode ? 'Редактирование заказчика' : 'Добавление нового заказчика'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 text-gray-700">Имя*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">Адрес*</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                required
                            />
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-700">ИНН*</label>
                            <input
                                type="text"
                                name="inn"
                                value={formData.inn}
                                onChange={handleChange}
                                className={`w-full p-3 border ${errors.inn ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                required
                            />
                            {errors.inn && <p className="text-red-500 text-sm mt-1">{errors.inn}</p>}
                        </div>
                    </div>

                    {errors.submit && (
                        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                            {errors.submit}
                        </div>
                    )}

                    <div className="flex justify-between mt-8 space-x-4">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow"
                        >
                            Отмена
                        </button>

                        <button
                            type="submit"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
                        >
                            {isEditMode ? 'Сохранить изменения' : 'Сохранить'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomerForm;