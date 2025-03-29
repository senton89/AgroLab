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
        navigate('/label', { state: { sample } });
    };

    const handleRowDoubleClick = (sample) => {
        navigate(`/samples/edit/${sample.id}`, { state: { sample } });
    };

    if (!sampleList || sampleList.length === 0) {
        return <div className="text-center py-4">Нет доступных образцов.</div>;
    }

    // Get the category of the first sample to determine which columns to show
    const category = sampleList[0]?.category || 'seeds';

    // Define columns for each category
    const getColumnsByCategory = () => {
        const commonColumns = [
            { key: 'test_object_name', label: 'Название объекта' },
            { key: 'sample_code', label: 'Код образца' },
            { key: 'test_duration', label: 'Срок испытания' },
        ];

        switch (category) {
            case 'seeds':
                return [
                    ...commonColumns,
                    { key: 'harvest_year', label: 'Год урожая' },
                    { key: 'seed_category', label: 'Категория семян' },
                    { key: 'batch_number', label: 'Номер партии' },
                    { key: 'batch_weight', label: 'Масса партии' },
                    { key: 'storage_location', label: 'Место хранения' },
                    { key: 'research_direction', label: 'Направление исследования' },
                ];
            case 'plants':
                return [
                    ...commonColumns,
                    { key: 'culture_id', label: 'Культура' },
                    { key: 'customer', label: 'Заказчик' },
                    { key: 'inn', label: 'ИНН' },
                    { key: 'research_direction', label: 'Направление исследования' },
                    { key: 'upload_date', label: 'Дата загрузки' },
                ];
            case 'potatoes':
                return [
                    ...commonColumns,
                    { key: 'culture_id', label: 'Культура' },
                    { key: 'reproduction_id', label: 'Репродукция' },
                    { key: 'customer', label: 'Заказчик' },
                    { key: 'harvest_year', label: 'Год урожая' },
                    { key: 'tuber_count', label: 'Количество клубней' },
                ];
            case 'soil':
                return [
                    ...commonColumns,
                    { key: 'culture_id', label: 'Культура' },
                    { key: 'customer', label: 'Заказчик' },
                    { key: 'inn_kpp', label: 'ИНН/КПП' },
                    { key: 'test_basis', label: 'Основание для испытания' },
                    { key: 'contract_number', label: 'Номер договора' },
                ];
            default:
                return commonColumns;
        }
    };

    const columns = getColumnsByCategory();

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            onClick={() => requestSort(column.key)}
                            className="cursor-pointer px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                        >
                            {column.label}
                        </th>
                    ))}
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Действия
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {sortedSamples.map((sample) => (
                    <tr
                        key={sample.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        onDoubleClick={() => handleRowDoubleClick(sample)}
                    >
                        {columns.map((column) => (
                            <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                                {sample[column.key] || '-'}
                            </td>
                        ))}
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLabelClick(sample);
                                }}
                                className="text-orange-500 hover:text-blue-700 p-2 rounded-full hover:bg-gray-100"
                                title="Создать этикетку"
                            >
                                <i className="fas fa-tag"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SampleTable;