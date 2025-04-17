// src/components/Sidebar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthRepository from '../../Repository/AuthRepository';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleReagentClick = () => {
        navigate(`/reagent-table`);
    };
    const handleCultureClick = () => {
        navigate(`/culture-table`);
    };
    const handleEquipmentClick = () => {
        navigate(`/equipment-table`);
    };
    const handleCustomerClick = () => {
        navigate(`/customers`);
    };
    const handleSampleClick = () => {
        navigate(`/samples`);
    };
    const handleOrderClick = () => {
        navigate(`/orders`);
    };
    const handleLogoutClick = async () => {
        const authRepository = new AuthRepository();
        await authRepository.logoutUser ();
        navigate(`/login`);
    };
    const handleRegistrateClick = async () => {
        navigate(`/register`);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="w-1/6 w-min-1/6 pr-0 p-8 bg-cover bg-center h-screen" style={{backgroundColor: '#F7F4F2'}}>
            <div className="flex items-center mb-12">
                <img alt="Логотип" src="./Logo.png"/>
            </div>
            <nav className="space-y-4 text-gray-600">
                <a onClick={handleReagentClick} className={`flex items-center ${isActive('/reagent-table') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-flask mr-2"></i>
                    Реактивы
                </a>
                <a onClick={handleCultureClick} className={`flex items-center ${isActive('/culture-table') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-seedling mr-2"></i>
                    Культуры
                </a>
                <a onClick={handleSampleClick} className={`flex items-center ${isActive('/samples') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-vial mr-2"></i>
                    Образцы
                </a>
                <a onClick={handleEquipmentClick} className={`flex items-center ${isActive('/equipment-table') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-tools mr-2"></i>
                    Оборудование
                </a>
                <a onClick={handleCustomerClick} className={`flex items-center ${isActive('/customers') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-users mr-2"></i>
                    Заказчики
                </a>
                <a onClick={handleOrderClick} className={`flex items-center ${isActive('/orders') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                    <i className="fas fa-box mr-2"></i>
                    Заказы
                </a>
                <hr className="border-gray-300"/>
                <a onClick={handleLogoutClick} className="flex items-center hover:text-orange-600 cursor-pointer">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Выход
                </a>
                {user && user.role === 'admin' && (
                    <a onClick={handleRegistrateClick} className={`flex items-center ${isActive('/register') ? 'text-orange-600' : 'hover:text-orange-600'} cursor-pointer`}>
                        <i className="fas fa-user-plus mr-2"></i>
                        Регистрация нового пользователя
                    </a>
                )}
            </nav>
        </div>
    );
};

export default Sidebar;