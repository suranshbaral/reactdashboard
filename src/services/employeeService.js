/* eslint-disable no-console */
// services/employeeService.js
import API from './api';

export const fetchEmployees = async () => {
  try {
    const response = await API.get('employees/');
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the employees!', error);
    throw error;
  }
};

export const createEmployee = async (newEmployee) => {
  try {
    const formData = new FormData();
    formData.append('name', newEmployee.name);
    formData.append('position', newEmployee.position);
    formData.append('email', newEmployee.email);
    formData.append('phone', newEmployee.phone);

    const response = await API.post('employees/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('There was an error creating the employee!', error);
    throw error;
  }
};

export const updateEmployee = async (id, updatedEmployee) => {
  try {
    const response = await API.put(`employees/${id}/`, updatedEmployee);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the employee!', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await API.delete(`employees/${id}/`);
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the employee!', error);
    throw error;
  }
};
