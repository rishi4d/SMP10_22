import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SMP10_22</title>
        <meta name="description" content="SMP10_22" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex bg-gray-100">
        <Sidebar />
      </main>
    </div>
  );
}
