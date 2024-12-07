// src/components/Sidebar.js
import React from 'react';
import {useNavigate} from "react-router-dom";
// import './../styles/Sidebar.css';

//TODO регистрация образцов, список образцов
// вкладка учета реактивов(таблица)(имя дата партия поставщик срок годности остатки) и добавление реактивов(из таблицы приход)
// список культур добавить культуру,
// учет оборудования со списком
// регистрация испытаний таблица испытаний,
// добавление заказчика

//на основе данных тебе выше файлов и созданных тобой сервисов и репозиториев создай формы и сервисы с репозиториями к испытаниям(
const Sidebar = () => {
    const navigate = useNavigate();
    const handleMainContent = () =>{
        navigate(`/main-content`);
    }
    const handleLabelClick = () =>{
        navigate(`/label`);
    }
    const handleContentClick = () =>{
        navigate(`/document-content`);
    }
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
    return (
        <div className="flex">
            <div className="w-55 bg-white shadow-md p-4 rounded-lg h-screen">
            <h1 className="text-xl font-semibold mb-4">Редактирование нормативного документа</h1>
            <ul className="space-y-2">
                <li><a onClick={handleMainContent}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Общее</a></li>
                <li><a onClick={handleContentClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Содержание</a></li>
                <li><a href="DocumentComponents.html"
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Положения нормативного документа</a></li>
                <li><a href="DocumentEdit.html"
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Структура</a></li>
                <li><a onClick={handleLabelClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Создать этикетку</a></li>
                <li><a onClick={handleReagentClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Реагенты</a></li>
                <li><a onClick={handleCultureClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Культуры</a></li>
                <li><a onClick={handleEquipmentClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Оборудование</a></li>
                <li><a onClick={handleCustomerClick}
                       className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"><span
                    className="mr-2">📁</span>Заказчики</a></li>
            </ul>
        </div>
        </div>
    );
};

export default Sidebar;