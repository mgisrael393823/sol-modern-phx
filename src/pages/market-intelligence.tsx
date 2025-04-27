
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { BarChart, LineChart } from "lucide-react";

export default function MarketIntelligence() {
  return (
    <>
      <Head>
        <title>Market Intelligence | SOL Modern</title>
        <meta name="description" content="Market Intelligence for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Market Intelligence</h1>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
              <p className="text-gray-700 mb-6">
                The Midtown submarket continues to demonstrate resilience and growth potential despite broader economic headwinds. Key indicators point to sustained demand for premium multifamily housing, with particular strength in the urban core locations that offer walkability and proximity to employment centers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="text-sm text-gray-500 uppercase">Submarket Occupancy</p>
                  <p className="text-3xl font-bold">94.2%</p>
                  <p className="text-sm text-gray-500">+1.2% Year-over-Year</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="text-sm text-gray-500 uppercase">Avg. Effective Rent</p>
                  <p className="text-3xl font-bold">$2.68/SF</p>
                  <p className="text-sm text-gray-500">+3.8% Year-over-Year</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="text-sm text-gray-500 uppercase">Absorption Rate</p>
                  <p className="text-3xl font-bold">22 Units/Mo</p>
                  <p className="text-sm text-gray-500">For New Deliveries</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-64 mb-4">
                <div className="text-center">
                  <LineChart size={48} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Rent Growth Trends Chart</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Demographic Analysis</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Target Renter Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-medium mb-2">Primary Demographic</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Young professionals (28-42)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Income range: $85,000-$150,000</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Tech, healthcare, and finance sectors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Value walkability and urban amenities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-5">
                    <h4 className="font-medium mb-2">Secondary Demographic</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Empty nesters (52-65)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Income range: $120,000+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Downsizing from suburban homes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Prioritize security and premium finishes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-center h-64 mb-4">
                <div className="text-center">
                  <BarChart size={48} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-gray-500">Income Distribution Chart</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Supply Analysis</h2>
              
              <div className="bg-gray-50 border-l-4 border-gray-300 p-5 mb-6">
                <h3 className="font-medium text-lg mb-2">Pipeline Overview</h3>
                <p className="text-gray-700">
                  The submarket has 1,850 units under construction with expected delivery over the next 24 months. SOL Modern's delivery timing positions it advantageously between major competitive deliveries.
                </p>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Project</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Units</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Delivery</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">The Emerson</td>
                      <td className="border border-gray-200 px-4 py-3">320</td>
                      <td className="border border-gray-200 px-4 py-3">Q2 2023</td>
                      <td className="border border-gray-200 px-4 py-3">0.8 miles</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Midtown Heights</td>
                      <td className="border border-gray-200 px-4 py-3">275</td>
                      <td className="border border-gray-200 px-4 py-3">Q4 2023</td>
                      <td className="border border-gray-200 px-4 py-3">1.2 miles</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">The Parker</td>
                      <td className="border border-gray-200 px-4 py-3">410</td>
                      <td className="border border-gray-200 px-4 py-3">Q1 2024</td>
                      <td className="border border-gray-200 px-4 py-3">0.5 miles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Demand Drivers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-medium text-lg mb-3">Employment Growth</h3>
                  <p className="text-gray-700 mb-3">
                    The submarket benefits from proximity to major employment centers with projected job growth of 3.2% annually over the next three years.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Tech sector expansion adding 5,200+ jobs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Healthcare campus expansion (0.4 miles)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Financial services hub relocation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">Lifestyle Amenities</h3>
                  <p className="text-gray-700 mb-3">
                    The neighborhood has experienced significant retail and dining growth, enhancing its appeal to target demographics.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>12 new restaurants within 0.5 miles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Expanded public transit options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>New urban park and cultural center</span>
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
