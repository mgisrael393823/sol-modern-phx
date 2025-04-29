"use client"

import React, { useState } from "react";
import { Lock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface GatedChartProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function GatedChart({ children, title, description }: GatedChartProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative">
      {/* Chart content - blurred */}
      <div className="blur-[6px] opacity-30 pointer-events-none">
        {children}
      </div>
      
      {/* Overlay with lock icon */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="w-12 h-12 rounded-full bg-[#D84A38] flex items-center justify-center mb-3">
          <Lock className="h-5 w-5 text-white" />
        </div>
        <p className="text-sm font-medium text-[#333333] mb-1">{title}</p>
        {description && <p className="text-xs text-[#666666] max-w-xs text-center">{description}</p>}
        <Button 
          className="mt-4 bg-[#D84A38] hover:bg-[#C03A28] text-white text-xs font-medium rounded-sm px-4 py-2 uppercase tracking-wider"
          onClick={() => setIsDialogOpen(true)}
        >
          Unlock Data
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#F5F5E6] border border-[#E8E3D9]">
          <DialogHeader>
            <DialogTitle className={`${headingFont.className} text-lg uppercase tracking-wider text-[#333333] text-center`}>UNLOCK PREMIUM DATA</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <p className={`${bodyFont.className} text-[#666666]`}>
              The <span className="font-medium text-[#333333]">{title}</span> data contains proprietary market intelligence reserved for our clients and partners.
            </p>
            
            <div className="bg-white p-5 rounded-sm border border-[#E8E3D9]">
              <p className={`${bodyFont.className} font-medium text-[#333333] text-center uppercase tracking-wider text-xs`}>To access this data, please email:</p>
              <p className="text-lg my-3 text-center text-[#D84A38] font-medium">misrael00@gmail.com</p>
              <p className={`${bodyFont.className} text-xs text-[#A0A0A0] text-center`}>(We typically respond within 1 business day with access instructions)</p>
            </div>
            
            <div className="mt-6 pt-5 border-t border-[#E8E3D9]">
              <button
                onClick={() => setIsDialogOpen(false)}
                className={`${bodyFont.className} text-xs uppercase tracking-wider text-[#666666] hover:text-[#D84A38] flex items-center`}
              >
                Why is this gated? <span className="ml-1">→</span>
                <span className="block ml-2 text-xs normal-case tracking-normal text-[#A0A0A0]">
                  This data represents proprietary market analytics that provides significant competitive advantages to our clients.
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}