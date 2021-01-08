import Head from "next/head";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Multy.me</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="description" content="The multi URL shortener" />
      </Head>
      <div>
        <div className='py-20 font-main'>
          <Welcome />
        </div>
      </div>
    </Layout>
  );
}
