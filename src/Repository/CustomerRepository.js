// CustomerRepository.js
import { useState, useEffect } from 'react';
import CustomerService from '../services/CustomerService';

const useCustomerRepository = () => {
    const [customerList, setCustomerList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const data = await CustomerService.fetchCustomers();
            setCustomerList(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addCustomer = async (newCustomer) => {
        try {
            const addedCustomer = await CustomerService.addCustomer(newCustomer);
            setCustomerList((prevList) => [...prevList, addedCustomer]);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return {
        customerList,
        loading,
        error ,
        addCustomer,
    };
};

export default useCustomerRepository;