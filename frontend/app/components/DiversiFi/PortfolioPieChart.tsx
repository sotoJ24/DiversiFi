"use client";

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

export interface AssetAllocation {
  token: string;
  percentage: number;
  color: string;
  value?: number;  // Optional monetary value of the allocation
  change?: string; // Optional percentage change (e.g., '+3.2%')
}

interface PortfolioPieChartProps {
  allocations: AssetAllocation[];
  size?: 'sm' | 'md' | 'lg';
  showLegend?: boolean;
}

const PortfolioPieChart: React.FC<PortfolioPieChartProps> = ({
  allocations,
  size = 'md',
  showLegend = false,
}) => {
  const sizeClass = {
    sm: 'h-32 w-32',
    md: 'h-48 w-48',
    lg: 'h-64 w-64',
  };

  const data = {
    labels: allocations.map((asset) => asset.token),
    datasets: [
      {
        data: allocations.map((asset) => asset.percentage),
        backgroundColor: allocations.map((asset) => asset.color),
        borderColor: allocations.map(() => '#ffffff'),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: showLegend,
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className={`mx-auto ${sizeClass[size]}`}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PortfolioPieChart;
