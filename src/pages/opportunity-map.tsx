import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Target, TrendingUp, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { GatedContent } from "@/components/GatedContent/GatedContent";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function OpportunityMap() {
  return (
    <>
      <Head>
        <title>Opportunity Map | SOL Modern</title>
        <meta name="description" content="Opportunity Map for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Opportunity Map</Heading>
          
          <HighlightBox>
            <p className="body-text-lg">
              This opportunity map identifies key strategic advantages and actionable opportunities to maximize SOL Modern's market position, lease-up velocity, and revenue performance.
            </p>
          </HighlightBox>
          
          <GatedContent 
            title="Opportunity Map" 
            teaser="Our detailed opportunity analysis has identified multiple areas for strategic advantage, with specific implementation plans, ROI projections, and competitive positioning tactics for each opportunity area."
          >
            <div className="space-y-10">
              <section className="section">
                <Heading level={2} className="mb-6">Primary Opportunity Areas</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="content-box-light flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="text-[#777777]" size={24} />
                        <Heading level={3} className="mb-0">Premium Positioning</Heading>
                      </div>
                      <p className="body-text mb-4">
                        SOL Modern's superior finishes and amenities create an opportunity to establish a premium position in the market with corresponding pricing.
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="section-title mb-3">Key Actions</h4>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Develop premium brand identity across all touchpoints</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Create model units that showcase premium finishes</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Implement tiered pricing strategy for premium views/floors</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="content-box-light flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="text-[#777777]" size={24} />
                        <Heading level={3} className="mb-0">Demand Timing</Heading>
                      </div>
                      <p className="body-text mb-4">
                        Market analysis shows peak leasing season aligns with SOL Modern's delivery timeline, creating opportunity for accelerated lease-up.
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="section-title mb-3">Key Actions</h4>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Launch pre-leasing campaign 90 days before delivery</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Implement early-bird incentives for pre-leasing</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Schedule high-impact marketing during peak search periods</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="content-box-light flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="text-[#777777]" size={24} />
                        <Heading level={3} className="mb-0">Experience Design</Heading>
                      </div>
                      <p className="body-text mb-4">
                        Opportunity to create a distinctive resident experience through curated services, events, and community programming.
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="section-title mb-3">Key Actions</h4>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Develop signature community events calendar</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Create resident mobile app with premium services</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Establish partnerships with local businesses for resident perks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="content-box-light flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="text-[#777777]" size={24} />
                        <Heading level={3} className="mb-0">Target Demographics</Heading>
                      </div>
                      <p className="body-text mb-4">
                        Data analysis reveals key demographic segments with high propensity for urban luxury living and strong financial qualifications.
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="section-title mb-3">Key Actions</h4>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Develop targeted marketing campaigns for key segments</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Create floor plan mix optimized for target demographics</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Train leasing staff on demographic-specific selling points</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="section">
                <Heading level={2} className="mb-6">Implementation Timeline</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="content-box bg-[#333333] text-white">
                    <Heading level={3} className="text-white mb-3">Phase 1: Preparation</Heading>
                    <p className="text-white text-sm mb-4">6-9 months pre-opening</p>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Finalize brand positioning strategy</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Develop marketing materials and website</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Establish competitive monitoring system</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Begin targeted audience building</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="content-box bg-[#333333] text-white">
                    <Heading level={3} className="text-white mb-3">Phase 2: Launch</Heading>
                    <p className="text-white text-sm mb-4">3 months pre-opening to opening</p>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Activate pre-leasing campaign</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Implement early-bird incentives</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Begin community partnerships</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Train leasing team on selling strategy</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="content-box bg-[#333333] text-white">
                    <Heading level={3} className="text-white mb-3">Phase 3: Execution</Heading>
                    <p className="text-white text-sm mb-4">Opening to stabilization</p>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Implement tiered pricing strategy</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Launch resident experience program</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Monitor and adjust marketing approach</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="text-[#E57161] mr-2">•</span>
                        <span className="text-white text-sm">Begin renewal strategy planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <HighlightBox variant="secondary" className="mt-8">
                <p className="body-text">
                  This opportunity map provides a strategic framework for maximizing SOL Modern's market position and financial performance through targeted initiatives in four key opportunity areas, with a phased implementation approach to ensure proper resource allocation and timing.
                </p>
              </HighlightBox>
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}