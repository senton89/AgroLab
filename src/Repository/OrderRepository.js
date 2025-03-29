// OrderRepository.js
import { useState, useEffect } from 'react';
import MockOrderService from "../components/Mockups/MockOrderService";

const useOrderRepository = (orderService= MockOrderService) => {
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await orderService.getOrders();
                setOrderList(orders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [orderService]);

    const addOrder = async (newOrder) => {
        try {
            await orderService.addOrder(newOrder);
            setOrderList([...orderList, newOrder]);
        } catch (err) {
            setError(err.message);
        }
    };
    const updateOrder = async (id, updatedOrder) => {
        try {
            // For mock service, implement update logic
            if (orderService === MockOrderService) {
                // Find the order in the list and update it
                const updatedList = orderList.map(order =>
                    order.id === id ? {...order, ...updatedOrder} : order
                );
                setOrderList(updatedList);
                return updatedOrder;
            } else {
                // For real service, call the API
                const result = await orderService.updateOrder(id, updatedOrder);
                await fetchOrders(); // Refresh the list
                return result;
            }
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return {
        orderList,
        loading,
        error,
        addOrder,
        updateOrder};
};

export default useOrderRepository;