"use client"

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Montserrat } from "next/font/google";

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
        <main className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-[#333333]">Competitive Landscape Analysis</h1>
          
          <div className="bg-[#FCFAF5] border-l-4 border-[#333333] p-6 mb-8">
            <p className="text-lg font-medium">
              SOL Modern will enter a market with 7 primary competitors within a 1.5-mile radius. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities.
            </p>
          </div>
          
          <section className="py-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#333333]">Competitive Set Overview</h2>
            
            <div className="p-6 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm">
              <p className="mb-4 text-lg text-[#333333]">
                This analysis features a comprehensive competitive set of 7 properties within a 1.5-mile radius, including property specifications, performance metrics, and strategic analyses.
              </p>
              
              <p className="text-[#777777]">
                The full competitive landscape analysis is available in the premium version of this report.
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}