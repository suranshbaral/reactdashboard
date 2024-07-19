/* eslint-disable no-console */
// services/customerDataService.js

import axiosInstance from './api';

const fetchCustomerData = async () => {
  try {
    const response = await axiosInstance.get('customerdata/');
    return response.data;
  } catch (error) {
    console.error('Error fetching customer data:', error);
    throw error;
  }
};

export { fetchCustomerData };
