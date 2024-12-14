import React, { useState } from 'react';

const ReagentForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [reagent, setReagent] = useState({
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

    const handleOpenForm = () => {
        setIsOpen(true);
    };

    const handleCloseForm = () => {
        setIsOpen(false);
    };

    const handleChange = (event) => {
        setReagent({ ...reagent, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(reagent);
        // Здесь можно добавить логику для отправки данных на сервер
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Направление</th>
                    <th>Год урожая</th>
                    <th>Репродукция</th>
                    <th>Категория семян</th>
                    <th>Масса образца, г</th>
                    <th>№ партии</th>
                    <th>Масса партии, ц</th>
                    <th>Место хранения</th>
                    <th>Откуда получены</th>
                    <th>Назначение семян</th>
                    <th>Вид подработки</th>
                    <th>Протравливание семян</th>
                    <th>Вид анализа семян</th>
                    <th>Протокол</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>20</td>
                    <td>19</td>
                    <td>21</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                </tr>
                </tbody>
            </table>
            <button onClick={handleOpenForm}>Добавить реагент</button>
            {isOpen && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Направление:
                        <input type="text" name="napravlenie" value={reagent.napravlenie} onChange={handleChange} />
                    </label>
                    <label>
                        Год урожая:
                        <input type="text" name="godUrozhaya" value={reagent.godUrozhaya} onChange={handleChange} />
                    </label>
                    <label>
                        Репродукция:
                        <input type="text" name="reprodukcija" value={reagent.reprodukcija} onChange={handleChange} />
                    </label>
                    <label>
                        Категория семян:
                        <input type="text" name="kategoriaSemjan" value={reagent.kategoriaSemjan} onChange={handleChange} />
                    </label>
                    <label>
                        Масса образца, г:
                        <input type="text" name="massaObrazca" value={reagent.massaObrazca} onChange={handleChange} />
                    </label>
                    <label>
                        № партии:
                        <input type="text" name="nomerPartii" value={reagent.nomerPartii} onChange={handleChange} />
                    </label>
                    <label>
                        Масса партии, ц:
                        <input type="text" name="massaPartii" value={reagent.massaPartii} onChange={handleChange} />
                    </label>
                    <label>
                        Место хранения:
                        <input type="text" name="mestoHranenie" value={reagent.mestoHranenie} onChange={handleChange} />
                    </label>
                    <label>
                        Откуда получены:
                        <input type="text" name="otKudaPolucheny" value={reagent.otKudaPolucheny} onChange={handleChange} />
                    </label>
                    <label>
                        Назначение семян:
                        <input type="text" name="naznachenieSemjan" value={reagent.naznachenieSemjan} onChange={handleChange} />
                    </label>
                    <label>
                        Вид подработки:
                        <input type="text" name="vidPodrabotki" value={reagent.vidPodrabotki} onChange={handleChange} />
                    </label>
                    <label>
                        Протравливание семян:
                        <input type="text" name="protivlivanieSemjan" value={reagent.protivlivanieSemjan} onChange={handleChange} />
                    </label>
                    <label>
                        Вид анализа семян:
                        <input type="text" name="vidAnalizaSemjan" value={reagent.vidAnalizaSemjan} onChange={handleChange} />
                    </label>
                    <label>
                        Протокол:
                        <input type="text" name="protokol" value={reagent.protokol} onChange={handleChange} />
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            )}
        </div>
    );
};

export default ReagentForm;