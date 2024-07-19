import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { styles } from '../styles';

const ChartCard = ({ index, title, description, chartComponent: ChartComponent }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.4 * index, 0.5)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        }}
        className="bg-white shadow-lg rounded-lg overflow-hidden m-4 sm:m-6 lg:m-8"
      >
        <div className="relative">
          <div className="w-full h-40">
            {ChartComponent && <ChartComponent />} {/* Render the provided chart component */}
          </div>
          <div className="absolute inset-0 flex justify-center items-center gap-2 p-4">
            {/* Add any interactive elements if needed, e.g., buttons or overlays */}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {/* Optional: Add tags or additional information */}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(ChartCard, 'chart-cards');
