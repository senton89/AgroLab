// OrderTable.jsx
import React from 'react';

const OrderTable = ({ orderList }) => {
    return (
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Заказчик</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ИНН/КПП</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Заявка на испытание</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Договор</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Спецификация</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Дата поступления</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Срок проведения</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Культура</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Сорт</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Код образца</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Отбор образцов</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Год урожая</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Репродукция</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Категория семян</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса образца</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">№ партии</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса партии</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Место хранения</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Назначение семян</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {orderList.map((order, index) => (
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
                        <td className="px- 6 py-4">{order.sampleCollector}</td>
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