// CultureManagement.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CultureTable from './CultureTable';
import CultureRepository from '../../Repository/CultureRepository';

const CultureManagement = () => {
    const [cultures, setCultures] = useState([]);
    const navigate = useNavigate();

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

    return (
        <div className="flex flex-col p-8 w-full">
            <div className="mb-6 self-end">
                <button
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-6 self-end"
                    onClick={() => navigate('/add-culture')}
                >
                    Добавить культуру
                </button>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <CultureTable cultures={cultures} setCultures={setCultures} />
            </div>
            
        </div>
    );
};

export default CultureManagement;