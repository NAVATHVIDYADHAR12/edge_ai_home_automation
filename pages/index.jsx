import dynamic from 'next/dynamic';
import Head from 'next/head';

const SmartHomeApp = dynamic(() => import('../src/App'), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-[#050811] p-8 text-slate-100">
      Loading Edge AI Smart Home...
    </main>
  ),
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Edge AI Smart Home &amp; Energy Management System</title>
        <meta
          name="description"
          content="An edge AI smart home and energy management dashboard."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SmartHomeApp />
    </>
  );
}
