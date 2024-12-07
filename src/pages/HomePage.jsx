import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4 mt-4">
            <h1 className="text-center font-bold text-2xl">Система учёта лаборатории</h1>
            <p className="text-center mt-4">Добро пожаловать в систему учёта лаборатории!</p>
            <p className="text-center mt-4">Чтобы начать работу, пожалуйста, перейдите на страницу <Link to="/label" className="text-blue-500 hover:text-blue-700">создания этикетки</Link>.</p>
        </div>
    );
};

export default HomePage;