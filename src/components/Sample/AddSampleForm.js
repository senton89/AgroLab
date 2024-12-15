// AddSampleForm.jsx
import React, { useState } from 'react';

const AddSampleForm = ({ onAdd }) => {
    const [errors, setErrors] = useState({});
    const [sample, setSample] = useState({
        napravlenie: '',
        godUrozhaya: '',
        reprodukcija: '',
        kategoriaSemjan: '',
        massaObrazca: '',
        nomerPartii: '',
        massaPartii: '',
        mestoHranenie: '',
        otKudaPolucheny: '',
        naznachenieSemjan: '',
        vidPodrabotki: '',
        protivlivanieSemjan: '',
        vidAnalizaSemjan: '',
        protokol: '',
    });

    const handleChange = (event) => {
        setSample({ ...sample, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            onAdd(sample);
            setSample({
                napravlenie: '',
                godUrozhaya: '',
                reprodukcija: '',
                kategoriaSemjan: '',
                massaObrazca: '',
                nomerPartii: '',
                massaPartii: '',
                mestoHranenie: '',
                otKudaPolucheny: '',
                naznachenieSemjan: '',
                vidPodrabotki: '',
                protivlivanieSemjan: '',
                vidAnalizaSemjan: '',
                protokol: '',
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        // Validate required fields
        if (!sample.napravlenie) newErrors.napravlenie = 'Направление обязательно';
        if (!sample.godUrozhaya) newErrors.godUrozhaya = 'Год урожая обязателен';
        if (!sample.reprodukcija) newErrors.reprodukcija = 'Репродукция обязательна';
        if (!sample.kategoriaSemjan) newErrors.kategoriaSemjan = 'Категория семян обязательна';
        if (!sample.massaObrazca) newErrors.massaObrazca = 'Масса образца обязательна';
        if (!sample.nomerPartii) newErrors.nomerPartii = '№ партии обязателен';
        if (!sample.massaPartii) newErrors.massaPartii = 'Масса партии обязательна';
        if (!sample.mestoHranenie) newErrors.mestoHranenie = 'Место хранения обязательно';
        if (!sample.otKudaPolucheny) newErrors.otKudaPolucheny = 'Откуда получены обязательно';
        if (!sample.naznachenieSemjan) newErrors.naznachenieSemjan = 'Назначение семян обязательно';
        if (!sample.vidPodrabotki) newErrors.vidPodrabotki = 'Вид подработки обязателен';
        if (!sample.protivlivanieSemjan) newErrors.protivlivanieSemjan = 'Протравливание семян обязательно';
        if (!sample.vidAnalizaSemjan) newErrors.vidAnalizaSemjan = 'Вид анализа семян обязателен';
        if (!sample.protokol) newErrors.protokol = 'Протокол обязателен';

        // Validate numeric fields
        if (sample.massaObrazca && isNaN(sample.massaObrazca)) newErrors.massaObrazca = 'Масса образца должна быть числом';
        if (sample.massaPartii && isNaN(sample.massaPartii)) newErrors.massaPartii = 'Масса партии должна быть числом';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Возвращает true, если нет ошибок
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md overflow-auto">
            <h2 className="text-lg font-bold mb-4">Добавить образец</h2>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Направление:</label>
                <input
                    type="text"
                    name="napravlenie"
                    value={sample.napravlenie}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray -300 rounded"
                    required
                />
                {errors.napravlenie && <p className="text-red-500 text-sm mt-1">{errors.napravlenie}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Год урожая:</label>
                <input
                    type="text"
                    name="godUrozhaya"
                    value={sample.godUrozhaya}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.godUrozhaya && <p className="text-red-500 text-sm mt-1">{errors.godUrozhaya}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Репродукция:</label>
                <input
                    type="text"
                    name="reprodukcija"
                    value={sample.reprodukcija}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.reprodukcija && <p className="text-red-500 text-sm mt-1">{errors.reprodukcija}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Категория семян:</label>
                <input
                    type="text"
                    name="kategoriaSemjan"
                    value={sample.kategoriaSemjan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.kategoriaSemjan && <p className="text-red-500 text-sm mt-1">{errors.kategoriaSemjan}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Масса образца, г:</label>
                <input
                    type="text"
                    name="massaObrazca"
                    value={sample.massaObrazca}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.massaObrazca && <p className="text-red-500 text-sm mt-1">{errors.massaObrazca}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">№ партии:</label>
                <input
                    type="text"
                    name="nomerPartii"
                    value={sample.nomerPartii}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.nomerPartii && <p className="text-red-500 text-sm mt-1">{errors.nomerPartii}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Масса партии, ц:</label>
                <input
                    type="text"
                    name="massaPartii"
                    value={sample.massaPartii}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.massaPartii && <p className="text-red-500 text-sm mt-1">{errors.massaPartii}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Место хранения:</label>
                <input
                    type="text"
                    name="mestoHranenie"
                    value={sample.mestoHranenie}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.mestoHranenie && <p className="text-red-500 text-sm mt-1">{errors.mestoHranenie}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Откуда получены:</label>
                <input
                    type="text"
                    name="otKudaPolucheny"
                    value={sample.otKudaPolucheny}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.otKudaPolucheny && <p className="text-red-500 text-sm mt-1">{errors.otKudaPolucheny}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Назначение семян:</label>
                <input
                    type="text"
                    name="naznachenieSemjan"
                    value={sample.naznachenieSemjan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.naznachenieSemjan && <p className="text-red-500 text-sm mt-1">{errors.naznachenieSemjan}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Вид подработки:</label>
                <input
                    type="text"
                    name="vidPodrabotki"
                    value={sample.vidPodrabotki}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.vidPodrabotki && <p className="text-red-500 text-sm mt-1">{errors.vidPodrabotki}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Протравливание семян:</label>
                <input
                    type="text"
                    name="protivlivanieSemjan"
                    value={sample.protivlivanieSemjan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.protivlivanieSemjan && <p className="text-red-500 text-sm mt-1">{errors.protivlivanieSemjan}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Вид анализа семян:</label>
                <input
                    type="text"
                    name="vidAnalizaSemjan"
                    value={sample.vidAnalizaSemjan}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.vidAnalizaSemjan && <p className="text-red-500 text-sm mt-1">{errors.vidAnalizaSemjan}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Протокол:</label>
                <input
                    type="text"
                    name="protokol"
                    value={sample.protokol}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.protokol && <p className="text-red-500 text-sm mt-1">{errors.protokol}</p>}
            </div>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setSample({})}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddSampleForm;