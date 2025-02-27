// SampleTable.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SampleTable = ({ sampleList }) => {
    const navigate = useNavigate();
    const [sortConfig, setSortConfig] = useState({ key: 'direction', direction: 'ascending' });

    const sortedSamples = [...sampleList].sort((a, b) => {
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

    const handleLabelClick = (sample) => {
        navigate('/label', { state: { sample } }); // Pass the sample data in state
    };

    if (!sampleList || sampleList.length === 0) {
        return <div>Нет доступных образцов.</div>; // Message if the list is empty
    }

    return (
        <div className="w-full p-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-orange-500 text-white">
                    <tr>
                        <th onClick={() => requestSort('direction')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Направление</th>
                        <th onClick={() => requestSort('culture')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Культура</th>
                        <th onClick={() => requestSort('variety')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Сорт</th>
                        <th onClick={() => requestSort('harvestYear')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Год урожая</th>
                        <th onClick={() => requestSort('sampleWeight')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Масса образца (г)</th>
                        <th onClick={() => requestSort('batchNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">№ партии</th>
                        <th onClick={() => requestSort('storageLocation')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Место хранения</th>
                        <th onClick={() => requestSort('analysisType')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Вид анализа</th>
                        <th onClick={() => requestSort('protocol')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Протокол</th>
                        <th onClick={() => requestSort('sampleCode')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Код образца</th>
                        {/* Secondary fields moved to bottom */}
                        {/*
                        <th onClick={() => requestSort('reproduction')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Репродукция</th>
                        <th onClick={() => requestSort('seedCategory')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Категория семян</th>
                        <th onClick={() => requestSort('batchWeight')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Масса партии (ц)</th>
                        <th onClick={() => requestSort('source')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Откуда получены</th>
                        <th onClick={() => requestSort('seedPurpose')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Назначение семян</th>
                        <th onClick={() => requestSort('processingType')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Вид подработки</th>
                        <th onClick={() => requestSort('seedTreatment')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Протравливание семян</th>
                        <th onClick={() => requestSort('applicationForTesting')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Заявка на испытание</th>
                        <th onClick={() => requestSort('contractNumber')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Договор номер</th>
                        <th onClick={() => requestSort('certificateNumberAndDate')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Сертификат номер и дата</th>
                        <th onClick={() => requestSort('testingPeriod')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Срок испытания</th>
                        <th onClick={() => requestSort('sampleTakenBy')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Отбор провел кто</th>
                        <th onClick={() => requestSort('selectionAct')} className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Акт отбора</th>
                        */}
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {sortedSamples.map((sample, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4">{sample.direction}</td>
                            <td className="px-6 py-4">{sample.culture}</td>
                            <td className="px-6 py-4">{sample.variety}</td>
                            <td className="px-6 py-4">{sample.harvestYear}</td>
                            <td className="px-6 py-4">{sample.sampleWeight}</td>
                            <td className="px-6 py-4">{sample.batchNumber}</td>
                            <td className="px-6 py-4">{sample.storageLocation}</td>
                            <td className="px-6 py-4">{sample.analysisType}</td>
                            <td className="px-6 py-4">{sample.protocol}</td>
                            <td className="px-6 py-4">{sample.sampleCode}</td>
                            <td>
                                <button
                                    type="button"
                                    className=" bg-orange-400 text-white p-2"
                                    onClick={() => handleLabelClick(sample)} // Pass the sample object
                                >
                                    Создать этикетку
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SampleTable;