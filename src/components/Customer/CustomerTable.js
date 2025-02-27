// CustomerTable.jsx
import React, { useState } from 'react';

const CustomerTable = ({ customerList }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    const sortedCustomers = [...customerList].sort((a, b) => {
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

    if (!customerList || customerList.length === 0) {
        return <div>Нет доступных заказчиков.</div>; // Сообщение, если список пуст
    }

    return (
        <div className="w-full p-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-orange-500 text-white">
                    <tr>
                        <th onClick={() => requestSort('name')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Имя</th>
                        <th onClick={() => requestSort('email')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                        <th onClick={() => requestSort('address')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Адрес</th>
                        <th onClick={() => requestSort('inn')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ИНН</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Действия</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {sortedCustomers.map((customer) => (
                        <tr key={customer.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.inn}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <i className="fas fa-trash"></i>
                                    </button>
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

export default CustomerTable;