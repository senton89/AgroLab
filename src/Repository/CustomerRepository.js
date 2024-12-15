// CustomerRepository.js
import MockCustomerService from '../components/Mockups/MockCustomerService';
import {useEffect, useState} from "react"; // Импортируйте мок-сервис

const useCustomerRepository = () => {
    const [customerList, setCustomerList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const customers = await MockCustomerService.fetchCustomers(); // Используйте мок-сервис
                setCustomerList(customers);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    const addCustomer = async (newCustomer) => {
        try {
            const addedCustomer = await MockCustomerService.addCustomer(newCustomer); // Используйте мок-сервис
            setCustomerList([...customerList, addedCustomer]);
        } catch (err) {
            setError(err.message);
        }
    };

    return { customerList, loading, error, addCustomer };
};

export default useCustomerRepository;