import React, { useState, useEffect } from 'react';
import CultureRepository from '../../Repository/CultureRepository'; 
import useCustomerRepository from '../../Repository/CustomerRepository'; 
import { useNavigate } from 'react-router-dom';

const AddOrderForm = ({ onAdd, onCancel }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/orders');
    };

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        customer: '',
        innKpp: '',
        applicationNumber: { number: '', date: '' },
        contractNumber: { number: '', date: '' },
        specificationNumber: { number: '', date: '' },
        sampleArrivalDate: '',
        testingPeriod: { start: '', end: '' },
        culture: '',
        sort: '',
        sampleCode: '',
        sampleCollector: 'Сотрудник ИЛ',
        selectionAct: { number: '', date: '' },
        direction: { number: '', date: '' },
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

    const [cultures, setCultures] = useState([]); 
    const [filteredCultures, setFilteredCultures] = useState([]); 
    const [showAddCulture, setShowAddCulture] = useState(false); 

    const [filteredCustomers, setFilteredCustomers] = useState([]); 
    const [showAddCustomer, setShowAddCustomer] = useState(false); 

    const { customerList, loading, error, addCustomer } = useCustomerRepository(); 

    useEffect(() => {
        const fetchCultures = async () => {
            const cultures = await CultureRepository.getCultures();
            setCultures(cultures);
        };
        fetchCultures();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'customer') {
            setFormData({ ...formData, [name]: value });
            const filtered = customerList.filter(customer => customer.name.toLowerCase().includes(value.toLowerCase()));
            setFilteredCustomers(filtered);
            setShowAddCustomer(!filtered.some(customer => customer.name.toLowerCase() === value.toLowerCase()) && value !== ''); 
            if (filtered.length === 1) {
                setFormData(prevFormData => ({ ...prevFormData, innKpp: filtered[0].inn })); 
            } else {
                setFormData(prevFormData => ({ ...prevFormData, innKpp: '' })); 
            }
        } else if (name === 'culture') {
            setFormData({ ...formData, [name]: value });
            const filtered = cultures.filter(culture => culture.toLowerCase().includes(value.toLowerCase()));
            setFilteredCultures(filtered);
            setShowAddCulture(!filtered.includes(value) && value !== ''); 
        } else if (name.includes('number') || name.includes('date')) {
            const [field, type] = name.split('.');
            setFormData({
                ...formData,
                [field]: {
                    ...formData[field],
                    [type]: value
                }
            });
        } else if (name.includes('start') || name.includes('end')) {
            const [field, type] = name.split('.');
            setFormData({
                ...formData,
                [field]: {
                    ...formData[field],
                    [type]: value
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formattedData = {
                ...formData,
                applicationNumber: `${formData.applicationNumber.number} от ${formData.applicationNumber.date}`,
                contractNumber: `${formData.contractNumber.number} от ${formData.contractNumber.date}`,
                specificationNumber: `${formData.specificationNumber.number} от ${formData.specificationNumber.date}`,
                selectionAct: `${formData.selectionAct.number} от ${formData.selectionAct.date}`,
                testingPeriod: `Срок: с ${formData.testingPeriod.start} по ${formData.testingPeriod.end}`
            };
            onAdd(formattedData);
            setFormData({
                customer: '',
                innKpp: '',
                applicationNumber: { number: '', date: '' },
                contractNumber: { number: '', date: '' },
                specificationNumber: { number: '', date: '' },
                sampleArrivalDate: '',
                testingPeriod: { start: '', end: '' },
                culture: '',
                sort: '',
                sampleCode: '',
                sampleCollector: 'Сотрудник ИЛ',
                selectionAct: { number: '', date: '' },
                direction: { number: '', date: '' },
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

    const handleAddCustomer = async () => {
        if (formData.customer && formData.innKpp) {
            const newCustomer = { name: formData.customer, innKpp: formData.innKpp }; 
            await addCustomer(newCustomer);
            setFilteredCustomers([]);
            setShowAddCustomer(false);
            setFormData({ ...formData, customer: newCustomer.name, innKpp: newCustomer.innKpp }); 
        } else {
            if (!formData.innKpp) {
                setErrors(prevErrors => ({ ...prevErrors, innKpp: 'ИНН обязателен для добавления заказчика' }));
            }
        }
    };

    const handleAddCulture = async () => {
        if (formData.culture) {
            await CultureRepository.createCulture(formData.culture);
            const cultures = await CultureRepository.getCultures();
            setCultures(cultures);
            setFilteredCultures([]);
            setShowAddCulture(false);
            setFormData({ ...formData, culture: formData.culture }); 
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.customer) newErrors.customer = 'Заказчик обязателен';
        if (!formData.innKpp) newErrors.innKpp = 'ИНН/КПП обязателен';
        if (!formData.applicationNumber.number || !formData.applicationNumber.date) newErrors.applicationNumber = 'Заявка на испытание обязательна';
        if (!formData.contractNumber.number || !formData.contractNumber.date) newErrors.contractNumber = 'Договор обязателен';
        if (!formData.specificationNumber.number || !formData.specificationNumber.date) newErrors.specificationNumber = 'Спецификация обязательна';
        if (!formData.sampleArrivalDate) newErrors.sampleArrivalDate = 'Дата поступления образца обязательна';
        if (!formData.testingPeriod.start || !formData.testingPeriod.end) newErrors.testingPeriod = 'Срок проведения испытания обязателен';
        if (!formData.culture) newErrors.culture = 'Культура обязательна';
        if (!formData.sort) newErrors.sort = 'Сорт обязателен';
        if (!formData.sampleCode) newErrors.sampleCode = 'Код образца обязателен';
        if (!formData.sampleCollector) newErrors.sampleCollector = 'Отбор образцов провел обязателен';
        if (!formData.selectionAct.number || !formData.selectionAct.date) newErrors.selectionAct = 'Акт отбора образца обязателен';
        if (!formData.direction.number || !formData.direction.date) newErrors.direction = 'Направление обязательно';
        if (!formData.harvestYear) newErrors.harvestYear = 'Год урожая обязателен';
        if (!formData.reproduction) newErrors.reproduction = 'Репродукция обязательна';
        if (!formData.seedCategory) newErrors.seedCategory = 'Категория семян обязательна';
        if (!formData.sampleWeight) newErrors.sampleWeight = 'Масса образца обязательна';
        if (!formData.batchNumber) newErrors.batchNumber = '№ партии обязателен';
        if (!formData.batchWeight) newErrors.batchWeight = 'Масса партии обязательна';
        if (!formData.storageLocation) newErrors.storageLocation = 'Место хранения обязательно';
        if (!formData.source) newErrors.source = 'Откуда получены или своего урожая обязательно';
        if (!formData.seedPurpose) newErrors.seedPurpose = 'Назначение семян обязательно';
        if (!formData.processingType) newErrors.processingType = 'Вид подработ ки обязателен';
        if (!formData.seedTreatment) newErrors.seedTreatment = 'Протравливание семян обязательно';
        if (!formData.analysisType) newErrors.analysisType = 'Вид анализа семян обязателен';
        if (!formData.protocol) newErrors.protocol = 'Протокол обязателен';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const labels = {
        customer: 'Заказчик (+адрес)',
        innKpp: 'ИНН/КПП',
        applicationNumber: 'Заявка на испытание (№ и дата)',
        contractNumber: 'Договор (№ и дата)',
        specificationNumber: 'Спецификация (№ и дата)',
        sampleArrivalDate: 'Дата поступления образца',
        testingPeriod: 'Срок проведения испытания ( с - по)',
        culture: 'Культура',
        sort: 'Сорт',
        sampleCode: 'Код образца',
        sampleCollector: 'Отбор образцов провел',
        selectionAct: 'Акт отбора образца (№ и дата)',
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

    return (
        <div className="flex bg-gray-100">
            <div className="w-full p-10">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-3 gap-6">
                            {Object.keys(formData).map((key) => (
                                <div key={key}>
                                    <label className="block text-gray-700">{labels[key]}</label>
                                    {key === 'customer' ? (
                                        <>
                                            <input
                                                className="w-full border border-gray-300 p-2 rounded mt-1"
                                                type="text"
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                            />
                                            {filteredCustomers.length > 0 && (
                                                <ul className="border border-gray-300 rounded mt-1">
                                                    {filteredCustomers.map((customer, index) => (
                                                        <li
                                                            key={index}
                                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                                            onClick={() => {
                                                                setFormData({ ...formData, customer: customer.name, innKpp: customer.innKpp });
                                                                setFilteredCustomers([]);
                                                                setShowAddCustomer(false);
                                                            }}
                                                        >
                                                            {customer.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {showAddCustomer && (
                                                <button
                                                    type="button"
                                                    onClick={handleAddCustomer}
                                                    className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                                                >
                                                    Добавить заказчика
                                                </button>
                                            )}
                                        </>
                                    ) : key === 'culture' ? (
                                        <>
                                            <input
                                                className="w-full border border-gray-300 p-2 rounded mt-1"
                                                type="text"
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                            />
                                            {filteredCultures.length > 0 && (
                                                <ul className="border border-gray-300 rounded mt-1">
                                                    {filteredCultures.map((culture, index) => (
                                                        <li
                                                            key={index}
                                                            className="p-2 hover:bg-gray-200 cursor-pointer"
                                                            onClick={() => {
                                                                setFormData({ ...formData, culture });
                                                                setFilteredCultures([]);
                                                                setShowAddCulture(false);
                                                            }}
                                                        >
                                                            {culture}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {showAddCulture && (
                                                <button
                                                    type="button"
                                                    onClick={handleAddCulture}
                                                    className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                                                >
                                                    Добавить культуру
                                                </button>
                                            )}
                                        </>
                                    ) : key === 'applicationNumber' || key === 'specificationNumber' || key === 'selectionAct' || key === 'contractNumber' || key === 'direction' ? (
                                        <div className="flex items-center gap-2">
                                            <input
                                                className="w-1/2 border border-gray-300 p-2 rounded"
                                                type="text"
                                                name={`${key}.number`}
                                                value={formData[key].number}
                                                onChange={handleChange}
                                                placeholder="№"
                                            />
                                            <input
                                                className="w-1/2 border border-gray-300 p-2 rounded"
                                                type="date"
                                                name={`${key}.date`}
                                                value={formData[key].date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ) : key === 'sampleArrivalDate' ? (
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded mt-1"
                                            type="date"
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                        />
                                    ) : key === 'harvestYear' ? (
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded mt-1"
                                            type="number"
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            placeholder="Год"
                                        />
                                    ) : key === 'testingPeriod' ? (
                                        <div className="flex items-center gap-2">
                                            <input
                                                className="w-1/2 border border-gray-300 p-2 rounded"
                                                type="date"
                                                name="testingPeriod.start"
                                                value={formData.testingPeriod.start}
                                                onChange={handleChange}
                                            />
                                            <input
                                                className="w-1/2 border border-gray-300 p-2 rounded"
                                                type="date"
                                                name="testingPeriod.end"
                                                value={formData.testingPeriod.end}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ) : key === 'sampleCollector' ? (
                                        <select
                                            className="w-full border border-gray-300 p-2 rounded mt-1"
                                            name={key}
                                            value={formData.sampleCollector}
                                            onChange={handleChange}
                                        >
                                            <option value="Сотрудник ИЛ">Сотрудник ИЛ</option>
                                            <option value="Заказчик">Заказчик</option>
                                        </select>
                                    ) : (
                                        <input
                                            className="w-full border border-gray-300 p-2 rounded mt-1"
                                            type="text"
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                        />
                                    )}
                                    {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center space-x-4">
                            <button
                                type="button"
                                className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50"
                                onClick={handleCancel}
                            >
                                Отмена
                            </button>
                            <button
                                className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                                onClick={handleSubmit}
                            >
                                Сохранить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOrderForm;