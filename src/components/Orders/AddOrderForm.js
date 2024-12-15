import React, { useState, useEffect } from 'react';
import CultureRepository from '../../Repository/CultureRepository'; // Импортируйте репозиторий культур
import useCustomerRepository from '../../Repository/CustomerRepository'; // Импортируйте репозиторий заказчиков

const AddOrderForm = ({ onAdd }) => {
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

    const [cultures, setCultures] = useState([]); // Состояние для хранения культур
    const [filteredCultures, setFilteredCultures] = useState([]); // Состояние для фильтрации культур
    const [showAddCulture, setShowAddCulture] = useState(false); // Состояние для отображения кнопки добавления культуры

    // Состояние для хранения заказчиков
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [showAddCustomer, setShowAddCustomer] = useState(false); // Состояние для отображения кнопки добавления заказчика

    const { customerList, loading, error, addCustomer } = useCustomerRepository(); // Используем репозиторий заказчиков

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
            setShowAddCustomer(!filtered.some(customer => customer.name.toLowerCase() === value.toLowerCase()) && value !== ''); // Показываем кнопку добавления, если введенное значение отсутствует в списке
            if (filtered.length === 1) {
                setFormData(prevFormData => ({ ...prevFormData, innKpp: filtered[0].inn })); // Подтягиваем ИНН
            } else {
                setFormData(prevFormData => ({ ...prevFormData, innKpp: '' })); // Сбрасываем ИНН, если не найден
            }
        } else if (name === 'culture') {
            setFormData({ ...formData, [name]: value });
            const filtered = cultures.filter(culture => culture.toLowerCase().includes(value.toLowerCase()));
            setFilteredCultures(filtered);
            setShowAddCulture(!filtered.includes(value) && value !== ''); // Показываем кнопку добавления, если введенное значение отсутствует в списке
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
            const newCustomer = { name: formData.customer, innKpp: formData.innKpp }; // Создаем нового заказчика
            await addCustomer(newCustomer);
            setFilteredCustomers([]);
            setShowAddCustomer(false);
            setFormData({ ...formData, customer: newCustomer.name, innKpp: newCustomer.innKpp }); // Сбросить поля
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
            setFormData({ ...formData, culture: formData.culture }); // Сбросить поле культуры
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
        return Object.keys(newErrors).length === 0; // Возвращает true, если нет ошибок
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4 max-w-lg overflow-auto">
            <h2 className="text-lg font-bold mb-4">Добавить заказ</h2>
            {Object.keys(formData).map((key) => (
                <div className="mb-4" key={key}>
                    <label className="block mb-1 text-gray-700">{labels[key]}</label>
                    {key === 'customer' ? (
                        <>
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Введите заказчика"
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
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Введите культуру"
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
                                    className="mt-2 bg-green-500 hover:bg-green-700 text-white font bold py-1 px-2 rounded"
                                >
                                    Добавить культуру
                                </button>
                            )}
                        </>
                    ) : key === 'applicationNumber' || key === 'specificationNumber' || key === 'selectionAct' || key === 'contractNumber' ? (
                        <>
                            <input
                                type="text"
                                name={`${key}.number`}
                                value={formData[key].number}
                                onChange={handleChange}
                                placeholder="№"
                                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
                                required
                            />
                            <input
                                type="date"
                                name={`${key}.date`}
                                value={formData[key].date}
                                onChange={handleChange}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                                required
                            />
                        </>
                    ) : key === 'sampleArrivalDate' ? (
                        <input
                            type="date"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    ) : key === 'direction' ? (
                        <>
                            <input
                                type="text"
                                name={`${key}.number`}
                                value={formData.direction.number}
                                onChange={handleChange}
                                placeholder="№"
                                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
                                required
                            />
                            <input
                                type="date"
                                name={`${key}.date`}
                                value={formData.direction.date}
                                onChange={handleChange}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                                required
                            />
                        </>
                    ) : key === 'harvestYear' ? (
                        <input
                            type="number"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder="Год"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    ) : key === 'testingPeriod' ? (
                        <>
                            <input
                                type="date"
                                name="testingPeriod.start"
                                value={formData.testingPeriod.start}
                                onChange={handleChange}
                                className="w-1/2 p-2 border border-gray-300 rounded mr-2"
                                required
                            />
                            <input
                                type="date"
                                name="testingPeriod.end"
                                value={formData.testingPeriod.end}
                                onChange={handleChange}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                                required
                            />
                        </>
                    ) : key === 'sampleCollector' ? (
                        <select
                            name={key}
                            value={formData.sampleCollector}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="Сотрудник ИЛ">Сотрудник ИЛ</option>
                            <option value="Заказчик">Заказчик</option>
                        </select>
                    ) : (
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    )}
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