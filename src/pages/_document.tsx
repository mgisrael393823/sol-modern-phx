import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon-original.png" />
        
        {/* Softgen AI monitoring script */}
        <script 
          src="https://cdn.softgen.ai/script.js" 
          async 
          data-softgen-monitoring="true"
        />
        
        {/* Default Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SOL MODERN | THE BLUEPRINT" />
        <meta property="og:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta property="og:image" content="https://solmodernphx.com/og-image.png?v=3&t=0429" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SOL Modern with 'THE BLUEPRINT' spray painted in blue over an orange circular pattern on dark background" />
        <meta property="og:url" content="https://solmodernphx.com" />
        <meta property="og:site_name" content="SOL MODERN" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOL MODERN | THE BLUEPRINT" />
        <meta name="twitter:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta name="twitter:image" content="https://solmodernphx.com/og-image.png?v=3&t=0429" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}