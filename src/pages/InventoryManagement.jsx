/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Header from '../components/Header';

const InventoryManagementPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [alertThreshold, setAlertThreshold] = useState(10); // Example threshold for low stock alert

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Placeholder data for inventory
  const inventoryData = [
    { id: 1, name: 'Apple', category: 'Fruit', quantity: 100, price: 1.99 },
    { id: 2, name: 'Banana', category: 'Fruit', quantity: 150, price: 0.99 },
    { id: 3, name: 'Orange', category: 'Fruit', quantity: 120, price: 1.49 },
    { id: 4, name: 'Tomato', category: 'Vegetable', quantity: 80, price: 2.49 },
    { id: 5, name: 'Lettuce', category: 'Vegetable', quantity: 60, price: 1.79 },
    { id: 6, name: 'Strawberry', category: 'Fruit', quantity: 200, price: 3.99 },
    { id: 7, name: 'Carrot', category: 'Vegetable', quantity: 90, price: 1.29 },
    { id: 8, name: 'Grapes', category: 'Fruit', quantity: 110, price: 4.99 },
    { id: 9, name: 'Potato', category: 'Vegetable', quantity: 75, price: 1.99 },
    { id: 10, name: 'Mango', category: 'Fruit', quantity: 70, price: 5.49 },
  ];

  // Function to calculate total inventory value
  const calculateInventoryValue = () => inventoryData.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);

  // Function to handle download action
  const handleDownload = () => {
    // Logic to download inventory data as CSV or JSON
    alert('Downloading inventory data...');
  };

  // Example data for pie chart
  const pieChartData = [
    { name: 'Fruit', value: inventoryData.filter((item) => item.category === 'Fruit').length },
    { name: 'Vegetable', value: inventoryData.filter((item) => item.category === 'Vegetable').length },
  ];

  // Example data for bar chart
  const barChartData = [
    { name: 'Apple', quantity: 100 },
    { name: 'Banana', quantity: 150 },
    { name: 'Orange', quantity: 120 },
    { name: 'Tomato', quantity: 80 },
    { name: 'Lettuce', quantity: 60 },
    { name: 'Strawberry', quantity: 200 },
    { name: 'Carrot', quantity: 90 },
    { name: 'Grapes', quantity: 110 },
    { name: 'Potato', quantity: 75 },
    { name: 'Mango', quantity: 70 },
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-lg">
      <Header category="Management" title="Inventory Management" />

      {/* Inventory Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Inventory Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {inventoryData.map((item) => (
            <motion.div
              key={item.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer ${selectedItem === item ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => handleItemClick(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
              {item.quantity <= alertThreshold && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md mt-2 inline-block">Low Stock</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inventory Analytics */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Inventory Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <motion.div
            className="p-4 rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate="show"
          >
            <h3 className="font-medium">Total Items</h3>
            <p className="text-2xl">{inventoryData.length}</p>
          </motion.div>
          <motion.div
            className="p-4 rounded-lg shadow-md bg-gradient-to-r from-purple-400 to-pink-500 text-white"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate="show"
          >
            <h3 className="font-medium">Inventory Value</h3>
            <p className="text-2xl">${calculateInventoryValue()}</p>
          </motion.div>
        </div>
      </div>

      {/* Charts */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Inventory Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <motion.div
            className="p-4 rounded-lg shadow-md bg-white"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate="show"
          >
            <h3 className="font-medium text-gray-800 mb-4">Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            className="p-4 rounded-lg shadow-md bg-white"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            initial="hidden"
            animate="show"
          >
            <h3 className="font-medium text-gray-800 mb-4">Quantity per Item</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-md transition duration-300"
          onClick={handleDownload}
        >
          Download Inventory Data
        </button>
      </div>

      {/* Placeholder for Charts */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Inventory Trends</h2>
        <div className="flex justify-center mt-4">
          <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-3/4">
            <p className="text-center text-gray-600">Placeholder for interactive charts and graphs.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t pt-4 mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default InventoryManagementPage;
