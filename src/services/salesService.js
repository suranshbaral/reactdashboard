/* eslint-disable no-console */
// services/salesService.js
import API from './api';

export const getSales = async () => {
  try {
    const response = await API.get('sales/');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the sales!', error);
    throw error;
  }
};

export const addSale = async (newSale) => {
  try {
    const response = await API.post('sales/', newSale);
    return response.data;
  } catch (error) {
    console.error('There was an error adding the sale!', error);
    throw error;
  }
};

export const updateSale = async (id, updatedSale) => {
  try {
    const response = await API.put(`sales/${id}/`, updatedSale);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the sale!', error);
    throw error;
  }
};

export const deleteSale = async (id) => {
  try {
    const response = await API.delete(`sales/${id}/`);
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the sale!', error);
    throw error;
  }
};
