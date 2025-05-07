
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
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Parker</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>410 units, built 2019, 0.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
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
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2">•</span>
                      <div>
                        <span className={`${bodyFont.className} font-medium text-[#333333]`}>The Monroe</span>
                        <p className={`${bodyFont.className} text-sm text-[#777777]`}>240 units, built 2018, 1.3 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Comprehensive Competitive Analysis */}
              <div className="mt-8 mb-12">
                <h3 className={`${headingFont.className} text-xl uppercase tracking-wide text-[#333333] mb-6`}>
                  Competitive Matrix Analysis
                </h3>
                
                <p className={`${bodyFont.className} text-[#777777] leading-relaxed mb-6`}>
                  This comparative matrix highlights key metrics across the competitive set, revealing strategic positioning opportunities for SOL Modern based on amenities, rents, absorption rates, and resident demographics.
                </p>
                
                {/* Competitive Matrix Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full bg-white border border-[#E8E3D9] rounded-sm">
                    <thead>
                      <tr className="bg-[#FCFAF5] border-b border-[#E8E3D9]">
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Property</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Year Built</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Units</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Avg. Rent</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Occupancy</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Concessions</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider">Amenity Rating</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E3D9]">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Altura</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2019</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">256</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$2,225</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">94%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">1 week free</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">The Stewart</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2018</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">312</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$2,485</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">92%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2 weeks free</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★★★</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Roosevelt Point</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2013</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">326</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$1,975</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">96%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">None</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★☆☆</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Linear</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2021</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">220</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$2,350</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">85%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">6 weeks free</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★★☆</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">ILuminate</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2022</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">179</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$2,195</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">81%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">8 weeks free</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#FCFAF5]">
                        <td className="px-4 py-3 text-sm font-medium text-[#333333]">Moontower</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">2020</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">278</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">$2,165</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">89%</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">4 weeks free</td>
                        <td className="px-4 py-3 text-sm text-[#777777]">★★★★☆</td>
                      </tr>
                      <tr className="bg-[#F8F0EA]">
                        <td className="px-4 py-3 text-sm font-medium text-[#E57161]">SOL Modern (Target)</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">2025</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">747</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">$2,450</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">Lease-up</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">4-6 weeks</td>
                        <td className="px-4 py-3 text-sm text-[#E57161]">★★★★★</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className={`${headingFont.className} text-lg text-[#333333] mb-4`}>Key Matrix Insights</h4>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>The Roosevelt Row submarket demonstrates higher occupancy rates (92-96%) for stabilized properties versus Downtown Core (85-92%).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>Concession trends are directly correlated with property age and lease-up status, with newer properties offering 6-8 weeks free versus 0-2 weeks at stabilized properties.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>SOL Modern's target rents position the property at the upper-middle of the competitive set, justified by superior amenity offerings and newer construction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E57161] mr-2 font-bold">•</span>
                    <span className={`${bodyFont.className} text-[#777777]`}>Only The Stewart offers a comparable premium amenity package, indicating opportunity for SOL Modern to establish distinctive positioning through enhanced resident services and experiential amenities.</span>
                  </li>
                </ul>
                
                <div className="border-t-2 border-[#E8E3D9] pt-8 mb-8">
                  <h3 className={`${headingFont.className} text-xl uppercase tracking-wide text-[#333333] mb-6`}>
                    Detailed Competitor Analyses
                  </h3>
                  
                  <p className={`${bodyFont.className} text-[#777777] leading-relaxed mb-8`}>
                    The following analyses provide property-specific insights for the primary competitors in SOL Modern's competitive set, with recommendations for strategic positioning and competitive response.
                  </p>
                </div>
                
                {/* Altura Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">1</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Altura</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">700 N 3rd Ave, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2019 • 256 units</p>
                      <p className="text-sm text-[#777777]">0.7 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $1,850-2,050</p>
                      <p className="text-sm text-[#777777]">1BR: $2,100-2,425</p>
                      <p className="text-sm text-[#777777]">2BR: $2,750-3,350</p>
                      <p className="text-sm text-[#777777]">94% occupied • 1 week free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 33</p>
                      <p className="text-sm text-[#777777]">Income: $95K-125K</p>
                      <p className="text-sm text-[#777777]">38% work from home</p>
                      <p className="text-sm text-[#777777]">65% single professionals</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Private rooftop deck with panoramic mountain views</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Strong brand presence on social media with 4.8/5.0 avg rating</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Well-established resident referral program driving 22% of new leases</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited work-from-home amenities with poor WiFi in common areas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Noise complaints between units (45% of negative reviews)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited package management system frequently overwhelmed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Emphasize SOL Modern's superior sound insulation technology in all marketing materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Highlight dedicated work-from-home amenities with enterprise-grade WiFi throughout</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Develop a competitive resident referral program with superior incentives</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* The Stewart Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">2</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>The Stewart</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">800 N Central Ave, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2018 • 312 units</p>
                      <p className="text-sm text-[#777777]">0.9 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $2,050-2,275</p>
                      <p className="text-sm text-[#777777]">1BR: $2,295-2,795</p>
                      <p className="text-sm text-[#777777]">2BR: $3,150-4,150</p>
                      <p className="text-sm text-[#777777]">92% occupied • 2 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 37</p>
                      <p className="text-sm text-[#777777]">Income: $110K-150K</p>
                      <p className="text-sm text-[#777777]">32% work from home</p>
                      <p className="text-sm text-[#777777]">40% couples, 60% singles</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Premium finishes with quartz countertops and designer fixtures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Full-service concierge with package and dry cleaning service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Robust social programming with 2-3 weekly resident events</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited unit technology integration (no smart home features)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Pool area often overcrowded on weekends with limited seating</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Premium pricing with limited value-adds compared to newer properties</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Position SOL Modern with comparable premium finishes plus integrated smart home technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Develop tiered services model that matches concierge quality with additional tech convenience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Design pool and outdoor areas with significantly more capacity and private spaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Roosevelt Point Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">3</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Roosevelt Point</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">888 N 4th St, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2013 • 326 units</p>
                      <p className="text-sm text-[#777777]">0.3 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $1,675-1,895</p>
                      <p className="text-sm text-[#777777]">1BR: $1,925-2,195</p>
                      <p className="text-sm text-[#777777]">2BR: $2,350-2,695</p>
                      <p className="text-sm text-[#777777]">96% occupied • No concessions</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 29</p>
                      <p className="text-sm text-[#777777]">Income: $75K-95K</p>
                      <p className="text-sm text-[#777777]">45% work from home</p>
                      <p className="text-sm text-[#777777]">70% singles, 25% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Prime Roosevelt Row location with highest walkability score (92)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Strong local artist partnerships with rotating gallery in lobby</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Value pricing with no concessions needed due to high demand</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Aging interiors with dated cabinetry and appliances</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited amenity offerings compared to newer properties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Basic service model with no concierge or premium services</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Compete on modern finishes and amenities rather than pure location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Develop more robust arts partnerships to match Roosevelt Point's community integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Target higher-income demographics seeking premium experience vs value pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Linear Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">4</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Linear</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">295 E Roosevelt St, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2021 • 220 units</p>
                      <p className="text-sm text-[#777777]">0.5 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $1,950-2,150</p>
                      <p className="text-sm text-[#777777]">1BR: $2,275-2,675</p>
                      <p className="text-sm text-[#777777]">2BR: $2,850-3,450</p>
                      <p className="text-sm text-[#777777]">85% occupied • 6 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 32</p>
                      <p className="text-sm text-[#777777]">Income: $95K-125K</p>
                      <p className="text-sm text-[#777777]">52% work from home</p>
                      <p className="text-sm text-[#777777]">55% singles, 35% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Modern tech integration with smart home features in all units</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Excellent co-working spaces with private conference rooms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Design-forward interiors with custom finishes and lighting</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Struggling to achieve stabilized occupancy despite heavy concessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited outdoor amenity spaces with undersized pool area</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Resident complaints about management responsiveness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Match or exceed technology offerings while emphasizing superior service model</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Develop significantly larger outdoor amenity spaces with multiple activity zones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Position in similar design-forward aesthetic with enhanced emphasis on quality</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* ILuminate Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">5</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>ILuminate</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">290 E Roosevelt St, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2022 • 179 units</p>
                      <p className="text-sm text-[#777777]">0.6 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $1,875-2,095</p>
                      <p className="text-sm text-[#777777]">1BR: $2,195-2,450</p>
                      <p className="text-sm text-[#777777]">2BR: $2,695-3,250</p>
                      <p className="text-sm text-[#777777]">81% occupied • 8 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 31</p>
                      <p className="text-sm text-[#777777]">Income: $85K-115K</p>
                      <p className="text-sm text-[#777777]">48% work from home</p>
                      <p className="text-sm text-[#777777]">62% singles, 28% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Newest property in Roosevelt Row with modern finishes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Innovative community programming with local business partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Wellness-focused amenities including meditation spaces and yoga studio</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Struggling with lease-up velocity despite heavy concessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited unit sizes with most floorplans under 850 sq ft</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Resident complaints about street noise (poor sound insulation)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Emphasize SOL Modern's superior sound insulation technology as a key differentiator</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Highlight larger unit sizes and thoughtful layouts for work-from-home functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Match wellness offerings while expanding with additional premium amenities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Moontower Analysis */}
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#F8F0EA] rounded-full flex items-center justify-center">
                      <span className="text-[#E57161] font-semibold">6</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#333333]`}>Moontower</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Location & Profile</p>
                      <p className="text-sm text-[#777777]">525 N 1st St, Phoenix, AZ</p>
                      <p className="text-sm text-[#777777]">Built 2020 • 278 units</p>
                      <p className="text-sm text-[#777777]">0.8 miles from SOL Modern</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Pricing & Performance</p>
                      <p className="text-sm text-[#777777]">Studio: $1,795-2,025</p>
                      <p className="text-sm text-[#777777]">1BR: $2,095-2,425</p>
                      <p className="text-sm text-[#777777]">2BR: $2,650-3,250</p>
                      <p className="text-sm text-[#777777]">89% occupied • 4 weeks free</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-1">Resident Profile</p>
                      <p className="text-sm text-[#777777]">Median Age: 34</p>
                      <p className="text-sm text-[#777777]">Income: $90K-120K</p>
                      <p className="text-sm text-[#777777]">42% work from home</p>
                      <p className="text-sm text-[#777777]">58% singles, 32% couples</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Strengths</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Exceptional pool deck with resort-style cabanas and fire features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Strong pet amenities including dog park, wash station, and walking service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Tech-forward building with app-controlled access and smart thermostats</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#333333] mb-2">Key Weaknesses</p>
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Kitchen finishes less premium than competing properties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Limited bike storage despite high cyclist resident population</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#E57161] mr-2 text-xs">•</span>
                          <span className="text-sm text-[#777777]">Fitness center equipment frequently out of service/maintenance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-[#FCFAF5] p-4 rounded-sm border border-[#E8E3D9]">
                    <p className="text-sm font-medium text-[#333333] mb-2">Competitive Positioning Recommendations</p>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Develop superior kitchen package with chef-inspired finishes and appliances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Create expanded pet amenities package with premium services and facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#E57161] mr-2 text-xs">•</span>
                        <span className="text-sm text-[#777777]">Design expanded bicycle storage and maintenance facilities to appeal to urban cyclists</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#FCFAF5] p-6 border border-[#E8E3D9] rounded-sm mt-8">
                  <h4 className={`${headingFont.className} text-lg text-[#333333] mb-4`}>Competitive Landscape Summary</h4>
                  
                  <p className={`${bodyFont.className} text-[#777777] mb-4`}>
                    Our competitive analysis reveals significant opportunity for SOL Modern to establish a unique market position through:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Superior sound insulation technology</span> - Addressing the most common resident complaint across all competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Enhanced work-from-home amenities</span> - Capitalizing on the 35-50% of residents working remotely at competitive properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Integrated technology package</span> - Combining the best elements of competitors' tech offerings with additional innovations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Premium service model</span> - Combining high-touch concierge services with digital convenience features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E57161] mr-2 font-bold">•</span>
                      <span className={`${bodyFont.className} text-[#777777]`}><span className="font-medium">Authentic arts district integration</span> - Developing more robust arts programming than any single competitor</span>
                    </li>
                  </ul>
                  
                  <p className={`${bodyFont.className} text-[#777777] mt-4`}>
                    By implementing these strategic differentiators, SOL Modern can command the premium position in the market while achieving accelerated lease-up velocity relative to comparable new deliveries.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
