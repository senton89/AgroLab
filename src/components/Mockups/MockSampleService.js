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

const MockSampleService = () => {
    const sampleList = [
        {
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
        },
        {
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
        },
    ];

    const addSample = (newSample) => {
        sampleList.push(newSample);
    };

    const getSampleList = () => {
        return sampleList;
    };

    return {
        addSample,
        getSampleList,
    };
};

export default MockSampleService;