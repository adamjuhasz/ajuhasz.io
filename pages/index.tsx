import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Adam Juhasz</title>
      </Head>

      <main className="flex justify-center items-center h-screen w-screen">
        <h1 className="text-3xl">Adam Juhasz</h1>
      </main>
    </div>
  );
};

export default Home;
