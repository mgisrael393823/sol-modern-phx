import Head from "next/head";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <div style={{ padding: 20 }}>
        <h1>Test Page</h1>
        <p>This is a test page without any external components.</p>
      </div>
    </>
  );
}