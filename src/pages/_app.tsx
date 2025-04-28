import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Override Vercel deploymentId for local development
// This fixes the "Cannot read properties of undefined (reading 'deploymentId')" error
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // @ts-ignore - Fix Vercel deployment ID error for local development
  process.env.__NEXT_DEPLOYMENT_ID = 'development';
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
