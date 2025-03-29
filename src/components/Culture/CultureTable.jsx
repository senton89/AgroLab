import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const CultureTable = ({ cultures, setCultures }) => {
    const [sortOrder, setSortOrder] = useState('asc');
    const navigate = useNavigate();

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

    const handleRowDoubleClick = (culture) => {
        // Navigate to the add culture form with the culture data
        navigate('/add-culture', { state: { culture } });
    };

    return (
        <div className="bg-white rounded-lg shadow-md w-full">
            <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                <tr>
                    <th onClick={handleSort}
                        className="cursor-pointer text-left p-2">Наименование</th>
                </tr>
                </thead>
                <tbody>
                {cultures.length === 0 ? (
                    <tr>
                        <td className="p-2 text-center" colSpan="2">Нет доступных культур</td>
                    </tr>
                ) : (
                    cultures.map((culture, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-100"
                            onDoubleClick={() => handleRowDoubleClick(culture)}
                        >
                        <td className="p-2">{culture || 'Не указано'}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CultureTable;