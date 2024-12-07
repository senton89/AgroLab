// AddCustomerForm.jsx
import React, { useState } from 'react';

const AddCustomerForm = ({ onAdd }) => {
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({
            id: '',
            name: '',
            email: '',
            address: '',
            inn: ''
        });
    };

    const labels = {
        id: 'ID',
        name: 'Имя',
        email: 'Email',
        address: 'Адрес',
        inn: 'ИНН'
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md overflow-auto">
            <h2 className="text-lg font-bold mb-4">Добавить нового заказчика</h2>
            {Object.keys(formData).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block mb-1 text-gray-700">{labels[key]}</label>
                    <input
                        type={key === 'email' ? 'email' : 'text'}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddCustomerForm;