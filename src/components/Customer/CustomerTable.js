// CustomerTable.jsx
import React from 'react';

const CustomerTable = ({ customerList }) => {
    if (!customerList || customerList.length === 0) {
        return <div>Нет доступных заказчиков.</div>; // Сообщение, если список пуст
    }
    return (
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Имя</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Адрес</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ИНН</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {customerList.map((customer, index) => (
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