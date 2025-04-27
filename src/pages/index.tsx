
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <IntroSection />
        <TableOfContents />
      </Layout>
    </>
  );
}
