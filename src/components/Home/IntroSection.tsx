
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
          <h4 className="section-title">THE BLUEPRINT</h4>
          <div className="h-0.5 w-32 bg-[#E57161] mx-auto"></div>
        </div>
        
        <h1 className="heading-1 mb-6">
          ELEVATE THE EVERYDAY
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className={`${bodyFont.className} text-lg text-[#777777] leading-relaxed mb-10`}>
            The SOL Modern Blueprint is a comprehensive strategic framework designed to optimize the lease-up process, identify competitive advantages, and provide actionable recommendations to maximize occupancy and rental revenue for the Roosevelt Row/Downtown Phoenix market.
          </p>
          
          <Link href="/executive-summary" className="btn-primary inline-block px-8 py-4">
            EXPLORE BLUEPRINT
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="content-box">
          <h3 className="heading-4 mb-4">MARKET ANALYSIS</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Comprehensive market intelligence and detailed competitive landscape analysis for the Roosevelt Row submarket.</p>
        </div>
        
        <div className="content-box relative overflow-hidden">
          <div className="decorative-circle"></div>
          <h3 className="heading-4 mb-4">STRATEGIC FRAMEWORK</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Strategic opportunities, pricing model, and incentive structure to optimize lease-up velocity and revenue.</p>
        </div>
        
        <div className="content-box">
          <h3 className="heading-4 mb-4">IMPLEMENTATION PLAN</h3>
          <p className={`${bodyFont.className} text-[#777777]`}>Detailed go-to-market roadmap with phased marketing approach and actionable opportunity map.</p>
        </div>
      </div>
    </section>
  );
}
