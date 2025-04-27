
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";

export default function ExecutiveSummary() {
  return (
    <>
      <Head>
        <title>Executive Summary | SOL Modern</title>
        <meta name="description" content="Executive Summary of the SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Executive Summary</h1>
          
          <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-8">
            <p className="text-lg font-medium">
              SOL Modern enters a competitive multifamily market with distinct advantages in design, amenities, and location. This blueprint outlines a strategic approach to achieve optimal lease-up velocity and revenue performance.
            </p>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Market Findings</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-1 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-lg">Demand Indicators</h3>
                    <p className="text-gray-700">
                      The target submarket shows strong absorption rates with 94% average occupancy across competitive set. Demographic trends favor SOL Modern's unit mix and amenity offerings.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-1 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-lg">Competitive Position</h3>
                    <p className="text-gray-700">
                      SOL Modern offers superior finishes and amenities compared to 80% of the competitive set, positioning it in the premium tier of the market.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-1 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-lg">Pricing Opportunity</h3>
                    <p className="text-gray-700">
                      Analysis indicates potential for 8-12% premium over market averages for comparable units, with strongest demand projected for 1BR and 2BR floor plans.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Strategic Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Phased Pricing Strategy</h3>
                  <p className="text-gray-700">
                    Implement tiered pricing structure across lease-up phases to balance velocity and revenue optimization.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Targeted Marketing</h3>
                  <p className="text-gray-700">
                    Focus on digital-first approach with emphasis on lifestyle and community aspects that differentiate SOL Modern.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Amenity Activation</h3>
                  <p className="text-gray-700">
                    Strategically showcase signature amenities through curated events and digital content to drive interest.
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Concession Strategy</h3>
                  <p className="text-gray-700">
                    Limited, strategic concessions focused on lease term rather than rate reduction to maintain long-term value.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Projected Performance</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Metric</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Target</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Stabilization</td>
                      <td className="border border-gray-200 px-4 py-3">93% Occupancy</td>
                      <td className="border border-gray-200 px-4 py-3">10-12 Months</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Lease-Up Velocity</td>
                      <td className="border border-gray-200 px-4 py-3">18-22 Units/Month</td>
                      <td className="border border-gray-200 px-4 py-3">Months 1-6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Revenue Premium</td>
                      <td className="border border-gray-200 px-4 py-3">8-12% Above Market</td>
                      <td className="border border-gray-200 px-4 py-3">At Stabilization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
