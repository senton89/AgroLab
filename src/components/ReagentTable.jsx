// ReagentTable.jsx
import React from 'react';

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
                        <td className="px-6 py-4">{reagent.expiryDate}</td>
                        <td className="px-6 py-4">{reagent.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReagentTable;