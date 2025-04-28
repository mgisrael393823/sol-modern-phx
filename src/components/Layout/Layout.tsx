
import React from "react";
import { StaticNavigation } from "./StaticNavigation";
import { Montserrat } from "next/font/google";

// Font implementation matching SOL Modern's branding
const headingFont = Montserrat({ subsets: ["latin"], weight: ["500", "600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#FCFAF5] flex">
      <StaticNavigation />
      <main className="flex-1 pl-64 py-12">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className={`${bodyFont.className} text-[#333333]`}>
            {children}
          </div>
        </div>
        <footer className="mt-24 border-t border-[#E8E3D9] py-8 px-6 md:px-8 bg-[#FCFAF5]">
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
