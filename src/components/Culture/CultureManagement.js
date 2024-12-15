// CultureManagement.jsx
import React, { useEffect, useState } from 'react';
import CultureTable from './CultureTable';
import AddCultureForm from './AddCultureForm';
import CultureRepository from '../../Repository/CultureRepository';

const CultureManagement = () => {
    const [cultures, setCultures] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const loadCultures = async () => {
            try {
                const fetchedCultures = await CultureRepository.getCultures();
                setCultures(fetchedCultures);
            } catch (error) {
                console.error('Error fetching cultures:', error);
            }
        };

        loadCultures();
    }, []);

    const handleAddCulture = async (newCulture) => {
        try {
            const addedCulture = await CultureRepository.createCulture(newCulture);
            setCultures([...cultures, addedCulture]);
            setIsFormVisible(false); // Hide the form after adding
        } catch (error) {
            console.error('Error adding culture:', error);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="w-1/3 p-1">
                <h1 className="text-2xl font-bold mb-3">Учет культур</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
                >
                    {isFormVisible ? 'Скрыть форму' : 'Добавить культуру'}
                </button>
                {isFormVisible && <AddCultureForm onAdd={handleAddCulture} />} {/* Conditional rendering of the form */}
            </div>
            <div className="flex-1 ">
                <CultureTable cultures={cultures} setCultures={setCultures} />
            </div>
        </div>
    );
};

export default CultureManagement;