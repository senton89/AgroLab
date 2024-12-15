// OrderManagement.jsx
import React, { useState } from 'react';
import useOrderRepository from '../../Repository/OrderRepository';
import MockOrderService from "../Mockups/MockOrderService";
import AddOrderForm from "./AddOrderForm";
import OrderTable from "./OrderTable";

const OrderManagement = () => {
    const { orderList, loading, error, addOrder } = useOrderRepository(MockOrderService); // Используем мок-сервис
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddOrder = (newOrder) => {
        addOrder(newOrder);
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto p-1">
            <h1 className="text-2xl font-bold mb-3">Учет заказов</h1>
            <button
                onClick={toggleFormVisibility}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                {isFormVisible ? 'Скрыть форму' : 'Добавить новый заказ'}
            </button>
            {isFormVisible && <AddOrderForm onAdd={handleAddOrder} />}
            <OrderTable orderList={orderList} />
        </div>
    );
};

export default OrderManagement;