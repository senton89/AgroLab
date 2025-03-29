// SampleManagement.jsx
import React, { useState } from 'react';
import SampleTable from './SampleTable';
import { useNavigate } from "react-router-dom";
import SampleRepository from '../../Repository/SampleRepository';

const tabNames = {
    seeds: 'Семена',
    plants: 'Растения',
    potatoes: 'Картофель',
    soil: 'Почва',
};

const SampleManagement = () => {
    const { sampleList, loading, error } = SampleRepository();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('seeds');

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
    );

    if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

    // Filter samples by category
    const filteredSamples = sampleList ? sampleList.filter(sample => sample.category === activeTab) : [];

    const handleAddSample = () => {
        navigate('/samples/add', { state: { category: activeTab } });
    };

    return (
        <div className="flex flex-col w-full pb-0 p-10 mx-4">
            {/* Tabs */}
            <div className="flex border-b mb-6">
                {Object.keys(tabNames).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 font-medium text-sm capitalize ${
                            activeTab === tab
                                ? 'border-b-2 border-orange-500 text-orange-600'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {tabNames[tab]}
                    </button>
                ))}
            </div>

            <button
                onClick={handleAddSample}
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded self-end mb-10 w-1/6"
            >
                Добавить образец
            </button>

            <div className="rounded-lg overflow-hidden w-full">
                <SampleTable sampleList={filteredSamples} />
            </div>
        </div>
    );
};

export default SampleManagement;