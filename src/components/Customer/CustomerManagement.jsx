// CustomerManagement.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerTable from './CustomerTable';
import useCustomerRepository from '../../Repository/CustomerRepository';

const CustomerManagement = () => {
    const { customerList, loading, error, deleteCustomer } = useCustomerRepository();
    const navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/customers/add');
    };

    const handleDeleteCustomer = async (id) => {
        try {
            await deleteCustomer(id);
        } catch (error) {
            console.error('Error deleting customer:', error);
            alert('Ошибка при удалении заказчика');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col w-full pb-0 p-2 mt-8 mr-4">
            <button
                onClick={handleAddCustomer}
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded self-end w-1/6 mr-10"
            >
                Добавить заказчика
            </button>

            <div className="rounded-lg overflow-hidden w-full">
                <CustomerTable customerList={customerList} onDeleteCustomer={handleDeleteCustomer} />
            </div>
        </div>
    );
};

export default CustomerManagement;