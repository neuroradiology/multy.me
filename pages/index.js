import Landing from "components/Landing";
import Head from "next/head";
import Layout from "components/Layout";
import URLs from "components/URLs";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Multy.me</title>

        <meta name='description' content='The multi URL shortener' />
      </Head>
      <div>
        <div className='font-main'>
          <URLs />
          <Landing/>
        </div>
      </div>
    </Layout>
  );
}
