
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
          <div className="p-12 border border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center">Content to be added</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
