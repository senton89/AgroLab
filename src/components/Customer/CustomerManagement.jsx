// CustomerManagement.jsx
import React, { useState } from 'react';
import AddCustomerForm from './AddCustomerForm';
import useCustomerRepository from '../../Repository/CustomerRepository';

const CustomerManagement = () => {
    const { customerList, loading, error, addCustomer } = useCustomerRepository();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddCustomer = (newCustomer) => {
        addCustomer(newCustomer);
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-1">
            <h1 className="text-2xl font-bold mb-3">Учет заказчиков</h1>
            <button
                onClick={toggleFormVisibility}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {isFormVisible ? 'Скрыть форму' : 'Добавить нового заказчика'}
            </button>
            {isFormVisible && <AddCustomerForm onAdd={handleAddCustomer} />}
            <div className="overflow-x-auto max-w-6xl">
                <table className="min-w-full text-gray-700">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Имя</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Адрес</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ИНН</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {customerList.map((customer, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4">{customer.name}</td>
                            <td className="px-6 py-4">{customer.email}</td>
                            <td className="px-6 py-4">{customer.address}</td>
                            <td className="px-6 py-4">{customer.inn}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerManagement;