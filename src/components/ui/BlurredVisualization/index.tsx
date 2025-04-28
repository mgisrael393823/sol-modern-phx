"use client"

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { Lock, BarChart2, LineChart, PieChart, Table } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

type ChartType = 'bar' | 'line' | 'pie' | 'table';

interface BlurredVisualizationProps {
  title: string;
  description?: string;
  chartType?: ChartType;
  height?: string;
  sampleData?: boolean;
}

export function BlurredVisualization({ 
  title, 
  description,
  chartType = 'bar',
  height = "h-64",
  sampleData = true
}: BlurredVisualizationProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const getChartIcon = () => {
    switch(chartType) {
      case 'line':
        return <LineChart className="h-10 w-10 text-gray-300" />;
      case 'pie':
        return <PieChart className="h-10 w-10 text-gray-300" />;
      case 'table':
        return <Table className="h-10 w-10 text-gray-300" />;
      default:
        return <BarChart2 className="h-10 w-10 text-gray-300" />;
    }
  };

  return (
    <div 
      className={`${height} border border-[#E8E3D9] rounded-sm p-6 relative overflow-hidden cursor-pointer`}
      onClick={() => setIsDialogOpen(true)}
    >
      {/* Sample chart visualization in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        {getChartIcon()}
        
        {sampleData && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-6 bg-gray-300 rounded-sm`} 
                style={{ 
                  height: `${Math.floor(Math.random() * 60) + 20}px`
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-[#FCFAF5] bg-opacity-80 backdrop-blur-[2px] flex flex-col items-center justify-center p-6">
        <Lock className="h-6 w-6 text-[#E57161] mb-3" />
        <h3 className={`${headingFont.className} text-lg text-center text-[#333333] uppercase tracking-wide mb-2`}>
          {title}
        </h3>
        
        {description && (
          <p className={`${bodyFont.className} text-sm text-center text-[#777777] mb-4 max-w-xs`}>
            {description}
          </p>
        )}
        
        <Button 
          variant="outline"
          onClick={() => setIsDialogOpen(true)}
          className="text-[#E57161] border-[#E57161] hover:bg-[#E57161] hover:bg-opacity-5 font-medium px-4 py-1.5 rounded-sm tracking-wide uppercase text-xs"
        >
          Premium Content
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#FCFAF5] border border-[#E8E3D9]">
          <DialogHeader>
            <DialogTitle className={`${headingFont.className} text-lg uppercase tracking-wider text-[#333333] text-center`}>UNLOCK PREMIUM CONTENT</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <p className={`${bodyFont.className} text-[#777777]`}>This <span className="font-medium text-[#333333]">{title}</span> data visualization contains proprietary market analysis that is reserved for our clients and partners.</p>
            
            <div className="bg-white p-5 rounded-sm border border-[#E8E3D9]">
              <p className={`${bodyFont.className} font-medium text-[#333333] text-center uppercase tracking-wider text-xs`}>To access this content, please email:</p>
              <p className="text-lg my-3 text-center text-[#E57161] font-medium">misrael00@gmail.com</p>
              <p className={`${bodyFont.className} text-xs text-[#A0A0A0] text-center`}>(We typically respond within 1 business day with access instructions)</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}