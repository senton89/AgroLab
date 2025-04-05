import SampleService from '../services/SampleService';
import MockSampleService from '../components/Mockups/MockSampleService';
import { useEffect, useState } from "react";

const useMock = true;

const SampleRepository = () => {
    const service = useMock ? MockSampleService() : SampleService; // Choose between mock and real service
    const [sampleList, setSampleList] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchSampleList = async () => {
            try {
                const samples = await service.getSampleList();
                setSampleList(samples);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Set loading state to false
            }
        };

        fetchSampleList();
    }, [service]); // Dependency on service

    const addSample = async (newSample) => {
        try {
            const addedSample = await service.addSample(newSample);
            setSampleList((prevList) => [...prevList, addedSample]); // Update sample list
            return addedSample;
        } catch (error) {
            throw error;
        }
    };

    const updateSample = async (id, updatedSample) => {
        try {
            const updatedSampleResponse = await service.updateSample(id, updatedSample);
            setSampleList((prevList) =>
                prevList.map(sample =>
                    sample.id === id ? updatedSampleResponse : sample
                )
            ); // Update sample list
            return updatedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    const deleteSample = async (id) => {
        try {
            const deletedSampleResponse = await service.deleteSample(id);
            setSampleList((prevList) =>
                prevList.filter(sample => sample.id !== id)
            ); // Update sample list
            return deletedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    const uploadSampleFile = async (formData) => {
        try {
            return await service.uploadSampleFile(formData);
        } catch (error) {
            throw error;
        }
    };

    const saveAnalysisResults = async (analysisData) => {
        try {
            const result = await service.saveAnalysisResults(analysisData);
            // If the analysis is for an existing sample, update it in the list
            if (analysisData.sampleId) {
                setSampleList((prevList) =>
                    prevList.map(sample =>
                        sample.id === analysisData.sampleId ?
                            { ...sample, analysisResults: result } :
                            sample
                    )
                );
            }
            return result;
        } catch (error) {
            throw error;
        }
    };

    const generateProtocol = async (sampleId) => {
        try {
            return await service.generateProtocol(sampleId);
        } catch (error) {
            throw error;
        }
    };

    return {
        sampleList,
        loading,
        error,
        addSample,
        updateSample,
        deleteSample,
        uploadSampleFile,
        saveAnalysisResults,
        generateProtocol
    };
};

export default SampleRepository;