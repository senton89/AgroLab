// EquipmentTable.jsx
import React from 'react';

const getValidUntilColor = (validUntilDate) => {
    if (!validUntilDate) return 'bg-gray-300'; // Default color if no date is set
    const validUntilDateObj = new Date(validUntilDate);
    const today = new Date();
    const diffInDays = Math.round((validUntilDateObj - today) / (1000 * 60 * 60 * 24));
    if (diffInDays <= 7) return 'bg-red-500'; // Red if less than or equal to 1 week
    if (diffInDays <= 14) return 'bg-orange-500'; // Orange if less than or equal to 2 weeks
    if (diffInDays <= 30) return 'bg-yellow-500'; // Yellow if less than or equal to 1 month
    return 'bg-green-500'; // Green if more than 1 month
};

const EquipmentTable = ({ equipmentList }) => {
    return (
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Название</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Категория</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Модель</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Номер
                        инвентаря
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Номер
                        завода
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата
                        ввода в эксплуатацию
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Номер
                        свидетельства
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата
                        проверки
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Годен
                        до
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Ширина</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Длина</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Высота</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Глубина</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата
                        вывода из использования
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {equipmentList.map((equipment, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{equipment.name}</td>
                        <td className="px-6 py-4">{equipment.category}</td>
                        <td className="px-6 py-4">{equipment.model}</td>
                        <td className="px-6 py-4">{equipment.inventoryNumber}</td>
                        <td className="px-6 py-4">{equipment.factoryNumber}</td>
                        <td className="px-6 py-4">{equipment.dateOfCommissioning}</td>
                        <td className="px-6 py-4">{equipment.certificateNumber}</td>
                        <td className="px-6 py-4">{equipment.inspectionDate}</td>
                        <td className={`px-6 py-4 ${getValidUntilColor(equipment.validUntilDate)}`}>{equipment.validUntilDate}</td>
                        <td className="px-6 py-4">{equipment.width}</td>
                        <td className="px-6 py-4">{equipment.length}</td>
                        <td className="px-6 py-4">{equipment.height}</td>
                        <td className="px-6 py-4">{equipment.depth}</td>
                        <td className="px-6 py-4">{equipment.dateOfDecommissioning}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EquipmentTable;