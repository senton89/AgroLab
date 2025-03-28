// CustomerManagement.jsx
import React, { useState } from 'react';
import AddCustomerForm from './AddCustomerForm';
import CustomerTable from './CustomerTable';
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
        <div className="container mt-24 mx-6 px-1">
            {/*<button*/}
            {/*    onClick={toggleFormVisibility}*/}
            {/*    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"*/}
            {/*>*/}
            {/*    {isFormVisible ? 'Скрыть форму' : 'Добавить нового заказчика'}*/}
            {/*</button>*/}
            {/*{isFormVisible && <AddCustomerForm onAdd={handleAddCustomer} />}*/}
            <CustomerTable customerList={customerList} /> {/* Используем новый компонент таблицы */}
        </div>
    );
};

export default CustomerManagement;