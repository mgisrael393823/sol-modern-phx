"use client";

import React from 'react';
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

const RentGrowthChart = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col h-full">
        <h3 className={`${headingFont.className} text-base uppercase tracking-wide text-[#333333] mb-3`}>
          Annual Rent Growth (YoY %)
        </h3>
        
        <div className="relative flex-grow">
          <svg width="100%" height="100%" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            <line x1="50" y1="200" x2="550" y2="200" stroke="#E8E3D9" strokeWidth="1" />
            <line x1="50" y1="160" x2="550" y2="160" stroke="#E8E3D9" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="120" x2="550" y2="120" stroke="#E8E3D9" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="80" x2="550" y2="80" stroke="#E8E3D9" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="50" y1="40" x2="550" y2="40" stroke="#E8E3D9" strokeWidth="1" strokeDasharray="4,4" />
            
            {/* Y axis labels */}
            <text x="40" y="200" textAnchor="end" className="text-xs fill-[#777777]">0%</text>
            <text x="40" y="160" textAnchor="end" className="text-xs fill-[#777777]">1%</text>
            <text x="40" y="120" textAnchor="end" className="text-xs fill-[#777777]">2%</text>
            <text x="40" y="80" textAnchor="end" className="text-xs fill-[#777777]">3%</text>
            <text x="40" y="40" textAnchor="end" className="text-xs fill-[#777777]">4%</text>
            
            {/* X axis labels */}
            <text x="75" y="220" textAnchor="middle" className="text-xs fill-[#777777]">2021</text>
            <text x="200" y="220" textAnchor="middle" className="text-xs fill-[#777777]">2022</text>
            <text x="325" y="220" textAnchor="middle" className="text-xs fill-[#777777]">2023</text>
            <text x="450" y="220" textAnchor="middle" className="text-xs fill-[#777777]">2024</text>
            <text x="575" y="220" textAnchor="middle" className="text-xs fill-[#777777]">2025</text>
            
            {/* Market Average Line */}
            <path 
              d="M75,160 L200,120 L325,80 L450,40 L575,60" 
              fill="none" 
              stroke="#777777" 
              strokeWidth="2"
            />
            
            {/* SOL Modern Line (starting from 2023) */}
            <path 
              d="M325,80 L450,0 L575,20" 
              fill="none" 
              stroke="#E57161" 
              strokeWidth="2"
            />
            
            {/* Market Average Points */}
            <circle cx="75" cy="160" r="4" fill="#777777" />
            <circle cx="200" cy="120" r="4" fill="#777777" />
            <circle cx="325" cy="80" r="4" fill="#777777" />
            <circle cx="450" cy="40" r="4" fill="#777777" />
            <circle cx="575" cy="60" r="4" fill="#777777" />
            
            {/* SOL Modern Points */}
            <circle cx="325" cy="80" r="4" fill="#E57161" />
            <circle cx="450" cy="0" r="4" fill="#E57161" />
            <circle cx="575" cy="20" r="4" fill="#E57161" />
            
            {/* Legend */}
            <rect x="370" y="10" width="12" height="12" fill="#E57161" rx="2" />
            <text x="390" y="20" className="text-xs fill-[#333333]">SOL Modern Projected</text>
            
            <rect x="370" y="30" width="12" height="12" fill="#777777" rx="2" />
            <text x="390" y="40" className="text-xs fill-[#333333]">Market Average</text>
          </svg>
        </div>
        
        <p className={`${bodyFont.className} text-xs text-[#777777] mt-3 text-center italic`}>
          SOL Modern projected to outperform market average in lease-up period
        </p>
      </div>
    </div>
  );
};

export default RentGrowthChart;