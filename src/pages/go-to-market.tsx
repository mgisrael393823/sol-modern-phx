
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Lock } from "lucide-react";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap | SOL Modern</title>
        <meta name="description" content="Go-to-Market Roadmap for SOL Modern Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-3xl font-bold">Go-to-Market Roadmap</h1>
            <Lock size={20} className="text-gray-400" />
          </div>
          
          <div className="p-12 border border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-4">
            <Lock size={32} className="text-gray-300" />
            <p className="text-gray-400 text-center">This content is gated</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
