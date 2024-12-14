import SampleService from '../services/SampleService'; // Убедитесь, что путь правильный

const SampleRepository = () => {
    const addSample = async (newSample) => {
        try {
            const addedSample = await SampleService.addSample(newSample);
            return addedSample;
        } catch (error) {
            throw error;
        }
    };

    const getSampleList = async () => {
        try {
            const sampleList = await SampleService.fetchSamples(); // Используйте fetchSamples вместо getSampleList
            return sampleList;
        } catch (error) {
            throw error;
        }
    };

    const updateSample = async (id, updatedSample) => {
        try {
            const updatedSampleResponse = await SampleService.updateSample(id, updatedSample);
            return updatedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    const deleteSample = async (id) => {
        try {
            const deletedSampleResponse = await SampleService.deleteSample(id);
            return deletedSampleResponse;
        } catch (error) {
            throw error;
        }
    };

    return {
        addSample,
        getSampleList,
        updateSample,
        deleteSample,
    };
};

export default SampleRepository;