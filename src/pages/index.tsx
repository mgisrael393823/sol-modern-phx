import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import IntroSection from "@/components/Home/IntroSection";
import TableOfContents from "@/components/Home/TableOfContents";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOL Modern – Lease-Up Strategy & Competitive Blueprint</title>
        <meta name="description" content="A comprehensive lease-up strategy and competitive blueprint for SOL Modern" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-original.png" />
        
        {/* Open Graph meta tags specifically for home page (will override defaults in _document.tsx) */}
        <meta property="og:title" content="SOL MODERN | THE BLUEPRINT" />
        <meta property="og:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta property="og:image" content="https://solmodernphx.com/og-image.png?v=3&t=0429" />
        <meta property="og:image:secure_url" content="https://solmodernphx.com/og-image.png?v=3&t=0429" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SOL Modern with 'THE BLUEPRINT' spray painted in blue over an orange circular pattern on dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:image" content="https://solmodernphx.com/og-image.png?v=3&t=0429" />
      </Head>
      
      <Layout>
        <IntroSection />
        <TableOfContents />
      </Layout>
    </>
  );
}