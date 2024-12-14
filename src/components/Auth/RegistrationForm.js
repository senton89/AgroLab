// src/components/RegistrationForm.js
import React, { useState } from 'react';
import AuthRepository from '../../Repository/AuthRepository';

const RegistrationForm = ({ isAdmin }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        login: '',
        password: '',
        role: 'User ', // по умолчанию роль - User
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authRepository = new AuthRepository();
            const success = await authRepository.registerUser(credentials);
            if (success) {
                console.log('User logged in successfully');
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!isAdmin) {
        return <div className="text-red-500">Только администраторы могут регистрировать новых пользователей.</div>;
    }

    return (
        <div className="flex-1 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-lg font-bold mb-4">Регистрация пользователя</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 text-gray-700">Имя</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">Фамилия</label>
                            <input type="text" name="surname" value={formData.surname} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 text-gray-700">Логин</label>
                            <input type="text" name="login" value={formData.login} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700">Пароль</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange}
                                   className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Роль</label>
                        <select name="role" value={formData.role} onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded">
                            <option value="User ">Пользователь</option>
                            <option value="Admin">Администратор</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded">Отменить</button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Зарегистрировать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;