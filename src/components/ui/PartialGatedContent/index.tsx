import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { Lock, Eye, ArrowRight } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface PartialGatedContentProps {
  visibleContent: React.ReactNode;
  gatedContent: React.ReactNode;
  title: string;
  teaser: string;
  previewPoints?: string[];
}

export function PartialGatedContent({ 
  visibleContent, 
  gatedContent, 
  title, 
  teaser,
  previewPoints = []
}: PartialGatedContentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative">
      {/* Visible content at the top */}
      <div className="mb-10">
        {visibleContent}
      </div>
      
      {/* Premium preview section */}
      <div className="mb-12 p-8 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
        
        <div className="flex items-center justify-between mb-4">
          <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
            <Eye className="h-4 w-4 mr-2 text-[#E57161]" />
            PREMIUM INSIGHTS
          </h3>
          <div className="bg-[#F8F0EA] px-3 py-1 rounded-sm">
            <span className={`${bodyFont.className} text-xs text-[#E57161] font-medium uppercase tracking-wider`}>Premium Content</span>
          </div>
        </div>
        
        <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>{teaser}</p>
        
        {previewPoints.length > 0 && (
          <div className="mb-6">
            <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights Preview:</h5>
            <ul className="space-y-2">
              {previewPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#E57161] mr-2">•</span>
                  <span className={`${bodyFont.className} text-[#777777]`}>{point}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="text-[#E57161] mr-2">•</span>
                <span className={`${bodyFont.className} text-[#A0A0A0] italic`}>Additional insights available in full analysis...</span>
              </li>
            </ul>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="bg-white px-4 py-2 rounded-sm border border-[#E8E3D9] text-center inline-flex items-center">
            <Lock className="h-3.5 w-3.5 text-[#A0A0A0] mr-2" />
            <span className={`${bodyFont.className} text-xs text-[#777777]`}>Full analysis includes detailed implementation strategies</span>
          </div>
          
          <Button 
            variant="outline"
            onClick={() => setIsDialogOpen(true)}
            className="text-[#E57161] border-[#E57161] hover:bg-[#E57161] hover:bg-opacity-5 font-medium px-5 py-2 rounded-sm tracking-wide uppercase text-xs flex items-center"
          >
            <span>Unlock Full Analysis</span>
            <ArrowRight className="h-3.5 w-3.5 ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Blurred gated content */}
      <div 
        className="blur-md pointer-events-none opacity-30" 
        aria-hidden="true"
      >
        {gatedContent}
      </div>
      
      <div 
        className="absolute bottom-10 left-0 right-0 flex items-center justify-center cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <Button 
          size="lg"
          className="bg-[#E57161] hover:bg-[#D05A4B] text-white font-medium px-10 py-6 rounded-sm tracking-widest uppercase text-sm"
        >
          UNLOCK COMPLETE {title}
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#FCFAF5] border border-[#E8E3D9]">
          <DialogHeader>
            <DialogTitle className={`${headingFont.className} text-lg uppercase tracking-wider text-[#333333] text-center`}>UNLOCK PREMIUM CONTENT</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <p className={`${bodyFont.className} text-[#777777]`}>The <span className="font-medium text-[#333333]">{title}</span> section contains proprietary strategies and actionable recommendations that are reserved for our clients and partners.</p>
            
            <div className="bg-white p-5 rounded-sm border border-[#E8E3D9]">
              <p className={`${bodyFont.className} font-medium text-[#333333] text-center uppercase tracking-wider text-xs`}>To access this content, please email:</p>
              <p className="text-lg my-3 text-center text-[#E57161] font-medium">misrael00@gmail.com</p>
              <p className={`${bodyFont.className} text-xs text-[#A0A0A0] text-center`}>(We typically respond within 1 business day with access instructions)</p>
            </div>
            
            <div className="mt-6 pt-5 border-t border-[#E8E3D9]">
              <button
                onClick={() => setIsDialogOpen(false)}
                className={`${bodyFont.className} text-xs uppercase tracking-wider text-[#777777] hover:text-[#E57161] flex items-center`}
              >
                Why is this gated? <span className="ml-1">→</span>
                <span className="block ml-2 text-xs normal-case tracking-normal text-[#A0A0A0]">
                  These sections include our proprietary strategies and frameworks we reserve for select clients, providing specific guidance on implementation and competitive advantages.
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}