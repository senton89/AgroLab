// EquipmentTable.jsx
import React from 'react';

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
                        <td className="px-6 py-4">{equipment.validUntilDate}</td>
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