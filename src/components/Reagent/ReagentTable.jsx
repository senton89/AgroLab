// ReagentTable.jsx
import React from 'react';

const getExpiryColor = (expiryDate) => {
    if (!expiryDate) return 'bg-gray-300'; // Default color if no date is set
    const expiryDateObj = new Date(expiryDate);
    const today = new Date();
    const diffInDays = Math.round((expiryDateObj - today) / (1000 * 60 * 60 * 24));
    if (diffInDays <= 7) return 'bg-red-500'; // Red if less than or equal to 1 week
    if (diffInDays <= 14) return 'bg-orange-500'; // Orange if less than or equal to 2 weeks
    if (diffInDays <= 30) return 'bg-yellow-500'; // Yellow if less than or equal to 1 month
    return 'bg-green-500'; // Green if more than 1 month
};

const ReagentTable = ({ reagents }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Имя</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Партия</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Поставщик</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Срок годности</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Остатки</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {reagents.map((reagent, index) => (
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