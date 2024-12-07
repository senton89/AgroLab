// AddReagentForm.jsx
import React, { useState } from 'react';

const AddReagentForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        batch: '',
        supplier: '',
        expiryDate: '',
        stock: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        setFormData({
            name: '',
            date: '',
            batch: '',
            supplier: '',
            expiryDate: '',
            stock: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold mb-4">Добавить новый реагент</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 text-gray-700">Имя</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Дата</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 text-gray-700">Партия</label>
                    <input type="text" name="batch" value={formData.batch} onChange={handleChange}
                           className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Поставщик</label>
                    <input type="text" name="supplier" value={formData.supplier} onChange={handleChange}
                           className="w-full p-2 border border-gray-300 rounded" required />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 text-gray-700">Срок годности</label>
                    <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange}
                           className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div>
                    <label className="block mb-1 text-gray-700">Остатки</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange}
                           className="w-full p-2 border border-gray-300 rounded" required />
                </div>
            </div>
            <div className="flex justify-end">
            <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
                    onClick={() => setFormData({
                        name: '',
                        date: '',
                        batch: '',
                        supplier: '',
                        expiryDate: '',
                        stock: '' })}>
                Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Добавить</button>
            </div>
        </form>
    ); };

export default AddReagentForm;