import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import SampleService from '../../services/SampleService';
import SampleRepository from '../../Repository/SampleRepository';

const AddSampleForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams(); // Get the sample ID from URL if editing
    const { sample } = location.state || {}; // Get sample data from location state if available

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const [formData, setFormData] = useState({
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
        culture: '',
        variety: '',
        sampleCode: '',
        sampleTakenBy: 'Сотрудник ИЛ',
        applicationForTesting: '',
        contractNumber: '',
        certificateNumberAndDate: '',
        testingPeriod: '',
        selectionAct: ''
    });

    useEffect(() => {
        if (id || sample) {
            setIsEditMode(true);

            // If we have sample data from location state, use it
            if (sample) {
                setFormData(sample);
            }
            // Otherwise, fetch the sample data using the ID
            else if (id) {
                const fetchSample = async () => {
                    setIsLoading(true);
                    try {
                        const sampleRepo = SampleRepository();
                        const samples = await sampleRepo.getSampleList();
                        const foundSample = samples.find(s => s.id === parseInt(id));

                        if (foundSample) {
                            setFormData(foundSample);
                        } else {
                            setErrors({ general: 'Образец не найден' });
                            navigate('/samples');
                        }
                    } catch (error) {
                        console.error('Error fetching sample:', error);
                        setErrors({ general: 'Ошибка при загрузке образца' });
                    } finally {
                        setIsLoading(false);
                    }
                };

                fetchSample();
            }
        }
    }, [id, sample, navigate]);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setUploadedFile(file);
        setIsLoading(true);

        try {
            // Создаем FormData для отправки файла
            const formData = new FormData();
            formData.append('file', file);

            // Отправляем файл на сервер
            const response = await SampleService.uploadSampleFile(formData);

            // Заполняем форму данными, полученными от сервера
            if (response && response.data) {
                setFormData(prevData => ({
                    ...prevData,
                    ...response.data
                }));
            }
        } catch (error) {
            console.error('Ошибка при загрузке файла:', error);
            setErrors({
                upload: 'Произошла ошибка при обработке файла. Пожалуйста, попробуйте снова.'
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/msword': ['.doc']
            // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            // 'text/plain': ['.txt']
        },
        maxFiles: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Очистка ошибки при изменении поля
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Проверка обязательных полей
        if (!formData.direction) newErrors.direction = 'Направление обязательно';
        if (!formData.harvestYear) newErrors.harvestYear = 'Год урожая обязателен';
        if (!formData.reproduction) newErrors.reproduction = 'Репродукция обязательна';
        if (!formData.seedCategory) newErrors.seedCategory = 'Категория семян обязательна';
        if (!formData.sampleWeight) newErrors.sampleWeight = 'Масса образца обязательна';
        if (!formData.batchNumber) newErrors.batchNumber = '№ партии обязателен';
        if (!formData.batchWeight) newErrors.batchWeight = 'Масса партии обязательна';
        if (!formData.storageLocation) newErrors.storageLocation = 'Место хранения обязательно';
        if (!formData.culture) newErrors.culture = 'Культура обязательна';
        if (!formData.variety) newErrors.variety = 'Сорт обязателен';

        // Проверка числовых полей
        if (formData.sampleWeight && isNaN(formData.sampleWeight)) {
            newErrors.sampleWeight = 'Масса образца должна быть числом';
        }

        if (formData.batchWeight && isNaN(formData.batchWeight)) {
            newErrors.batchWeight = 'Масса партии должна быть числом';
        }

        // Проверка года
        if (formData.harvestYear) {
            const currentYear = new Date().getFullYear();
            if (isNaN(formData.harvestYear) ||
                parseInt(formData.harvestYear) < 1900 ||
                parseInt(formData.harvestYear) > currentYear) {
                newErrors.harvestYear = 'Год урожая должен быть числом между 1900 и текущим годом';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     if (validateForm()) {
    //         try {
    //             setIsLoading(true);
    //             await SampleService.addSample(formData);
    //             navigate('/samples');
    //         } catch (error) {
    //             console.error('Ошибка при сохранении образца:', error);
    //             setErrors({
    //                 submit: 'Произошла ошибка при сохранении образца. Пожалуйста, попробуйте снова.'
    //             });
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setIsLoading(true);
                const sampleRepo = SampleRepository();

                if (isEditMode) {
                    await sampleRepo.updateSample(formData.id, formData);
                } else {
                    await sampleRepo.addSample(formData);
                }

                navigate('/samples');
            } catch (error) {
                console.error('Ошибка при сохранении образца:', error);
                setErrors({
                    submit: 'Произошла ошибка при сохранении образца. Пожалуйста, попробуйте снова.'
                });
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCancel = () => {
        navigate('/samples');
    };

    return (
        <div className="flex-1 p-8 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                    {isEditMode ? 'Редактирование образца' : 'Добавление нового образца'}
                </h2>
                {/* Drag and Drop зона */}
                <div className="mb-6">
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed p-8 rounded-lg text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-400'}`}
                    >
                        <input {...getInputProps()} />
                        {uploadedFile ? (
                            <div className="flex flex-col items-center">
                                <div className="text-green-600 mb-2">
                                    <i className="fas fa-check-circle text-2xl"></i>
                                </div>
                                <p className="text-gray-700">Файл загружен: {uploadedFile.name}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Перетащите другой файл или нажмите для замены
                                </p>
                            </div>
                        ) : isDragActive ? (
                            <div className="flex flex-col items-center">
                                <div className="text-orange-500 mb-2">
                                    <i className="fas fa-file-upload text-3xl"></i>
                                </div>
                                <p className="text-gray-700">Отпустите файл здесь...</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="text-gray-400 mb-2">
                                    <i className="fas fa-file-upload text-3xl"></i>
                                </div>
                                <p className="text-gray-700">Перетащите файл сюда или нажмите для выбора</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Поддерживаемые форматы: DOC, DOCX
                                </p>
                            </div>
                        )}
                    </div>
                    {errors.upload && (
                        <p className="text-red-500 text-sm mt-1">{errors.upload}</p>
                    )}
                </div>

                {isLoading ? (
                    <div className="flex justify-center my-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Основные поля формы */}
                            <div>
                                <label className="block mb-1 text-gray-700">Культура*</label>
                                <input
                                    type="text"
                                    name="culture"
                                    value={formData.culture}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.culture ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.culture && <p className="text-red-500 text-sm mt-1">{errors.culture}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Сорт*</label>
                                <input
                                    type="text"
                                    name="variety"
                                    value={formData.variety}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.variety ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.variety && <p className="text-red-500 text-sm mt-1">{errors.variety}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Направление*</label>
                                <input
                                    type="text"
                                    name="direction"
                                    value={formData.direction}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.direction ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.direction && <p className="text-red-500 text-sm mt-1">{errors.direction}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Год урожая*</label>
                                <input
                                    type="text"
                                    name="harvestYear"
                                    value={formData.harvestYear}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.harvestYear ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.harvestYear && <p className="text-red-500 text-sm mt-1">{errors.harvestYear}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Репродукция*</label>
                                <input
                                    type="text"
                                    name="reproduction"
                                    value={formData.reproduction}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.reproduction ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.reproduction && <p className="text-red-500 text-sm mt-1">{errors.reproduction}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Категория семян*</label>
                                <input
                                    type="text"
                                    name="seedCategory"
                                    value={formData.seedCategory}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.seedCategory ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.seedCategory && <p className="text-red-500 text-sm mt-1">{errors.seedCategory}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Масса образца, г*</label>
                                <input
                                    type="text"
                                    name="sampleWeight"
                                    value={formData.sampleWeight}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.sampleWeight ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.sampleWeight && <p className="text-red-500 text-sm mt-1">{errors.sampleWeight}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">№ партии*</label>
                                <input
                                    type="text"
                                    name="batchNumber"
                                    value={formData.batchNumber}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.batchNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.batchNumber && <p className="text-red-500 text-sm mt-1">{errors.batchNumber}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Масса партии, ц*</label>
                                <input
                                    type="text"
                                    name="batchWeight"
                                    value={formData.batchWeight}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.batchWeight ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.batchWeight && <p className="text-red-500 text-sm mt-1">{errors.batchWeight}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Место хранения*</label>
                                <input
                                    type="text"
                                    name="storageLocation"
                                    value={formData.storageLocation}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${errors.storageLocation ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                                    required
                                />
                                {errors.storageLocation && <p className="text-red-500 text-sm mt-1">{errors.storageLocation}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Откуда получены</label>
                                <input
                                    type="text"
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Назначение семян</label>
                                <input
                                    type="text"
                                    name="seedPurpose"
                                    value={formData.seedPurpose}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Вид подработки</label>
                                <input
                                    type="text"
                                    name="processingType"
                                    value={formData.processingType}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Протравливание семян</label>
                                <input
                                    type="text"
                                    name="seedTreatment"
                                    value={formData.seedTreatment}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Вид анализа семян</label>
                                <input
                                    type="text"
                                    name="analysisType"
                                    value={formData.analysisType}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Код образца</label>
                                <input
                                    type="text"
                                    name="sampleCode"
                                    value={formData.sampleCode}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Отбор образцов провел</label>
                                <select
                                    name="sampleTakenBy"
                                    value={formData.sampleTakenBy}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                >
                                    <option value="Сотрудник ИЛ">Сотрудник ИЛ</option>
                                    <option value="Заказчик">Заказчик</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Протокол</label>
                                <input
                                    type="text"
                                    name="protocol"
                                    value={formData.protocol}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Заявка на испытание</label>
                                <input
                                    type="text"
                                    name="applicationForTesting"
                                    value={formData.applicationForTesting}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Договор</label>
                                <input
                                    type="text"
                                    name="contractNumber"
                                    value={formData.contractNumber}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Срок проведения испытания</label>
                                <input
                                    type="text"
                                    name="testingPeriod"
                                    value={formData.testingPeriod}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-gray-700">Акт отбора</label>
                                <input
                                    type="text"
                                    name="selectionAct"
                                    value={formData.selectionAct}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>

                        {errors.submit && (
                            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                {errors.submit}
                            </div>
                        )}

                        <div className="flex justify-end mt-8 space-x-4">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-6 border border-gray-300 rounded-lg shadow"
                            >
                                Отмена
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow"
                            >
                                {isLoading ? 'Сохранение...' : (isEditMode ? 'Сохранить изменения' : 'Сохранить')}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AddSampleForm;