// EquipmentTable.jsx
import React, { useState } from 'react';

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
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    const sortedEquipment = [...equipmentList].sort((a, b) => {
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
        <div className="w-full rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-500 text-white rounded-t-lg">
                <th onClick={() => requestSort('name')} className="p-2 border cursor-pointer rounded-tl-lg">Название</th>
                <th onClick={() => requestSort('inventoryNumber')} className="p-2 border cursor-pointer">Номер инвентаря</th>
                <th onClick={() => requestSort('factoryNumber')} className="p-2 border cursor-pointer">Номер завода</th>
                <th onClick={() => requestSort('dateOfCommissioning')} className="p-2 border cursor-pointer">Ввод в эксплуатацию</th>
                <th onClick={() => requestSort('inspectionDate')} className="p-2 border cursor-pointer">Дата проверки</th>
                <th onClick={() => requestSort('validUntilDate')} className="p-2 border cursor-pointer">Годен до</th>
                <th onClick={() => requestSort('category')} className="p-2 border cursor-pointer">Категория</th>
                <th onClick={() => requestSort('model')} className="p-2 border cursor-pointer">Модель</th>
                <th onClick={() => requestSort('width')} className="p-2 border cursor-pointer">Ширина</th>
                <th onClick={() => requestSort('length')} className="p-2 border cursor-pointer">Длина</th>
                <th onClick={() => requestSort('height')} className="p-2 border cursor-pointer">Высота</th>
                <th onClick={() => requestSort('depth')} className="p-2 border cursor-pointer">Глубина</th>
                <th onClick={() => requestSort('dateOfDecommissioning')} className="p-2 border cursor-pointer rounded-tr-lg">Дата вывода из использования</th>
              </tr>
            </thead>
            <tbody className="bg-orange-50">
              {sortedEquipment.map((equipment, index) => (
                <tr key={index} className={index === sortedEquipment.length - 1 ? 'rounded-b-lg' : ''}>
                  <td className="p-2 border">{equipment.name}</td>
                  <td className="p-2 border">{equipment.inventoryNumber}</td>
                  <td className="p-2 border">{equipment.factoryNumber}</td>
                  <td className="p-2 border">{equipment.dateOfCommissioning}</td>
                  <td className="p-2 border">{equipment.inspectionDate}</td>
                  <td className={`p-2 border ${getValidUntilColor(equipment.validUntilDate)}`}>{equipment.validUntilDate}</td>
                  <td className="p-2 border">{equipment.category}</td>
                  <td className="p-2 border">{equipment.model}</td>
                  <td className="p-2 border">{equipment.width}</td>
                  <td className="p-2 border">{equipment.length}</td>
                  <td className="p-2 border">{equipment.height}</td>
                  <td className="p-2 border">{equipment.depth}</td>
                  <td className="p-2 border">{equipment.dateOfDecommissioning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default EquipmentTable;