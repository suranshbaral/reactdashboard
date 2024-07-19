/* eslint-disable no-console */
// services/customerService.js
import API from './api';

export const getCustomers = async () => {
  try {
    const response = await API.get('customers/');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the customers!', error);
    throw error;
  }
};

export const addCustomer = async (newCustomer) => {
  try {
    const formData = new FormData();
    formData.append('name', newCustomer.name);
    formData.append('email', newCustomer.email);
    formData.append('project_name', newCustomer.projectName);
    formData.append('status', newCustomer.status);
    formData.append('location', newCustomer.location);
    formData.append('budget', newCustomer.budget);
    formData.append('weeks', newCustomer.weeks);
    formData.append('image', newCustomer.image);

    const response = await API.post('customers/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('There was an error adding the customer!', error);
    throw error;
  }
};

export const updateCustomer = async (id, updatedCustomer) => {
  try {
    const response = await API.put(`customers/${id}/`, updatedCustomer);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the customer!', error);
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await API.delete(`customers/${id}/`);
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the customer!', error);
    throw error;
  }
};
