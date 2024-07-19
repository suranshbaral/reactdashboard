/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
} from 'recharts';
import Header from '../components/Header';
import { zoomIn } from '../utils/motion';

// Placeholder K-means clustering function
const kMeansClustering = (data, k) =>
  // Mock function for K-means clustering
  data.map((customer, index) => ({
    ...customer,
    segment: index % k, // Assigning segment mockingly for demo
  }));

const CustomerInsights = () => {
  const [segmentedData, setSegmentedData] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const k = 3; // Example number of clusters

  // Placeholder customer data
  const customerData = [
    { id: 1, name: 'John Doe', age: 25, spending: 500, frequency: 15, activity: 80 },
    { id: 2, name: 'Jane Smith', age: 30, spending: 700, frequency: 10, activity: 60 },
    { id: 3, name: 'Alice Johnson', age: 35, spending: 300, frequency: 20, activity: 90 },
    { id: 4, name: 'Bob Brown', age: 40, spending: 1000, frequency: 5, activity: 30 },
    { id: 5, name: 'Charlie Green', age: 22, spending: 450, frequency: 12, activity: 70 },
    { id: 6, name: 'Diana King', age: 28, spending: 650, frequency: 8, activity: 85 },
    { id: 7, name: 'Edward Scott', age: 33, spending: 900, frequency: 7, activity: 50 },
    { id: 8, name: 'Fiona White', age: 27, spending: 550, frequency: 14, activity: 75 },
    { id: 9, name: 'George Black', age: 50, spending: 1200, frequency: 4, activity: 20 },
    { id: 10, name: 'Hannah Adams', age: 21, spending: 350, frequency: 16, activity: 95 },
  ];

  // Placeholder heatmap data
  const heatmapData = [
    { date: '01/01', activity: 80 },
    { date: '01/02', activity: 60 },
    { date: '01/03', activity: 90 },
    { date: '01/04', activity: 30 },
    { date: '01/05', activity: 70 },
    { date: '01/06', activity: 85 },
    { date: '01/07', activity: 50 },
  ];

  useEffect(() => {
    const clusteredData = kMeansClustering(customerData, k);
    setSegmentedData(clusteredData);
  }, []);

  // Function to handle segment selection
  const handleSegmentClick = (segment) => {
    setSelectedSegment(segment);
  };

  // Colors for clusters
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-lg">
      <Header category="Insights" title="Customer Insights" />

      {/* Dashboard Overview and Key Metrics */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Total Customers</h3>
            <p className="text-2xl">{customerData.length}</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Average Spending</h3>
            <p className="text-2xl">Rs {(customerData.reduce((total, customer) => total + customer.spending, 0) / customerData.length).toFixed(2)}</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Average Frequency</h3>
            <p className="text-2xl">{(customerData.reduce((total, customer) => total + customer.frequency, 0) / customerData.length).toFixed(2)} visits</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Total Segments</h3>
            <p className="text-2xl">{k}</p>
          </motion.div>
        </div>
      </div>

      {/* Customer Segmentation */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Customer Segmentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {segmentedData.map((customer) => (
            <motion.div
              key={customer.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer ${selectedSegment === customer.segment ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => handleSegmentClick(customer.segment)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-medium text-gray-800">{customer.name}</h3>
              <p className="text-sm text-gray-600">Age: {customer.age}</p>
              <p className="text-sm text-gray-600">Spending: Rs {customer.spending.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Frequency: {customer.frequency} visits</p>
              <span
                className="text-xs px-2 py-1 rounded-md mt-2 inline-block"
                style={{ backgroundColor: COLORS[customer.segment % COLORS.length], color: '#fff' }}
              >
                Segment {customer.segment + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Graphs */}
      <div className="flex flex-wrap justify-center">
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium text-gray-800 mb-4">Age vs. Spending</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="age" name="Age" unit="years" />
                <YAxis type="number" dataKey="spending" name="Spending" unit="Rs" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                {Array.from({ length: k }).map((_, index) => (
                  <Scatter key={`scatter-${index}`} name={`Segment ${index + 1}`} data={segmentedData.filter((d) => d.segment === index)} fill={COLORS[index % COLORS.length]} />
                ))}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium text-gray-800 mb-4">Segment Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={segmentedData} dataKey="segment" nameKey="name" outerRadius={80} fill="#8884d8" label>
                  {segmentedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.segment % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Additional Visualizations */}
      <div className="flex flex-wrap justify-center mt-8">
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium text-gray-800 mb-4">Spending by Frequency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={segmentedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="frequency" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="spending" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-medium text-gray-800 mb-4">Customer Activity Heatmap</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="activity" />
                <Tooltip />
                <Scatter data={heatmapData} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Best Customer */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Best Customer</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-medium text-gray-800">{customerData[0].name}</h3>
          <p className="text-sm text-gray-600">Age: {customerData[0].age}</p>
          <p className="text-sm text-gray-600">Spending: Rs {customerData[0].spending.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Frequency: {customerData[0].frequency} visits</p>
        </motion.div>
      </div>

      {/* Churn Analysis */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Churn Analysis</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-800">Churn Rate: X%</p>
          <p className="text-sm text-gray-600">Insights and analysis here...</p>
        </motion.div>
      </div>

      {/* Customer Feedback and Recommendations */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Customer Feedback and Recommendations</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-white rounded-lg shadow-md">
          <ul className="list-disc list-inside text-gray-800">
            <li>Feedback comment 1</li>
            <li>Feedback comment 2</li>
            <li>Feedback comment 3</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Recommendation: Improve XYZ...</p>
        </motion.div>
      </div>

      {/* Prediction Input */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Filter Customers</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by Name"
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              setSegmentedData(customerData.filter((customer) => customer.name.toLowerCase().includes(searchTerm)));
            }}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-8">
        <hr className="border-t border-gray-300" />
        <p className="text-center text-sm text-gray-500 pt-4">&copy; Your Company {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default CustomerInsights;
