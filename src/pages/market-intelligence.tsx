import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { BarChart, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { StatBox } from "@/components/ui/StatBox";
import { IncomeDistributionChart } from "@/components/ui/IncomeDistributionChart";
import { RentGrowthChart } from "@/components/ui/RentGrowthChart";
import { Montserrat } from "next/font/google";
import { GatedChart } from "@/components/ui/GatedChart";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function MarketIntelligence() {
  return (
    <>
      <Head>
        <title>Market Intelligence | SOL Modern</title>
        <meta name="description" content="Market Intelligence for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Market Intelligence</Heading>
          
          <HighlightBox>
            <p className="body-text-lg">
              The Downtown Phoenix submarket continues to demonstrate resilience and growth potential despite broader economic headwinds. Key indicators point to sustained demand for premium multifamily housing, with particular strength in urban core locations.
            </p>
          </HighlightBox>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Market Overview</Heading>
              
              <div className="flex mb-8 shadow-sm">
                <StatBox
                  label="Submarket Occupancy"
                  value="94.2%"
                  description="+1.2% Year-over-Year"
                />
                
                <StatBox
                  label="Avg. Effective Rent"
                  value="$2.68/SF"
                  description="+3.8% Year-over-Year"
                />
                
                <StatBox
                  label="Absorption Rate"
                  value="22 Units/Mo"
                  description="For New Deliveries"
                />
              </div>
              
              <div className="content-box-light mb-6">
                <Heading level={3} className="mb-3">Key Market Insights</Heading>
                <p className="body-text mb-4">
                  The Downtown Phoenix rental market shows strong fundamentals with continued rent growth despite broader economic pressures. Recent deliveries have achieved stabilization within projected timeframes, indicating healthy absorption capacity.
                </p>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Class A properties maintain 93-95% occupancy despite recent deliveries</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Rent growth continues to outpace metro average by 1.2%</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Downtown/Roosevelt Row premium averages 12-18% over nearby submarkets</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="text-[#777777]" size={24} />
                  <Heading level={3} className="mb-0">Rent Growth Trends</Heading>
                </div>
                <GatedChart 
                  title="Rent Growth Trends" 
                  description="Access detailed quarterly rent growth data for Downtown Phoenix and comparative markets"
                >
                  <RentGrowthChart height="h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demographic Analysis</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Primary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Young professionals (28-42)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $85,000-$150,000</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Tech, healthcare, and finance sectors</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Value walkability and urban amenities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Secondary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Empty nesters (52-65)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $120,000+</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Downsizing from suburban homes</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Prioritize security and premium finishes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="text-[#777777]" size={24} />
                  <Heading level={3} className="mb-0">Income Distribution</Heading>
                </div>
                <GatedChart 
                  title="Income Distribution Analysis" 
                  description="Access comprehensive income distribution data for target renter segments"
                >
                  <IncomeDistributionChart height="h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Supply Analysis</Heading>
              
              <HighlightBox variant="secondary" className="mb-6">
                <Heading level={3} className="mb-2">Pipeline Overview</Heading>
                <p className="body-text">
                  The submarket has 1,850 units under construction with expected delivery over the next 24 months. SOL Modern's delivery timing positions it advantageously between major competitive deliveries.
                </p>
              </HighlightBox>
              
              <div className="mb-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#FCFAF5]">
                      <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Project</th>
                      <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Units</th>
                      <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Delivery</th>
                      <th className="border border-[#E8E3D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Distance</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-[#E8E3D9] px-4 py-3 font-medium">The Emerson</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">320</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">Q2 2023</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">0.8 miles</td>
                    </tr>
                    <tr className="bg-[#FCFAF5]">
                      <td className="border border-[#E8E3D9] px-4 py-3 font-medium">Midtown Heights</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">275</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">Q4 2023</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">1.2 miles</td>
                    </tr>
                    <tr>
                      <td className="border border-[#E8E3D9] px-4 py-3 font-medium">The Parker</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">410</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">Q1 2024</td>
                      <td className="border border-[#E8E3D9] px-4 py-3">0.5 miles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demand Drivers</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-light">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-[#777777]" size={20} />
                    <Heading level={3} className="mb-0">Employment Growth</Heading>
                  </div>
                  <p className="body-text mb-3">
                    The submarket benefits from proximity to major employment centers with projected job growth of 3.2% annually over the next three years.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Tech sector expansion adding 5,200+ jobs</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Healthcare campus expansion (0.4 miles)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Financial services hub relocation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <div className="flex items-center gap-3 mb-3">
                    <PieChart className="text-[#777777]" size={20} />
                    <Heading level={3} className="mb-0">Lifestyle Amenities</Heading>
                  </div>
                  <p className="body-text mb-3">
                    The neighborhood has experienced significant retail and dining growth, enhancing its appeal to target demographics.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">12 new restaurants within 0.5 miles</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Expanded public transit options</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">New urban park and cultural center</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}