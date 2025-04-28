"use client";

import React from 'react';
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

const IncomeDistributionChart = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="flex flex-col h-full">
        <h3 className={`${headingFont.className} text-base uppercase tracking-wide text-[#333333] mb-3`}>
          Income Distribution by Target Demographic
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
            <text x="40" y="160" textAnchor="end" className="text-xs fill-[#777777]">10%</text>
            <text x="40" y="120" textAnchor="end" className="text-xs fill-[#777777]">20%</text>
            <text x="40" y="80" textAnchor="end" className="text-xs fill-[#777777]">30%</text>
            <text x="40" y="40" textAnchor="end" className="text-xs fill-[#777777]">40%</text>
            
            {/* X axis labels */}
            <text x="125" y="220" textAnchor="middle" className="text-xs fill-[#777777]">$85k-100k</text>
            <text x="275" y="220" textAnchor="middle" className="text-xs fill-[#777777]">$100k-125k</text>
            <text x="425" y="220" textAnchor="middle" className="text-xs fill-[#777777]">$125k-150k</text>
            <text x="575" y="220" textAnchor="middle" className="text-xs fill-[#777777]">$150k+</text>
            
            {/* Primary demographic bars (28-42 age) */}
            <rect x="95" y="88" width="30" height="112" rx="3" fill="#9DC8E2" stroke="#7ABED9" strokeWidth="1" />
            <rect x="245" y="60" width="30" height="140" rx="3" fill="#9DC8E2" stroke="#7ABED9" strokeWidth="1" />
            <rect x="395" y="112" width="30" height="88" rx="3" fill="#9DC8E2" stroke="#7ABED9" strokeWidth="1" />
            <rect x="545" y="140" width="30" height="60" rx="3" fill="#9DC8E2" stroke="#7ABED9" strokeWidth="1" />
            
            {/* Secondary demographic bars (52-65 age) */}
            <rect x="130" y="168" width="30" height="32" rx="3" fill="#F0BC86" stroke="#E8A969" strokeWidth="1" />
            <rect x="280" y="112" width="30" height="88" rx="3" fill="#F0BC86" stroke="#E8A969" strokeWidth="1" />
            <rect x="430" y="72" width="30" height="128" rx="3" fill="#F0BC86" stroke="#E8A969" strokeWidth="1" />
            <rect x="580" y="48" width="30" height="152" rx="3" fill="#F0BC86" stroke="#E8A969" strokeWidth="1" />
            
            {/* Percentage labels on primary bars */}
            <text x="110" y="80" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">28%</text>
            <text x="260" y="52" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">35%</text>
            <text x="410" y="104" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">22%</text>
            <text x="560" y="132" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">15%</text>
            
            {/* Percentage labels on secondary bars */}
            <text x="145" y="160" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">8%</text>
            <text x="295" y="104" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">22%</text>
            <text x="445" y="64" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">32%</text>
            <text x="595" y="40" textAnchor="middle" className="text-xs font-semibold fill-[#333333]">38%</text>
            
            {/* Legend */}
            <rect x="370" y="10" width="12" height="12" fill="#9DC8E2" stroke="#7ABED9" strokeWidth="1" rx="2" />
            <text x="390" y="20" className="text-xs fill-[#333333]">Primary (28-42)</text>
            
            <rect x="370" y="30" width="12" height="12" fill="#F0BC86" stroke="#E8A969" strokeWidth="1" rx="2" />
            <text x="390" y="40" className="text-xs fill-[#333333]">Secondary (52-65)</text>
          </svg>
        </div>
        
        <p className={`${bodyFont.className} text-xs text-[#777777] mt-3 text-center italic`}>
          Secondary demographic shows stronger representation in high-income brackets
        </p>
      </div>
    </div>
  );
};

export default IncomeDistributionChart;