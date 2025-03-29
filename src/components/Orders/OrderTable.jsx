import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const OrderTable = ({ orderList }) => {
    const navigate = useNavigate(); // Add this
    const [sortConfig, setSortConfig] = useState({ key: 'customer', direction: 'ascending' });

    const sortedOrders = [...orderList].sort((a, b) => {
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

    const handleRowDoubleClick = (order) => {
        navigate('/orders/add', { state: { order } }); // Navigate to add form with order data
    };

    return (
        <div className="flex w-full">
                <div className="overflow-x-auto w-full">
                    <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                            <tr>
                                <th onClick={() => requestSort('customer')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Заказчик
                                </th>
                                <th onClick={() => requestSort('innKpp')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    ИНН/КПП
                                </th>
                                <th onClick={() => requestSort('applicationNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Заявка на испытание
                                </th>
                                <th onClick={() => requestSort('contractNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Договор
                                </th>
                                <th onClick={() => requestSort('specificationNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Спецификация
                                </th>
                                <th onClick={() => requestSort('sampleArrivalDate')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Дата поступления
                                </th>
                                <th onClick={() => requestSort('testingPeriod')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Срок проведения
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {sortedOrders.map((order, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 border-b border-gray-200"
                                onDoubleClick={() => handleRowDoubleClick(order)} // Add double-click handler
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.innKpp}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.applicationNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.contractNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.specificationNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.sampleArrivalDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.testingPeriod}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default OrderTable;