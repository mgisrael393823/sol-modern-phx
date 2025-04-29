
"use client"

import React from "react";
import { StaticNavigation } from "./StaticNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { Montserrat } from "next/font/google";
import { useIsMobile } from "@/hooks/use-mobile";

// Font implementation matching SOL Modern's branding
const headingFont = Montserrat({ subsets: ["latin"], weight: ["500", "600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      {/* Show appropriate navigation based on screen size */}
      {isMobile ? <MobileNavigation /> : <StaticNavigation />}
      
      <main className={`
        flex-1 
        ${isMobile ? 'pt-20 px-4' : 'pl-64 py-12'}
      `}>
        <div className={`
          container mx-auto 
          ${isMobile ? 'px-0' : 'px-6 md:px-8 max-w-6xl'}
        `}>
          <div className={`${bodyFont.className} text-[#333333]`}>
            {children}
          </div>
        </div>
        <footer className="mt-24 border-t border-[#E8E3D9] py-8 px-4 md:px-8 bg-[#FCFAF5]">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center">
              <p className="text-sm text-[#777777]">
                © 2025 SOL Modern Blueprint. All content is proprietary information.
              </p>
              <div className="h-8 w-8 rounded-full bg-[#E57161] opacity-10"></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
