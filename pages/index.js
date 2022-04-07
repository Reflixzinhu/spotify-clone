// import type { NextPage } from 'next'
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
