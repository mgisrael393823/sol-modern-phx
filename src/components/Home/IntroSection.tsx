
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function IntroSection() {
  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="mb-16 text-center">
        <div className="inline-block mb-8">
          <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-1`}>THE BLUEPRINT</h4>
          <div className="h-0.5 w-32 bg-[#E57161] mx-auto"></div>
        </div>
        
        <h1 className={`${headingFont.className} text-4xl md:text-5xl tracking-wide mb-6 text-[#333333]`}>
          ELEVATE THE EVERYDAY
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className={`${bodyFont.className} text-lg text-[#777777] leading-relaxed mb-10`}>
            The SOL Modern Blueprint is a comprehensive strategic framework designed to optimize the lease-up process, identify competitive advantages, and provide actionable recommendations to maximize occupancy and rental revenue for the Roosevelt Row/Downtown Phoenix market.
          </p>
          
          <Link href="/executive-summary" className="inline-block rounded-sm bg-[#E57161] text-white px-8 py-4 font-medium tracking-wider text-sm uppercase hover:bg-[#D05A4B] transition-colors">
            EXPLORE BLUEPRINT
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm">
          <h3 className={`${headingFont.className} text-lg uppercase tracking-wider mb-3 text-[#333333]`}>MARKET ANALYSIS</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Comprehensive market intelligence and detailed competitive landscape analysis for the Roosevelt Row submarket.</p>
        </div>
        
        <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#E57161] opacity-10"></div>
          <h3 className={`${headingFont.className} text-lg uppercase tracking-wider mb-3 text-[#333333]`}>STRATEGIC FRAMEWORK</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Strategic opportunities, pricing model, and incentive structure to optimize lease-up velocity and revenue.</p>
        </div>
        
        <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm">
          <h3 className={`${headingFont.className} text-lg uppercase tracking-wider mb-3 text-[#333333]`}>IMPLEMENTATION PLAN</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Detailed go-to-market roadmap with phased marketing approach and actionable opportunity map.</p>
        </div>
      </div>
    </section>
  );
}
