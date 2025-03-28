// SampleManagement.jsx
import React, { useState } from 'react';
import SampleTable from './SampleTable';
import AddSampleForm from './AddSampleForm';
import useSampleRepository from '../../Repository/SampleRepository';
import {useNavigate} from "react-router-dom";
import OrderTable from "../Orders/OrderTable";
import EquipmentTable from "../Equipment/EquipmentTable";

const SampleManagement = () => {
    const { sampleList, loading, error, addSample} = useSampleRepository();
    // const { sampleList, loading, error, addSample } = useSampleRepository();
    const navigate = useNavigate();
    const handleAddSample = (newSample) => {
        addSample(newSample);
        setIsFormVisible(false);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
    <div className="flex flex-col w-full pb-0 p-10 mx-4">
        <button
            onClick={() => navigate('/samples/add')}
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded self-end mb-10 w-1/6"
        >
            Добавить образец
        </button>
        <div className="rounded-lg overflow-hidden w-full">
            <SampleTable sampleList={sampleList}/>
        </div>
    </div>
)
    ;
};

export default SampleManagement;