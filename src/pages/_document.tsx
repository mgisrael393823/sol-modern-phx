import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Softgen AI monitoring script */}
        <script 
          src="https://cdn.softgen.ai/script.js" 
          async 
          data-softgen-monitoring="true"
        />
        
        {/* Default Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SOL MODERN" />
        <meta property="og:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta property="og:image" content="https://solmodernphx.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://solmodernphx.com" />
        <meta property="og:site_name" content="SOL MODERN" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOL MODERN" />
        <meta name="twitter:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta name="twitter:image" content="https://solmodernphx.com/og-image.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}