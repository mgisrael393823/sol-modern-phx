
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";

export default function PricingFramework() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - SOL Modern</title>
        <meta name="description" content="Pricing and incentive framework for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8">Pricing & Incentive Framework</h1>
          
          <GatedContent title="Pricing & Incentive Framework">
            <div className="prose max-w-none">
              <h2>Optimal Base Rent Positioning</h2>
              <h3>Unit Type Pricing Strategy</h3>
              <p>Studios (Estimated 500-600 sq ft)...</p>
              
              <h3>Strategic Premium Allocation</h3>
              <p>View Premiums...</p>
              
              {/* Rest of the content from the PDF */}
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}
