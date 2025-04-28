
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { Lock } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface GatedContentProps {
  children: React.ReactNode;
  title: string;
  teaser: string;
}

export function GatedContent({ children, title, teaser }: GatedContentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative">
      {/* Teaser content - not blurred */}
      <div className="mb-10 p-8 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
        <h3 className={`${headingFont.className} text-lg uppercase tracking-wide mb-3 text-[#333333] flex items-center`}>
          <Lock className="h-4 w-4 mr-2 text-[#E57161]" />
          PREMIUM CONTENT
        </h3>
        <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl`}>{teaser}</p>
      </div>
      
      {/* Blurred content */}
      <div 
        className="blur-md pointer-events-none opacity-30" 
        aria-hidden="true"
      >
        {children}
      </div>
      
      <div 
        className="absolute inset-0 top-36 flex items-center justify-center cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <Button 
          size="lg"
          className="bg-[#E57161] hover:bg-[#D05A4B] text-white font-medium px-10 py-6 rounded-sm tracking-widest uppercase text-sm"
        >
          UNLOCK {title}
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
