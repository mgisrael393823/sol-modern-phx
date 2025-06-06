"use client";

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

interface IncomeDistributionChartProps {
  height?: string;
}

const data = [
  {
    name: '$75-100k',
    value: 15,
  },
  {
    name: '$100-125k',
    value: 28,
  },
  {
    name: '$125-150k',
    value: 32,
  },
  {
    name: '$150-175k',
    value: 18,
  },
  {
    name: '$175k+',
    value: 7,
  },
];

export function IncomeDistributionChart({ height = "h-80" }: IncomeDistributionChartProps) {
  return (
    <div className={`w-full ${height}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
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
            hide={true}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(229, 113, 97, 0.1)' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E8E3D9',
              borderRadius: '2px',
              fontSize: '12px'
            }}
          />
          <Bar 
            dataKey="value" 
            fill="#E57161"
            radius={[2, 2, 0, 0]}
          >
            <LabelList dataKey="value" position="top" fill="#777777" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}