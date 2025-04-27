
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap - SOL Modern</title>
        <meta name="description" content="Go-to-market roadmap for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8">Go-to-Market Roadmap</h1>
          
          <GatedContent title="Go-to-Market Roadmap">
            <div className="prose max-w-none">
              <h2>Pre-Leasing Phase (3-6 Months Prior to Opening)</h2>
              <h3>Timing & Milestones</h3>
              <p>6 Months Prior...</p>
              
              <h3>Target Audience Prioritization</h3>
              <p>Primary Targets...</p>
              
              {/* Rest of the content from the PDF */}
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}
