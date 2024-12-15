// src/components/LoginForm.js
import React, { useState } from 'react';
import ReagentRepository from '../../Repository/ReagentRepository'
import AuthRepository from "../../Repository/AuthRepository";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        login: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authRepository = new AuthRepository();
            const success = await authRepository.loginUser(credentials);
            if (success) {
                console.log('User logged in successfully');
                var reagents = ReagentRepository();
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex-1 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full w-1/3">
                <h2 className="text-lg font-bold mb-4">Авторизация пользователя</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 text-gray-700">Логин</label>
                            <input type="text" name="login" value={credentials.login} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">Пароль</label>
                            <input type="password" name="password" value={credentials.password} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">Отменить</button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;