// DocumentTable.jsx
import React from 'react';

const DocumentTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Наименование</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Краткое наименование</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Тип</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {/* Здесь можно добавить данные таблицы */}
                </tbody>
            </table>
        </div>
    );
};

export default DocumentTable;