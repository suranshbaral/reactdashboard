/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LineChart from '../components/Charts/LineChart';
import Pie from '../components/Charts/Pie';
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
import Header from '../components/Header';
import { zoomIn } from '../utils/motion';

const DemandForecasting = () => {
  const [inputData, setInputData] = useState({});
  const [predictions, setPredictions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handlePredict = () => {
    // Placeholder for prediction logic
    const dummyPrediction = {
      date: inputData.date || 'N/A',
      predictedDemand: Math.random() * 100,
      predictionInterval: [Math.random() * 50, Math.random() * 150],
    };
    setPredictions([...predictions, dummyPrediction]);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-lg">
      <Header category="Analytics" title="Demand Forecasting" />

      {/* Dashboard Overview and Key Metrics */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Average Demand</h3>
            <p className="text-2xl">123</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Peak Demand</h3>
            <p className="text-2xl">456</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Lowest Demand</h3>
            <p className="text-2xl">78</p>
          </motion.div>
          <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg shadow-md">
            <h3 className="font-medium">Total Demand</h3>
            <p className="text-2xl">7890</p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Graphs */}
      <div className="flex flex-wrap justify-center">
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <LineChart />
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Pie />
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <SparkLine />
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="w-full xl:w-6/12 p-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <Stacked />
          </div>
        </motion.div>
      </div>

      {/* Model Details and Performance */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Model Details and Performance</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-medium">Hyperparameters</h3>
          <p>RNN_UNITS: 50, NUM_LAYERS: 1, DROPOUT_RATE: 0.2, EMBEDDING_DIM: 100</p>
        </motion.div>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-medium">Performance Metrics</h3>
          <p>MAE: 0.006, RMSE: 18.33, R²: 0.453</p>
        </motion.div>
      </div>

      {/* Prediction Input */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold">Prediction Input</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show" className="flex space-x-4">
          <input
            type="text"
            name="date"
            placeholder="Date/Time"
            value={inputData.date || ''}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md flex-1"
          />
          <input
            type="text"
            name="feature1"
            placeholder="Feature 1"
            value={inputData.feature1 || ''}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md flex-1"
          />
          <input
            type="text"
            name="feature2"
            placeholder="Feature 2"
            value={inputData.feature2 || ''}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded-md flex-1"
          />
          <button
            onClick={handlePredict}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Predict
          </button>
        </motion.div>
      </div>

      {/* Prediction Results */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Prediction Results</h2>
        <motion.div variants={zoomIn(0.8, 0.5)} initial="hidden" animate="show">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Predicted Demand</th>
                <th className="px-4 py-2">Prediction Interval</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((prediction, index) => (
                <tr key={index} className="bg-white">
                  <td className="border px-4 py-2">{prediction.date}</td>
                  <td className="border px-4 py-2">{prediction.predictedDemand.toFixed(2)}</td>
                  <td className="border px-4 py-2">{prediction.predictionInterval.map((p) => p.toFixed(2)).join(' - ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="pt-8">
        <hr className="border-t border-gray-300" />
        <p className="text-center text-sm text-gray-500 pt-4">&copy; </p>
      </div>
    </div>
  );
};

export default DemandForecasting;
