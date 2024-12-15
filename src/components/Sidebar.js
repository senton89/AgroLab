// src/components/Sidebar.js
import React from 'react';
import {useNavigate} from "react-router-dom";
import AuthRepository from "../Repository/AuthRepository";
// import './../styles/Sidebar.css';

//на основе данных тебе выше файлов и созданных тобой сервисов и репозиториев создай формы и сервисы с репозиториями к испытаниям(
const Sidebar = () => {
    const navigate = useNavigate();
    const handleReagentClick = () => {
        navigate(`/reagent-table`);
    }
    const handleCultureClick = () => {
        navigate(`/culture-table`);
    }
    const handleEquipmentClick = () => {
        navigate(`/equipment-table`);
    }
    const handleCustomerClick = () => {
        navigate(`/customers`);
    }
    const handleSampleClick = () => {
        navigate(`/samples`);
    }
    const handleOrderClick = () => {
        navigate(`/orders`);
    }
    const handleLogoutClick = async () => {
        const authRepository = new AuthRepository();
        await authRepository.logoutUser();
        navigate(`/login`);
    }
    const handleRegistrateClick = async () => {
        navigate(`/register`);
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="flex">
            <div className="w-55 bg-white shadow-md p-4 rounded-lg h-screen">
            <h1 className="text-xl font-semibold mb-4">Главная</h1>
                <ul className="space-y-2">
                <li><a onClick={handleReagentClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">⚗️</span>Реагенты</a></li>
                <li><a onClick={handleCultureClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">🌱</span>Культуры</a></li>
                <li><a onClick={handleEquipmentClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">🪚</span>Оборудование</a></li>
                <li><a onClick={handleCustomerClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">👤</span>Заказчики</a></li>
                    <li><a onClick={handleSampleClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">🔬</span>Образцы</a></li>
                    <li><a onClick={handleOrderClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">🛍️</span>Заказы</a></li>
                    {user && user.role === 'admin' && (
                        <li>
                            <a onClick={handleRegistrateClick} className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                                <span className="mr-2">📥</span>Зарегистрировать нового пользователя
                            </a>
                        </li>
                    )}
                    <li><a onClick={handleLogoutClick}
                       className="flex items-center p-2 mt-5 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">⬅️</span>Выйти</a></li>
            </ul>
        </div>
        </div>
    );
};

export default Sidebar;