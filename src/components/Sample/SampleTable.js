// SampleTable.jsx
import React from 'react';

const SampleTable = ({ sampleList }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Направление</th>
                <th>Год урожая</th>
                <th>Репродукция</th>
                <th>Категория семян</th>
                <th>Масса образца, г</th>
                <th>№ партии</th>
                <th>Масса партии, ц</th>
                <th>Место хранения</th>
                <th>Откуда получены</th>
                <th>Назначение семян</th>
                <th>Вид подработки</th>
                <th>Протравливание семян</th>
                <th>Вид анализа семян</th>
                <th>Протокол</th>
            </tr>
            </thead>
            <tbody>
            {sampleList.map((sample, index) => (
                <tr key={index}>
                    <td>{sample.napravlenie}</td>
                    <td>{sample.godUrozhaya}</td>
                    <td>{sample.reprodukcija}</td>
                    <td>{sample.kategoriaSemjan}</td>
                    <td>{sample.massaObrazca}</td>
                    <td>{sample.nomerPartii}</td>
                    <td>{sample.massaPartii}</td>
                    <td>{sample.mestoHranenie}</td>
                    <td>{sample.otKudaPolucheny}</td>
                    <td>{sample.naznachenieSemjan}</td>
                    <td>{sample.vidPodrabotki}</td>
                    <td>{sample.protivlivanieSemjan}</td>
                    <td>{sample.vidAnalizaSemjan}</td>
                    <td>{sample.protokol}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default SampleTable;