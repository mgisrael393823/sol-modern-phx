"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

interface RentGrowthChartProps {
  height?: string;
}

const data = [
  {
    name: 'Q1 2022',
    downtown: 2.8,
    metro: 2.1,
  },
  {
    name: 'Q2 2022',
    downtown: 3.2,
    metro: 2.4,
  },
  {
    name: 'Q3 2022',
    downtown: 3.6,
    metro: 2.6,
  },
  {
    name: 'Q4 2022',
    downtown: 3.9,
    metro: 2.8,
  },
  {
    name: 'Q1 2023',
    downtown: 3.7,
    metro: 2.5,
  },
  {
    name: 'Q2 2023',
    downtown: 3.8,
    metro: 2.6,
  },
  {
    name: 'Q3 2023',
    downtown: 4.1,
    metro: 2.9,
  },
];

export function RentGrowthChart({ height = "h-80" }: RentGrowthChartProps) {
  return (
    <div className={`w-full ${height}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E3D9" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: '#777777' }}
            axisLine={{ stroke: '#E8E3D9' }}
            tickLine={{ stroke: '#E8E3D9' }}
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12, fill: '#777777' }}
            axisLine={{ stroke: '#E8E3D9' }}
            tickLine={{ stroke: '#E8E3D9' }}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, null]}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E8E3D9',
              borderRadius: '2px',
              fontSize: '12px'
            }}
          />
          <Legend 
            iconType="circle" 
            iconSize={8}
            wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
          />
          <Line 
            type="monotone" 
            dataKey="downtown" 
            name="Downtown"
            stroke="#E57161" 
            activeDot={{ r: 6 }} 
            dot={{ stroke: '#E57161', strokeWidth: 2, r: 4, fill: 'white' }}
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="metro" 
            name="Metro Average"
            stroke="#777777" 
            dot={{ stroke: '#777777', strokeWidth: 2, r: 4, fill: 'white' }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}