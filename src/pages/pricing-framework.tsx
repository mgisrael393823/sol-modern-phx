
"use client"

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function PricingFrameworkPage() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - SOL Modern</title>
        <meta name="description" content="Pricing and incentive framework for SOL Modern" />
      </Head>
      
      <Layout>
        <main className="max-w-4xl mx-auto">
          <Heading level={1}>Pricing & Incentive Framework</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              Our strategic pricing model positions SOL Modern to balance competitive market rates with premium value, incorporating an optimized incentive structure to drive lease-up velocity while protecting long-term revenue.
            </p>
          </HighlightBox>
          
          <div className="p-6 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#333333]">Premium Content</h2>
            <p className="mb-4 text-lg text-[#333333]">
              Our pricing framework outlines a strategic approach to base rent positioning, premium allocation, and incentive structure that balances competitive positioning with revenue optimization, tailored specifically to the Roosevelt Row market conditions.
            </p>
            
            <p className="text-[#777777]">
              The complete Pricing & Incentive Framework is available in the premium version of this report.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
