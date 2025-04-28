
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/GatedContent/GatedContent";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap - SOL Modern</title>
        <meta name="description" content="Go-to-market roadmap for SOL Modern" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Go-to-Market Roadmap</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              This roadmap outlines the phased implementation strategy for SOL Modern's market entry, with specific timelines, marketing channels, and targeting approaches to achieve optimal lease-up velocity.
            </p>
          </HighlightBox>
          
          <GatedContent 
            title="Go-to-Market Roadmap"
            teaser="The Go-to-Market Roadmap provides a comprehensive, phased implementation plan for SOL Modern's lease-up strategy, including detailed timelines, marketing channels, and audience targeting approaches to optimize occupancy rates and revenue."
          >
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
