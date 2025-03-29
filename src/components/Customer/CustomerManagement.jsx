// CustomerManagement.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerTable from './CustomerTable';
import useCustomerRepository from '../../Repository/CustomerRepository';

const CustomerManagement = () => {
    const { customerList, loading, error } = useCustomerRepository();
    const navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/customers/add');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col w-full pb-0 p-10 mx-4">
            <button
                onClick={handleAddCustomer}
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded self-end mb-10 w-1/6"
            >
                Добавить заказчика
            </button>

            <div className="rounded-lg overflow-hidden w-full">
                <CustomerTable customerList={customerList} />
            </div>
        </div>
    );
};

export default CustomerManagement;