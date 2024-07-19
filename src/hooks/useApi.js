import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

// Axios instance configured for your Django API
const api = axios.create({
  baseURL: 'http://localhost:8000/dashboard/', // Adjust baseURL according to your Django API URL
  timeout: 5000, // Timeout of 5 seconds
  headers: {
    'Content-Type': 'application/json',
    // You can add any additional headers here
  },
});

// Generic hook to fetch data from an endpoint
const useApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // useEffect dependency on endpoint ensures re-fetching when endpoint changes

  return { data, loading, error };
};

// Specific hooks for each model endpoint
export const useProducts = () => useApi('/products/');
export const useSales = () => useApi('/sales/');
export const useCustomers = () => useApi('/customers/');
export const useOrders = () => useApi('/orders/');
export const useEmployees = () => useApi('/employees/');
export const useMessages = () => useApi('/messages/');
export const useTasks = () => useApi('/tasks/');
export const useNotifications = () => useApi('/notifications/');
export const useCalendarEvents = () => useApi('/calendar-events/');
export const useCustomerInsights = () => useApi('/customer-insights/');
export const useInventoryItems = () => useApi('/inventory-items/');
export const useInventoryTransactions = () => useApi('/inventory-transactions/');
export const useProductList = () => useApi('/product-list/');
