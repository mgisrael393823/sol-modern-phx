import { Html, Head, Main, NextScript } from "next/document";

// Fix for deploymentId error in development
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore - Fix Vercel deployment ID error for local development
  process.env.__NEXT_DEPLOYMENT_ID = 'development';
}

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
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}