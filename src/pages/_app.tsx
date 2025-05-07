import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

// Define the pages that should no longer be gated
const ungatedPages = [
  '/strategic-opportunities',
  '/pricing-framework',
  '/go-to-market',
  '/market-intelligence'
];

// Override the gated content components when on ungated pages
function overrideGatedComponents() {
  // Import the original GatedContent components
  const originalGatedContent = require('@/components/GatedContent/GatedContent').GatedContent;
  const originalPartialGatedContent = require('@/components/ui/PartialGatedContent/index').PartialGatedContent;
  const originalBlurredVisualization = require('@/components/ui/BlurredVisualization/index').BlurredVisualization;
  
  // Create a simple pass-through component that just renders children
  // @ts-ignore - Intentionally ignoring types as this is a runtime override
  const UngatedContent = ({ children, visibleContent, gatedContent }) => {
    if (children) return <>{children}</>;
    if (visibleContent && gatedContent) return <>{visibleContent}{gatedContent}</>;
    return <>{children}</>;
  };
  
  // Replace the original modules with our ungated versions
  require('@/components/GatedContent/GatedContent').GatedContent = UngatedContent;
  require('@/components/ui/PartialGatedContent/index').PartialGatedContent = UngatedContent;
  require('@/components/ui/BlurredVisualization/index').BlurredVisualization = UngatedContent;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    // Check if the current page should be ungated
    if (ungatedPages.includes(router.pathname)) {
      // Override the gated content components
      overrideGatedComponents();
    }
    
    // This effect should run only once when the app is initialized
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);
  
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}