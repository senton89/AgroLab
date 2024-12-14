// AddOrderForm.jsx
import React, { useState } from 'react';

const AddOrderForm = ({ onAdd }) => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        customer: '',
        innKpp: '',
        applicationNumber: '',
        contractNumber: '',
        specificationNumber: '',
        sampleArrivalDate: '',
        testingPeriod: '',
        culture: '',
        sort: '',
        sampleCode: '',
        sampleCollector: '',
        selectionAct: '',
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
        protocol: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAdd(formData);
            setFormData({
                customer: '',
                innKpp: '',
                applicationNumber: '',
                contractNumber: '',
                specificationNumber: '',
                sampleArrivalDate: '',
                testingPeriod: '',
                culture: '',
                sort: '',
                sampleCode: '',
                sampleCollector: '',
                selectionAct: '',
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
                protocol: ''
            });
        }
    };

    const labels = {
        customer: 'Заказчик (+адрес)',
        innKpp: 'ИНН/КПП',
        applicationNumber: 'Заявка на испытание (№ и дата)',
        contractNumber: 'Договор № и дата',
        specificationNumber: 'Спецификация № и дата',
        sampleArrivalDate: 'Дата поступления образца',
        testingPeriod: 'Срок проведения испытания',
        culture: 'Культура',
        sort: 'Сорт',
        sampleCode: 'Код образца',
        sampleCollector: 'Отбор образцов провел',
        selectionAct: 'Акта отбора образца (№ и дата)',
        direction: 'Направление (№ и дата поступления образца)',
        harvestYear: 'Год урожая',
        reproduction: 'Репродукция',
        seedCategory: 'Категория семян',
        sampleWeight: 'Масса образца, г',
        batchNumber: '№ партии',
        batchWeight: 'Масса партии, ц',
        storageLocation: 'Место хранения',
        source: 'Откуда получены или своего урожая',
        seedPurpose: 'Назначение семян',
        processingType: 'Вид подработки',
        seedTreatment: 'Протравливание семян (да, нет), чем',
        analysisType: 'Вид анализа семян',
        protocol: 'Протокол (№ и дата)'
    };

    const validateForm = () => {
        const newErrors = {};
        // Validate required fields
        if (!formData.customer) newErrors.customer = 'Заказчик обязателен';
        if (!formData.innKpp) newErrors.innKpp = 'ИНН/КПП обязателен';
        if (!formData.applicationNumber) newErrors.applicationNumber = 'Заявка на испытание обязательна';
        if (!formData.contractNumber) newErrors.contractNumber = 'Договор обязателен';
        if (!formData.specificationNumber) newErrors.specificationNumber = 'Спецификация обязательна';
        if (!formData.sampleArrivalDate) newErrors.sampleArrivalDate = 'Дата поступления образца обязательна';
        if (!formData.testingPeriod) newErrors.testingPeriod = 'Срок проведения испытания обязателен';
        if (!formData.culture) newErrors.culture = 'Культура обязательна';
        if (!formData.sort) newErrors.sort = 'Сорт обязателен';
        if (!formData.sampleCode) newErrors.sampleCode = 'Код образца обязателен';
        if (!formData.sampleCollector) newErrors.sampleCollector = 'Отбор образцов провел обязателен';
        if (!formData.selectionAct) newErrors.selectionAct = 'Акта отбора образца обязателен';
        if (!formData.direction) newErrors.direction = 'Направление обязательно';
        if (!formData.harvestYear) newErrors.harvestYear = 'Год урожая обязателен';
        if (!formData.reproduction) newErrors.reproduction = 'Репродукция обязательна';
        if (!formData.seedCategory) newErrors.seedCategory = 'Категория семян обязательна';
        if (!formData.sampleWeight) newErrors.sampleWeight = 'Масса образца обязательна';
        if (!formData.batchNumber) newErrors.batchNumber = '№ партии обязателен';
        if (!formData.batchWeight) newErrors.batchWeight = 'Масса партии обязательна';
        if (!formData.storageLocation) newErrors.storageLocation = 'Место хранения обязательно';
        if (!formData.source) newErrors.source = 'Откуда получены или своего урожая обязательно';
        if (!formData.seedPurpose) newErrors.seedPurpose = 'Назначение семян обязательно';
        if (!formData.processingType) newErrors.processingType = 'Вид подработки обязателен';
        if (!formData.seedTreatment) newErrors.seedTreatment = 'Протравливание семян обязательно';
        if (!formData.analysisType) newErrors.analysisType = 'Вид анализа семян обязателен';
        if (!formData.protocol) newErrors.protocol = 'Протокол обязателен';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-md overflow-auto">
            <h2 className="text-lg font-bold mb-4">Добавить заказ</h2>
            {Object.keys(formData).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block mb-1 text-gray-700">{labels[key]}</label>
                    <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={() => setFormData({})}>Отменить</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Добавить</button>
            </div>
        </form>
    );
};

export default AddOrderForm;