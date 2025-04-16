// EquipmentTable.jsx
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import DeleteButton from "../DeleteButton";

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

const EquipmentTable = ({ equipmentList, onDelete }) => {
    const navigate = useNavigate();
    const [sortConfig, setSortConfig] = useState({key: 'name', direction: 'ascending'});

    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user && user.role === 'admin';

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
        setSortConfig({key, direction});
    };

    const handleRowDoubleClick = (equipment) => {
        navigate('/edit-equipment', {state: {equipment}}); // Navigate to edit form with equipment data
    };

    return (
        <div className="overflow-x-auto ">
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                    <tr>
                        <th onClick={() => requestSort('name')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Название
                        </th>
                        <th onClick={() => requestSort('inventoryNumber')}
                            className="cursor-pointer px-4 py-3  text-xs font-medium uppercase tracking-wider">Номер
                            инвентаря
                        </th>
                        <th onClick={() => requestSort('factoryNumber')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Номер
                            завода
                        </th>
                        <th onClick={() => requestSort('dateOfCommissioning')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Дата
                            ввода
                        </th>
                        <th onClick={() => requestSort('inspectionDate')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Дата
                            проверки
                        </th>
                        <th onClick={() => requestSort('validUntilDate')}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider min-w-40">Годен
                            до
                        </th>
                        <th onClick={() => requestSort('category')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Категория
                        </th>
                        <th onClick={() => requestSort('model')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-widerr">Модель
                        </th>
                        <th onClick={() => requestSort('width')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-widerr">Ширина
                        </th>
                        <th onClick={() => requestSort('length')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Длина
                        </th>
                        <th onClick={() => requestSort('height')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Высота
                        </th>
                        <th onClick={() => requestSort('depth')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Глубина
                        </th>
                        <th onClick={() => requestSort('dateOfDecommissioning')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider">Дата
                            вывода
                        </th>
                        <th onClick={() => requestSort('depth')}
                            className="cursor-pointer px-6 py-3  text-xs font-medium uppercase tracking-wider"></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {sortedEquipment.map((equipment) => (
                        <tr
                            key={equipment.id}
                            className="hover:bg-gray-50 cursor-pointer"
                            onDoubleClick={() => handleRowDoubleClick(equipment)}
                        >
                            <td className="p-2 border">{equipment.name}</td>
                            <td className="p-2 border">{equipment.inventoryNumber}</td>
                            <td className="p-2 border">{equipment.factoryNumber}</td>
                            <td className="p-2 border">{equipment.dateOfCommissioning}</td>
                            <td className="p-2 border">{equipment.inspectionDate}</td>
                            <td className="px-6 py-2 border">
                                <div className={`${getValidUntilColor(equipment.validUntilDate)} text-white px-2 py-1 rounded-full text-center w-full`}>
                                    {equipment.validUntilDate}
                                </div>
                            </td>
                            <td className="p-2 border">{equipment.category}</td>
                            <td className="p-2 border">{equipment.model}</td>
                            <td className="p-2 border">{equipment.width}</td>
                            <td className="p-2 border">{equipment.length}</td>
                            <td className="p-2 border">{equipment.height}</td>
                            <td className="p-2 border">{equipment.depth}</td>
                            <td className="p-2 border">{equipment.dateOfDecommissioning}</td>
                            <td className="p-2 border text-center">
                                <div className="flex justify-center">
                                    <DeleteButton
                                        onDelete={() => onDelete(equipment.id)}
                                        itemName="оборудование"
                                        isAdmin={isAdmin}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EquipmentTable;