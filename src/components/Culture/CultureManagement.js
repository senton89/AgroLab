// CultureManagement.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CultureTable from './CultureTable';
import CultureRepository from '../../Repository/CultureRepository';

const CultureManagement = () => {
    const [cultures, setCultures] = useState([]);
    const navigate = useNavigate();

    const loadCultures = async () => {
        try {
            const fetchedCultures = await CultureRepository.getCultures();
            setCultures(fetchedCultures);
        } catch (error) {
            console.error('Error fetching cultures:', error);
        }
    };

    useEffect(() => {
        loadCultures();
    }, []);

    const handleDeleteCulture = async (culture) => {
        try {
            await CultureRepository.deleteCulture(culture);
            loadCultures();
        } catch (error) {
            console.error('Error deleting culture:', error);
            alert(`Ошибка при удалении культуры: ${error.message}`);
        }
    };

    return (
        <div className="container mx-4 p-4 flex flex-col mt-6">
                <button
                    className="mr-6 w-1/6 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 self-end"
                    onClick={() => navigate('/add-culture')}
                >
                    Добавить культуру
                </button>
            <div className="overflow-hidden mt-4">
                <CultureTable cultures={cultures} setCultures={setCultures} onDelete={handleDeleteCulture} />
            </div>
            
        </div>
    );
};

export default CultureManagement;