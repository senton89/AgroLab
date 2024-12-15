// OrderTable.jsx
import React, { useState } from 'react';

const OrderTable = ({ orderList }) => {
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

    return (
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th onClick={() => requestSort('customer')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Заказчик</th>
                    <th onClick={() => requestSort('innKpp')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ИНН/КПП</th>
                    <th onClick={() => requestSort('applicationNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Заявка на испытание</th>
                    <th onClick={() => requestSort('contractNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Договор</th>
                    <th onClick={() => requestSort('specificationNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Спецификация</th>
                    <th onClick={() => requestSort('sampleArrivalDate')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата поступления</th>
                    <th onClick={() => requestSort('testingPeriod')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Срок проведения</th>
                    <th onClick={() => requestSort('culture')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Культура</th>
                    <th onClick={() => requestSort('sort')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Сорт</th>
                    <th onClick={() => requestSort('sampleCode')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Код образца</th>
                    <th onClick={() => requestSort('sampleCollector')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Отбор образцов</th>
                    <th onClick={() => requestSort('harvestYear')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Год урожая</th>
                    <th onClick={() => requestSort('reproduction')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Репродукция</th>
                    <th onClick={() => requestSort('seedCategory')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Категория семян</th>
                    <th onClick={() => requestSort('sampleWeight')} className="cursor-pointer px- 6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса образца</th>
                    <th onClick={() => requestSort('batchNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">№ партии</th>
                    <th onClick={() => requestSort('batchWeight')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса партии</th>
                    <th onClick={() => requestSort('storageLocation')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Место хранения</th>
                    <th onClick={() => requestSort('seedPurpose')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Назначение семян</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sortedOrders.map((order, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{order.customer}</td>
                        <td className="px-6 py-4">{order.innKpp}</td>
                        <td className="px-6 py-4">{order.applicationNumber}</td>
                        <td className="px-6 py-4">{order.contractNumber}</td>
                        <td className="px-6 py-4">{order.specificationNumber}</td>
                        <td className="px-6 py-4">{order.sampleArrivalDate}</td>
                        <td className="px-6 py-4">{order.testingPeriod}</td>
                        <td className="px-6 py-4">{order.culture}</td>
                        <td className="px-6 py-4">{order.sort}</td>
                        <td className="px-6 py-4">{order.sampleCode}</td>
                        <td className="px-6 py-4">{order.sampleCollector}</td>
                        <td className="px-6 py-4">{order.harvestYear}</td>
                        <td className="px-6 py-4">{order.reproduction}</td>
                        <td className="px-6 py-4">{order.seedCategory}</td>
                        <td className="px-6 py-4">{order.sampleWeight}</td>
                        <td className="px-6 py-4">{order.batchNumber}</td>
                        <td className="px-6 py-4">{order.batchWeight}</td>
                        <td className="px-6 py-4">{order.storageLocation}</td>
                        <td className="px-6 py-4">{order.seedPurpose}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;