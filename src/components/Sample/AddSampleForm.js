// AddSampleForm.jsx
import React, { useState } from 'react';

const AddSampleForm = ({ onAdd }) => {
    const [sample, setSample] = useState({
        napravlenie: '',
        godUrozhaya: '',
        reprodukcija: '',
        kategoriaSemjan: '',
        massaObrazca: '',
        nomerPartii: '',
        massaPartii: '',
        mestoHranenie: '',
        otKudaPolucheny: '',
        naznachenieSemjan: '',
        vidPodrabotki: '',
        protivlivanieSemjan: '',
        vidAnalizaSemjan: '',
        protokol: '',
    });

    const handleChange = (event) => {
        setSample({ ...sample, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(sample);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Направление:
                <input type="text" name="napravlenie" value={sample.napravlenie} onChange={handleChange} />
            </label>
            <label>
                Год урожая:
                <input type="text" name="godUrozhaya" value={sample.godUrozhaya} onChange={handleChange} />
            </label>
            <label>
                Репродукция:
                <input type="text" name="reprodukcija" value={sample.reprodukcija} onChange={handleChange} />
            </label>
            <label>
                Категория семян:
                <input type="text" name="kategoriaSemjan" value={sample.kategoriaSemjan} onChange={handleChange} />
            </label>
            <label>
                Масса образца, г:
                <input type="text" name="massaObrazca" value={sample.massaObrazca} onChange={handleChange} />
            </label>
            <label>
                № партии:
                <input type="text" name="nomerPartii" value={sample.nomerPartii} onChange={handleChange} />
            </label>
            <label>
                Масса партии, ц:
                <input type="text" name="massaPartii" value={sample.massaPartii} onChange={handleChange} />
            </label>
            <label>
                Место хранения:
                <input type="text" name="mestoHranenie" value={sample.mestoHranenie} onChange={handleChange} />
            </label>
            <label>
                Откуда получены:
                <input type="text" name="otKudaPolucheny" value={sample.otKudaPolucheny} onChange={handleChange} />
            </label>
            <label>
                Назначение семян:
                <input type="text" name="naznachenieSemjan" value={sample.naznachenieSemjan} onChange={handleChange} />
            </label>
            <label>
                Вид подработки:
                <input type="text" name="vidPodrabotki" value={sample.vidPodrabotki} onChange={handleChange} />
            </label>
            <label>
                Протравливание семян:
                <input type="text" name="protivlivanieSemjan" value={sample.protivlivanieSemjan} onChange={handleChange} />
            </label>
            <label>
                Вид анализа семян:
                <input type="text" name="vidAnalizaSemjan" value={sample.vidAnalizaSemjan} onChange={handleChange} />
            </label>
            <label>
                Протокол:
                <input type="text" name="protokol" value={sample.protokol} onChange={handleChange} />
            </label>
            <button type="submit">Добавить образец</button>
        </form>
    );
};

export default AddSampleForm;