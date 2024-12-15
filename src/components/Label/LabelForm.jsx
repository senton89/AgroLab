// LabelForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; // Corrected import

const LabelForm = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get the location object
    const { sample } = location.state || {}; // Extract order from state

    const [formData, setFormData] = useState({
        culture: sample?.culture || '',
        sortName: sample?.variety || '',
        reproduction: sample?.reproduction || '',
        harvestYear: sample?.harvestYear || '',
        batchNumber: sample?.batchNumber || '',
        batchWeight: sample?.batchWeight || '',
        controlUnit: '',
        analysisType: sample?.analysisType || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await apiService.submitLabel(formData); // Uncomment if you want to submit the data
        navigate('/label-preview', { state: { formData } }); // Navigate to LabelPreview with formData
    };

    const handleCancel = () => {
        navigate('/samples');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-2.5">
                {/* Поля формы */}
                <div>
                    <label>Культура:</label>
                    <input type="text" name="culture" value={formData.culture} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Сорт:</label>
                    <input type="text" name="sort" value={formData.sortName} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Репродукция:</label>
                    <input type="text" name="reproduction" value={formData.reproduction} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Год урожая:</label>
                    <input type="text" name="harvestYear" value={formData.harvestYear} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Партия №:</label>
                    <input type="text" name="batchNumber" value={formData.batchNumber} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Масса партии, ц:</label>
                    <input type="text" name="batchWeight" value={formData.batchWeight} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Контрольная единица:</label>
                    <input type="text" name="controlUnit" value={formData.controlUnit} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div>
                    <label>Вид анализа:</label>
                    <input type="text" name="analysisType" value={formData.analysisType} onChange={handleChange}
                           className="border p-2 w-full"/>
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white p-2">Отправить</button>
                    <button type="button" onClick={handleCancel} className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">Отменить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LabelForm;