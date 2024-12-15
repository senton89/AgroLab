// ReagentTable.jsx
import React, { useState } from 'react';

const getExpiryColor = (expiryDate) => {
    if (!expiryDate) return 'bg-gray-300'; // Default color if no date is set
    const expiryDateObj = new Date(expiryDate);
    const today = new Date();
    const diffInDays = Math.round((expiryDateObj - today) / (1000 * 60 * 60 * 24));
    if (diffInDays <= 7) return 'bg-red-500'; // Red if less than or equal to 1 week
    if (diffInDays <= 14) return 'bg-orange-500'; // Orange if less than or equal to 2 weeks
    if (diffInDays <= 30) return 'bg-yellow-500'; // Yellow if less than 1 month
    return 'bg-green-500'; // Green if more than 1 month
};

const ReagentTable = ({ reagents }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    const sortedReagents = [...reagents].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th onClick={() => requestSort('name')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Имя</th>
                    <th onClick={() => requestSort('date')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата</th>
                    <th onClick={() => requestSort('batch')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Партия</th>
                    <th onClick={() => requestSort('supplier')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Поставщик</th>
                    <th onClick={() => requestSort('expiryDate')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Срок годности</th>
                    <th onClick={() => requestSort('stock')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Остатки</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sortedReagents.map((reagent, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{reagent.name}</td>
                        <td className="px-6 py-4">{reagent.date}</td>
                        <td className="px-6 py-4">{reagent.batch}</td>
                        <td className="px-6 py-4">{reagent.supplier}</td>
                        <td className={`px-6 py-4 ${getExpiryColor(reagent.expiryDate)}`}>{reagent.expiryDate}</td>
                        <td className="px-6 py-4">{reagent.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReagentTable;