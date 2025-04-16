// SampleTable.jsx
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SampleRepository from '../../Repository/SampleRepository';
import DeleteButton from "../DeleteButton";

const SampleTable = ({ sampleList }) => {
    const navigate = useNavigate();
    const sampleRepo = SampleRepository();
    const [sortConfig, setSortConfig] = useState({ key: 'direction', direction: 'ascending' });
    const [isLoading, setIsLoading] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user && user.role === 'admin';

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

    const handleDeleteSample = async (sampleId) => {
        setIsLoading(true);
        try {
            await sampleRepo.deleteSample(sampleId);
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при удалении образца:', error);
            alert('Не удалось удалить образец. Пожалуйста, попробуйте снова.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGenerateProtocol = async (e, sample) => {
        e.stopPropagation();
        setIsLoading(true);
        try {
            const response = await sampleRepo.generateProtocol(sample.id);
            // Предполагаем, что сервер возвращает URL для скачивания протокола
            if (response && response.downloadUrl) {
                window.open(response.downloadUrl, '_blank');
            } else {
                // Если сервер возвращает бинарные данные, можно создать blob и скачать
                const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `protocol-${sample.id}.docx`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
        } catch (error) {
            console.error('Ошибка при формировании протокола:', error);
            alert('Не удалось сформировать протокол. Пожалуйста, попробуйте снова.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!sampleList || sampleList.length === 0) {
        return <div>Нет доступных образцов.</div>;
    }

    if (!sampleList || sampleList.length === 0) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600">Нет доступных образцов по вашему запросу.</p>
            </div>
        );
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
            <table className="min-w-full divide-y divide-gray-200 text-center">
                <thead className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            onClick={() => requestSort(column.key)}
                            className="cursor-pointer px-6 py-3 text-xs font-medium uppercase tracking-wider"
                        >
                            {column.label}
                        </th>
                    ))}
                    <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">
                        Действия
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sortedSamples.map((sample) => (
                    <tr
                        key={sample.id}
                        onDoubleClick={() => handleRowDoubleClick(sample)}
                        className="hover:bg-gray-50 cursor-pointer"
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
                                className="text-orange-500 hover:text-blue-700 py-2 pr-2 rounded-full hover:bg-gray-100"
                                title="Создать этикетку"
                            >
                                <i className="fas fa-tag"></i>
                            </button>
                            <button
                                onClick={(e) => handleGenerateProtocol(e, sample)}
                                className="text-orange-500 hover:text-blue-700 p-2 rounded-full hover:bg-gray-100 ml-2"
                                title="Сформировать протокол"
                                disabled={isLoading}
                            >
                                <i className="fas fa-file-alt"></i>
                            </button>
                            <div className="pl-2">
                            <DeleteButton
                                onDelete={() => handleDeleteSample(sample.id)}
                                itemName="образец"
                                isAdmin={isAdmin}
                            />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500 mr-3"></div>
                        <span>Формирование протокола...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SampleTable;