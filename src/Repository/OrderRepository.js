// OrderRepository.js
import { useState, useEffect } from 'react';

const useOrderRepository = (orderService) => {
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

    return { orderList, loading, error, addOrder };
};

export default useOrderRepository;