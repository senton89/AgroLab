// CustomerTable.jsx
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import DeleteButton from "../common/DeleteButton";
import ExportButton from "../common/ExportButton";

const CustomerTable = ({ customerList, onDeleteCustomer }) => {
    const navigate = useNavigate(); // Initialize navigate
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user && user.role === 'admin';


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

    const handleRowDoubleClick = (customer) => {
        navigate('/customers/edit', { state: { customer } });
    };

    if (!customerList || customerList.length === 0) {
        return <div>Нет доступных заказчиков.</div>; // Сообщение, если список пуст
    }

    return (
        <div className="w-full p-6 flex flex-col">
            <div className="py-2 rounded mb-4 w-1/6 self-end mr-6">
                <ExportButton
                    data={sortedCustomers}
                    fileName="Заказчики"
                />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <table className="w-full table-scroll">
                    <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                    <tr>
                        <th onClick={() => requestSort('name')}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider">Имя
                        </th>
                        <th onClick={() => requestSort('email')}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider">Email
                        </th>
                        <th onClick={() => requestSort('address')}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider">Адрес
                        </th>
                        <th onClick={() => requestSort('inn')}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider">ИНН
                        </th>
                        <th className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {sortedCustomers.map((customer, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-100"
                            onDoubleClick={() => handleRowDoubleClick(customer)} // Add double-click handler
                        >
                            <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{customer.inn}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <DeleteButton
                                    onDelete={() => onDeleteCustomer(customer.id)}
                                    itemName="заказчика"
                                    isAdmin={isAdmin}
                                />
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