
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Target, TrendingUp, Lightbulb, Users } from "lucide-react";

export default function OpportunityMap() {
  return (
    <>
      <Head>
        <title>Opportunity Map | SOL Modern</title>
        <meta name="description" content="Opportunity Map for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Opportunity Map</h1>
          
          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-8">
            <p className="text-lg font-medium">
              This opportunity map identifies key strategic advantages and actionable opportunities to maximize SOL Modern's market position, lease-up velocity, and revenue performance.
            </p>
          </div>
          
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Primary Opportunity Areas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-gray-700" size={24} />
                    <h3 className="font-medium text-lg">Premium Positioning</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    SOL Modern's superior finishes and amenities create an opportunity to establish a premium position in the market with corresponding pricing.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-sm uppercase text-gray-500 mb-2">Key Actions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Develop premium brand identity across all touchpoints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Create model units that showcase premium finishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Implement tiered pricing strategy for premium views/floors</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-gray-700" size={24} />
                    <h3 className="font-medium text-lg">Demand Timing</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Market analysis shows peak leasing season aligns with SOL Modern's delivery timeline, creating opportunity for accelerated lease-up.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-sm uppercase text-gray-500 mb-2">Key Actions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Launch pre-leasing campaign 90 days before delivery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Implement early-bird incentives for pre-leasing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Schedule high-impact marketing during peak search periods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="text-gray-700" size={24} />
                    <h3 className="font-medium text-lg">Amenity Differentiation</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    SOL Modern's unique amenity mix provides opportunity to create distinctive lifestyle positioning that resonates with target demographics.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-sm uppercase text-gray-500 mb-2">Key Actions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Create signature programming for rooftop lounge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Develop tech-forward amenity experiences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Partner with local businesses for resident perks</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-gray-700" size={24} />
                    <h3 className="font-medium text-lg">Target Demographic Alignment</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    SOL Modern's design and location perfectly align with the preferences of the primary target demographic of young professionals.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-sm uppercase text-gray-500 mb-2">Key Actions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Develop targeted digital campaigns for key demographics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Create lifestyle content highlighting urban living</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>Partner with employers in target industries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Opportunity Prioritization Matrix</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Opportunity</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Impact</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Effort</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Premium Positioning</td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">P1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Pre-leasing Campaign</td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3">P1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Amenity Programming</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">P2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Corporate Partnerships</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3">P3</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Digital Marketing</td>
                      <td className="border border-gray-200 px-4 py-3">High</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">P1</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Local Partnerships</td>
                      <td className="border border-gray-200 px-4 py-3">Medium</td>
                      <td className="border border-gray-200 px-4 py-3">Low</td>
                      <td className="border border-gray-200 px-4 py-3">P2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Revenue Optimization Opportunities</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-lg mb-3">Tiered Pricing Strategy</h3>
                <p className="text-gray-700 mb-4">
                  Analysis indicates opportunity to implement a tiered pricing structure based on floor, view, and finish level to maximize revenue while maintaining competitive positioning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Premium Tier</h4>
                    <p className="text-sm text-gray-600">Top floors, best views: 10-15% premium over base</p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Standard Tier</h4>
                    <p className="text-sm text-gray-600">Mid-level floors: Base pricing aligned with market</p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2">Value Tier</h4>
                    <p className="text-sm text-gray-600">Lower floors: 5% discount to drive initial velocity</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Lease Term Optimization</h3>
                  <p className="text-gray-700 mb-3">
                    Opportunity to strategically stagger lease expirations to minimize turnover during slow seasons and maximize renewal pricing during peak periods.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Offer incentives for 15-18 month terms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Premium pricing for peak-season move-ins</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Strategic concessions for off-peak leasing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Amenity Monetization</h3>
                  <p className="text-gray-700 mb-3">
                    Select amenities present opportunity for premium fee-based services to generate additional revenue streams.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Premium reserved parking options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Storage space rental program</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>Private event space rental for residents</span>
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
