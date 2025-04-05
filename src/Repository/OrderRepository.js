import { useState, useEffect } from 'react';
import MockOrderService from "../components/Mockups/MockOrderService";

const useOrderRepository = (orderService= MockOrderService) => {
    const [orderList, setOrderList] = useState([]); // Список заказов
    const [loading, setLoading] = useState(true); // Статус загрузки
    const [error, setError] = useState(null); // Ошибка, если она возникла

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await orderService.getOrders(); // Получаем заказы
                setOrderList(orders); // Обновляем список заказов
            } catch (err) {
                setError(err.message); // Устанавливаем сообщение об ошибке
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        fetchOrders(); // Вызовите функцию для получения заказов
    }, [orderService]);

    // Метод для добавления заказа
    const addOrder = async (newOrder) => {
        try {
            await orderService.addOrder(newOrder); // Добавляем новый заказ
            setOrderList([...orderList, newOrder]); // Обновляем список заказов
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
        }
    };

    // Метод для обновления заказа
    const updateOrder = async (id, updatedOrder) => {
        try {
            // Для мок-сервиса реализуйте логику обновления
            if (orderService === MockOrderService) {
                // Найдите заказ в списке и обновите его
                const updatedList = orderList.map(order =>
                    order.id === id ? {...order, ...updatedOrder} : order
                );
                setOrderList(updatedList); // Обновляем список заказов
                return updatedOrder;
            } else {
                // Для реального сервиса вызовите API
                const result = await orderService.updateOrder(id, updatedOrder);
                await fetchOrders(); // Обновляем список
                return result;
            }
        } catch (err) {
            setError(err.message); // Устанавливаем сообщение об ошибке
            throw err;
        }
    };

    return {
        orderList,
        loading,
        error,
        addOrder,
        updateOrder
    }; // Возвращаем данные и методы
};

export default useOrderRepository;