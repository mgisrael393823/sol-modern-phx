
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Building, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function CompetitiveLandscape() {
  return (
    <>
      <Head>
        <title>Competitive Landscape Analysis | SOL Modern</title>
        <meta name="description" content="Competitive Landscape Analysis for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-[#333333]">Competitive Landscape Analysis</h1>
          
          <div className="bg-[#FCFAF5] border-l-4 border-[#333333] p-6 mb-8">
            <p className="text-lg font-medium">
              SOL Modern will enter a market with 7 primary competitors within a 1.5-mile radius. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities.
            </p>
          </div>
          
          <div className="space-y-10">
            <section className="py-8">
              <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Competitive Set Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-[#E8E3D9] rounded-sm p-6 bg-[#FCFAF5] relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="text-[#777777]" size={24} />
                    <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333]`}>Primary Competitors</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Emerson</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>320 units, built 2020, 0.8 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Midtown Heights</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>275 units, built 2021, 1.2 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start blur-[4px] opacity-40">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Parker</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>410 units, built 2019, 0.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start blur-[4px] opacity-40">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Axis Residences</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>290 units, built 2018, 1.1 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-[#E8E3D9] rounded-sm p-6 bg-[#FCFAF5] relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-[#777777]" size={24} />
                    <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333]`}>Secondary Competitors</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Edison</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>185 units, built 2017, 1.4 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>Lofts at Central</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>210 units, built 2016, 1.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start blur-[4px] opacity-40">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Monroe</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>240 units, built 2018, 1.3 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Premium content callout */}
              <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-8 mb-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    FULL COMPETITIVE ANALYSIS
                  </h3>
                  <div className="bg-[#F8F0EA] px-3 py-1.5 rounded-sm">
                    <span className={`${bodyFont.className} text-xs text-[#E57161] font-medium uppercase tracking-wider`}>Premium Content</span>
                  </div>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Access our comprehensive competitive landscape analysis with detailed property profiles, competitive positioning, and strategic recommendations for each competitor.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights Preview:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Detailed analysis of all 7 direct competitors with operational metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Comprehensive amenity mapping and service model comparisons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#A0A0A0] italic`}>Additional insights available in full analysis...</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="bg-white px-5 py-2.5 rounded-sm border border-[#E8E3D9] text-center inline-flex items-center">
                    <span className={`${bodyFont.className} text-xs text-[#777777]`}>Full analysis includes property-specific strategy recommendations</span>
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => {}}
                    className="text-[#E57161] border-[#E57161] hover:bg-[#E57161] hover:bg-opacity-5 font-medium px-5 py-2.5 rounded-sm tracking-wide uppercase text-xs flex items-center"
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
