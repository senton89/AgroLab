// CultureTable.jsx
import React from 'react';

const CultureTable = ({ cultures }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Название</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {cultures.map((culture, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{culture.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CultureTable;