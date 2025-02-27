import React, { useState } from 'react';

const CultureTable = ({ cultures, setCultures }) => {
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = () => {
        const sortedCultures = [...cultures].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        });
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setCultures(sortedCultures); // Обновляем список культур
    };

    return (
        <div className="bg-white rounded-lg shadow-md">
            <table className="w-full">
                <thead className="bg-orange-500 text-white">
                <tr>
                    <th onClick={handleSort} className="cursor-pointer text-left p-2">Наименование</th>
                    <th className="text-right p-2">Действия</th>
                </tr>
                </thead>
                <tbody>
                {cultures.length === 0 ? (
                    <tr>
                        <td className="p-2 text-center" colSpan="2">Нет доступных культур</td>
                    </tr>
                ) : (
                    cultures.map((culture) => (
                        <tr key={culture.id} className="hover:bg-gray-100">
                            <td className="p-2">{culture || 'Не указано'}</td>
                            <td className="text-right p-2">
                                <button className="text-orange-600 mr-2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="text-red-600">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CultureTable;