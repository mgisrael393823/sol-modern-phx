import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PartialGatedContent } from "@/components/ui/PartialGatedContent";
import { BlurredVisualization } from "@/components/ui/BlurredVisualization";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

// Component for collapsible SWOT card
type CollapsibleCardProps = {
  title: string;
  items: string[];
  accent?: boolean;
};
const CollapsibleCard = ({ title, items, accent = false }: CollapsibleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  // Show only first line of first bullet when collapsed
  const firstBulletPreview = items[0].split('.')[0] + '...';
  
  return (
    <div className={`bg-[#FCFAF5] border border-[#E8E3D9] p-5 rounded-sm relative overflow-hidden ${accent ? 'overflow-hidden' : ''}`}>
      {accent && <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#E57161] opacity-5"></div>}
      
      <div 
        className="flex items-center justify-between cursor-pointer mb-3"
        onClick={toggleExpand}
      >
        <h3 className={`${headingFont.className} text-base uppercase tracking-wide text-[#333333]`}>{title}</h3>
        {isExpanded ? 
          <ChevronDown className="h-4 w-4 text-[#777777]" /> : 
          <ChevronRight className="h-4 w-4 text-[#777777]" />
        }
      </div>
      
      {isExpanded ? (
        <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#777777]`}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={`${bodyFont.className} text-sm text-[#777777] pl-5`}>
          {firstBulletPreview}
        </p>
      )}
    </div>
  );
};

export default function ExecutiveSummary() {
  return (
    <>
      <Head>
        <title>Executive Summary | SOL Modern</title>
        <meta name="description" content="Executive Summary of the SOL Modern Lease-Up Strategy" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-original.png" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="SOL MODERN | THE BLUEPRINT - Executive Summary" />
        <meta property="og:description" content="Executive Summary of the SOL Modern Lease-Up Strategy" />
        <meta property="og:image" content="/og-image.png?v=3&t=0429" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SOL Modern with 'THE BLUEPRINT' spray painted in blue over an orange circular pattern on dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOL MODERN | THE BLUEPRINT - Executive Summary" />
        <meta name="twitter:description" content="Executive Summary of the SOL Modern Lease-Up Strategy" />
        <meta name="twitter:image" content="/og-image.png?v=3&t=0429" />
      </Head>
      
      <Layout>
        <div className="w-full max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-1`}>STRATEGIC BLUEPRINT</h4>
            <div className="h-0.5 w-32 bg-[#E57161] mb-6"></div>
            <Heading level={1}>Executive Summary</Heading>
          </div>
          
          {/* Introduction Section */}
          <section className="mb-24">
            <HighlightBox>
              <p className={`${bodyFont.className} text-lg text-[#333333]`}>
                SOL Modern is poised to enter the Downtown Phoenix multifamily market at a pivotal time. Located in the vibrant Roosevelt Row submarket at 50 E Fillmore St, this 747-unit development will be competing in a market characterized by high construction activity, elevated vacancy rates, and strong but uneven absorption.
              </p>
              <p className={`${bodyFont.className} text-sm text-[#777777] mt-4`}>
                This executive summary provides an overview of the complete strategic blueprint. Navigate through the sections on the left to explore detailed market intelligence, competitive analysis, and our recommended strategies for SOL Modern's successful lease-up.
              </p>
            </HighlightBox>
          </section>
          
          {/* Key Metrics Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E8E3D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-3`}>KEY METRICS</h4>
            </div>
            
            <Heading level={2} className="mb-8">Project Overview</Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mb-8">
              {/* Financial metrics - top row */}
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Projected Lease-Up</p>
                <p className="text-3xl font-bold text-[#333333]">12.5 mo</p>
                <p className="text-sm text-[#777777]">To stabilization</p>
              </div>
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Competitive Rents</p>
                <p className="text-3xl font-bold text-[#333333]">+5.2%</p>
                <p className="text-sm text-[#777777]">Premium to market</p>
              </div>
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Concessions</p>
                <p className="text-3xl font-bold text-[#333333]">4-6 wks</p>
                <p className="text-sm text-[#777777]">During lease-up</p>
              </div>
              
              {/* Property details - middle row */}
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Location</p>
                <p className="text-lg font-medium text-[#333333]">Roosevelt Row</p>
                <p className="text-sm text-[#777777]">50 E Fillmore St, Phoenix</p>
              </div>
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Unit Mix</p>
                <p className="text-lg font-medium text-[#333333]">747 Units</p>
                <p className="text-sm text-[#777777]">Studio to 3-bedroom units</p>
              </div>
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-5 md:col-span-2">
                <p className="text-sm uppercase tracking-wide text-[#777777] mb-1">Delivery</p>
                <p className="text-lg font-medium text-[#333333]">Q2 2025</p>
                <p className="text-sm text-[#777777]">$1,965 to $4,645 rates</p>
              </div>
            </div>

            {/* Blurred visualization */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm">
              <BlurredVisualization
                title="Absorption Forecast"
                description="Premium analysis of projected lease-up velocity by floor plan type with detailed financial modeling"
                chartType="line"
                height="h-[300px]"
              />
              <div className="p-4 text-center">
                <Button 
                  variant="outline"
                  disabled
                  className="text-[#E57161] border-[#E57161] font-medium px-5 py-2 rounded-sm tracking-wide uppercase text-xs flex items-center mx-auto cursor-not-allowed opacity-80"
                >
                  <span>Access Full Forecast</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </section>
          
          {/* Market Opportunity Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E8E3D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-3`}>MARKET INSIGHTS</h4>
            </div>
            
            <div>
              <Heading level={2} className="mb-6">Market Opportunity Overview</Heading>
              <p className={`${bodyFont.className} text-[#777777] mb-6`}>
                Our analysis of the Downtown Phoenix multifamily market reveals strategic opportunities 
                for SOL Modern to achieve stabilization within the projected timeframe despite current market challenges.
              </p>
              
              {/* Premium content teaser */}
              <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    OPPORTUNITY ANALYSIS
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Access our detailed market opportunity analysis with projections for Downtown Phoenix absorption rates, competitive positioning matrix, and target demographic profiles.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights Preview:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Current absorption trends indicate a 12.5 month stabilization period for SOL Modern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Competitive advantage opportunities in luxury amenities and technology integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#A0A0A0] italic`}>Additional insights available in full analysis...</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-right">
                  <Button 
                    variant="outline"
                    disabled
                    className="text-[#E57161] border-[#E57161] font-medium px-5 py-2 rounded-sm tracking-wide uppercase text-xs flex items-center ml-auto cursor-not-allowed opacity-80"
                  >
                    <span>Access Full Analysis</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Market Position Analysis Section */}
          <section className="mb-24">
            {/* Section divider */}
            <div className="border-t-2 border-[#E8E3D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-3`}>COMPETITIVE POSITIONING</h4>
            </div>
            
            <Heading level={2} className="mb-6">Market Position Analysis</Heading>
            <p className={`${bodyFont.className} mb-8 text-[#777777]`}>The following SWOT analysis identifies SOL Modern's position within the competitive landscape of Roosevelt Row:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <CollapsibleCard 
                title="Strengths" 
                items={[
                  "Prime location in the arts-centric Roosevelt Row district",
                  "Newest property in the submarket (2025 delivery)"
                ]}
                accent={true}
              />
              
              <CollapsibleCard 
                title="Weaknesses" 
                items={[
                  "Entering a market with elevated vacancy rates",
                  "Significant new supply in the immediate area",
                  "Potential for further rent concessions from competitors"
                ]}
              />
              
              <CollapsibleCard 
                title="Opportunities" 
                items={[
                  "Growing demand for remote work-friendly apartments",
                  "Authentic integration with the arts community"
                ]}
              />
              
              <CollapsibleCard 
                title="Threats" 
                items={[
                  "Continued oversupply in the Downtown Phoenix market",
                  "Potential for further rent concessions from competitors"
                ]}
                accent={true}
              />
            </div>
            
            {/* Premium SWOT CTA using consistent styling */}
            <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-12">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
              
              <div className="mb-4">
                <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                  <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                  SWOT SUMMARY
                </h3>
              </div>
              
              <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                Our comprehensive SWOT analysis includes detailed assessment of all competitive properties, market conditions, and strategic positioning opportunities.
              </p>
              
              <div className="mb-6">
                <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Full Analysis Includes:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>Detailed competitor-specific response strategies for each weakness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>Comprehensive risk mitigation planning for identified threats</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-right">
                <Button 
                  variant="outline"
                  onClick={() => {}}
                  className="text-[#E57161] border-[#E57161] hover:bg-[#E57161] hover:bg-opacity-5 font-medium px-5 py-2 rounded-sm tracking-wide uppercase text-xs flex items-center ml-auto"
                >
                  <span>Access Full Analysis</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </section>
          
          {/* Recommendations & Roadmap Section */}
          <section className="mb-24">
            {/* Clear section divider */}
            <div className="border-t-2 border-[#E8E3D9] pt-6 mb-8">
              <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-3`}>RECOMMENDATIONS & ROADMAP</h4>
            </div>
            
            <Heading level={2} className="mb-6">Strategy Pillars</Heading>
            
            <p className={`${bodyFont.className} mb-8 text-[#777777]`}>Based on our market position analysis, we recommend the following strategic approach categories:</p>
            
            {/* Core Strategy Section - High-level categories only */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#E57161] text-xl font-bold">1</span>
                </div>
                <Heading level={4} className="mb-3">Product Differentiation</Heading>
                <p className={`${bodyFont.className} text-sm text-[#777777]`}>
                  Enhanced living environments with superior features and technology integration
                </p>
              </div>
              
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#E57161] text-xl font-bold">2</span>
                </div>
                <Heading level={4} className="mb-3">Experiential Living</Heading>
                <p className={`${bodyFont.className} text-sm text-[#777777]`}>
                  Lifestyle-centric amenities focused on work-from-home trends and wellness
                </p>
              </div>
              
              <div className="bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors text-center">
                <div className="w-12 h-12 rounded-full bg-[#F8F0EA] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#E57161] text-xl font-bold">3</span>
                </div>
                <Heading level={4} className="mb-3">Community Integration</Heading>
                <p className={`${bodyFont.className} text-sm text-[#777777]`}>
                  Authentic connection with Roosevelt Row's arts district and local businesses
                </p>
              </div>
            </div>
            
            {/* Implementation Roadmap */}
            <div className="mt-16">
              <Heading level={3} className="mb-6">Implementation Roadmap</Heading>
              <p className={`${bodyFont.className} text-[#777777] mb-6`}>
                Our tactical roadmap converts strategies into actionable steps with clear timelines, responsible parties, and success metrics.
              </p>
              
              {/* Premium content teaser */}
              <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    EXECUTION BLUEPRINT
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Our detailed implementation strategy provides a complete roadmap with staffing plans, timelines, and projected ROI metrics for each strategic initiative.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Components:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Three-phase implementation approach for optimal market entry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Proprietary service model with measurable performance metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#A0A0A0] italic`}>Detailed analysis available in full executive blueprint</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-right">
                  <Button 
                    variant="outline"
                    onClick={() => {}}
                    className="text-[#E57161] border-[#E57161] hover:bg-[#E57161] hover:bg-opacity-5 font-medium px-5 py-2 rounded-sm tracking-wide uppercase text-xs flex items-center ml-auto"
                  >
                    <span>Access Full Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}