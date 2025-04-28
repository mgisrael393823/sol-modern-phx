
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function PricingFramework() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - SOL Modern</title>
        <meta name="description" content="Pricing and incentive framework for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Pricing & Incentive Framework</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              Our strategic pricing model positions SOL Modern to balance competitive market rates with premium value, incorporating an optimized incentive structure to drive lease-up velocity while protecting long-term revenue.
            </p>
          </HighlightBox>
          
          <GatedContent 
            title="Pricing & Incentive Framework"
            teaser="Our pricing framework outlines a strategic approach to base rent positioning, premium allocation, and incentive structure that balances competitive positioning with revenue optimization, tailored specifically to the Roosevelt Row market conditions."
          >
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
