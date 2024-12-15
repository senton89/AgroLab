// AddSampleForm.jsx
import React, { useState } from 'react';

const AddSampleForm = ({ onAdd }) => {
    const [errors, setErrors] = useState({});
    const [sampleData, setSampleData] = useState({
        direction: '',
        harvestYear: '',
        reproduction: '',
        seedCategory: '',
        sampleWeight: '',
        batchNumber: '',
        batchWeight: '',
        storageLocation: '',
        source: '',
        seedPurpose: '',
        processingType: '',
        seedTreatment: '',
        analysisType: '',
        protocol: '',
    });

    const handleChange = (event) => {
        setSampleData({ ...sampleData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            onAdd(sampleData);
            setSampleData({
                direction: '',
                harvestYear: '',
                reproduction: '',
                seedCategory: '',
                sampleWeight: '',
                batchNumber: '',
                batchWeight: '',
                storageLocation: '',
                source: '',
                seedPurpose: '',
                processingType: '',
                seedTreatment: '',
                analysisType: '',
                protocol: '',
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate required fields
        if (!sampleData.direction) newErrors.direction = 'Направление обязательно';
        if (!sampleData.harvestYear) newErrors.harvestYear = 'Год урожая обязателен';
        if (!sampleData.reproduction) newErrors.reproduction = 'Репродукция обязательна';
        if (!sampleData.seedCategory) newErrors.seedCategory = 'Категория семян обязательна';
        if (!sampleData.sampleWeight) newErrors.sampleWeight = 'Масса образца обязательна';
        if (!sampleData.batchNumber) newErrors.batchNumber = '№ партии обязателен';
        if (!sampleData.batchWeight) newErrors.batchWeight = 'Масса партии обязательна';
        if (!sampleData.storageLocation) newErrors.storageLocation = 'Место хранения обязательно';
        if (!sampleData.source) newErrors.source = 'Откуда получены обязательно';
        if (!sampleData.seedPurpose) newErrors.seedPurpose = 'Назначение семян обязательно';
        if (!sampleData.processingType) newErrors.processingType = 'Вид подработки обязателен';
        if (!sampleData.seedTreatment) newErrors.seedTreatment = 'Протравливание семян обязательно';
        if (!sampleData.analysisType) newErrors.analysisType = 'Вид анализа семян обязателен';
        if (!sampleData.protocol) newErrors.protocol = 'Протокол обязателен';

        // Validate numeric fields
        if (sampleData.sampleWeight) {
            if (isNaN(sampleData.sampleWeight)) newErrors.sampleWeight = 'Масса образца должна быть числом';
            else if (parseFloat(sampleData.sampleWeight) <= 0) newErrors.sampleWeight = 'Масса образца должна быть положительным числом';
        }
        if (sampleData.batchWeight) {
            if (isNaN(sampleData.batchWeight)) newErrors.batchWeight = 'Масса партии должна быть числом';
            else if (parseFloat(sampleData.batchWeight) <= 0) newErrors.batchWeight = 'Масса партии должна быть положительным числом';
        }

        // Validate year
        if (sampleData.harvestYear) {
            const currentYear = new Date().getFullYear();
            if (isNaN(sampleData.harvestYear) || parseInt(sampleData.harvestYear) < 1900 || parseInt(sampleData.harvestYear) > currentYear) {
                newErrors.harvestYear = 'Год урожая должен быть числом между 1900 и текущим годом';
            }
        }

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
                    name="direction"
                    value={sampleData.direction}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.direction && <p className="text-red-500 text-sm mt-1">{errors.direction}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Год урожая:</label>
                <input
                    type="text"
                    name="harvestYear"
                    value={sampleData.harvestYear}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.harvestYear && <p className="text-red-500 text-sm mt-1">{errors.harvestYear}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Репродукция:</label>
                <input
                    type="text"
                    name="reproduction"
                    value={sampleData.reproduction}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.reproduction && <p className="text-red-500 text-sm mt-1">{errors.reproduction}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Категория семян:</label>
                <input
                    type="text"
                    name="seedCategory"
                    value={sampleData.seedCategory}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.seedCategory && <p className="text-red-500 text-sm mt-1">{errors.seedCategory}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Масса образца, г:</label>
                <input
                    type="text"
                    name="sampleWeight"
                    value={sampleData.sampleWeight}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.sampleWeight && <p className="text-red-500 text-sm mt-1">{errors.sampleWeight}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">№ партии:</label>
                <input
                    type="text"
                    name="batchNumber"
                    value={sampleData.batchNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.batchNumber && <p className="text-red-500 text-sm mt-1">{errors.batchNumber}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Масса партии, ц:</label>
                <input
                    type="text"
                    name="batchWeight"
                    value={sampleData.batchWeight}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.batchWeight && <p className="text-red-500 text-sm mt-1">{errors.batchWeight}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Место хранения:</label>
                <input
                    type="text"
                    name="storageLocation"
                    value={sampleData.storageLocation}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.storageLocation && <p className="text-red-500 text-sm mt-1">{errors.storageLocation}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Откуда получены:</label>
                <input
                    type="text"
                    name="source"
                    value={sampleData.source}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.source && <p className="text-red-500 text-sm mt-1">{errors.source}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Назначение семян:</label>
                <input
                    type="text"
                    name="seedPurpose"
                    value={sampleData.seedPurpose}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.seedPurpose && <p className="text-red-500 text-sm mt-1">{errors.seedPurpose}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Вид подработки:</label>
                <input
                    type="text"
                    name="processingType"
                    value={sampleData.processingType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.processingType && <p className="text-red-500 text-sm mt-1">{errors.processingType}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Протравливание семян:</label>
                <input
                    type="text"
                    name="seedTreatment"
                    value={sampleData.seedTreatment}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.seedTreatment && <p className="text-red-500 text-sm mt-1">{errors.seedTreatment}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Вид анализа семян:</label>
                <input
                    type="text"
                    name="analysisType"
                    value={sampleData.analysisType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.analysisType && <p className="text-red-500 text-sm mt-1">{errors.analysisType}</p>}
            </div>
            <div className="mb-4">
                <label className="block mb-1 text-gray-700">Протокол:</label>
                <input
                    type="text"
                    name="protocol"
                    value={sampleData.protocol}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                {errors.protocol && <p className="text-red-500 text-sm mt-1">{errors.protocol}</p>}
            </div>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setSampleData({})}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddSampleForm;