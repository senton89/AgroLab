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
        <div className="overflow-x-auto">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th onClick={handleSort} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                        Название
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {cultures.length === 0 ? (
                    <tr>
                        <td className="px-6 py-4 text-center" colSpan="1">Нет доступных культур</td>
                    </tr>
                ) : (
                    cultures.map((culture) => (
                        <tr key={culture.id} className="hover:bg-gray-100">
                            <td className="px-6 py-4">{culture || 'Не указано'}</td> {/* Отображаем 'Не указано', если name отсутствует */}
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CultureTable;