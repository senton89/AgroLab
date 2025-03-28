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
                    culture,
                    variety,
                    category, // New field for sample category
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
        this.culture = culture;
        this.variety = variety;
        this.category = category || 'seeds'; // Default to seeds if not specified
    }
}

// Update the sample list with categories
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
        culture: 'Culture 1',
        variety: 'Variety 1',
        category: 'seeds',
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
        culture: 'Culture 2',
        variety: 'Variety 2',
        category: 'plants',
    }),
    new Sample({
        id: 3,
        direction: 'Direction 3',
        harvestYear: '2023',
        reproduction: 'Reproduction 3',
        seedCategory: 'Seed Category 3',
        sampleWeight: '300',
        batchNumber: '3',
        batchWeight: '3000',
        storageLocation: 'Storage Location 3',
        source: 'Source 3',
        seedPurpose: 'Seed Purpose 3',
        processingType: 'Processing Type 3',
        seedTreatment: 'Seed Treatment 3',
        analysisType: 'Analysis Type 3',
        protocol: 'Protocol 3',
        applicationForTesting: 'Application for Testing 3',
        contractNumber: 'Contract Number 3',
        certificateNumberAndDate: 'Certificate Number 3, Date 2023-01-01',
        testingPeriod: 'Testing Period 3',
        sampleCode: 'Sample Code 3',
        sampleTakenBy: 'Sample Taken By 3',
        selectionAct: 'Selection Act 3',
        culture: 'Potato',
        variety: 'Variety 3',
        category: 'potatoes',
    }),
    new Sample({
        id: 4,
        direction: 'Direction 4',
        harvestYear: '2023',
        reproduction: 'N/A',
        seedCategory: 'N/A',
        sampleWeight: '500',
        batchNumber: '4',
        batchWeight: '4000',
        storageLocation: 'Storage Location 4',
        source: 'Source 4',
        seedPurpose: 'N/A',
        processingType: 'N/A',
        seedTreatment: 'N/A',
        analysisType: 'Soil Analysis',
        protocol: 'Protocol 4',
        applicationForTesting: 'Application for Testing 4',
        contractNumber: 'Contract Number 4',
        certificateNumberAndDate: 'Certificate Number 4, Date 2023-01-01',
        testingPeriod: 'Testing Period 4',
        sampleCode: 'Sample Code 4',
        sampleTakenBy: 'Sample Taken By 4',
        selectionAct: 'Selection Act 4',
        culture: 'N/A',
        variety: 'N/A',
        category: 'soil',
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