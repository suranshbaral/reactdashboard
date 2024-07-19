/* eslint-disable no-undef */
/* eslint-disable no-console */
import API from './api';

export const getOrders = async () => {
  try {
    const response = await API.get('orders/');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the orders!', error);
    throw error;
  }
};

export const addOrder = async (newOrder) => {
  try {
    const response = await API.post('orders/', newOrder);
    return response.data;
  } catch (error) {
    console.error('There was an error adding the order!', error);
    throw error;
  }
};

export const updateOrder = async (id, updatedOrder) => {
  try {
    const response = await API.put(`orders/${id}/`, updatedOrder);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the order!', error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await API.delete(`orders/${id}/`);
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the order!', error);
    throw error;
  }
};
const fetchOrders = async () => {
  try {
    const response = await axiosInstance.get('orders/');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export { fetchOrders };
