// BarChart.tsx
'use client'
import React, { useState } from 'react';
import './BarChart.css';

interface BarChartProps {
  data: { label: string; value: number }[];
  theme: 'dark' | 'neon';
}

const BarChart: React.FC<BarChartProps> = ({ data, theme }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <div className={`bar-chart-container ${theme}`}>
      <h3>Pool Votes</h3>
      <div className="bars">
        {data.map((item, index) => (
          <div
            key={index}
            className={`bar ${hoveredBar === index ? 'hovered' : ''}`}
            style={{ height: `${item.value}%`, width: `${100 / data.length}%` }}
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <span>{item.value}</span>
            <div className="tooltip">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
