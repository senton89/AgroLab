import MockCustomerService from '../components/Mockups/MockCustomerService';
import {useEffect, useState} from "react"; // Импортируйте мок-сервис

const useCustomerRepository = () => {
    const [customerList, setCustomerList] = useState([]); // Список клиентов
    const [loading, setLoading] = useState(true); // Статус загрузки
    const [error, setError] = useState(null); // Ошибка, если она возникла

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customers = await MockCustomerService.fetchCustomers(); // Используйте мок-сервис
                setCustomerList(customers); // Обновите список клиентов
            } catch (err) {
                setError(err.message); // Установите сообщение об ошибке
            } finally {
                setLoading(false); // Завершите загрузку
            }
        };

        fetchCustomers(); // Вызовите функцию для получения клиентов
    }, []);

    // Метод для добавления клиента
    const addCustomer = async (newCustomer) => {
        try {
            // Проверка, есть ли у клиента id (редактирование существующего клиента)
            if (newCustomer.id) {
                // Обновите существующего клиента
                const updatedCustomers = customerList.map(customer =>
                    customer.id === newCustomer.id ? newCustomer : customer
                );
                setCustomerList(updatedCustomers); // Обновите список клиентов
                return newCustomer;
            } else {
                // Добавьте нового клиента
                const addedCustomer = await MockCustomerService.addCustomer(newCustomer);
                setCustomerList([...customerList, addedCustomer]); // Обновите список клиентов
                return addedCustomer;
            }
        } catch (err) {
            setError(err.message); // Установите сообщение об ошибке
            throw err;
        }
    };

    // Метод для обновления клиента
    const updateCustomer = async (id, updatedCustomer) => {
        try {
            // В реальном приложении это вызовет API
            const updatedCustomers = customerList.map(customer =>
                customer.id === id ? { ...customer, ...updatedCustomer } : customer
            );
            setCustomerList(updatedCustomers); // Обновите список клиентов
            return updatedCustomers.find(customer => customer.id === id);
        } catch (err) {
            setError(err.message); // Установите сообщение об ошибке
            throw err;
        }
    };

    return { customerList, loading, error, addCustomer, updateCustomer }; // Возвращаем данные и методы
};

export default useCustomerRepository;