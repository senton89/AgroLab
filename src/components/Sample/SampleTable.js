// SampleTable.jsx
import React from 'react';

const SampleTable = ({ sampleList }) => {
    if (!sampleList || sampleList.length === 0) {
        return <div>Нет доступных образцов.</div>; // Сообщение, если список пуст
    }

    return (
        <div className="overflow-x-auto max-w-6xl">
            <table className="min-w-full text-gray-700">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Направление</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Год урожая</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Репродукция</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Категория семян</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса образца, г</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">№ партии</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Масса партии, ц</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Место хранения</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Откуда получены</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Назначение семян</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Вид подработки</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Протравливание семян</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Вид анализа семян</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Протокол</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {sampleList.map((sample, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4">{sample.napravlenie}</td>
                        <td className="px-6 py-4">{sample.godUrozhaya}</td>
                        <td className="px-6 py-4">{sample.reprodukcija}</td>
                        <td className="px-6 py-4">{sample.kategoriaSemjan}</td>
                        <td className="px-6 py-4">{sample.massaObrazca}</td>
                        <td className="px-6 py-4">{sample.nomerPartii}</td>
                        <td className="px-6 py-4">{sample.massaPartii}</td>
                        <td className="px-6 py-4">{sample.mestoHranenie}</td>
                        <td className="px-6 py-4">{sample.otKudaPolucheny}</td>
                        <td className="px-6 py-4">{sample.naznachenieSemjan}</td>
                        <td className="px-6 py-4">{sample.vidPodrabotki}</td>
                        <td className="px-6 py-4">{sample.protivlivanieSemjan}</td>
                        <td className="px-6 py-4">{sample.vidAnalizaSemjan}</td>
                        <td className="px-6 py-4">{sample.protokol}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SampleTable;