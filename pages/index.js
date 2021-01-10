import Head from "next/head";
import Layout from "../components/Layout";
import URLs from "../components/URLs";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Multy.me</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="description" content="The multi URL shortener" />
      </Head>
      <div>
        <div className='font-main'>
          <URLs />
        </div>
      </div>
    </Layout>
  );
}
