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
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th onClick={() => requestSort('name')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Имя</th>
                    <th onClick={() => requestSort('email')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Email</th>
                    <th onClick={() => requestSort('address')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Адрес</th>
                    <th onClick={() => requestSort('inn')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ИНН</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sortedCustomers.map((customer, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{customer.name}</td>
                        <td className="px-6 py-4">{customer.email}</td>
                        <td className="px-6 py-4">{customer.address}</td>
                        <td className="px-6 py-4">{customer.inn}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;