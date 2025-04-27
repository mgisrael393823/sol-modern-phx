
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";

export default function StrategicOpportunities() {
  return (
    <>
      <Head>
        <title>Strategic Opportunities - SOL Modern</title>
        <meta name="description" content="Strategic opportunities analysis for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8">Strategic Opportunities</h1>
          
          <GatedContent title="Strategic Opportunities">
            <div className="prose max-w-none">
              <h2>Unit Features and Finishing Levels</h2>
              <h3>Opportunity 1: Superior Sound Insulation</h3>
              <p>Gap Identified: Noise complaints are common across multiple properties...</p>
              
              <h3>Opportunity 2: Premium Kitchen Package</h3>
              <p>Gap Identified: While most properties offer stainless steel appliances...</p>
              
              {/* Rest of the content from the PDF */}
            </div>
          </GatedContent>
        </div>
      </Layout>
    </>
  );
}
