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
                    category,
                    // New fields from the form
                    test_duration,
                    test_object_name,
                    sample_code,
                    sample_selection,
                    sampling_act,
                    sampling_nd,
                    harvest_year,
                    seed_category,
                    research_direction,
                    sampling_plan,
                    additional_info,
                    tuber_count,
                    batch_number,
                    batch_weight,
                    storage_location,
                    results_distribution,
                    sample_storage_period,
                    culture_id,
                    customer,
                    inn_kpp,
                    test_basis,
                    contract_number,
                    sample_receipt_date,
                    test_conditions,
                    reproduction_id,
                    upload_date,
                    acceptance_file,
                    inn
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

        // New fields from the form
        this.test_duration = test_duration || '';
        this.test_object_name = test_object_name || '';
        this.sample_code = sample_code || sampleCode || '';
        this.sample_selection = sample_selection || '';
        this.sampling_act = sampling_act || selectionAct || '';
        this.sampling_nd = sampling_nd || '';
        this.harvest_year = harvest_year || harvestYear || '';
        this.seed_category = seed_category || seedCategory || '';
        this.research_direction = research_direction || '';
        this.sampling_plan = sampling_plan || '';
        this.additional_info = additional_info || '';
        this.tuber_count = tuber_count || '';
        this.batch_number = batch_number || batchNumber || '';
        this.batch_weight = batch_weight || batchWeight || '';
        this.storage_location = storage_location || storageLocation || '';
        this.results_distribution = results_distribution || '';
        this.sample_storage_period = sample_storage_period || '';
        this.culture_id = culture_id || culture || '';
        this.customer = customer || '';
        this.inn_kpp = inn_kpp || '';
        this.test_basis = test_basis || '';
        this.contract_number = contract_number || contractNumber || '';
        this.sample_receipt_date = sample_receipt_date || '';
        this.test_conditions = test_conditions || '';
        this.reproduction_id = reproduction_id || reproduction || '';
        this.upload_date = upload_date || '';
        this.acceptance_file = acceptance_file || '';
        this.inn = inn || '';
    }
}

// Update the sample list with categories and new fields
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
        test_duration: '10 days',
        test_object_name: 'Wheat Seeds',
        sample_selection: 'Manual',
        research_direction: 'Quality Testing'
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
        test_duration: '15 days',
        test_object_name: 'Corn Plants',
        culture_id: 'Corn',
        customer: 'Farming Corp',
        inn: '1234567890',
        research_direction: 'Disease Resistance'
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
        test_duration: '20 days',
        test_object_name: 'Potato Tubers',
        culture_id: 'Potato',
        reproduction_id: 'Elite',
        customer: 'Potato Farm LLC',
        harvest_year: '2023',
        tuber_count: '50'
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
        test_duration: '30 days',
        test_object_name: 'Clay Soil',
        culture_id: 'Wheat',
        customer: 'Agricultural Research Center',
        inn_kpp: '1234567890/123456789',
        test_basis: 'Research Project',
        contract_number: 'SOIL-2023-001'
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
            sampleList[index] = new Sample({ ...sampleList[index], ...updatedSample, id });
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

    const uploadSampleFile = async (formData) => {
        // Mock implementation for file upload
        return {
            data: {
                test_object_name: 'Extracted from file',
                sample_code: 'AUTO-' + Math.floor(Math.random() * 1000),
                harvest_year: new Date().getFullYear().toString()
            }
        };
    };

    return {
        addSample,
        getSampleList,
        updateSample,
        deleteSample,
        uploadSampleFile
    };
};

export default MockSampleService;