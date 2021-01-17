import Container from "components/Blog/container";
import Posts from "components/Blog/posts";

import Layout from "components/Layout";
import { getAllPosts } from "lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const posts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Multy.me | Blog</title>
        </Head>
        <Container>{posts && <Posts posts={posts} />}</Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
