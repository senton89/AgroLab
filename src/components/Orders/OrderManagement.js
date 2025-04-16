// OrderManagement.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useOrderRepository from '../../Repository/OrderRepository';
import MockOrderService from "../Mockups/MockOrderService";
import OrderTable from "./OrderTable";

const OrderManagement = () => {
    const { orderList, error, deleteOrder } = useOrderRepository(MockOrderService);
    const [orderListState, setOrderList] = useState(orderList);
    const [errorState, setError] = useState(error);
    const navigate = useNavigate();

    useEffect(() => {
        setOrderList(orderList);
        setError(error);
    }, [orderList, error]);

    const handleDeleteOrder = async (id) => {
        try {
            await deleteOrder(id);
            setOrderList(prevOrders => prevOrders.filter(order => order.id !== id));
        } catch (error) {
            console.error('Error deleting order:', error);
            alert('Не удалось удалить заказ. Пожалуйста, попробуйте снова.');
        }
    };

    if (errorState) return <div>Error: {errorState}</div>;

    return (
        <div className="container mt-6 mx-10 p-4">
            <div className="flex flex-col w-full">
                <button
                    onClick={() => navigate('/orders/add')}
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/6 self-end mb-10"
                >
                    Добавить новый заказ
                </button>
                <OrderTable orderList={orderListState} onDelete={handleDeleteOrder} />
            </div>
        </div>
    );
};

export default OrderManagement;