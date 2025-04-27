
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Building, Users, Zap, Award } from "lucide-react";

export default function CompetitiveLandscape() {
  return (
    <>
      <Head>
        <title>Competitive Landscape Analysis | SOL Modern</title>
        <meta name="description" content="Competitive Landscape Analysis for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Competitive Landscape Analysis</h1>
          
          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-8">
            <p className="text-lg font-medium">
              SOL Modern will enter a market with 7 primary competitors within a 1.5-mile radius. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities.
            </p>
          </div>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Competitive Set Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Building className="text-gray-400" size={24} />
                    <h3 className="font-medium text-lg">Primary Competitors</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">The Emerson</span>
                        <p className="text-sm text-gray-500">320 units, built 2020, 0.8 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Midtown Heights</span>
                        <p className="text-sm text-gray-500">275 units, built 2021, 1.2 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">The Parker</span>
                        <p className="text-sm text-gray-500">410 units, built 2019, 0.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Axis Residences</span>
                        <p className="text-sm text-gray-500">290 units, built 2018, 1.1 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-gray-400" size={24} />
                    <h3 className="font-medium text-lg">Secondary Competitors</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">The Edison</span>
                        <p className="text-sm text-gray-500">185 units, built 2017, 1.4 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">Lofts at Central</span>
                        <p className="text-sm text-gray-500">210 units, built 2016, 1.5 miles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <div>
                        <span className="font-medium">The Monroe</span>
                        <p className="text-sm text-gray-500">240 units, built 2018, 1.3 miles</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Property</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Occupancy</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Avg. Rent/SF</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Concessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">The Emerson</td>
                      <td className="border border-gray-200 px-4 py-3">95%</td>
                      <td className="border border-gray-200 px-4 py-3">$2.72</td>
                      <td className="border border-gray-200 px-4 py-3">None</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Midtown Heights</td>
                      <td className="border border-gray-200 px-4 py-3">92%</td>
                      <td className="border border-gray-200 px-4 py-3">$2.65</td>
                      <td className="border border-gray-200 px-4 py-3">1 month free (13-month)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">The Parker</td>
                      <td className="border border-gray-200 px-4 py-3">96%</td>
                      <td className="border border-gray-200 px-4 py-3">$2.80</td>
                      <td className="border border-gray-200 px-4 py-3">None</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Axis Residences</td>
                      <td className="border border-gray-200 px-4 py-3">94%</td>
                      <td className="border border-gray-200 px-4 py-3">$2.58</td>
                      <td className="border border-gray-200 px-4 py-3">$500 deposit credit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Competitive Positioning Analysis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="text-gray-400" size={24} />
                    <h3 className="font-medium text-lg">SOL Modern Advantages</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Superior finishes (quartz, hardwood, designer fixtures)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Larger average unit sizes (+75 SF vs. competitors)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Premium amenity package (rooftop lounge, fitness center)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Walkability score 92 (highest in submarket)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Smart home technology in all units</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-gray-400" size={24} />
                    <h3 className="font-medium text-lg">Competitive Gaps</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Limited covered parking compared to The Parker</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Smaller pool area than Midtown Heights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>No pet spa services (offered at The Emerson)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Fewer 3BR options than Axis Residences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Amenity Comparison</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Amenity</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">SOL Modern</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">The Emerson</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">The Parker</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Midtown Heights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Rooftop Lounge</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Pool</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Fitness Center</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Co-working Space</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Pet Spa</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Smart Home Tech</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Competitive Positioning Strategy</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-lg mb-3">Premium Positioning Recommendation</h3>
                <p className="text-gray-700 mb-4">
                  Based on competitive analysis, SOL Modern should position as the premium option in the submarket, emphasizing superior finishes, technology integration, and lifestyle amenities that appeal to the target demographic.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Finishes & Design</h4>
                    <p className="text-sm text-gray-600">Emphasize European-inspired design and premium materials as key differentiators</p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Technology</h4>
                    <p className="text-sm text-gray-600">Highlight smart home features and tech-forward amenities unavailable at most competitors</p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-sm text-gray-600">Leverage superior walkability score and proximity to premium retail and dining</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
