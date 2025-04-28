
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function ExecutiveSummary() {
  return (
    <>
      <Head>
        <title>Executive Summary | SOL Modern</title>
        <meta name="description" content="Executive Summary of the SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h4 className={`${headingFont.className} text-sm uppercase tracking-widest text-[#E57161] font-medium mb-1`}>STRATEGIC BLUEPRINT</h4>
            <div className="h-0.5 w-32 bg-[#E57161] mb-6"></div>
            <Heading level={1}>Executive Summary</Heading>
          </div>
          
          <HighlightBox>
            <p className={`${bodyFont.className} text-lg text-[#333333]`}>
              SOL Modern is poised to enter the Downtown Phoenix multifamily market at a pivotal time. Located in the vibrant Roosevelt Row submarket at 50 E Fillmore St, this 747-unit development will be competing in a market characterized by high construction activity, elevated vacancy rates, and strong but uneven absorption.
            </p>
          </HighlightBox>
          
          <div className="space-y-12">
            <section>
              <Heading level={2}>SWOT Analysis</Heading>
              <p className={`${bodyFont.className} mb-6 text-[#777777]`}>The following analysis identifies SOL Modern's position within the competitive landscape of Roosevelt Row:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#E57161] opacity-5"></div>
                  <Heading level={3}>Strengths</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-6 space-y-2 text-[#777777]`}>
                    <li>Prime location in the arts-centric Roosevelt Row district</li>
                    <li>Newest property in the submarket (2025 delivery)</li>
                    <li>Larger unit count (747) allowing for more extensive amenities</li>
                    <li>Opportunity to incorporate latest design trends and technology</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm">
                  <Heading level={3}>Weaknesses</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-6 space-y-2 text-[#777777]`}>
                    <li>Entering a market with elevated vacancy rates</li>
                    <li>Significant new supply in the immediate area</li>
                    <li>Higher price point ($1,965 to $4,645) in a price-sensitive market</li>
                    <li>Unproven property with no established reputation</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm">
                  <Heading level={3}>Opportunities</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-6 space-y-2 text-[#777777]`}>
                    <li>Growing demand for remote work-friendly apartments</li>
                    <li>Authentic integration with the arts community</li>
                    <li>Enhanced sound insulation to address common noise complaints</li>
                    <li>Wellness-focused amenities to differentiate from competitors</li>
                    <li>Service-oriented management to address common pain points</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] p-6 rounded-sm relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#E57161] opacity-5"></div>
                  <Heading level={3}>Threats</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-6 space-y-2 text-[#777777]`}>
                    <li>Continued oversupply in the Downtown Phoenix market</li>
                    <li>Potential for further rent concessions from competitors</li>
                    <li>Economic uncertainty affecting luxury rental demand</li>
                    <li>Competition from newer suburban developments</li>
                    <li>Rising construction costs affecting project delivery</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <Heading level={2}>Strategic Recommendations</Heading>
              
              <p className={`${bodyFont.className} mb-6 text-[#777777]`}>Based on our analysis, we recommend SOL Modern pursue the following strategic opportunities to differentiate in the market:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors">
                  <Heading level={4} className="mb-3">Enhanced Living Environments</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#777777]`}>
                    <li>Superior sound insulation to address the most common complaint</li>
                    <li>Premium kitchen package exceeding competitor offerings</li>
                    <li>Comprehensive technology integration as standard</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#E57161] opacity-10"></div>
                  <Heading level={4} className="mb-3">Lifestyle-Centric Amenities</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#777777]`}>
                    <li>Wellness-focused facilities beyond standard fitness centers</li>
                    <li>Best-in-class work-from-home spaces reflecting remote work trends</li>
                    <li>Distinctive social spaces fostering community</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors">
                  <Heading level={4} className="mb-3">Service Excellence</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#777777]`}>
                    <li>Hospitality-inspired management model with guaranteed response times</li>
                    <li>Comprehensive lifestyle services package</li>
                    <li>Transparent billing practices with no hidden fees</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-[#E8E3D9] rounded-sm p-6 hover:border-[#E57161] transition-colors relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#E57161] opacity-10"></div>
                  <Heading level={4} className="mb-3">Authentic Community Connection</Heading>
                  <ul className={`${bodyFont.className} list-disc pl-5 space-y-1.5 text-sm text-[#777777]`}>
                    <li>Integration with Roosevelt Row arts community</li>
                    <li>Artist-in-residence program and gallery space</li>
                    <li>Targeted digital presence highlighting neighborhood connection</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <Heading level={2}>Property Overview</Heading>
              
              <div className="overflow-x-auto mb-6 bg-white border border-[#E8E3D9] rounded-sm p-6">
                <table className="min-w-full border-collapse">
                  <tbody className="divide-y divide-[#E8E3D9]">
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Location</td>
                      <td className="py-3 text-[#777777]">50 E Fillmore St, Phoenix (Roosevelt Row submarket)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Unit Mix</td>
                      <td className="py-3 text-[#777777]">Studio to 3-bedroom units</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Rental Rates</td>
                      <td className="py-3 text-[#777777]">$1,965 to $4,645</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Status</td>
                      <td className="py-3 text-[#777777]">Under construction</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Units</td>
                      <td className="py-3 text-[#777777]">747</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Expected Delivery</td>
                      <td className="py-3 text-[#777777]">2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 font-medium text-[#333333]">Developer</td>
                      <td className="py-3 text-[#777777]">bKL Architecture, LLC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <HighlightBox variant="secondary">
                <p className={`${bodyFont.className} text-sm text-[#777777]`}>
                  This executive summary provides an overview of the complete strategic blueprint. Navigate through the sections on the left to explore detailed market intelligence, competitive analysis, and our recommended strategies for SOL Modern's successful lease-up.
                </p>
              </HighlightBox>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
