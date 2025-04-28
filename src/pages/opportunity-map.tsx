
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Target, TrendingUp, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function OpportunityMap() {
  return (
    <>
      <Head>
        <title>Opportunity Map | SOL Modern</title>
        <meta name="description" content="Opportunity Map for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-2 mb-6">Opportunity Map</h1>
          
          <div className="bg-[#FCFAF5] border-l-4 border-[#333333] p-6 mb-8">
            <p className="text-lg font-medium">
              This opportunity map identifies key strategic advantages and actionable opportunities to maximize SOL Modern's market position, lease-up velocity, and revenue performance.
            </p>
          </div>
          
          <div className="space-y-10">
            <section className="section-spacing">
              <h2 className="heading-3 mb-6">Primary Opportunity Areas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-highlight p-6 flex flex-col h-[340px]">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="text-[#777777]" size={24} />
                      <h3 className="heading-4">Premium Positioning</h3>
                    </div>
                    <p className={`${bodyFont.className} text-[#777777] mb-4`}>
                      SOL Modern's superior finishes and amenities create an opportunity to establish a premium position in the market with corresponding pricing.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className={`${headingFont.className} font-medium text-sm uppercase text-[#555555] mb-3`}>Key Actions</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Develop premium brand identity across all touchpoints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Create model units that showcase premium finishes</span>
                      </li>
                      <li className="flex items-start content-blur">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Implement tiered pricing strategy for premium views/floors</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="content-box-highlight p-6 flex flex-col h-[340px]">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="text-[#777777]" size={24} />
                      <h3 className="heading-4">Demand Timing</h3>
                    </div>
                    <p className={`${bodyFont.className} text-[#777777] mb-4`}>
                      Market analysis shows peak leasing season aligns with SOL Modern's delivery timeline, creating opportunity for accelerated lease-up.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className={`${headingFont.className} font-medium text-sm uppercase text-[#555555] mb-3`}>Key Actions</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Launch pre-leasing campaign 90 days before delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Implement early-bird incentives for pre-leasing</span>
                      </li>
                      <li className="flex items-start content-blur">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className={`${bodyFont.className} text-[#777777]`}>Schedule high-impact marketing during peak search periods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Premium content callout */}
              <div className="p-8 content-box relative overflow-hidden mt-8 mb-8">
                <div className="decorative-circle"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    COMPLETE OPPORTUNITY ANALYSIS
                  </h3>
                  <div className="bg-[#F8F0EA] px-3 py-1.5 rounded-sm">
                    <span className={`${bodyFont.className} text-xs text-[#E57161] font-medium uppercase tracking-wider`}>Premium Content</span>
                  </div>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Access our comprehensive opportunity analysis with detailed implementation strategies, ROI projections, and competitive advantage metrics for each opportunity area.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights Preview:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Detailed revenue impact projections for each strategic opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Actionable implementation roadmap with timeline and resource allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#A0A0A0] italic`}>Additional insights available in full analysis...</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="bg-white px-5 py-2.5 rounded-sm border border-[#E8E3D9] text-center inline-flex items-center">
                    <span className={`${bodyFont.className} text-xs text-[#777777]`}>Full analysis includes opportunity prioritization methodology</span>
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => {}}
                    className="btn-outline flex items-center"
                  >
                    <span>Access Full Analysis</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </Layout>
    </>
  );
}
