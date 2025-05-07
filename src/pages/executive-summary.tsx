import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, TrendingUp, ChevronDown, ChevronRight } from "lucide-react";

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
                <p className="text-[10px] leading-tight text-[#888888] mt-2 max-w-[180px] sm:max-w-[200px]">*12.5 mo. projection based on standard generic approach.</p>
                <p className="text-[10px] leading-tight text-[#888888] mt-1.5 max-w-[180px] sm:max-w-[200px]">**DISRVPT projects 9–9.5 months with proprietary strategy.</p>
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

            {/* Absorption Forecast Chart */}
            <div className="bg-white border border-[#E8E3D9] rounded-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`${headingFont.className} text-lg text-[#333333] mb-1`}>Absorption Forecast</h3>
                  <p className="text-sm text-[#777777]">Projected lease-up velocity by floor plan type with detailed financial modeling</p>
                </div>
                <BarChart className="text-[#E57161] h-6 w-6" />
              </div>
              
              <div className="h-[300px] relative bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                {/* Chart Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-xs text-[#555555]">Pre-Leasing</div>
                    <div className="text-xs text-[#555555]">90 Days</div>
                    <div className="text-xs text-[#555555]">180 Days</div>
                    <div className="text-xs text-[#555555]">270 Days</div>
                  </div>
                  
                  {/* Studio Units - Fastest absorption */}
                  <div className="h-6 w-full bg-[#F8F4EE] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#E57161] w-[85%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">Studio Units - 85% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* 1BR Units */}
                  <div className="h-6 w-full bg-[#F8F4EE] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#E57161] opacity-80 w-[78%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">1BR Units - 78% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* 2BR Units */}
                  <div className="h-6 w-full bg-[#F8F4EE] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#E57161] opacity-70 w-[65%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">2BR Units - 65% Absorbed</span>
                    </div>
                  </div>
                  
                  {/* 3BR Units */}
                  <div className="h-6 w-full bg-[#F8F4EE] rounded-sm mb-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-[#E57161] opacity-60 w-[52%] rounded-sm flex items-center">
                      <span className="text-white text-xs font-medium pl-2">3BR Units - 52% Absorbed</span>
                    </div>
                  </div>
                </div>
                
                {/* Financial Projections */}
                <div className="absolute top-4 right-4 bg-white p-3 rounded-sm border border-[#E8E3D9] w-48">
                  <p className="text-xs font-medium text-[#333333] mb-2">Financial Projections</p>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#777777]">90-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$2.4M</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#777777]">180-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$5.1M</span>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#777777]">270-Day Revenue:</span>
                    <span className="text-[#333333] font-medium">$8.7M</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-[#777777]">
                <p className="flex items-start">
                  <span className="text-[#E57161] mr-2 font-bold">•</span>
                  <span>Standard projections show 12.5 month stabilization period with traditional approach</span>
                </p>
                <p className="flex items-start mt-1">
                  <span className="text-[#E57161] mr-2 font-bold">•</span>
                  <span>Proprietary strategy projects 9–9.5 month stabilization with our recommended approach</span>
                </p>
                <p className="flex items-start mt-1">
                  <span className="text-[#E57161] mr-2 font-bold">•</span>
                  <span>Studio and 1BR configurations projected to absorb 35% faster than larger unit types</span>
                </p>
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
              
              {/* Comprehensive Market Opportunity Analysis */}
              <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    COMPREHENSIVE OPPORTUNITY ANALYSIS
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Our detailed market opportunity analysis examines current market dynamics, projected absorption rates, and target demographic profiles to identify key areas of competitive advantage.
                </p>
                
                <div className="mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Market Insights:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Downtown Phoenix is experiencing a supply-demand imbalance with 2,850 units currently in lease-up and an additional 1,400 units expected to deliver in the next 18 months.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Current absorption rates average 35-45 units per month for comparable properties, with significant variation based on price point, unit mix, and amenity offerings.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Roosevelt Row submarket demonstrates stronger absorption relative to Downtown Core, with 15-20% faster lease-up velocity for comparable properties.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Competitive advantage opportunity identified in advanced technology integration, premium finishing levels, and authentic community programming – areas with limited current market penetration.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}>Target demographic analysis reveals three high-potential segments: Urban Professionals (32-45, $95K+ income), Creative Class (25-38, $75K+ income), and Empty Nesters (52-65, $120K+ income) with specific lifestyle preferences and high propensity to rent.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm">
                  <h4 className={`${headingFont.className} text-sm uppercase mb-2 text-[#333333]`}>Current Market Concessions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Downtown Core</p>
                      <p className="text-sm text-[#777777]">4-8 weeks free on 12-month leases</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 8-15%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Roosevelt Row</p>
                      <p className="text-sm text-[#777777]">4-6 weeks free on 12-month leases</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 6-11%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Midtown</p>
                      <p className="text-sm text-[#777777]">6-8 weeks free on 12-month leases</p>
                      <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 10-16%</p>
                    </div>
                  </div>
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
            
            {/* Detailed SWOT Analysis */}
            <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-12">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
              
              <div className="mb-4">
                <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                  <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                  DETAILED SWOT ANALYSIS
                </h3>
              </div>
              
              <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                Our comprehensive SWOT analysis includes detailed assessment of all competitive properties, market conditions, and strategic positioning opportunities.
              </p>
              
              <div className="mb-6">
                <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Strengths - Expanded Analysis:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Prime Location:</span> SOL Modern's position in the heart of Roosevelt Row provides exceptional access to the arts district, dining, and cultural amenities, with walkability scores 22% higher than competitive set average.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Newest Delivery:</span> As the newest property delivering in 2025, SOL Modern features the most current design trends, technology infrastructure, and energy efficiency systems, contrasting with properties averaging 3.5 years since delivery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Premium Finishes:</span> Superior unit finishes and amenity offerings position SOL Modern at the top tier of the market, with distinction in sound insulation and smart home technology features.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Weaknesses - Risk Mitigation Strategies:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Elevated Vacancy:</span> Counteract market vacancy rates with pre-leasing incentives structured for early signings, targeting 15% pre-leased before opening with progressive incentive tiers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">New Supply:</span> Differentiate from competing new supply through experience-focused positioning, amenity programming, and targeted marketing that highlights distinctive features.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Concession Environment:</span> Develop alternative incentive structures focused on added value rather than rent reduction, including technology packages, premium services, and membership benefits.</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Opportunities - Strategic Approach:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Remote Work Demand:</span> Capitalize with dedicated workspaces, enhanced technology infrastructure, and programming for remote professionals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Arts Integration:</span> Establish artist residency program, rotating exhibitions, and cultural events to create authentic connection to Roosevelt Row identity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Experience Design:</span> Implement distinctive community programming and resident services compared to competitors' limited offerings.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Threats - Contingency Planning:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Continued Oversupply:</span> Develop tiered pricing strategy with flexibility to adjust to market conditions while preserving premium positioning.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Concession Escalation:</span> Create multi-phase contingency plans for increasing concessions that maintain relative position against competitive set.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Economic Uncertainty:</span> Establish marketing flexibility with multiple campaign options for different economic scenarios.</span>
                    </li>
                  </ul>
                </div>
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
              
              {/* Detailed Implementation Blueprint */}
              <div className="p-8 bg-white border border-[#E8E3D9] rounded-sm relative overflow-hidden mt-8">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#E57161] opacity-5"></div>
                
                <div className="mb-4">
                  <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
                    <ArrowRight className="h-4 w-4 mr-2 text-[#E57161]" />
                    COMPLETE EXECUTION BLUEPRINT
                  </h3>
                </div>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl mb-6`}>
                  Our detailed implementation strategy provides a complete roadmap with staffing plans, timelines, and projected ROI metrics for each strategic initiative.
                </p>
                
                <div className="mb-8">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-4 text-[#555555]`}>Three-Phase Implementation Approach:</h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#FCFAF5] p-4 border border-[#E8E3D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F8F0EA] flex items-center justify-center mb-3">
                        <span className="text-[#E57161] text-sm font-bold">1</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>PRE-LAUNCH PHASE</h6>
                      <p className="text-xs text-[#777777] mb-1">6 months pre-opening</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Establish premium brand identity across all touchpoints</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Launch digital presence with distinctive content strategy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Develop strategic local partnerships for resident benefits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Design pre-leasing incentive structure with early-bird benefits</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#FCFAF5] p-4 border border-[#E8E3D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F8F0EA] flex items-center justify-center mb-3">
                        <span className="text-[#E57161] text-sm font-bold">2</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>LAUNCH PHASE</h6>
                      <p className="text-xs text-[#777777] mb-1">Opening to 6 months</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Implement premium service model with hospitality-trained staff</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Execute high-visibility marketing campaign with digital focus</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Launch signature community events and programming</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Activate artist residency program with public installations</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#FCFAF5] p-4 border border-[#E8E3D9] rounded-sm">
                      <div className="w-8 h-8 rounded-full bg-[#F8F0EA] flex items-center justify-center mb-3">
                        <span className="text-[#E57161] text-sm font-bold">3</span>
                      </div>
                      <h6 className={`${headingFont.className} text-sm mb-2 text-[#333333]`}>STABILIZATION PHASE</h6>
                      <p className="text-xs text-[#777777] mb-1">6-12 months post-opening</p>
                      <ul className="space-y-1.5 mt-3">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Transition to targeted marketing for remaining unit types</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Optimize pricing strategy based on absorption analytics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Implement resident retention program with loyalty benefits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-xs text-[#777777]">Initiate premium service add-ons for ancillary revenue</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FCFAF5] p-5 border border-[#E8E3D9] rounded-sm mb-6">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Proprietary Service Model</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="text-sm font-medium text-[#333333] mb-2">Key Service Components</h6>
                      <ul className="space-y-1.5">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Resident Experience Team with hospitality training</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">4-hour service response guarantee for all requests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">White-glove move-in experience with welcome gifts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Resident mobile app with premium service access</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium text-[#333333] mb-2">Performance Metrics</h6>
                      <ul className="space-y-1.5">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">90% resident satisfaction score target</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Under 5% service standard failure rate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">75% renewal rate for first-term residents</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-1.5 text-xs">•</span>
                          <span className="text-sm text-[#777777]">4.8/5.0 average rating across review platforms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#FCFAF5] p-5 border border-[#E8E3D9] rounded-sm">
                  <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Financial Projections</h5>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="bg-white">
                          <th className="text-xs font-medium text-[#333333] p-2 text-left border-b border-[#E8E3D9]">Metric</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-center border-b border-[#E8E3D9]">Standard Approach</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-center border-b border-[#E8E3D9]">Recommended Strategy</th>
                          <th className="text-xs font-medium text-[#333333] p-2 text-right border-b border-[#E8E3D9]">Improvement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E8E3D9]">Stabilization Timeline</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">12.5 months</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">9-9.5 months</td>
                          <td className="text-xs text-[#E57161] font-medium p-2 text-right border-b border-[#E8E3D9]">~25% faster</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E8E3D9]">Concession Value</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">6-8 weeks free</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">4-6 weeks free</td>
                          <td className="text-xs text-[#E57161] font-medium p-2 text-right border-b border-[#E8E3D9]">~30% savings</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left border-b border-[#E8E3D9]">Year 1 Revenue</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">$14.2M</td>
                          <td className="text-xs text-[#777777] p-2 text-center border-b border-[#E8E3D9]">$16.8M</td>
                          <td className="text-xs text-[#E57161] font-medium p-2 text-right border-b border-[#E8E3D9]">+$2.6M (+18.3%)</td>
                        </tr>
                        <tr>
                          <td className="text-xs text-[#333333] p-2 text-left">Renewal Rate</td>
                          <td className="text-xs text-[#777777] p-2 text-center">55-60%</td>
                          <td className="text-xs text-[#777777] p-2 text-center">70-75%</td>
                          <td className="text-xs text-[#E57161] font-medium p-2 text-right">+15% higher</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}