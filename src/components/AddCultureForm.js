// AddCultureForm.jsx
import React, { useState } from 'react';

const AddCultureForm = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            onAdd({ name });
            setName(''); // Очистить поле после добавления
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-lg font-bold mb-4">Добавить новую культуру</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Название</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="flex justify-end">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setName('')}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddCultureForm;