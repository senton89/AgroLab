// MockSampleService.js
class Sample {
    constructor({
                    id,
                    napravlenie,
                    godUrozhaya,
                    reprodukcija,
                    kategoriaSemjan,
                    massaObrazca,
                    nomerPartii,
                    massaPartii,
                    mestoHranenie,
                    otKudaPolucheny,
                    naznachenieSemjan,
                    vidPodrabotki,
                    protivlivanieSemjan,
                    vidAnalizaSemjan,
                    protokol,
                }) {
        this.id = id;
        this.napravlenie = napravlenie;
        this.godUrozhaya = godUrozhaya;
        this.reprodukcija = reprodukcija;
        this.kategoriaSemjan = kategoriaSemjan;
        this.massaObrazca = massaObrazca;
        this.nomerPartii = nomerPartii;
        this.massaPartii = massaPartii;
        this.mestoHranenie = mestoHranenie;
        this.otKudaPolucheny = otKudaPolucheny;
        this.naznachenieSemjan = naznachenieSemjan;
        this.vidPodrabotki = vidPodrabotki;
        this.protivlivanieSemjan = protivlivanieSemjan;
        this.vidAnalizaSemjan = vidAnalizaSemjan;
        this.protokol = protokol;
    }
}

const sampleList = [
    new Sample({
        id: 1,
        napravlenie: 'Направление 1',
        godUrozhaya: '2022',
        reprodukcija: 'Репродукция 1',
        kategoriaSemjan: 'Категория семян 1',
        massaObrazca: '100',
        nomerPartii: '1',
        massaPartii: '1000',
        mestoHranenie: 'Место хранения 1',
        otKudaPolucheny: 'Откуда получены 1',
        naznachenieSemjan: 'Назначение семян 1',
        vidPodrabotki: 'Вид подработки 1',
        protivlivanieSemjan: 'Протравливание семян 1',
        vidAnalizaSemjan: 'Вид анализа семян 1',
        protokol: 'Протокол 1',
    }),
    new Sample({
        id: 2,
        napravlenie: 'Направление 2',
        godUrozhaya: '2023',
        reprodukcija: 'Репродукция 2',
        kategoriaSemjan: 'Категория семян 2',
        massaObrazca: '200',
        nomerPartii: '2',
        massaPartii: '2000',
        mestoHranenie: 'Место хранения 2',
        otKudaPolucheny: 'Откуда получены 2',
        naznachenieSemjan: 'Назначение семян 2',
        vidPodrabotki: 'Вид подработки 2',
        protivlivanieSemjan: 'Протравливание семян 2',
        vidAnalizaSemjan: 'Вид анализа семян 2',
        protokol: 'Протокол 2',
    }),
];

const MockSampleService = () => {
    const addSample = async(newSample) => {
        const id = sampleList.length ? sampleList[sampleList.length - 1].id + 1 : 1; // Генерация нового ID
        const sample = new Sample({ ...newSample, id });
        sampleList.push(sample);
        return sample;
    };

    const getSampleList = async () => {
        return sampleList;
    };

    const updateSample = async(id, updatedSample) => {
        const index = sampleList.findIndex(sample => sample.id === id);
        if (index !== -1) {
            sampleList[index] = { ...sampleList[index], ...updatedSample };
            return sampleList[index];
        }
        throw new Error('Sample not found');
    };

    const deleteSample = async(id) => {
        const index = sampleList.findIndex(sample => sample.id === id);
        if (index !== -1) {
            const deletedSample = sampleList.splice(index, 1);
            return deletedSample[0];
        }
        throw new Error('Sample not found');
    };
    return{
        addSample,
        getSampleList,
        updateSample,
        deleteSample
    }
};

export default MockSampleService;