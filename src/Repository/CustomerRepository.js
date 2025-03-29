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
            // Check if customer has an id (editing existing customer)
            if (newCustomer.id) {
                // Update existing customer
                const updatedCustomers = customerList.map(customer =>
                    customer.id === newCustomer.id ? newCustomer : customer
                );
                setCustomerList(updatedCustomers);
                return newCustomer;
            } else {
                // Add new customer
                const addedCustomer = await MockCustomerService.addCustomer(newCustomer);
                setCustomerList([...customerList, addedCustomer]);
                return addedCustomer;
            }
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const updateCustomer = async (id, updatedCustomer) => {
        try {
            // In a real app, this would call an API
            const updatedCustomers = customerList.map(customer =>
                customer.id === id ? { ...customer, ...updatedCustomer } : customer
            );
            setCustomerList(updatedCustomers);
            return updatedCustomers.find(customer => customer.id === id);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return { customerList, loading, error, addCustomer, updateCustomer };
};

export default useCustomerRepository;