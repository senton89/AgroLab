// SampleManagement.jsx
import React, { useState } from 'react';
import SampleTable from './SampleTable';
import AddSampleForm from './AddSampleForm';
import useSampleRepository from '../../Repository/SampleRepository';

const SampleManagement = () => {
    const { sampleList, loading, error, addSample} = useSampleRepository();
    // const { sampleList, loading, error, addSample } = useSampleRepository();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddSample = (newSample) => {
        addSample(newSample);
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-1">
            <h1 className="text-2xl font-bold mb-3">Учет образцов</h1>
            <button
                onClick={toggleFormVisibility}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {isFormVisible ? 'Скрыть форму' : 'Добавить новый образец'}
            </button>
            {isFormVisible && <AddSampleForm onAdd={handleAddSample} />}
            <SampleTable sampleList={sampleList} />
        </div>
    );
};

export default SampleManagement;