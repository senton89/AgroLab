// MockSampleService.js
class Sample {
    constructor({
                    id,
                    direction,
                    harvestYear,
                    reproduction,
                    seedCategory,
                    sampleWeight,
                    batchNumber,
                    batchWeight,
                    storageLocation,
                    source,
                    seedPurpose,
                    processingType,
                    seedTreatment,
                    analysisType,
                    protocol,
                    applicationForTesting,
                    contractNumber,
                    certificateNumberAndDate,
                    testingPeriod,
                    sampleCode,
                    sampleTakenBy,
                    selectionAct,
                    culture, // New field for Culture
                    variety, // New field for Variety
                }) {
        this.id = id;
        this.direction = direction;
        this.harvestYear = harvestYear;
        this.reproduction = reproduction;
        this.seedCategory = seedCategory;
        this.sampleWeight = sampleWeight;
        this.batchNumber = batchNumber;
        this.batchWeight = batchWeight;
        this.storageLocation = storageLocation;
        this.source = source;
        this.seedPurpose = seedPurpose;
        this.processingType = processingType;
        this.seedTreatment = seedTreatment;
        this.analysisType = analysisType;
        this.protocol = protocol;
        this.applicationForTesting = applicationForTesting;
        this.contractNumber = contractNumber;
        this.certificateNumberAndDate = certificateNumberAndDate;
        this.testingPeriod = testingPeriod;
        this.sampleCode = sampleCode;
        this.sampleTakenBy = sampleTakenBy;
        this.selectionAct = selectionAct;
        this.culture = culture; // Assigning the new field
        this.variety = variety; // Assigning the new field
    }
}

const sampleList = [
    new Sample({
        id: 1,
        direction: 'Direction 1',
        harvestYear: '2022',
        reproduction: 'Reproduction 1',
        seedCategory: 'Seed Category 1',
        sampleWeight: '100',
        batchNumber: '1',
        batchWeight: '1000',
        storageLocation: 'Storage Location 1',
        source: 'Source 1',
        seedPurpose: 'Seed Purpose 1',
        processingType: 'Processing Type 1',
        seedTreatment: 'Seed Treatment 1',
        analysisType: 'Analysis Type 1',
        protocol: 'Protocol 1',
        applicationForTesting: 'Application for Testing 1',
        contractNumber: 'Contract Number 1',
        certificateNumberAndDate: 'Certificate Number 1, Date 2022-01-01',
        testingPeriod: 'Testing Period 1',
        sampleCode: 'Sample Code 1',
        sampleTakenBy: 'Sample Taken By 1',
        selectionAct: 'Selection Act 1',
        culture: 'Culture 1', // New field value
        variety: 'Variety 1', // New field value
    }),
    new Sample({
        id: 2,
        direction: 'Direction 2',
        harvestYear: '2023',
        reproduction: 'Reproduction 2',
        seedCategory: 'Seed Category 2',
        sampleWeight: '200',
        batchNumber: '2',
        batchWeight: '2000',
        storageLocation: 'Storage Location 2',
        source: 'Source 2',
        seedPurpose: 'Seed Purpose 2',
        processingType: 'Processing Type 2',
        seedTreatment: 'Seed Treatment 2',
        analysisType: 'Analysis Type 2',
        protocol: 'Protocol 2',
        applicationForTesting: 'Application for Testing 2',
        contractNumber: 'Contract Number 2',
        certificateNumberAndDate: 'Certificate Number 2, Date 2023-01-01',
        testingPeriod: 'Testing Period 2',
        sampleCode: 'Sample Code 2',
        sampleTakenBy: 'Sample Taken By 2',
        selectionAct: 'Selection Act 2',
        culture: 'Culture 2', // New field value
        variety: 'Variety 2', // New field value
    }),
];

const MockSampleService = () => {
    const addSample = async (newSample) => {
        const id = sampleList.length ? sampleList[sampleList.length - 1].id + 1 : 1; // Generate new ID
        const sample = new Sample({ ...newSample, id });
        sampleList.push(sample);
        return sample;
    };

    const getSampleList = async () => {
        return sampleList;
    };

    const updateSample = async (id, updatedSample) => {
        const index = sampleList.findIndex(sample => sample.id === id);
        if (index !== -1) {
            sampleList[index] = { ...sampleList[index], ...updatedSample };
            return sampleList[index];
        }
        throw new Error('Sample not found');
    };

    const deleteSample = async (id) => {
        const index = sampleList.findIndex(sample => sample.id === id);
        if (index !== -1) {
            const deletedSample = sampleList.splice(index, 1);
            return deletedSample[0];
        }
        throw new Error('Sample not found');
    };

    return {
        addSample,
        getSampleList,
        updateSample,
        deleteSample
    };
};

export default MockSampleService;