// CardWithChart.js
import React from 'react';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';

const CardWithChart = ({ title, chart: ChartComponent, delay }) => (
  <motion.div
    variants={zoomIn(delay, 0.5)}
    initial="hidden"
    animate="show"
    className="p-4 bg-white rounded-lg shadow-md"
  >
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <div className="h-64">
      <ChartComponent />
    </div>
  </motion.div>
);

export default CardWithChart;
