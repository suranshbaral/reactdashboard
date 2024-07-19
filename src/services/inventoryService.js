/* eslint-disable no-console */
import API from './api';

export const getInventory = async () => {
  try {
    const response = await API.get('inventory/');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the inventory items!', error);
    throw error;
  }
};

export const addInventory = async (newInventory) => {
  try {
    const formData = new FormData();
    formData.append('name', newInventory.name);
    formData.append('category', newInventory.category);
    formData.append('quantity', newInventory.quantity);
    formData.append('price', newInventory.price);

    const response = await API.post('inventory/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('There was an error adding the inventory item!', error);
    throw error;
  }
};

export const updateInventory = async (id, updatedInventory) => {
  try {
    const response = await API.put(`inventory/${id}/`, updatedInventory);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the inventory item!', error);
    throw error;
  }
};

export const deleteInventory = async (id) => {
  try {
    const response = await API.delete(`inventory/${id}/`);
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the inventory item!', error);
    throw error;
  }
};
