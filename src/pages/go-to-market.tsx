"use client"

import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap - SOL Modern</title>
        <meta name="description" content="Go-to-market roadmap for SOL Modern" />
      </Head>
      
      <Layout>
        <main className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-[#333333]">Go-to-Market Roadmap</h1>
          
          <div className="bg-[#FCFAF5] border-l-4 border-[#333333] p-6 mb-8">
            <p className="text-lg font-medium">
              This roadmap outlines the phased implementation strategy for SOL Modern's market entry, with specific timelines, marketing channels, and targeting approaches to achieve optimal lease-up velocity.
            </p>
          </div>
          
          <div className="p-6 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#333333]">Premium Content</h2>
            <p className="mb-4 text-lg text-[#333333]">
              The Go-to-Market Roadmap provides a comprehensive, phased implementation plan for SOL Modern's lease-up strategy, including detailed timelines, marketing channels, and audience targeting approaches to optimize occupancy rates and revenue.
            </p>
            
            <p className="text-[#777777]">
              The complete Go-to-Market Roadmap is available in the premium version of this report.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}